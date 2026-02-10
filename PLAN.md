# Rental Pivot — Master Plan v2

> Last updated: 2026-02-10
> Status: Planning phase
> Saturday meetings: weekly sync + planning
> Development: Claude Code (this tool)

---

## 1. Critique of Current Plan (v1)

### What works
- Dual-brand positioning (EDIT = premium London, rotate = accessible NYC) is smart A/B testing
- Inventory is already owned ($587K retail value, 2,347 items) — huge advantage
- Subscription model with swaps is proven (Rent the Runway, Hurr, By Rotation)
- Tech stack (Vercel + Stripe + Next.js) is correct — near-zero infra cost

### Critical weaknesses

| # | Issue | Why it's a problem |
|---|-------|--------------------|
| W1 | **$10K for two international markets** | Splitting focus doubles complexity and cost. Customs, 3PL, cleaning, local ops — all x2 |
| W2 | **Marketing budget $1,500 (15%)** | Won't generate meaningful traffic. Meta CAC for fashion subscriptions is $80-200, not $30-50 as assumed |
| W3 | **Projections too aggressive** | 13 subscribers in Month 1 on $1,500 total marketing budget is unrealistic. Industry benchmarks: 2-5% conversion, need 260-650 visitors |
| W4 | **Dev budget $3,500 but Claude does the work** | Claude API ~$50/mo, Vercel free, Stripe per-transaction. Real dev cost < $300 total. This money should go to marketing |
| W5 | **No local operations budget** | 3PL, storage, fulfillment labor, cleaning — all missing from unit economics |
| W6 | **No content/photography budget** | Luxury fashion needs professional product imagery. Current site uses scraped brand images (not licensed for production) |
| W7 | **UK market adds $2-3K overhead** | UK Ltd registration, VAT, import duties, separate 3PL, separate cleaning partner |
| W8 | **12-week timeline too tight** | Customs clearance alone = 4-6 weeks. Finding reliable 3PL = 2-3 weeks. Building waitlist = ongoing |
| W9 | **Break-even at 17 subs (Week 8)** | Assumes $0 customer acquisition cost in the model |
| W10 | **No insurance for $40K+ inventory** | Items in transit and at customer's home need coverage |

### Unit economics audit

Current model (rotate):
```
ARPU:              $149/mo
Variable cost:     $81/mo   ← too low
Contribution:      $68/mo
```

Realistic variable costs per subscriber/month:
```
Item depreciation:     $25  (items lose value each rental cycle)
Cleaning per swap:     $20  (luxury dry clean x 2 swaps/month)
Shipping to customer:  $12  (local, 2x/month)
Return shipping:       $12  (local, 2x/month)
Packaging:             $5
Damage reserve:        $10  (5-8% damage rate industry avg)
3PL handling:          $8   (pick/pack per swap)
```
**Total realistic variable: ~$92/mo**

Corrected contribution: $149 - $92 = **$57/mo** (38% margin, not 46%)

---

## 2. Strategic Decision: ONE Market First

**Recommendation: Launch ONLY rotate (NYC) first.**

Reasons:
- Simpler import (no UK VAT/Ltd complexity)
- Larger rental market ($2.5B US fashion rental vs $800M UK)
- Cheaper to test ($5-6K vs $10K+ for two markets)
- Faster to validate — learnings apply to London launch later
- Meta Ads in USD, targeting NYC is well-understood

**When to launch EDIT (London):**
After rotate reaches 30+ active subscribers with positive unit economics (Month 4-5 if things go well).

---

## 3. Realistic Budget ($10K)

### Core principle: Meta ads = primary spend, tech = near-zero

| Category | Amount | % | Notes |
|----------|--------|---|-------|
| **Meta Ads (Instagram/FB)** | **$4,000** | **40%** | Main growth channel. $500/mo x 8 months runway |
| Bulk Shipping KZ→NYC | $1,200 | 12% | ~100 items via freight forwarder |
| Customs & Import Duties | $800 | 8% | US customs for luxury goods (10-20% duty) |
| 3PL / Micro-warehouse NYC | $800 | 8% | First 3 months of storage + handling |
| Cleaning & Garment Care | $400 | 4% | First 30-40 cleaning cycles |
| Content & Photography | $500 | 5% | Product photos, lifestyle shots, UGC |
| Branded Packaging | $300 | 3% | Boxes, tissue paper, thank-you cards |
| Insurance (transit + inventory) | $400 | 4% | 3-month blanket policy |
| Tech & Tools | $200 | 2% | Claude API, domains, email marketing tool |
| Buffer | $400 | 4% | Unexpected costs |
| **TOTAL** | **$10,000** | **100%** | |

### Tech cost breakdown (monthly)
| Item | Cost/mo |
|------|---------|
| Claude API (development) | $20-50 |
| Vercel (hosting) | $0 (free tier) |
| Stripe | 2.9% + $0.30 per transaction |
| Domain (rotatenow.co or similar) | $12/year |
| Email tool (Loops, Resend) | $0-25 |
| Analytics (Plausible/Mixpanel) | $0 (free tier) |
| **Total tech/mo** | **~$50-100** |

### Meta Ads allocation
| Month | Budget | Goal |
|-------|--------|------|
| Month 1 (pre-launch) | $300 | Waitlist growth, 200+ signups |
| Month 2 (launch) | $600 | First 10 subscribers |
| Month 3 | $600 | Scale to 25 subscribers |
| Month 4 | $600 | Target 40 subscribers |
| Month 5 | $600 | Target 55 subscribers |
| Month 6 | $500 | Optimize, retarget |
| Month 7 | $400 | Retention focus |
| Month 8 | $400 | Evaluate |

**Targeting:**
- NYC women 25-45
- Interests: luxury fashion, sustainability, rental fashion, specific brands
- Lookalike audiences from waitlist
- Instagram Reels + Stories primary format

---

## 4. Realistic Financial Projections

### Assumptions
- Meta CAC: $100 first month → $60 at scale (learning phase)
- Organic/referral: 30% of new subs after month 3
- Churn: 15%/month (industry average for fashion rental)
- ARPU: $149 (Standard plan median)
- Contribution margin: $57/subscriber/month (38%)

| Month | New Paid | Churned | Active Subs | MRR | Variable | Fixed Costs | Net |
|-------|----------|---------|-------------|-----|----------|-------------|-----|
| 1 | 5 | 0 | 5 | $745 | $460 | $1,100 | -$815 |
| 2 | 8 | 1 | 12 | $1,788 | $1,104 | $1,100 | -$416 |
| 3 | 10 | 2 | 20 | $2,980 | $1,840 | $1,100 | +$40 |
| 4 | 12 | 3 | 29 | $4,321 | $2,668 | $1,200 | +$453 |
| 5 | 10 | 4 | 35 | $5,215 | $3,220 | $1,200 | +$795 |
| 6 | 10 | 5 | 40 | $5,960 | $3,680 | $1,200 | +$1,080 |

**Fixed costs/month:** $1,100-1,200 (3PL $300, cleaning $200, Meta ads $500-600, tech $100)

**Break-even:** ~Month 3 at ~20 active subscribers
**Cumulative break-even on $10K investment:** ~Month 6-7

---

## 5. Realistic Timeline (16 weeks)

### Phase 1: Preparation (Weeks 1-4)

**Week 1-2: Legal & Logistics**
- [ ] Research US import requirements for luxury goods rental
- [ ] Contact 3 customs brokers, get quotes
- [ ] Research NYC micro-warehousing (Saltbox, Flexe, local options)
- [ ] Register domain for rotate brand
- [ ] Setup business email + Instagram
- [ ] Start Instagram content (mood boards, "coming soon")

**Week 3-4: Selection & Shipping**
- [ ] Select 100 best items from Flimod warehouse (shoes, bags, accessories first — no sizing issues)
- [ ] Professional photography of selected items
- [ ] Ship bulk to customs broker → NYC warehouse
- [ ] Begin waitlist landing page with Claude
- [ ] Start Meta ads for waitlist ($300 budget)

**Milestone: 100+ waitlist signups, items shipped**

### Phase 2: Build & Waitlist (Weeks 5-8)

**Week 5-6: Website MVP**
- [ ] Build full site with Claude (catalog, subscription flow, Stripe checkout)
- [ ] Setup Stripe products and subscription plans
- [ ] Email automation (welcome, subscription confirmation, shipping)
- [ ] Items arrive at NYC warehouse, inventory check
- [ ] Negotiate cleaning partner (luxury dry cleaner)

**Week 7-8: Pre-launch**
- [ ] Beta test with 3-5 people from waitlist (free or discounted)
- [ ] Full rental cycle test (ship → wear → return → clean → re-ship)
- [ ] Fix logistics issues found in beta
- [ ] Prepare launch content (email, Instagram, Stories)
- [ ] Setup analytics and tracking

**Milestone: System tested end-to-end, 200+ waitlist, ready to launch**

### Phase 3: Launch (Weeks 9-12)

**Week 9: Soft Launch**
- [ ] Email waitlist with launch offer (first month discount or free shipping)
- [ ] First 5-10 paying subscribers
- [ ] Ramp Meta ads ($600/mo)
- [ ] Daily monitoring: shipping times, customer feedback, issues

**Week 10-11: Iterate**
- [ ] Customer interviews (5+ calls)
- [ ] Fix top 3 UX/logistics issues
- [ ] Launch referral program ($20 credit per referral)
- [ ] A/B test ad creatives

**Week 12: First Checkpoint**
- [ ] 15-20 active subscribers target
- [ ] Review: CAC, churn, NPS, unit economics
- [ ] Decision: continue scaling or adjust model

**Milestone: 15-20 subs, validated operations**

### Phase 4: Scale or Pivot (Weeks 13-16)

**Week 13-14: Optimization**
- [ ] Optimize top-performing ad sets
- [ ] Add buy-out option for popular items
- [ ] Replenish popular categories
- [ ] Test organic channels (TikTok, partnerships)

**Week 15-16: Evaluation**
- [ ] 30-40 active subscribers target
- [ ] Full financial review
- [ ] GO/NO-GO on London (EDIT) launch
- [ ] Document all learnings

**Milestone: 30+ subs, positive unit economics → decide on London expansion**

---

## 6. GO / NO-GO Criteria (Week 16)

### GO (proceed to London)
- 30+ active subscribers
- Contribution margin > 30%
- CAC < $80 via Meta
- Churn < 20%/month
- NPS > 40
- Operations running smoothly

### ADJUST (continue NYC, change model)
- 15-30 subscribers
- Unit economics marginal
- Need more data

### NO-GO (exit or major pivot)
- < 15 subscribers after 8 weeks live
- CAC > $150
- Churn > 30%
- Negative unit economics

---

## 7. Saturday Meeting Structure

Weekly Saturday sync (30-45 min via Claude Code session):

### Agenda Template
```
1. REVIEW (10 min)
   - KPIs this week: new subs, churn, revenue, ad spend
   - Open issues / blockers

2. PRIORITIES (10 min)
   - Top 3 priorities for next week
   - What's working / not working

3. DECISIONS (10 min)
   - Any pending decisions to make
   - Budget adjustments

4. ACTION ITEMS (5 min)
   - Who does what (realistically: Claude does dev, you do ops/marketing)
   - Deadlines
```

### Meeting notes location
`/Users/makatov/Desktop/work/claude-context/meetings/YYYY-MM-DD-rental-pivot-weekly.md`

---

## 8. Key Risks (updated)

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Meta CAC too high (>$150) | HIGH | HIGH | Test multiple creatives, try organic first, Instagram Reels |
| Customs delays | MEDIUM | HIGH | Start shipping ASAP, experienced broker, 4-week buffer |
| Low demand / wrong product-market fit | MEDIUM | HIGH | Waitlist validation, beta test, iterate fast |
| High damage/loss rate | MEDIUM | MEDIUM | Security deposits, insurance, clear policies |
| 3PL partner unreliable | MEDIUM | MEDIUM | Have backup options, start small with manual fulfillment |
| Cleaning turnaround too slow | LOW | MEDIUM | Multiple partners, SLA agreements |
| Competitor reaction | LOW | LOW | Move fast, niche positioning, community |

---

## 9. What's Already Done

- [x] Inventory data analyzed (2,347 items, $587K value)
- [x] Dual-brand positioning defined (EDIT + rotate)
- [x] Subscription plans designed (3 tiers each)
- [x] Demo landing pages built and deployed (Vercel)
- [x] Hero images and brand imagery sourced
- [x] Product catalog with real Flimod items
- [x] Dashboard with projections, risks, timeline
- [x] Unit economics modeled
- [ ] Business registered (US entity or LLC)
- [ ] Domain purchased
- [ ] Instagram created
- [ ] Waitlist live
- [ ] Items shipped
- [ ] 3PL secured
- [ ] Cleaning partner
- [ ] Insurance

---

## 10. Context Notes for Future Sessions

### How this project works

**Repo:** `rental-pivot-dashboard` (Next.js 14, deployed on Vercel)
**URL:** https://rental-pivot-dashboard.vercel.app

**Structure:**
- `/dashboard` — internal team dashboard with projections, risks, timeline
- `/demo/edit` — EDIT brand landing page (London, premium, gold theme)
- `/demo/rotate` — rotate brand landing page (NYC, accessible, green theme)

**Data files** (`src/data/`):
- `brand-themes.ts` — brand identity (name, city, currency, tagline)
- `brand-images.ts` — hero backgrounds scraped from luxury brand sites
- `demo-catalog.ts` — product items from Flimod DB (real SKUs with real images)
- `financials.ts` — budget, projections, unit economics
- `plans.ts` — subscription tiers
- `timeline.ts` — week-by-week plan
- `risks.ts` — risk matrix
- `decisions.ts` — key decisions tracker
- `milestones.ts` — milestone checkpoints

**Landing components** (`src/components/landing/`):
- `brand-layout.tsx` — wrapper with `data-brand` attribute for CSS variable theming
- `hero-section.tsx` — two variants: "editorial" (EDIT) and "conversion" (rotate)
- `trending-grid.tsx` — horizontal scroll product showcase (rotate)
- `value-section.tsx` — 2x2 product grid with pricing (EDIT)
- `collections-grid.tsx` — collection banners
- Various other sections (testimonials, how-it-works, CTA, etc.)

**Theming:**
- CSS variables switch per brand via `[data-brand="edit"]` / `[data-brand="rotate"]`
- EDIT: gold (#D4A017), Playfair Display / Lora fonts
- rotate: green (#00B463), Inter / DM Sans fonts
- Uses Tailwind classes (`bg-primary`, `text-foreground`, etc.)

**Product images:**
- Real items from Flimod production DB
- URLs: `https://static.flimod.com/images/sku/{skuId}/{imagePath}`
- Use `object-cover bg-background` for consistent display
- DB query for images: `SELECT * FROM sku_media WHERE sku_id = '...' AND is_main = true`

**Hero images:**
- Scraped from luxury brand CDNs (Burberry, Dior, Gucci, etc.)
- NOT licensed for production use — need original photography for real launch
- Burberry CDN supports `?wid=2000&fmt=jpeg&qlt=90` for hi-res

### Quick commands
```bash
cd ~/Desktop/work/rental-pivot-dashboard
pnpm dev          # localhost:3000
pnpm build        # check for errors
git push          # auto-deploys to Vercel
```

### What needs to happen next
1. Update `financials.ts` with realistic numbers from this plan
2. Update `timeline.ts` with 16-week plan
3. Update `risks.ts` with new risk assessment
4. Decide: keep both brands in demo or focus dashboard on rotate only?
5. Start real execution (domain, Instagram, customs research)
