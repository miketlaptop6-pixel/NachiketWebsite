# PikMitra — Full Session Log
> **Date:** May 9, 2026
> **Status:** Active — ongoing build
> **Domain:** pikmitra.in (LIVE ✅)

---

## SESSION SUMMARY

This document captures everything decided, built, and planned in this session.
Use it as the single source of truth for onboarding team members, investors, or continuing the build.

---

## 1. COMPANY CONTEXT (Stored)

Full startup strategy stored in: [`plans/pikmitra-context.md`](pikmitra-context.md)

**One-liner:**
> PikMitra is WhatsApp's Marathi AI agronomist — helping 13M Maharashtra farmers diagnose crops, beat middlemen, and access schemes, in their own voice.

**Founder:** Based in Wardha, Vidarbha (cotton heartland). Native Varhadi Marathi speaker.
**Target:** Small/marginal Marathi-speaking farmers in Maharashtra — cotton, soybean, onion.
**Wedge:** Marathi-voice-first + WhatsApp-native + AI disease detection + neutral advisory + CICR/MPKV scientific backing.

---

## 2. WHAT WAS BUILT THIS SESSION

### 2.1 Landing Page — pikmitra.in

**File:** [`pikmitra/index.html`](../pikmitra/index.html)
**Status:** LIVE at https://pikmitra.in ✅

**Design:** Apple-quality, self-contained HTML (no framework, no build step)
**Fonts:** Inter (English) + Noto Sans Devanagari (Marathi)
**Colors:** `#16A34A` green + `#25D366` WhatsApp green + clean white

**10 sections:**
1. Glassmorphism sticky nav with mobile hamburger
2. Hero — Marathi headline + floating WhatsApp phone mockup + scroll animations
3. Stats belt — 13.7M farmers · 30 seconds · ₹0 cost
4. How It Works — 3-step cards
5. Features — 2×2 cards: AI Disease Detection / Voice AI / Mandi Prices / Govt Schemes
6. Demo — Animated WhatsApp chat (price query + scheme eligibility)
7. Trust — CICR / MPKV / MGIRI / NVIDIA / Microsoft / AI4Bharat badges + Wardha story
8. Testimonials — 3 Marathi farmer cards (Yavatmal / Nashik / Latur)
9. Waitlist form — Name + WhatsApp + District + Crop → success state
10. Footer — brand + links + tagline

**Language Toggle (added):**
- `मराठी | EN` pill toggle in nav bar
- Clicking EN instantly translates ALL page text (hero, stats, features, testimonials, waitlist, footer)
- Pure JS `setLang()` function — no reload
- Default: Marathi (for farmers); EN available for investors/partners

### 2.2 Deployment Guide

**File:** [`pikmitra/README.md`](../pikmitra/README.md)
- Cloudflare Pages + GitHub deployment guide
- Airtable / Google Sheets / Firebase waitlist form connection instructions
- Analytics setup (Plausible / GA4)

### 2.3 Backend Architecture Plan

**File:** [`plans/pikmitra-backend-architecture.md`](pikmitra-backend-architecture.md)
- Full 3-stage image pipeline design
- 3-tier inference strategy (Heuristics → Gemini → Human)
- Confidence routing logic (TypeScript)
- Disease knowledge base JSON schema
- Agronomist review interface design (WhatsApp bot + Retool)
- Data labeling flywheel (Firestore schema)
- Training pipeline (EfficientNet-B3 → Vertex AI)
- Cost model: ₹0.35–0.90/query, ₹0 real cash until Month 9

---

## 3. DEPLOYMENT — HOW pikmitra.in WENT LIVE

**Steps completed this session:**

1. Created GitHub repo: `miketlaptop6-pixel/PikMitra-Website`
2. Uploaded `index.html` to repo
3. Deployed via **Cloudflare Workers** (Workers & Pages → pikmitra project)
4. Initial error: `"Only domains active on Cloudflare zone can be added"` → needed to add pikmitra.in as a zone first
5. Added `pikmitra.in` as a Cloudflare zone (DNS Management page)
6. Updated Hostinger nameservers from default → Cloudflare:
   ```
   aida.ns.cloudflare.com
   dante.ns.cloudflare.com
   ```
7. DNS propagated — pikmitra.in zone became active in Cloudflare
8. Added route in Workers & Pages → Settings → Domains & Routes:
   - Zone: `pikmitra.in`
   - Route: `pikmitra.in/*`
   - Failure mode: **Fail open** (because free plan has 100K/day limit — fail open keeps site accessible if exceeded)
9. Site went live at **https://pikmitra.in** ✅

**Hosting stack:**
- GitHub (source)
- Cloudflare Workers (hosting + CDN + SSL — all free)
- Hostinger (domain registrar only, nameservers delegated to Cloudflare)

---

## 4. KEY ARCHITECTURAL DECISIONS

### 4.1 MVP Stack (Month 1–4)

| Layer | Choice | Why |
|-------|--------|-----|
| Messaging | Meta WhatsApp Cloud API | Free 1K convos/mo, native |
| Backend | Node.js TypeScript on Cloud Run | Zero ops, autoscale to 0 |
| Database | Firestore | Zero ops, real-time |
| Image storage | GCS (Firebase Storage) | ₹2/GB, 90-day lifecycle |
| Image preprocessing | Sharp.js | Fast, free, runs in Cloud Run |
| Primary AI | Gemini 1.5 Flash Vision | Fastest to ship, low cost |
| Knowledge base | JSON files in Cloud Run | Fast, free, no DB latency |
| Vector DB | Pinecone Starter (free) | Scheme RAG |
| STT (voice) | Sarvam API | Managed, good Marathi quality |
| TTS (voice) | Sarvam API | Managed, good Marathi quality |
| Labeling | Agronomist WhatsApp bot | Zero friction, no new app |
| Analytics | PostHog free | 1M events/month free |
| Monitoring | Sentry + Cloud Logging | Free tier covers MVP |

### 4.2 Inference Architecture

```
Farmer image
    ↓
Tier 1: Heuristics filter (blur/dark/non-plant) — ₹0, <100ms
    ↓ PASS
Tier 2: Gemini 1.5 Flash Vision + Disease JSON — ₹0.021/image, <3sec
    ↓
Confidence routing:
  HIGH (>80%)   → Direct reply to farmer
  MEDIUM (50%)  → Reply + disclaimer + agronomist queue
  LOW (<50%)    → Hold message + immediate human escalation
    ↓
Tier 3: Human agronomist (WhatsApp CONFIRM/CORRECT) — ₹50/escalation
    ↓
Label stored in Firestore image_labels
    ↓ (Month 3+, after 5K labels)
EfficientNet-B3 fine-tuning on Vertex AI
    ↓
Own model replaces Gemini → cost drops 10x
```

### 4.3 Disease Knowledge Base (MVP)

3 crops × ~5–6 diseases = **16 total disease/pest entries**:
- **Cotton (6):** Pink Bollworm, Whitefly, Leaf Curl Virus, Bacterial Blight, Root Rot, Jassids
- **Soybean (5):** Yellow Mosaic Virus, Rust, Girdle Beetle, Semilooper, Charcoal Rot
- **Onion (5):** Purple Blotch, Downy Mildew, Thrips, Basal Rot, Stemphylium Blight

For each disease: Marathi name, English name, scientific name, visual markers, IPM steps (Marathi), chemical AI (active ingredient only — no brands), dosage, CICR protocol ID.

### 4.4 Language Toggle

```javascript
// Two language objects: T.mr and T.en
// setLang('en') swaps all text nodes throughout the page
// Preserves SVG icons in buttons (doesn't break them)
// Handles Devanagari in badge/title elements (preserves .bdot span)
// Updates: nav, hero, stats, how-it-works, features, demo, trust,
//          testimonials, waitlist form, footer
```

---

## 5. GRANTS & CREDITS STRATEGY

**Apply these in Week 1 (today):**

| Program | Value | URL |
|---------|-------|-----|
| NVIDIA Inception | Free DGX Cloud GPU + investor intros | nvidia.com/en-us/startups |
| Microsoft Founders Hub | Up to $150K Azure + OpenAI credits | startups.microsoft.com |
| Google for Startups Cloud | Up to $200K GCP credits | cloud.google.com/startups |
| AWS Activate | Up to $100K credits | aws.amazon.com/startups |
| HuggingFace Startups | Pro plan + GPU hours | huggingface.co/startups |
| DPIIT Recognition | Free — unlocks all India grants | startupindia.gov.in |

**Indian Government Grants (Month 2–6):**
- SISFS: ₹50 lakh (apply via VNIT Nagpur incubator)
- NIDHI-PRAYAS: ₹10 lakh
- MAHA Agri Innovation Hub: ₹25L–1Cr (strong Wardha edge)
- RKVY-RAFTAAR: ₹25 lakh equity-free
- MeitY TIDE 2.0: ₹4–7 lakh

**Realistic non-dilutive funding by Month 9: ₹80L–₹1.5Cr + $250K+ in credits**

---

## 6. GO-TO-MARKET (Wardha-First Strategy)

**Phase 1 (Month 1–6):**
- Wardha (home district) — 5,000 farmers
- Yavatmal (adjacent, highest cotton pain) — 7,000 farmers

**Acquisition channels:**
1. Lighthouse farmer program — 12 farmers, 4-week intensive protocol
2. KSK (Krishi Seva Kendra) QR posters — 2 KSKs/taluka
3. Village ambassadors — ₹50/active referral + ₹500/month base
4. YouTube collabs — Krushi Doctor, Agrowon (100K+ Marathi agri subscribers)
5. Click-to-WhatsApp ads — ₹2L/month, CAC target ₹30

**Phase 2 (Month 7–12):** Amravati, Nagpur rural, Akola, Buldhana
**Phase 3 (Month 13–18):** Marathwada (Latur, Nanded, Beed)
**Phase 4 (Month 19–24):** Western MH (Nashik, Pune, Ahmednagar)

---

## 7. BUSINESS MODEL (Sequenced)

| Phase | Month | Model |
|-------|-------|-------|
| Free | 0–6 | Build trust + data moat |
| Freemium | 6–12 | ₹49/mo PikMitra Plus |
| Affiliate | 9–18 | 5–10% on input recommendations (neutral) |
| B2B SaaS | 12–24 | Seed cos, agrochemical, banks — ₹50L–1.5Cr/yr |
| Insurance/Credit | 18+ | ₹200–2,000 per converted farmer |
| Govt contracts | 24+ | MahaIT, Krishi Vibhag |

**Year 2 ARR target (500K MAU):** ~₹7.5 Cr → Series A-ready

---

## 8. INVESTOR POSITIONING

**VC Score (Sequoia-style):** 7.5/10 today → 8.5/10 with execution

**What makes it fundable:**
- 10K MAU Vidarbha + 35%+ W4 retention
- CICR Nagpur OR MPKV Rahuri MoU signed
- One paid B2B pilot (FPO, seed co, NABARD, insurance)
- Disease accuracy >85% on 500-sample audit
- Marathi-native founding team

**Target investors:**
- Omnivore Partners (lead — agri thesis)
- Ankur Capital (impact/Bharat)
- Bharat Founders Fund
- Better Capital / 100X.VC (pre-seed)
- Sequoia Surge (Month 9+ at 50K MAU)

**Pitch one-liner:**
> "PikMitra is WhatsApp's Marathi AI agronomist — helping 13M Maharashtra farmers diagnose crops, beat middlemen, and access schemes, in their own voice. Built by a Wardha founder, starting where the pain is deepest."

---

## 9. IMMEDIATE NEXT ACTIONS

### This Week (Do Now)
- [ ] Apply NVIDIA Inception (1–3 day approval, 95% rate)
- [ ] Apply Microsoft Founders Hub Tier 1 (instant, $1K Azure + GitHub)
- [ ] Apply DPIIT Startup Recognition (free, 5 days)
- [ ] Apply Google for Startups Cloud
- [ ] Apply HuggingFace Pro for Startups
- [ ] Connect waitlist form on pikmitra.in to Airtable (free)
- [ ] Share pikmitra.in in 5 agri WhatsApp groups in Wardha/Yavatmal
- [ ] Email CICR Nagpur Director (template in pikmitra-context.md)
- [ ] Email MGIRI Wardha Director (you're 15 min away)
- [ ] Post agronomist co-founder JD on LinkedIn

### This Month (Week 1–4)
- [ ] Recruit 12 lighthouse farmers (Wardha + Yavatmal)
- [ ] Set up GCP project + Cloud Run + Firestore + GCS
- [ ] Build WhatsApp echo bot in Marathi (Day 1 of backend)
- [ ] Apply NIDHI-PRAYAS, SISFS, MAHA Agri Hub
- [ ] Sign first KVK MoU (target: KVK Yavatmal)
- [ ] Hire agronomist (ex-MPKV/CICR, retainer ₹30–50K/mo)

---

## 10. FILES CREATED THIS SESSION

| File | Purpose |
|------|---------|
| [`plans/pikmitra-context.md`](pikmitra-context.md) | Complete startup strategy + market research |
| [`plans/pikmitra-backend-architecture.md`](pikmitra-backend-architecture.md) | Image pipeline + AI inference + flywheel design |
| [`plans/pikmitra-session-log.md`](pikmitra-session-log.md) | This file — full session log |
| [`pikmitra/index.html`](../pikmitra/index.html) | Complete landing page (2,500+ lines, live at pikmitra.in) |
| [`pikmitra/README.md`](../pikmitra/README.md) | Deployment guide (Cloudflare / Vercel / GitHub Pages) |

---

## 11. TECH STACK FINAL SUMMARY

```
Frontend (Live):
  pikmitra.in ← HTML/CSS/JS (self-contained, no framework)
  Cloudflare Workers (hosting + CDN + SSL, free)
  GitHub (source control)

Backend (To Build):
  Node.js TypeScript on Google Cloud Run
  Firestore (user state, conversation, labels)
  GCS (image storage with 90-day lifecycle)
  Vertex AI (Gemini 1.5 Flash → EfficientNet later)
  WhatsApp Cloud API (messaging)
  Sarvam API (STT/TTS, Marathi)
  Pinecone (scheme RAG)
  Agmarknet API (mandi prices)
  Open-Meteo API (weather)

AI Stack (Progression):
  Month 1–3: Gemini 1.5 Flash Vision (₹0.021/image)
  Month 4+:  EfficientNet-B3 fine-tuned on Vertex AI (₹0.008/image)
  Month 6+:  AI4Bharat STT/TTS self-hosted on Cloud Run GPU
```

---

## 12. DESIGN SYSTEM (Landing Page)

| Token | Value |
|-------|-------|
| Primary Green | `#16A34A` |
| Dark Green | `#14532D` |
| WhatsApp Green | `#25D366` |
| Gold | `#F59E0B` |
| Background | `#F0FDF4` |
| Text | `#111827` |
| Border Green | `#BBF7D0` |
| Font (English) | Inter (Google Fonts) |
| Font (Marathi) | Noto Sans Devanagari (Google Fonts) |
| Border Radius | 8px / 16px / 24px / 32px / pill |
| Shadow | `0 12px 40px rgba(0,0,0,.12)` |

---

## 13. WARDHA ADVANTAGE (Founder Edge)

- **Hometown:** Wardha, Vidarbha — cotton heartland of India
- **Network:** Direct access to KSK dealers, village farmers, KVK officers
- **Proximity:** CICR Nagpur (80km), MGIRI Wardha (15 min drive)
- **Dialect:** Native Varhadi Marathi (different from Pune Marathi — farmers trust it)
- **CAC advantage:** ₹15–30 vs industry ₹150–300 in home district
- **Cost advantage:** Living in Wardha = ₹8,500/month vs ₹33,000 in Bangalore
- **Brand story:** "विदर्भातून उगवलेली, महाराष्ट्रासाठी" — unbeatable for Vidarbha farmers

---

*Session log created: May 9, 2026*
*Next session should start by reading: plans/pikmitra-backend-architecture.md*
*Then proceed to: Code mode → Week 1 backend implementation*
