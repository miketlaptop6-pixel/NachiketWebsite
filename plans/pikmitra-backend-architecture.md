# PikMitra — Backend Architecture: Image-Based Crop Disease Detection

> **Version:** 1.0 — MVP + Scale Design
> **Scope:** Image ingestion pipeline, AI inference stack, data flywheel, cost model
> **Constraints:** Zero server cost until Month 6 (credits), < ₹1/query target, WhatsApp-native

---

## Core Design Principle

The image pipeline is NOT just an API call to Gemini. That's a prototype, not a product.
The real architecture is a **3-stage system**:

```
Stage 1: Raw image → structured, clean input      (preprocessing)
Stage 2: Structured input → disease label          (inference)
Stage 3: Label → stored, labeled training row      (flywheel)
```

Every image that passes through Stage 1 must exit Stage 3 with a label stored in Firestore.
This is how PikMitra builds the data moat that no competitor can replicate.

---

## Full Image Pipeline Flow

```
Farmer (WhatsApp)
    │
    │ sends image (JPG/PNG) or voice note (.ogg)
    ▼
[Meta WhatsApp Cloud API]
    │ webhook POST to pikmitra-api
    │ payload: { message_id, from, type, image: { id, mime_type } }
    ▼
[Webhook Handler — Node.js TypeScript / Cloud Run]
    │
    ├─ Step 1: Idempotency check
    │          Look up message_id in Firestore conversations
    │          Already processed? → return HTTP 200, exit
    │
    ├─ Step 2: Download media from WhatsApp
    │          GET https://graph.facebook.com/v19.0/{media_id}
    │          Auth: Bearer {WHATSAPP_TOKEN}
    │          Max download size: 10MB
    │
    ├─ Step 3: Preprocessing Service (Sharp.js, async)
    │          → Resize to max 1024px (preserve aspect ratio)
    │          → Convert to JPEG quality 85
    │          → Strip EXIF metadata (privacy)
    │          → Reject if: < 50KB (likely blurry), > 10MB (too large)
    │          → Quality checks (see Tier 1 heuristics below)
    │          → Upload: gs://pikmitra-images/{phone_hash}/{date}/{msg_id}.jpg
    │
    ├─ Step 4: Load user context from Firestore
    │          users/{phone_hash}:
    │            crops: ["cotton", "soybean"]
    │            district: "Wardha"
    │            language: "mr"
    │            last_crop: "cotton"
    │            conversation_state: ACTIVE
    │
    ├─ Step 5: Intent classification
    │          Has image attached?         → DISEASE PIPELINE (below)
    │          Text contains "भाव/price"?  → MANDI PRICE PIPELINE
    │          Text contains "हवामान"?    → WEATHER PIPELINE
    │          Text contains "योजना"?     → SCHEME RAG PIPELINE
    │          Text contains "मदत/help"?  → HUMAN ESCALATION
    │          Default (text only)?        → LLM general query
    │
    └─ Step 6: Route to Disease Analysis Service
```

---

## Disease Analysis Service — 3-Tier Inference Strategy

### Tier 1: Fast Heuristics Filter (< 100ms, ₹0 cost)

Run before any paid AI call. Eliminates 20–30% of unusable images.

```
Input: downloaded image bytes
Checks:
  A. Brightness check:
     Mean pixel brightness < 30 → reject: "उजेडात फोटो काढा 📸"

  B. Plant presence check:
     Green channel ratio (green pixels / total) < 0.15 → reject:
     "हे पीक नाही — पानाचा फोटो पाठवा"

  C. Blur detection:
     Laplacian variance of grayscale < 100 → reject:
     "फोटो अस्पष्ट आहे — जवळून स्पष्ट फोटो काढा"

  D. Screenshot detection:
     Edge density > 0.8 → reject: "फोटो काढा, screenshot नाही"

  E. Aspect ratio sanity:
     width:height ratio > 10:1 or < 1:10 → reject (panoramic/strip)

Output:
  PASS → proceed to Tier 2
  FAIL → send specific Marathi correction message to farmer
         store rejection reason in Firestore for analytics
         do NOT charge AI API cost
```

**Implementation:** Use Sharp.js (already in preprocessing step) for resize + stats extraction. No additional library needed.

---

### Tier 2: Gemini 1.5 Flash Vision (Primary Inference, < 3 sec)

#### System Prompt Architecture

```
SYSTEM PROMPT (v1 — stored in pikmitra-ml/prompts/disease_vision.v1.md):

You are Dr. Prakash Deshmukh, a senior agronomist from CICR Nagpur with
20 years of field experience in Vidarbha cotton and Maharashtra soybean/onion.
You have personally diagnosed over 50,000 crop disease cases.

TASK: Analyze the attached crop image and identify disease/pest.

CONTEXT:
- Farmer's primary crop: {user_crop}
- Farmer's district: {user_district}
- Current month: {current_month}
- Known seasonal pests this month in {user_district}: {seasonal_context}

DISEASE KNOWLEDGE BASE:
{crop_diseases_json}

RESPONSE FORMAT (strict JSON only, no markdown, no explanation outside JSON):
{
  "disease_detected": true/false,
  "confidence": "high" | "medium" | "low",
  "confidence_percent": 0-100,
  "disease_name_mr": "string in Marathi Devanagari",
  "disease_name_en": "string in English",
  "scientific_name": "string",
  "severity": "mild" | "moderate" | "severe",
  "affected_part": "leaf" | "stem" | "boll" | "root" | "fruit" | "whole_plant",
  "symptoms_mr": "2-sentence description in Marathi",
  "treatment_ipm": ["step1 in Marathi", "step2 in Marathi", "step3 in Marathi"],
  "treatment_chemical": "active ingredient name only (no brands)",
  "chemical_dosage": "exact dosage in Marathi",
  "urgency": "immediate" | "within_3_days" | "monitor",
  "escalate_to_human": true/false,
  "escalation_reason": "string if escalate_to_human=true, else null",
  "confidence_reason": "1-sentence why you are certain or uncertain"
}

STRICT RULES:
1. If image is not a crop/plant → disease_detected=false, no treatment
2. If confidence < 60% → confidence="low", escalate_to_human=true
3. ALWAYS recommend IPM (bio/cultural) treatment first
4. Chemical treatment only if IPM insufficient
5. NEVER recommend brand names — active ingredients only
6. Treatment steps must be in Marathi only
7. If multiple diseases visible → pick the most severe/dominant one
8. Add seasonal relevance: mention if this is peak season for this pest
```

#### Disease Knowledge Base Structure

**File:** `pikmitra-ml/knowledge/diseases_cotton.json`

```json
{
  "crop": "cotton",
  "last_updated": "2025-01-01",
  "source": "CICR-Nagpur-IPM-Guide-2024",
  "diseases": [
    {
      "id": "cotton_001",
      "name_mr": "गुलाबी बोंडअळी",
      "name_en": "Pink Bollworm",
      "scientific": "Pectinophora gossypiella",
      "type": "pest",
      "affected_part": "boll",
      "season": ["kharif"],
      "months_peak": [8, 9, 10],
      "visual_markers": [
        "pink/cream larvae inside bolls",
        "circular entry/exit holes in bolls",
        "rosette flower formation",
        "premature boll shedding"
      ],
      "ipm_steps_mr": [
        "फेरोमोन ट्रॅप्स — एकरी ५, दर ४ दिवसांनी काड्या बदला",
        "NPV Spray (Nuclear Polyhedrosis Virus) — २५० ml/एकर, संध्याकाळी ५ नंतर",
        "नीम तेल — ५ ml/लिटर पाणी, आठवड्यातून एकदा"
      ],
      "chemical_ai": "Profenophos 50% EC",
      "chemical_dosage_mr": "२ ml/लिटर पाणी, एकरी २०० लिटर, सकाळी किंवा संध्याकाळी",
      "economic_threshold": "5+ moths/trap/week = spray needed",
      "cicr_protocol": "CICR-2024-PBW-001",
      "prevention": "Bt cotton varieties, avoid late sowing"
    }
  ]
}
```

Identical structure for `diseases_soybean.json` and `diseases_onion.json`.

**MVP scope:** 16 total disease/pest entries (6 cotton + 5 soybean + 5 onion).
**Month 3 target:** 40 entries (expand to 10 per crop + add tomato, banana, grape).

---

### Confidence Routing Logic

```typescript
// confidence_router.ts

interface GeminiDiseaseResponse {
  disease_detected: boolean;
  confidence: 'high' | 'medium' | 'low';
  confidence_percent: number;
  escalate_to_human: boolean;
  // ... other fields
}

async function routeByConfidence(
  response: GeminiDiseaseResponse,
  imageUrl: string,
  farmer: FarmerContext,
  msgId: string
): Promise<void> {

  if (!response.disease_detected) {
    // No disease found
    await sendWhatsAppText(farmer.phone,
      "✅ तुमचं पीक निरोगी दिसतंय! 🌿\n\nकाही अडचण असेल तर परत फोटो पाठवा.");
    await storeLabel(msgId, imageUrl, 'no_disease', 'high', 'ai_only');
    return;
  }

  if (response.confidence === 'high' && !response.escalate_to_human) {
    // HIGH CONFIDENCE: send immediately
    const replyText = formatDiseaseReply(response, farmer.language);
    await sendWhatsAppText(farmer.phone, replyText);
    await storeLabel(msgId, imageUrl, response.disease_name_en, 'high', 'ai_only');

    // Spot-check 10% randomly for agronomist quality audit
    if (Math.random() < 0.10) {
      await queueForAgronomistReview(msgId, response, farmer, 'quality_audit');
    }
  }

  else if (response.confidence === 'medium') {
    // MEDIUM CONFIDENCE: send with disclaimer + queue for review
    const replyText = formatDiseaseReply(response, farmer.language, 'medium');
    await sendWhatsAppText(farmer.phone, replyText);
    await storeLabel(msgId, imageUrl, response.disease_name_en, 'medium', 'pending_review');
    await queueForAgronomistReview(msgId, response, farmer, 'medium_confidence');
  }

  else {
    // LOW CONFIDENCE or escalate_to_human: human required
    await sendWhatsAppText(farmer.phone,
      `🔍 हा रोग ओळखणे थोडे कठीण आहे.\n` +
      `आमचे तज्ज्ञ डॉ. [Name] (MPKV) तुमच्या फोटोचे परीक्षण करत आहेत.\n` +
      `३०–६० मिनिटांत उत्तर येईल. 🙏`
    );
    await storeLabel(msgId, imageUrl, 'unknown', 'low', 'human_required');
    await queueForAgronomistReview(msgId, response, farmer, 'urgent');
  }
}
```

---

### Marathi Response Formatter

```typescript
// disease_reply_formatter.ts

function formatDiseaseReply(
  r: GeminiDiseaseResponse,
  lang: 'mr' | 'en' = 'mr',
  confidenceLevel: 'high' | 'medium' = 'high'
): string {

  const confidenceBadge = {
    high: '🟢 जास्त',
    medium: '🟡 मध्यम'
  }[confidenceLevel];

  const urgencyEmoji = {
    immediate: '🚨',
    within_3_days: '⚠️',
    monitor: 'ℹ️'
  }[r.urgency];

  const ipmSteps = r.treatment_ipm
    .map((step, i) => `${i + 1}. ${step}`)
    .join('\n');

  let reply = `🔍 *रोग ओळखला:* ${r.disease_name_mr}\n`;
  reply += `खात्री: ${confidenceBadge} (${r.confidence_percent}%)\n\n`;
  reply += `📋 *लक्षणं:*\n${r.symptoms_mr}\n\n`;
  reply += `✅ *उपाय (IPM-first):*\n${ipmSteps}\n\n`;

  if (r.treatment_chemical) {
    reply += `💊 *गरज पडली तर:*\n${r.treatment_chemical} — ${r.chemical_dosage}\n\n`;
  }

  if (confidenceLevel === 'medium') {
    reply += `⚠️ _एक तज्ज्ञ सुद्धा हे बघत आहेत — थोड्या वेळात confirm होईल._\n\n`;
  }

  reply += `📚 स्रोत: ICAR-CICR मार्गदर्शक\n`;
  reply += `\nअधिक मदतीसाठी "मदत" लिहा.`;

  return reply;
}
```

---

## Data Labeling & Training Flywheel

### Firestore Schema: `image_labels` collection

```typescript
interface ImageLabel {
  // Identity
  msg_id: string;                      // WhatsApp message ID (primary key)
  image_url: string;                   // gs://pikmitra-images/...
  phone_hash: string;                  // SHA256(phone) — never store raw phone

  // Context
  district: string;                    // "Wardha"
  crop: string;                        // "cotton"
  growth_stage: string | null;         // "flowering", "boll formation" (future)
  month: number;                       // 1-12
  year: number;

  // AI Output
  ai_prediction: string;               // "Pink Bollworm"
  ai_confidence: 'high' | 'medium' | 'low';
  ai_confidence_percent: number;
  ai_raw_response: object;             // Full Gemini JSON
  tier1_passed: boolean;               // Did it pass heuristics?
  tier1_rejection_reason: string | null;

  // Human Review
  agronomist_label: string | null;     // null until reviewed
  agronomist_id: string | null;        // who reviewed
  agronomist_notes: string | null;
  reviewed_at: Timestamp | null;

  // Label Status
  label_status:
    | 'ai_only'          // AI predicted, no human review
    | 'confirmed'        // Agronomist confirmed AI was correct
    | 'corrected'        // Agronomist provided different label
    | 'rejected'         // Image was unusable / wrong crop
    | 'disputed';        // Two agronomists disagree

  // Farmer Feedback
  farmer_feedback: 'positive' | 'negative' | 'no_response' | null;
  farmer_feedback_at: Timestamp | null;

  // ML Metadata
  training_eligible: boolean;          // true if confirmed/corrected with good image
  model_version_predicted: string;     // "gemini-1.5-flash" or "efficientnet-v1"

  // Timestamps
  created_at: Timestamp;
  updated_at: Timestamp;
}
```

### Agronomist Review Interface (Retool Dashboard)

**Table view:**

| # | Image | AI Prediction | Confidence | Crop | District | Wait Time | Action |
|---|-------|--------------|-----------|------|---------|----------|--------|
| 1 | 🌿 | Pink Bollworm | 72% | Cotton | Wardha | 14 min | Confirm / Correct / Skip |
| 2 | 🍂 | Yellow Mosaic Virus | 45% | Soybean | Latur | 2 min | Confirm / Correct / Skip |

**Agronomist WhatsApp bot (simpler for MVP):**

```
When escalation occurs, system sends to agronomist WhatsApp:
─────────────────────────────────────
📋 *Case #1247*
📍 Wardha | 🌿 Cotton | Month: September

🤖 AI says: Pink Bollworm (72%)
Reason: "Boll damage visible but larvae not clearly pink"

[image forwarded]

Reply:
✅ CONFIRM — if AI is correct
✏️ CORRECT: [disease name] — if AI is wrong
❌ REJECT — if image unusable
─────────────────────────────────────

Agronomist replies "CONFIRM" →
  System: marks label_status="confirmed"
  System: sends final reply to farmer with "MPKV तज्ज्ञांनी confirm केलं ✅"

Agronomist replies "CORRECT: American Bollworm" →
  System: marks label_status="corrected", agronomist_label="American Bollworm"
  System: sends corrected reply to farmer
  System: flags AI prediction as incorrect for model retraining
```

---

## Training Pipeline (Month 3+)

### Data Requirements Before Fine-tuning

| Metric | Minimum | Target |
|--------|---------|--------|
| Total labeled images | 2,000 | 10,000 |
| Confirmed (human-validated) | 1,500 | 7,000 |
| Per disease class (min) | 50 | 200 |
| Classes (diseases) | 16 | 40 |
| Maharashtra-specific images | >60% | >80% |

### Fine-tuning Architecture

```
Data sources:
  1. pikmitra-ml/data/pikmitra_labeled/    ← our farmer images (gold)
  2. pikmitra-ml/data/plantvillage/        ← open-source base (50K images)
  3. pikmitra-ml/data/cicr_dataset/        ← CICR partner data (from MoU)

Model: EfficientNet-B3 (5.3M params, 12MB — deployable on Cloud Run)
Framework: PyTorch + torchvision
Training: Vertex AI custom training job (uses NVIDIA A100 — NVIDIA Inception credits)

Pipeline:
  1. Export Firestore labels to GCS: gs://pikmitra-training/labels_v{n}.jsonl
  2. Data validation: check class balance, reject low-quality images
  3. Train on Vertex AI (automated hyperparameter tuning)
  4. Evaluate on held-out 20% validation set
  5. If val_accuracy > current_production_accuracy:
       Shadow deploy (run both models, compare outputs, don't serve new model yet)
       After 24h shadow with <5% disagreement: promote to production
  6. Deploy as Vertex AI endpoint OR export to TFLite for on-device (future)

Metrics to track:
  - Top-1 accuracy per disease class
  - Precision / Recall per class (weighted F1)
  - False negative rate (missed disease = farmer loss)
  - Latency (p50, p95, p99)
```

---

## Edge Cases Decision Table

| Scenario | Detection Method | Response |
|---------|-----------------|----------|
| Blurry photo | Laplacian variance < 100 | "फोटो अस्पष्ट — जवळून काढा 📸" |
| Dark photo (night) | Mean brightness < 30 | "उजेडात काढा, Flash चालू करा" |
| Sky / ground only | Green ratio < 0.15 | "पानाचा फोटो पाठवा" |
| Non-crop object | Gemini: disease_detected=false | "हे पीक नाही" |
| Healthy plant | Gemini: disease_detected=false | "पीक निरोगी दिसतंय ✅" |
| Multiple diseases | Gemini picks dominant | Include note about secondary |
| New/unknown disease | Gemini: confidence=low | Human escalation, immediate |
| Screenshot | Edge density > 0.8 | "Screenshot नाही — फोटो काढा" |
| Video file | MIME type check | "फक्त फोटो पाठवा" |
| Duplicate message | message_id Firestore check | Return cached response |
| Gemini API down | Try/catch + retry (3x) | Fallback to human queue |
| Image too large (>10MB) | Size check pre-download | "लहान फोटो पाठवा" |
| No crop context set | Ask farmer | "कोणतं पीक आहे?" |

---

## Cost Model Per Query

| Component | Cost | Notes |
|-----------|------|-------|
| WhatsApp inbound message | ₹0 | Free (user-initiated) |
| WhatsApp outbound (session) | ₹0.30–0.85 | Meta India business pricing |
| Image download from WhatsApp | ₹0 | No charge |
| GCS storage per image (90-day lifecycle) | ₹0.003 | ₹2/GB, avg 200KB/image |
| Cloud Run preprocessing | ₹0.001 | Free tier: 2M req/month |
| Tier 1 heuristics (Sharp.js) | ₹0 | In-process, no extra compute |
| Gemini 1.5 Flash Vision | ₹0.021 | $0.000328/image |
| Firestore reads/writes (~5 ops) | ₹0.002 | |
| Sarvam TTS (80 chars avg reply) | ₹0.025 | ₹0.30/1K chars |
| **Total per image query** | **₹0.35–0.90** | |
| Own model (Month 4+) | ₹0.008 | Replace Gemini: 10x cheaper |
| Self-hosted TTS (Month 6+) | ₹0.001 | Replace Sarvam: 25x cheaper |
| **Total with own models** | **₹0.32–0.85** | Dominated by WhatsApp cost |

**Break-even analysis:**
```
10,000 MAU × 3 queries/day = 30,000 queries/day
Daily cost: 30,000 × ₹0.60 = ₹18,000/day = ₹5.4 lakh/month

Covered by credits until Month 6:
  Google Cloud: $200K credits (~₹1.6 Cr)
  Microsoft Azure: $150K credits (~₹1.2 Cr)
  NVIDIA DGX: GPU for training (free)
  Total: ~₹2.8 Cr in credits

Real cash burn on infra: ₹0 until credits exhaust (~Month 9–12)
```

---

## Full Architecture Diagram

```
[Farmer — Android WhatsApp]
          │
          │ Image / Voice / Text
          ▼
[Meta WhatsApp Cloud API]
          │
          │ Webhook POST (JSON)
          ▼
[Cloud Run: pikmitra-api (Node.js TypeScript)]
     │          │          │          │
     │          │          │          │
     ▼          ▼          ▼          ▼
[Idempotency] [Media   ] [Firestore] [Intent
[Firestore  ] [Download] [User Ctx ] [Router ]
                │
                ▼
         [Preprocessing — Sharp.js]
          │                │
          ▼                ▼
    [Tier 1            [Upload to
     Heuristics]        GCS Storage]
          │
          │ PASS
          ▼
    [Gemini 1.5 Flash Vision]
    [+ Disease Knowledge Base JSON]
          │
     ┌────┴─────────────────┐
     ▼                      ▼
 confidence=high        confidence=medium/low
     │                      │
     ▼                      ▼
[Send to Farmer]    [Agronomist Queue]
[Store Label]       [Send to Farmer + disclaimer]
                    [Store Label: pending_review]
                           │
                           ▼
                  [Agronomist WhatsApp Bot]
                  [Retool Dashboard]
                           │
                      CONFIRM/CORRECT
                           │
                           ▼
                  [Update Firestore Label]
                  [Send final reply to farmer]
                           │
                           ▼
               [Weekly BigQuery Export]
                           │
                           ▼
               [EfficientNet Fine-tuning]
               [Vertex AI — NVIDIA credits]
                           │
                           ▼
               [Better Model → Replace Gemini]
```

---

## Recommended Build Sequence

### Week 1–2: Foundation
- [ ] Cloud Run webhook server (Node.js + TypeScript)
- [ ] WhatsApp Cloud API integration + media download
- [ ] Sharp.js image preprocessing pipeline
- [ ] GCS image upload with lifecycle policy (90 days → delete)
- [ ] Firestore schema setup (users, conversations, image_labels)
- [ ] Idempotency check (message_id dedup)

### Week 3: Disease Pipeline v1
- [ ] Tier 1 heuristics filter (brightness, blur, plant detection)
- [ ] Gemini 1.5 Flash Vision integration
- [ ] Disease knowledge base JSON (16 diseases)
- [ ] Confidence routing logic (high/medium/low)
- [ ] Marathi response formatter

### Week 4: Labeling + Agronomist Interface
- [ ] Firestore image_labels schema + write logic
- [ ] Agronomist WhatsApp bot (CONFIRM/CORRECT commands)
- [ ] Retool dashboard for agronomist review queue
- [ ] Farmer feedback capture ("क्या उपाय काम आला? 👍/👎")

### Week 5–6: Voice Pipeline
- [ ] Sarvam API STT integration (.ogg → Marathi text)
- [ ] IndicTTS for voice replies (text → .ogg)
- [ ] ffmpeg Cloud Run service for audio conversion

### Week 7–8: Remaining Features
- [ ] Mandi price (Agmarknet API + 1hr cache)
- [ ] Weather (Open-Meteo API + district lat/long table)
- [ ] Scheme RAG (Pinecone + Gemini + govt scheme JSON)

### Month 3+: Model Fine-tuning
- [ ] Export 5,000+ confirmed labels from Firestore to GCS
- [ ] Fine-tune EfficientNet-B3 on Vertex AI (NVIDIA A100 credits)
- [ ] Shadow test: run both Gemini + EfficientNet, compare accuracy
- [ ] Promote own model when val_accuracy > Gemini baseline
- [ ] Cost drops from ₹0.021 to ₹0.008 per image query

---

## Key Decisions Summary

| Decision | Choice | Reason |
|----------|--------|--------|
| Primary AI (MVP) | Gemini 1.5 Flash Vision | Fastest to ship, low cost, strong vision |
| Primary AI (Month 4+) | Own EfficientNet-B3 | 10x cheaper, Maharashtra-specific accuracy |
| Knowledge base format | JSON files in Cloud Run | Fast, free, no DB latency |
| Image storage | GCS with 90-day lifecycle | ₹2/GB, auto-delete old images |
| Labeling tool | Agronomist WhatsApp bot | Zero friction for agronomist, no new app |
| STT/TTS (MVP) | Sarvam API | Managed, good Marathi quality |
| STT/TTS (Month 6+) | AI4Bharat self-hosted | Free, IIT Madras quality, on Cloud Run GPU |
| Confidence threshold | 60% = escalate | Conservative: false negatives cost farmers ₹45K+/acre |
| Label storage | Firestore | Zero ops, real-time, scales to 10M records free tier |
| Training platform | Vertex AI | Uses NVIDIA Inception DGX Cloud credits |

---

*Last Updated: May 2026*
*Version: 1.0 — MVP Design*
