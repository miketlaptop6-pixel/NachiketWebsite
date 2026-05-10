# PikMitra.in — Landing Page

Apple-design landing page for PikMitra — AI Farming Companion for Maharashtra.

**Single file:** `index.html` (self-contained, no build step, no dependencies)

---

## 🚀 Deploy in 10 Minutes

### Option A — Cloudflare Pages (Recommended — Free, Fastest)

1. Push the `pikmitra/` folder to a GitHub repo (e.g. `pikmitra-website`)
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. **Create a project → Connect to Git → Select your repo**
4. Build settings:
   - Framework preset: `None`
   - Build command: *(leave blank)*
   - Build output directory: `/` (root)
5. Click **Save and Deploy** — live in ~30 seconds
6. **Custom domain:** Go to your project → Custom Domains → Add `pikmitra.in`
7. In your domain registrar DNS, add:
   ```
   CNAME  pikmitra.in  →  <your-project>.pages.dev
   CNAME  www          →  <your-project>.pages.dev
   ```
8. SSL is auto-configured. Done! ✅

---

### Option B — Vercel (Free)

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import Git Repository** → select your repo
3. Framework: `Other` → Root Directory: `pikmitra`
4. Deploy → Add custom domain `pikmitra.in` in project settings
5. Update your DNS with the CNAME Vercel gives you

---

### Option C — GitHub Pages (Free, Simplest)

1. Create a new GitHub repo named exactly: `pikmitra.in`
2. Copy `index.html` to the root of that repo
3. Settings → Pages → Source: `main` branch, `/ (root)`
4. Add file `CNAME` with content: `pikmitra.in`
5. In your domain registrar DNS:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   CNAME www  <your-username>.github.io
   ```

---

## 🔗 Connect Waitlist Form to a Backend

The waitlist form currently shows a success state locally. To actually collect submissions, replace the comment in the `handleWaitlist()` function with one of:

### Option 1 — Airtable (Easiest, Free)
```javascript
fetch('https://api.airtable.com/v0/YOUR_BASE_ID/Waitlist', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fields: { Name: name, Phone: phone, District: dist, Crop: crop }
  })
});
```

### Option 2 — Google Sheets via Apps Script
```javascript
fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
  method: 'POST',
  body: JSON.stringify({ name, phone, dist, crop })
});
```

### Option 3 — Firebase Firestore
```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// Add to your Firebase project, then:
await addDoc(collection(db, 'waitlist'), { name, phone, dist, crop, ts: new Date() });
```

### Option 4 — Formspree (No code)
Replace the button `onclick` with a standard HTML form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 📊 Add Analytics (Free)

Add before `</head>` in `index.html`:

### Plausible (Privacy-friendly, recommended)
```html
<script defer data-domain="pikmitra.in" src="https://plausible.io/js/script.js"></script>
```

### Google Analytics 4
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✏️ Customizations Checklist

Before publishing, update these in `index.html`:

- [ ] Replace `hello@pikmitra.in` with your actual email
- [ ] Update WhatsApp number once WhatsApp Business API is approved
- [ ] Connect waitlist form to Airtable / Firestore
- [ ] Add real farmer photos (replace emoji avatars in testimonials)
- [ ] Add Google Analytics / Plausible tracking
- [ ] Update `© 2026 PikMitra Technologies Pvt Ltd` CIN once incorporated
- [ ] Add Open Graph image (`og:image`) once you have a real screenshot
- [ ] Add `favicon.ico` in the `pikmitra/` folder

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Green | `#16A34A` |
| Dark Green | `#14532D` |
| WhatsApp Green | `#25D366` |
| Gold | `#F59E0B` |
| Background | `#F0FDF4` |
| Text | `#111827` |
| Font (English) | Inter (Google Fonts) |
| Font (Marathi) | Noto Sans Devanagari (Google Fonts) |

---

## 📁 File Structure

```
pikmitra/
  index.html    ← Complete landing page (self-contained)
  README.md     ← This file
  CNAME         ← (create this if using GitHub Pages — contents: pikmitra.in)
```

---

## 🌾 Sections

1. **Nav** — Glassmorphism sticky header with mobile hamburger
2. **Hero** — Full-viewport Marathi headline + WhatsApp CTA + floating phone mockup
3. **Stats** — 13.7M farmers · 30 seconds · ₹0 cost
4. **How It Works** — 3-step flow
5. **Features** — Disease detection · Voice AI · Mandi prices · Govt schemes
6. **Demo** — Animated WhatsApp chat mockup
7. **Trust** — CICR, MPKV, MGIRI, NVIDIA, Microsoft, AI4Bharat badges + Wardha story
8. **Testimonials** — 3 Marathi farmer quote cards
9. **Waitlist** — Lead capture form (name + WhatsApp + district + crop)
10. **Footer** — Links + tagline + email

---

*Built with ❤️ in Wardha, Maharashtra — विदर्भातून उगवलेली, महाराष्ट्रासाठी*
