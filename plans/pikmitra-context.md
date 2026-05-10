# PikMitra.in — Complete Startup Context & Strategy

> **Company:** PikMitra.in
> **Type:** AI-powered farming companion
> **Focus:** Maharashtra farmers, Marathi-first, WhatsApp-native
> **Founder's Hometown:** Wardha, Vidarbha (cotton heartland)
> **Status:** Pre-revenue, pre-product, MVP phase

---

## 1. COMPANY OVERVIEW

PikMitra is an AI-powered farming companion focused initially on Maharashtra farmers in India.

**Core Features:**
- AI crop disease detection (photo → diagnosis in 30 sec)
- Marathi AI voice assistant (IndicConformer STT + IndicTTS)
- Smart farming recommendations
- Market price intelligence (Agmarknet mandi prices)
- Government scheme guidance (PM-Kisan, PMFBY, Namo Shetkari, etc.)
- Pesticide reduction guidance (IPM-first recommendations)
- Mobile-first AI experience (WhatsApp-native, zero install friction)

**Target Users:**
- Maharashtra farmers
- Small and medium farmers (< 2 hectares)
- Android-first users
- Marathi-speaking audience (83M speakers in MH)

---

## 2. MARKET RESEARCH

### Maharashtra Agriculture Market

| Metric | Value | Implication |
|--------|-------|-------------|
| Maharashtra agri GDP | ₹4.5 lakh crore ($54B) | Top 3 agri state |
| Total farmers | ~13.7 million | TAM if 10% adopt = 1.3M users |
| Small + marginal farmers | ~80% (<2 hectares) | Real ICP |
| Smartphone penetration (rural MH) | ~62–68% (2024) | Android-first correct |
| Marathi speakers in MH | ~83 million | Voice-first wins |
| Avg landholding | 1.34 ha | Slightly better unit economics |
| JioFiber/4G rural reach | >90% | Voice + video viable |
| Farmer suicide rate (Vidarbha/Marathwada) | Highest in India | Real urgency |

### Top Crops in Maharashtra (MVP Priority)

| Rank | Crop | Region | Why It Matters |
|------|------|--------|----------------|
| 1 | Cotton | Vidarbha (Yavatmal, Amravati, Wardha) | Pink bollworm crisis |
| 2 | Sugarcane | Western MH (Kolhapur, Sangli, Pune) | High-value |
| 3 | Soybean | Marathwada, Vidarbha | Yellow mosaic, rust |
| 4 | Onion | Nashik, Ahmednagar | Price volatility |
| 5 | Tur/Chana (Pulses) | Marathwada | Government MSP play |
| 6 | Grapes | Nashik, Sangli | Export crop |
| 7 | Tomato | Pune, Nashik | Disease-prone |
| 8 | Banana | Jalgaon | Sigatoka, panama wilt |

**Strategic call: Start with Cotton + Onion + Soybean** (Vidarbha + Nashik + Marathwada)

### Top 7 Farmer Pain Points

1. Disease/pest identification — late detection = 30–60% yield loss
2. Mandi price discovery — middlemen extract 20–40% margin
3. What to spray, how much, when — over-pesticide use is endemic
4. Weather uncertainty — unseasonal rain destroys crops
5. Government scheme awareness — PM-Kisan, crop insurance underutilized
6. Credit access — 60% still depend on informal lenders
7. Buyer/mandi linkage — post-harvest losses 15–20%

### Existing Digital Behavior

- WhatsApp = #1 farming app (groups for village, crop, dealer)
- YouTube = #1 learning platform (Marathi agri channels have millions of subs — Krushi Doctor, Agrowon)
- Phone calls > apps for trust
- Apps like Mahabhulekh, PM-Kisan, MahaDBT already onboarded farmers
- Dealers (Krishi Seva Kendras) are the offline trust gateway

---

## 3. COMPETITOR ANALYSIS

| Competitor | Funding | Model | Strengths | Weaknesses | Gap PikMitra Exploits |
|-----------|---------|-------|-----------|------------|----------------------|
| DeHaat | ~$200M+ | Full-stack: input + advisory + output | Logistics + offline kendras, B2B2F | Asset-heavy, weak in MH (Bihar/UP focus), Hindi-first | Marathi-native, asset-light, AI-first |
| AgroStar | ~$110M | E-commerce for inputs + advisory | Strong in MH, FPO ties | Advisory is text/SMS; weak AI; commerce-led | Pure AI advisory layer, neutral on inputs |
| Plantix (PEAT) | ~$30M | Free disease detection | Best-in-class image AI, 30M+ downloads | Generic, no Marathi voice, no India-specific advisory loop | Marathi voice + local context + scheme integration |
| BharatAgri | ~$15M | Subscription advisory | Crop calendar, paying users | Hindi/English heavy, low AI sophistication | Lower-priced freemium + voice-first |
| Fasal | ~$13M | IoT sensors for horticulture | Strong data, premium farmers | Sensor cost, only horticulture | No-hardware, software-only, mass market |
| Gramophone | ~$13M | Input commerce + advisory | Strong MP presence | Not in MH meaningfully | MH-native, advisory-led |
| CropIn | ~$50M | B2B SaaS for agribusinesses | Enterprise data | Not farmer-facing | Potential partner |
| OneSoil | Self-funded | Free satellite app | Slick UX | No India focus | Not a real competitor in MH |
| Kisan Suvidha | Govt (free) | Govt advisory | Free, official | Outdated UX, generic, no AI | Modern AI overlay |

**The Clear Gap PikMitra Owns:** Marathi-voice-first + AI disease detection + WhatsApp-native + neutral advisory + scheme guidance, focused exclusively on Maharashtra.

---

## 4. VIRAL MVP STRATEGY

### MVP Scope (Locked)

**IN:**
- WhatsApp bot (Meta Cloud API)
- Marathi text + voice input/output
- Photo → cotton/onion/soy disease detection
- Today's mandi prices (5 mandis × 3 crops)
- District weather (3-day)
- Top 5 govt schemes RAG Q&A
- Human escalation (agronomist on WhatsApp)
- Basic analytics (PostHog)

**OUT (skip for MVP):**
- Native Android app
- English UI
- E-commerce/input sales
- Social/community
- IoT/sensors
- Historical price charts
- All crops at once

### Marathi-First Onboarding Flow

```
Farmer messages "नमस्कार" →
Bot: "मी पीकमित्र. तुमचं नाव? तुमचा जिल्हा?" →
"कोणतं पीक?" →
"फोटो किंवा voice पाठवा" →
30-sec diagnosis + voice reply
```

### 7 Farmer Acquisition Hacks

1. **Krishi Seva Kendra (KSK) partnerships** — QR poster at shops
2. **YouTube collabs** with Marathi agri creators (Krushi Doctor, Baliraja, Agrowon Digital)
3. **Village ambassadors** — ₹50 per active referral + ₹500/month base
4. **Mandi posters + audio jingles** at APMC entrances
5. **Free disease diagnosis camps** during peak sowing (June–July, Oct–Nov)
6. **WhatsApp group seeding** — get added to 500 village groups
7. **FPO partnerships** — MAHA-FPC and SFAC, 5,000+ FPOs in MH

---

## 5. AI FEATURE RESEARCH

### Disease Detection Stack

| Layer | Best Choice | Why | Cost |
|-------|-------------|-----|------|
| Base model | PlantVillage dataset + EfficientNet-B3 fine-tune | 50K+ open-source labeled images | Free training |
| Crop-specific | Fine-tune on ICAR + KVK datasets | Real Indian field data | Need partnerships |
| Vision LLM fallback | Gemini 1.5 Flash Vision | Handles edge cases | $0.0001–0.001/image |

**Pragmatic path:** Use Gemini 1.5 Flash with strong system prompt + RAG for MVP. Replace with custom EfficientNet model after 100K labeled images.

### Marathi Voice Stack

| Component | Recommended | Notes |
|-----------|-------------|-------|
| STT (Marathi) | AI4Bharat IndicConformer / IndicWhisper | Best Marathi STT, free, open-source |
| Alt STT | Google Cloud Speech (mr-IN) | Fallback, paid |
| LLM core | Gemini 1.5 Flash or Sarvam-1 | Gemini = cost + quality |
| Marathi TTS | AI4Bharat IndicTTS or ElevenLabs | IndicTTS = free |
| Translation | IndicTrans2 (AI4Bharat) | Best EN↔MR |
| Embeddings (RAG) | multilingual-e5-large | Handles Marathi |

### Voice Assistant Architecture

```
Farmer voice (Marathi)
   → IndicConformer (STT)
   → Intent router (small LLM)
   → [Disease pipeline | Price API | Scheme RAG | Weather API]
   → Gemini 1.5 Flash (response gen in Marathi)
   → IndicTTS (audio reply on WhatsApp)
```

### Cost-Optimized AI Stack (per 1000 queries)

| Item | Cost |
|------|------|
| STT (IndicConformer, self-hosted CPU) | ~$0.10 |
| LLM (Gemini 1.5 Flash) | ~$0.30 |
| TTS (IndicTTS self-hosted) | ~$0.05 |
| Disease detection (own model) | ~$0.20 |
| **Total** | **~$0.65 / 1K queries = ₹0.05/query** |

---

## 6. TECH ARCHITECTURE

### MVP Stack (Month 0–4)

```
[Farmer WhatsApp]
       ↓
[Meta WhatsApp Business Cloud API]
       ↓
[Cloud Run / Lambda webhook] ← Node.js/Python
       ↓
[Firebase Firestore]  ← user state, history
[Firebase Storage]    ← photos
       ↓
[AI Layer]
  - Gemini 1.5 Flash (Vertex AI)
  - AI4Bharat hosted endpoints
  - Pinecone/pgvector for scheme RAG
       ↓
[External APIs]
  - Agmarknet (mandi prices)
  - IMD/OpenWeather (weather)
  - PM-Kisan / MahaDBT scrapers
```

**Stack:** Firebase + Cloud Run + Vertex AI (fastest setup, generous free tier)

### Scale Architecture (Month 12+, 500K+ users)

```
[WhatsApp + PWA + Android]
       ↓
[CloudFront + API Gateway]
       ↓
[ECS Fargate microservices]
   - User service
   - Inference service (Bedrock + own GPU)
   - Knowledge service (RAG)
   - Notification service
       ↓
[Aurora PostgreSQL + DynamoDB + S3 + OpenSearch]
       ↓
[AI: Bedrock + own EfficientNet on SageMaker + Sarvam endpoint]
       ↓
[Data lake: S3 + Athena + Redshift]
```

### Repo Structure

```
pikmitra-api/
  src/
    routes/webhook.ts
    services/whatsapp.ts
    services/intent.ts
    services/disease.ts
    services/price.ts
    services/weather.ts
    services/scheme.ts
    services/escalation.ts
    services/firestore.ts
    services/cache.ts
    middleware/auth.ts
    middleware/rateLimit.ts
  prompts/
  Dockerfile
  cloudbuild.yaml

pikmitra-ml/
  prompts/
    intent.v1.md
    disease_cotton.v1.md
    disease_onion.v1.md
    disease_soy.v1.md
    scheme_rag.v1.md
  knowledge/
    diseases.json
    schemes.json
    mandi_locations.json
  services/
    stt/  (Cloud Run, IndicConformer)
    tts/  (Cloud Run, IndicTTS)
  evals/
    golden_set.jsonl
    eval_runner.py

pikmitra-infra/
  terraform/  (GCP resources)
  github-actions/
```

---

## 7. WEEK 1–8 MVP TECHNICAL PLAN

### Week-by-Week Goals

| Week | Goal | Key Deliverable |
|------|------|-----------------|
| 1 | Foundations & Access | DPIIT + API approvals filed; credits applied |
| 2 | WhatsApp Echo Bot | Bot live, end-to-end pipeline, Firestore schema |
| 3 | Intent Router + Price + Weather | Onboarding flow; mandi + weather live |
| 4 | Disease Detection v1 | Cotton/onion/soy photo → Marathi diagnosis |
| 5 | Schemes RAG + Voice Output | TTS voice replies; scheme Q&A live |
| 6 | Polish + Edge Cases + Escalation | Agronomist queue; daily broadcasts; analytics |
| 7 | Scale Hardening + Cost Optimization | Load tested; caching; cost < ₹0.50/convo |
| 8 | Beta Launch | 1,000 farmers onboarded across Wardha + Yavatmal |

### Day-56 Acceptance Criteria

- [ ] 1,000+ unique farmers onboarded
- [ ] 300+ DAU
- [ ] All 4 features (disease, price, weather, schemes) live in Marathi text + voice
- [ ] Disease accuracy ≥80% on 200-sample audit
- [ ] Cost per active farmer/day < ₹2
- [ ] 2 KVK MoUs signed
- [ ] 1,000+ labeled disease images in dataset bucket
- [ ] Status page green for 7 consecutive days
- [ ] Pitch deck v1 ready

---

## 8. GEOGRAPHIC STRATEGY (Wardha-First)

### Phase 1 (Month 1–6): 2 Anchor Districts

| District | Why | Crop Focus | Target |
|----------|-----|-----------|--------|
| **Wardha (HOME)** | Founder network, lower CAC, faster iteration | Cotton, soy | 5,000 farmers |
| **Yavatmal** | Adjacent, highest pain, biggest brand story | Cotton, soy | 7,000 farmers |

### Expansion Order

- **Months 7–9:** Amravati + Nagpur rural (cotton continuity)
- **Months 10–12:** Akola, Buldhana, Chandrapur (Vidarbha saturation)
- **Months 13–18:** Marathwada (Latur, Nanded, Beed) — soybean/tur
- **Months 19–24:** Western MH (Nashik, Pune, Ahmednagar) — onion/grape
- **Year 3:** Karnataka (Kannada), Telangana (Telugu), Gujarat (Gujarati)

---

## 9. GOVERNMENT & GRANTS STRATEGY

### Day-1 Free Credits (Apply Week 1)

| Program | Value | Approval Time | Odds |
|---------|-------|---------------|------|
| NVIDIA Inception | Free DGX Cloud credits + GPU discounts + investor intros | 1–3 days | 95% |
| Microsoft for Startups Founders Hub | Up to $150K Azure + $2.5K OpenAI | 2–5 days | High |
| Google for Startups Cloud | Up to $200K GCP credits | 1–2 weeks | Medium-High |
| AWS Activate Portfolio | Up to $100K AWS credits | 1–2 weeks | Medium |
| HuggingFace Pro for Startups | Pro plan + GPU hours | Instant | High |
| OpenAI Startup Credits | $1K–$10K | Selective | Medium |
| Anthropic for Startups | Claude API credits | Selective | Medium |

**Total Day-1 stack value: ~$450K in credits/services**

### Indian Government Grants

| Program | Amount | Apply When | Odds |
|---------|--------|------------|------|
| DPIIT Startup Recognition | Free (unlocks all) | Week 1 | 95% |
| Startup India Seed Fund (SISFS) | Up to ₹50 lakh | Month 2–3 with MVP | 30–40% |
| NIDHI-PRAYAS (DST) | ₹10 lakh | Month 2 | 50% |
| MAHA Agri Innovation Hub (Pune) | ₹25L–1Cr | Month 2–3 | 50–60% |
| a-IDEA (NAARM, ICAR Hyderabad) | ₹5–25 lakh | Month 3–6 | 40–50% |
| RKVY-RAFTAAR Agri Accelerator | Up to ₹25 lakh | Quarterly cohorts | 25–35% |
| MeitY TIDE 2.0 | ₹4–7 lakh | Month 3 | 50% |
| AIM Atal Incubation (AIC) | ₹10–25L + incubation | Month 3+ | 40% |
| NABARD AgriSURE Fund | ₹50L–10Cr | Year 2 (post-revenue) | High after traction |
| MGIRI Wardha collaboration | Lab access + small grants | Anytime | High (home advantage!) |
| MSIS Maharashtra Innovation | ₹15 lakh | Month 3+ | 50% |
| NASSCOM 10K Startups | ₹25L + perks + mentorship | Open year-round | 30–40% |

**Realistic non-dilutive funding by Month 9: ₹80 lakh – ₹1.5 Cr**

### Application Sequence

```
Week 1:  DPIIT, NVIDIA Inception, Microsoft FH, Google Cloud, AWS, HuggingFace, all SaaS startup programs
Month 2: SISFS, NIDHI-PRAYAS, MAHA Agri Hub
Month 3: MeitY TIDE, RKVY-RAFTAAR, a-IDEA
Month 4: Antler, NASSCOM, AIC programs
Month 6: Surge, Omnivore conversation, NABARD AgriSURE prep
Year 2:  NABARD AgriSURE, govt contracts (MahaIT)
```

---

## 10. GO-TO-MARKET STRATEGY

### Trust-Building Stack

- Real agronomist on standby — escalation via WhatsApp
- "Verified by MPKV/CICR" badge on diagnoses
- Free always for first 6 months
- Local Marathi voice (Varhadi dialect)
- No spam, no input sales in MVP — neutrality builds trust

### Village Ambassador Program

- Recruit 1 ambassador per 10 villages = 500 ambassadors in 5,000 villages
- Profile: agri graduate, sarpanch's family, KSK owner's son
- Comp: ₹50 per active referral + ₹500/month base + leaderboard
- Target: 100K farmers via ambassadors in Year 1

### Click-to-WhatsApp Ads Budget

- ₹2 lakh/month → 30K clicks → 10K signups → CAC ₹20

---

## 11. MONETIZATION ROADMAP

| Phase | Month | Revenue Model | Why |
|-------|-------|---------------|-----|
| 1 | 0–6 | Fully free | Build trust + data moat |
| 2 | 6–12 | Freemium: ₹49/mo "PikMitra Plus" | Tests willingness to pay |
| 3 | 9–18 | Agri-input affiliate (5–10% commission) | Neutral; expected by dealers |
| 4 | 12–24 | B2B data + advisory licensing (seed cos, insurance, banks) | Highest-margin |
| 5 | 18+ | Government contracts (state advisory) | ₹10 Cr+ deals possible |
| 6 | 24+ | Marketplace + credit + insurance distribution | Once entrenched |

### Realistic Year 2 Revenue Mix (at 500K MAU)

- Subscription: ₹1.5 Cr
- Affiliate: ₹2.5 Cr
- B2B SaaS: ₹1.5 Cr
- Govt pilot: ₹2 Cr
- **Total ARR: ~₹7.5 Cr → Series A-ready**

---

## 12. MOAT & DEFENSIBILITY

| Moat Type | How PikMitra Builds It |
|-----------|------------------------|
| Data moat | 1M+ Maharashtra-specific labeled disease images in 18 months |
| Regional moat | KVK + MPKV + CICR partnerships; co-branded by ICAR |
| Marathi/language moat | Custom-trained Varhadi Marathi voice; not just translation |
| Distribution moat | KSK network + 500 village ambassadors + FPO MoUs |
| AI moat | Crop × disease × district fine-tuned models |
| Community moat | "PikMitra Mandali" farmer groups, peer testimonials |
| Trust moat | Government-validated, university-endorsed |

**Compounding flywheel:** More farmers → More photos → Better AI → Better diagnoses → More word-of-mouth → More farmers

---

## 13. VC PERSPECTIVE (Sequoia/Surge-Style Evaluation)

| Dimension | Score (1–10) | Notes |
|-----------|--------------|-------|
| Market size | 8 | $50B+ agri, but low ARPU ceiling |
| Founder-market fit | 9 | Wardha native + Varhadi Marathi = non-replicable |
| Wedge clarity | 9 | Marathi-voice-WhatsApp wedge is sharp |
| Defensibility | 7 | Data moat exists if executed |
| Capital efficiency | 8 | Software-only, no inventory |
| Timing | 9 | Indic LLMs maturing now; WhatsApp Cloud API matured 2023 |
| Exit potential | 6 | Strategic exit at $200–500M (DeHaat, Reliance, ITC, Bayer) |
| **Fundability** | **7.5/10** | Pre-seed-able now; Seed needs 50K MAU + monetization |

**Current honest rating: 6.5/10 today → 8.5/10 with execution upgrades below**

### What Makes This Fundable

- 10K MAU in Vidarbha with 35%+ W4 retention
- One signed MoU with CICR Nagpur or MPKV Rahuri
- One paid B2B pilot (FPO, seed company, NABARD, or insurance)
- Disease accuracy >85% on 500-sample audit (KVK-validated)
- Founding team: 1 ML engineer + 1 agronomist/domain + 1 distribution

### Biggest Risks

1. Low ARPU ceiling — farmers pay ₹50–200/mo max
2. Distribution cost — village reach is expensive
3. Trust collapse risk — one wrong diagnosis going viral kills brand
4. Government dependency — schemes data API access is fragile
5. Big Tech entry — Google Bhashini + Reliance Jio could clone this in 6 months
6. Seasonal usage — sowing/harvest peaks → engagement valleys

---

## 14. EXECUTION ROADMAP

### 30-Day Roadmap

| Week | Goal |
|------|------|
| 1 | Incorporate Pvt Ltd; DPIIT recognition; apply NVIDIA Inception, MS for Startups, Google Cloud |
| 2 | WhatsApp Business Cloud API approval; Firebase setup; Gemini API access |
| 3 | Build MVP bot — Marathi greeting + photo→disease (cotton only) + voice |
| 4 | Alpha with 50 farmers in Wardha; collect feedback |

### 90-Day Roadmap

- Expand to 3 crops (cotton + onion + soy)
- Mandi price + weather + scheme RAG live
- 1 KVK MoU signed (target: KVK Yavatmal)
- 5,000 farmers on WhatsApp
- Ambassador program piloted (20 ambassadors)
- Apply: SISFS, RKVY-RAFTAAR, MAHA Agri Hub
- Hire: 1 agronomist, 1 ambassador-ops lead

**Deliverable Day 90:** 5K MAU, 40% W4 retention, 1 grant secured

### 1-Year Roadmap

| Quarter | Milestone |
|---------|-----------|
| Q1 | MVP, 5K MAU |
| Q2 | 50K MAU, 3 districts deep, ₹50L grants secured, paid tier launched |
| Q3 | 200K MAU, B2B pilot signed, Android PWA launched |
| Q4 | 500K MAU, ₹1 Cr ARR, raise pre-seed/seed ($1–3M) |

---

## 15. TEAM HIRING PLAN

| Role | Month | Why |
|------|-------|-----|
| Founder/CEO | 0 | Distribution + GTM |
| Founding ML engineer | 0 | Voice + vision pipelines |
| Founding full-stack | 0 | WhatsApp bot + backend |
| Agronomist (ex-KVK/MPKV) | 1 | Domain authority + content |
| Ambassador-ops lead | 3 | Scale village reach |
| Marathi content creator | 3 | YouTube/Reels |
| Backend engineer | 6 | Scale infra |
| Data/ML engineer #2 | 8 | Custom disease models |
| Growth/partnerships | 9 | B2B + govt deals |
| Customer success | 10 | Paid tier support |

**Total Year 1 burn: ₹2.5–3 Cr ($300–360K)**

---

## 16. FINANCIAL MODEL (3-YEAR PROJECTIONS)

### Revenue Projections

| Quarter | MAU | Total Rev |
|---------|-----|-----------|
| Q1 (M1-3) | 2K | ₹0 |
| Q2 (M4-6) | 10K | ₹0 |
| Q3 (M7-9) | 30K | ₹1.9L |
| Q4 (M10-12) | 75K | ₹25L |
| **Y1 Total** | | **₹27L** |
| Y2 Total | 500K avg | **₹6 Cr** |
| Y3 Total | 1.2M avg | **₹20 Cr** |

### Unit Economics

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| CAC (blended) | ₹35 | ₹50 | ₹65 |
| ARPU (blended) | ₹54/yr | ₹120/yr | ₹165/yr |
| LTV (4-year) | ₹216 | ₹480 | ₹660 |
| LTV/CAC | 6.2x | 9.6x | 10.2x |
| Gross margin | 65% | 72% | 78% |

### Funding Requirements

```
Year 0 (M1-6): Bootstrap + Grants Phase
- Personal: ₹15-20L minimum
- Grants: ₹40-60L (NVIDIA + MS + Google + SISFS + MAHA Agri Hub)
- End of Y0: 25K MAU, ₹2L MRR signal

Year 1 (M7-12): Pre-Seed
- Raise: $750K (₹6.2 Cr) at $5-6M post
- Investors: Omnivore (lead), Ankur Capital, Bharat Founders Fund
- Y1 revenue: ₹27L

Year 2 (M13-24): Seed
- Raise: $3-4M (₹25-33 Cr) at $20-25M post
- Trigger: 200K MAU + ₹50L+ MRR
- Y2 revenue: ₹6 Cr

Year 3: Series A
- Raise: $10-15M at $60-100M post
- Y3 revenue: ₹20 Cr
```

---

## 17. ZERO-OUT-OF-POCKET FOUNDER PLAN

### Minimum Personal Cost

- Pvt Ltd / OPC incorporation: ~₹6,000–10,000 (UNAVOIDABLE)
- First 3 months personal expenses (Wardha): ~₹40,000 (if in family home)
- Domain, minor tools: ~₹4,000
- **Total minimum personal cost: ~₹50,000**

### Day-1 Free SaaS Stack (Apply Week 1)

- Microsoft for Startups Founders Hub Tier 1 → $1K Azure + GitHub
- NVIDIA Inception → DGX Cloud credits + GPU discounts
- HuggingFace Pro for Startups → AI models + GPU hours
- GitHub Enterprise → Free repos + Copilot
- Notion, Linear, Slack, Figma, Canva Pro → All free
- Sentry, PostHog, Pinecone Starter → All free
- Cloudflare, Vercel, Netlify → Free hosting
- MongoDB Atlas, Supabase free → DB options
- **Total Day-1 value: ~$10,000 + 15+ lifetime free tools**

### Wardha Founder Cost Advantage

| Expense | Bangalore | Wardha (Home) |
|---------|-----------|---------------|
| Rent | ₹20K/mo | ₹0 (family home) |
| Food | ₹8K/mo | ₹3K/mo |
| Travel | ₹5K/mo | ₹2K/mo |
| **Total** | **₹33K/mo** | **₹5–8K/mo** |

---

## 18. SWOT ANALYSIS

| | Strengths | Weaknesses |
|--|-----------|------------|
| **Internal** | Marathi-native, AI-first, WhatsApp wedge, neutrality, university partnerships, Wardha hometown advantage | No prior brand, low ARPU farmers, seasonal use, AI accuracy risk, solo founder risk |
| | **Opportunities** | **Threats** |
| **External** | Indic LLMs maturing, govt push for digital agri, climate finance, insurance distribution | Big Tech (Google Bhashini, Reliance JioKrishi), well-funded incumbents (DeHaat), policy changes |

---

## 19. LEAN CANVAS

| Block | Content |
|-------|---------|
| Problem | Marathi farmers can't identify diseases early, get exploited on prices, miss schemes, over-spray pesticides |
| Customer Segments | Small/marginal Marathi-speaking farmers in MH (cotton, onion, soy) — Android+WhatsApp users |
| UVP | "तुमच्या खिशातला कृषी डॉक्टर — मराठीत, व्हॉट्सअॅपवर" |
| Solution | AI disease detection + Marathi voice assistant + mandi prices + scheme guidance |
| Channels | WhatsApp, Krishi Seva Kendras, village ambassadors, YouTube influencers, FPOs |
| Revenue | Freemium ₹49/mo → affiliates → B2B SaaS → govt contracts |
| Cost Structure | AI inference, WhatsApp messages, ambassador commissions, content, team |
| Key Metrics | WAU, photos/user/month, W4 retention, paid conversion, CAC, LTV |
| Unfair Advantage | Marathi voice + KVK/MPKV partnerships + farmer-labeled image dataset + Wardha network |

---

## 20. POSITIONING & PITCH

### One-liner
"PikMitra is WhatsApp's Marathi AI agronomist — helping 13M Maharashtra farmers diagnose crops, beat middlemen, and access schemes, in their own voice."

### Investor Narrative (60-second version)
Indian agri-tech raised $2B+ but 90% goes to logistics and inputs. Nobody built the AI advisory layer in Indic languages. Plantix has the AI, AgroStar has the network, but no one combines Marathi-voice + WhatsApp + neutral AI advisory + Maharashtra depth. We're starting where the pain is highest — Vidarbha cotton, Nashik onion, Marathwada soy. We use AI4Bharat + Gemini + custom disease models, distributed via WhatsApp (zero install friction), and KSK + ambassador networks (offline trust). 90 days: 5K MAU. 12 months: 500K MAU and ₹1 Cr ARR. The exit: become the default farmer OS in Maharashtra, then expand pan-Indic.

### Recommended Startup Positioning Statement
"For small Marathi-speaking farmers in Maharashtra who struggle with crop diseases, unfair prices, and complex schemes, PikMitra is an AI farming companion on WhatsApp that diagnoses crops in seconds, gives Marathi voice advice, and unlocks government benefits — unlike Plantix or AgroStar, PikMitra is Marathi-first, neutral, and built specifically for Maharashtra."

---

## 21. TOP EXECUTION PRIORITIES

1. **Ship a WhatsApp Marathi MVP in 8 weeks** with cotton disease detection + voice. Don't build an Android app yet.
2. **Sign 1 KVK + 1 FPO MoU within 90 days** — moat starter and data flywheel start.
3. **Hit 50K WhatsApp MAU with 30%+ W4 retention** before raising — unlocks every grant + pre-seed term sheet.

---

## 22. BIGGEST MISTAKES TO AVOID

1. Building an Android app first — wastes 4 months, kills distribution speed
2. Selling inputs/pesticides early — destroys neutrality, kills trust permanently
3. Trying to cover all crops on Day 1 — quality dies, nobody trusts you
4. Hindi-first or English-first UX — concedes your only real moat
5. Ignoring ambassador/offline GTM — pure digital ads won't crack rural
6. Solo founder without agronomist co-founder — VC pass rate drops 40%
7. Moving to Bangalore — Wardha cost advantage is your runway
8. Building custom app before WhatsApp gets 100K MAU

---

## 23. TARGET INVESTORS

| Firm | Focus | Why They Fit |
|------|-------|-------------|
| Omnivore Partners | Agri-tech, India | Thesis-fit, agri-native |
| Ankur Capital | Impact, Bharat | Rural India focus |
| Bharat Founders Fund | Bharat-scale startups | Non-metro founder support |
| Better Capital | Pre-seed India | Early stage, founder friendly |
| 100X.VC | Pre-seed India | Fast decisions |
| Sequoia Surge | Scale-up | Month 9+ with 50K MAU |
| Accel Atoms | Pre-seed India | Consumer tech |
| Y Combinator | Global | Month 6+ with traction |

---

## 24. KEY PARTNERSHIPS TO TARGET

| Partner | Type | Value | How to Approach |
|---------|------|-------|-----------------|
| CICR Nagpur (80km from Wardha!) | Research MoU | Cotton disease dataset + credibility | Drive there; request meeting with Director |
| MPKV Rahuri | University MoU | KVK network + validation | Email VC/Dean of Extension |
| MGIRI Wardha | Local partner | Lab access + grants + credibility | You live 15 min away! Walk in. |
| KVK Yavatmal | Field partner | 1st MoU target | Phone + visit |
| MAHA-FPC | FPO partner | 5,000+ FPOs in MH | Contact Maharashtra FPC Federation |
| AI4Bharat (IIT Madras) | Tech partner | Free Indic models + legitimacy | Email research team |

---

## 25. DISEASE KNOWLEDGE BASE (MVP Scope)

### Cotton (6 conditions)
- Pink bollworm, whitefly, leaf curl virus, bacterial blight, root rot, jassids

### Onion (5 conditions)
- Purple blotch, downy mildew, thrips, basal rot, stemphylium blight

### Soybean (5 conditions)
- Yellow mosaic virus, rust, girdle beetle, semilooper, charcoal rot

**For each disease:** symptoms, photo signatures, IPM-first treatment, chemical fallback (with dosage), severity tiers, prevention

---

## 26. SAMPLE MARATHI CONVERSATION SCRIPTS

### Onboarding
```
🌾 नमस्कार! मी पीकमित्र — तुमचा AI शेती सहाय्यक.
तुम्ही मला विचारू शकता:
1️⃣ पिकाचा फोटो पाठवा → रोग ओळखेन
2️⃣ "आजचा भाव" → मंडईचे दर
3️⃣ "हवामान" → ३ दिवसांचा अंदाज
4️⃣ "योजना" → सरकारी योजना माहिती
5️⃣ "मदत" → तज्ज्ञ डॉक्टरांशी बोला

सुरुवात करूया का? तुमचं नाव सांगा 🙏
```

### Disease Reply
```
🔍 रोग ओळखला: गुलाबी बोंडअळी (Pink Bollworm)
खात्री: 🟢 जास्त (87%)

लक्षणं: कापसाच्या बोंडात गुलाबी अळी; बोंडावर छिद्र दिसतंय.

✅ उपाय (IPM-first):
1. फेरोमोन ट्रॅप्स — एकरी ५
2. NPV स्प्रे — २५० ml/एकर, संध्याकाळी
3. गरज पडली तर: Profenophos 50EC @ २ ml/लिटर

⚠️ ३ दिवसांत आराम नाही → "मदत" लिहा, तज्ज्ञांशी बोला.
📚 स्रोत: ICAR-CICR मार्गदर्शक
```

---

## 27. YOUR EXACT NEXT 7 DAYS (Action Plan)

### Day 1 (Monday)
- Morning: Apply NVIDIA Inception, Microsoft Founders Hub Tier 1, Google for Startups, AWS Activate, HuggingFace
- Afternoon: File DPIIT recognition application
- Evening: Post co-founder JD on LinkedIn + Twitter + 3 agri WhatsApp groups
- Night: Email CICR Director

### Day 2 (Tuesday)
- Morning: Apply Meta WhatsApp Business Cloud API
- Afternoon: Drive to MGIRI Wardha — request meeting
- Evening: Identify 12 lighthouse farmer candidates
- Night: Send LinkedIn DMs to 20 potential agronomist co-founders

### Day 3 (Wednesday)
- Full day: Meet first 4 lighthouse farmer candidates in your village
- Begin curating cotton disease knowledge with CICR docs

### Day 4 (Thursday)
- Drive to Yavatmal — meet 2 KSK owners, 4 lighthouse farmer candidates

### Day 5 (Friday)
- Set up GCP project, GitHub repos, Sentry, PostHog, Cloud Run
- Bootstrap WhatsApp echo bot in Marathi (4 hours with Cursor/Claude Code)
- Schedule 3 agronomist co-founder calls

### Weekend
- Drive to Nagpur — CICR meeting if scheduled
- Recruit 2 village ambassadors from Wardha network

---

*Last Updated: May 2026*
*Context stored for: PikMitra.in startup execution*
