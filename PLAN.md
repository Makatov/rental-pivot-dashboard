# Rental Pivot — Master Plan v3

> Last updated: 2026-02-10
> Status: Planning phase — multi-model testing strategy
> Saturday meetings: weekly sync + model performance review
> Development: Claude Code

---

## Strategy: Test 7 Business Models, Kill Fast, Scale Winners

Instead of one model in one city — launch **7 different rental/subscription models** across **two brands** in the **US market**. Ship directly from KZ via DHL (-30% discount). Use Meta Ads to drive traffic to each model separately. By Week 12, kill the bottom 2, double down on top 3.

**Why this works:**
- Shipping from KZ → any US city costs the same. City = ad targeting, not logistics.
- Two brands = two positioning experiments (accessible vs premium)
- 7 models = 7 parallel bets. Only need 1-2 winners.
- DHL direct eliminates warehouse/3PL overhead entirely.

---

## Two Brands, One Market

| Brand | Positioning | Models | Target |
|-------|------------|--------|--------|
| **rotate** | Accessible luxury, $49-229 | 3 models (R1, R2, R3) | US women 22-35 |
| **ÉDIT** | Premium luxury, $29-499 | 4 models (E1, E2, E3, E4) | US women 30-50 |

Both target US. Both use USD. Both ship from KZ.
ÉDIT repositioned from London to US premium.

---

## The 7 Models

### rotate (accessible)

| ID | Model | Price | Margin | How it works |
|----|-------|-------|--------|--------------|
| **R1** | Subscription + Swap | $149/mo | 41% | 3 items, 1 swap/mo. Buyout after 12mo at 5%. Classic model. |
| **R2** | Rent-to-Own | $79/item/mo | 90% | Pay monthly, own after 12 months. No swaps, no returns. Best margin. |
| **R3** | Try & Buy | $49/box + buy | 26% | 3 items shipped, keep favorites at 40-60% off. Return rest. |

### ÉDIT (premium)

| ID | Model | Price | Margin | How it works |
|----|-------|-------|--------|--------------|
| **E1** | Membership + Rental | $29/mo + $49-99/wk | 30% | Low membership fee, pay per rental. Buyout at member discount. |
| **E2** | Seasonal Capsule | $349/quarter | 35% | 5 items curated by stylist, swap quarterly. Low shipping frequency. |
| **E3** | Event Rental | $69-199/item | 44% | One-off 5-day rental. No commitment. Widest audience. |
| **E4** | Full Wardrobe | $499/mo | 57% | 8 items, unlimited swaps, personal stylist. Highest ARPU. |

### Buyout mechanic (core to all):
- **Subscription models (R1, E2, E4):** After 12 months renting same item → pay 5% to own
- **Rent-to-Own (R2):** Auto-own after 12 payments, 0% buyout fee
- **Try & Buy (R3):** Instant buy at 40-60% off retail
- **Membership (E1):** Buy at 50% off retail anytime
- **Event Rental (E3):** Buy at 60% off during rental period

---

## DHL-Direct Shipping Model

**No warehouse. No 3PL. Ship item-by-item from KZ.**

| Route | Cost | Notes |
|-------|------|-------|
| KZ → US (DHL, -30%) | ~$30/item | Known courier contact with discount |
| US return (domestic) | ~$10/item | Returns to US-based contact |
| Round-trip per swap | ~$40 | Cheaper than hub model at <50 subs |

**Returns flow (Phase 1, first 10-20 customers):**
- Returns go to personal US contact (friend/family)
- Cleaning by local US partner before re-shipping
- Scale: switch to returns processing service

**Why DHL-direct beats hub model at low volume:**
```
Hub model: $1,200 bulk ship + $800 3PL/mo + $10/delivery = ~$3,200 for 6 months
DHL-direct: $30/item as needed, $0 warehouse = pay only for what ships
```
At <50 subscribers, DHL-direct is cheaper. At 50+, evaluate hub.

---

## Budget ($10K)

| Category | Amount | % |
|----------|--------|---|
| Meta Ads | $4,000 | 40% |
| DHL Shipping | $1,500 | 15% |
| Customs & Duties | $800 | 8% |
| Content & Photo | $600 | 6% |
| Cleaning (US-side) | $400 | 4% |
| Branded Packaging | $400 | 4% |
| Insurance | $400 | 4% |
| Returns Handling | $300 | 3% |
| Tech & Tools | $200 | 2% |
| Buffer | $400 | 4% |

### Meta Ads split across models
$4,000 / 7 models / 4 launch weeks = **~$140/model/week**

After Week 12 kill: $4,000 remaining / 3-5 models = **$200-270/model/week**

---

## Unit Economics (Blended)

| Metric | rotate | ÉDIT | Blended |
|--------|--------|------|---------|
| Avg ARPU | $132 | $232 | $173 |
| Variable cost | $73 | $123 | $93 |
| Contribution | $59 | $109 | $80 |
| Margin | 45% | 47% | 46% |
| CAC target | $80 | $100 | $88 |
| LTV (6mo) | $354 | $654 | $480 |
| LTV:CAC | 4:1 | 7:1 | 5:1 |

**Break-even: ~15 subscribers combined (Week 10)**

---

## 16-Week Timeline

### Phase 1: Preparation (Weeks 1-4)
- Finalize 7 model specs and pricing
- DHL account setup, test shipment (20 items)
- Product photography, domains, Instagram for both brands
- 7 landing page variants
- Start waitlist Meta Ads ($200)
- **Milestone W4:** DHL tested, 100+ waitlist

### Phase 2: Build & Test (Weeks 5-8)
- 7 checkout flows (Stripe)
- Beta test each model (2-3 users per model)
- Full rental cycle test per model
- Ad creatives for each model
- **Milestone W8:** 200+ waitlist, all 7 flows ready

### Phase 3: Launch 7 Models (Weeks 9-12)
- Launch all simultaneously
- Meta Ads: separate ad set per model ($80/model/week)
- Daily monitoring: orders, shipping times, issues
- Week 12: CHECKPOINT — kill bottom 2, reallocate budget
- **Milestone W12:** 25+ customers, kill/scale decision

### Phase 4: Kill / Scale (Weeks 13-16)
- Double down on top 3 models
- Scale Meta spend for winners
- Ship more inventory for winning categories
- Full financial review per model
- **Milestone W16:** Top 1-2 models identified → 6-month scale plan

---

## GO / NO-GO Criteria (Week 12)

### Per model — SCALE
- 5+ customers on that model
- Contribution margin > 30%
- CAC < $100 via Meta
- At least 1 repeat/retained customer

### Per model — KILL
- < 2 customers after 3 weeks of ads
- CAC > $200
- Negative contribution margin
- Zero retention signal

### Overall — CONTINUE
- 15+ total customers across all models
- At least 2 models meeting SCALE criteria
- Cash position allows 4+ more weeks

### Overall — PAUSE
- < 10 customers total
- No model meeting SCALE criteria
- Budget depleted with no path to break-even

---

## Key Risks

| # | Risk | Severity | Mitigation |
|---|------|----------|------------|
| 1 | Meta CAC > $150 | CRITICAL | 7 models = 7 chances. Kill non-converting fast. |
| 2 | DHL shipping time 5-7 days | CRITICAL | Pre-ship popular items. Event Rental needs 10-day lead. |
| 3 | $4K ads across 7 = too thin | HIGH | $80/model/week → aggressive kill at Week 12. |
| 4 | Returns logistics in US | HIGH | Friend/family first, scale to service later. |
| 5 | Operational complexity | MEDIUM | Shared backend, kill models to simplify. |

---

## What's Already Done

- [x] US LLC exists
- [x] Inventory analyzed (2,347 items, $587K retail)
- [x] Both brands defined (rotate + ÉDIT)
- [x] 7 business models designed with unit economics
- [x] Demo landing pages built (Vercel)
- [x] Dashboard with model comparison, projections, risks
- [x] DHL contact identified (-30% discount)
- [ ] DHL account setup
- [ ] Domains purchased (rotate + ÉDIT)
- [ ] Instagram accounts created
- [ ] Test shipment sent
- [ ] Stripe configured (7 products)
- [ ] 7 landing page variants built
- [ ] Waitlist live
- [ ] US returns address confirmed
- [ ] Cleaning partner (US)

---

## Context Notes

**Repo:** `rental-pivot-dashboard`
**URL:** https://rental-pivot-dashboard.vercel.app
**Key data file:** `src/data/business-models.ts` — all 7 models with economics
**Dashboard:** `/dashboard` — includes Model Comparison section
**Demos:** `/demo/rotate` and `/demo/edit`

### Quick commands
```bash
cd ~/Desktop/work/rental-pivot-dashboard
pnpm dev          # localhost:3000
pnpm build        # check errors
git push          # auto-deploy to Vercel
```
