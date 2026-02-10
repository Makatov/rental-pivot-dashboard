# Rental Pivot — Master Plan v4

> Last updated: 2026-02-10
> Status: Planning — content-first, 3 models
> Development: Claude Code
> Saturday syncs: weekly via Claude Code session

---

## Strategy: Content-First, 3 Models, Kill Fast

**Organic Instagram → micro-influencers → Meta Ads (only on winners).**

3 models instead of 7. Ship from KZ via DHL (-30%). Pre-position popular items in US.
First 5-10 customers through Instagram DM sales at $0 CAC.

### Why this beats v3 (7 models)

| Problem with 7 models | Fix in v4 |
|------------------------|-----------|
| $571/model in ads = no statistical significance | $667/model minimum, but organic gets first 5-10 for free |
| 7 checkout flows for 1 person = chaos | 3 flows, 2 brands |
| RTR-clone (R1) = copying a 15-year unprofitable company | Killed. Rent-to-Own has 90% margin vs RTR's ~10% |
| Try & Buy (R3) = $110 shipping per $49 box | Killed. Economics don't work. |
| $499/mo Full Wardrobe (E4) = no market for unknown brand | Killed. Start low, earn trust. |

---

## The 3 Models

| Brand | Model | Price | Margin | Why |
|-------|-------|-------|--------|-----|
| **rotate** | Rent-to-Own | $79/item/mo | **87%** | No returns, no cleaning, customer owns after 12mo. Simplest ops. |
| **ÉDIT** | Membership + Rental | $29/mo + $49-99/wk | **43%** | Vivrelle proved this ($62M Series C). Recurring base + variable. |
| **ÉDIT** | Event Rental | $69-199/item | **71%** | Pre-positioned items, no commitment, widest audience. |

### Buyout mechanics
- **Rent-to-Own:** Auto-own after 12 payments. Early buyout at 20% off remaining.
- **Membership:** Buy at 50% off retail anytime during rental.
- **Event Rental:** Buy at 60% off retail during 5-day rental period.

---

## Acquisition Funnel: $0 → $2,000

### Phase 1: Organic + DM sales (Weeks 1-4, $0)

```
3 posts/day × 30 days = 90 posts
Each of 2,347 inventory items = content
→ 5-10 customers via Instagram DMs
→ CAC: $0
```

Content that goes viral in fashion rental:
- "I rented a $3,000 Gucci bag for $79/month"
- "My luxury closet costs less than Netflix"
- Unboxing reels, GRWM, styling tips
- Price reveal format (shows retail vs rental price)

### Phase 2: Micro-influencers (Weeks 3-8, $800)

```
10 influencers × $80 avg (free rental or cash)
Combined reach: 150K-500K
→ 10-20 customers
→ CAC: $40-80
```

Fact: 12 micro-influencers give 340% more engagement + 2.8x conversion vs 2 macro.

### Phase 3: Meta Ads on winners (Weeks 7-12, $1,200)

```
Only boost posts/models that already convert organically
UGC from Phase 1-2 as ad creative
$400/week for 3 weeks on best model
→ 7-12 customers
→ CAC: $100-170
```

### Total: 25-42 customers on $2,000 ads. Blended CAC: $48-80.

---

## Unit Economics (incl. Stripe 2.9% + $0.30)

| Model | Revenue | Variable | Contribution | Margin | LTV | LTV:CAC |
|-------|---------|----------|-------------|--------|-----|---------|
| Rent-to-Own | $79/mo | $10 | $69 | 87% | $828 (12mo) | 17:1 |
| Membership | $140/mo | $80 | $60 | 43% | $360 (6mo) | 5:1 |
| Event Rental | $134/rental | $39 | $95 | 71% | $396 (6mo) | 6:1 |
| **Blended** | **$118/mo** | **$43.50** | **$74.50** | **63%** | **$585** | **10:1** |

Variable costs include: shipping, cleaning, damage reserve, Stripe fees.

### Why Rent-to-Own is the star

| Metric | Rent-to-Own | vs RTR (industry) |
|--------|-------------|-------------------|
| Margin | 87% | ~10% |
| Returns | None | Every swap |
| Cleaning | None | Every return |
| Shipping/mo | $2.50 (amortized) | $12+ per swap |
| Customer care | High (they'll own it) | Low (it's a rental) |
| Lock-in | 12 months natural | Monthly churn |

---

## Budget ($10K)

| Category | Amount | % | Notes |
|----------|--------|---|-------|
| DHL Shipping | $2,500 | 25% | ~80 shipments × $30 |
| Customs & Duties | $1,800 | 18% | Luxury items attract higher duties even pre-owned |
| Meta Ads | $1,200 | 12% | Only on proven winners |
| Micro-influencers | $800 | 8% | 10 influencers |
| Cleaning (US) | $600 | 6% | Membership + Event returns |
| Content & Photo | $500 | 5% | Product photography |
| Pre-position inventory | $500 | 5% | 20-30 items to US contact |
| Insurance | $400 | 4% | DHL + damage coverage |
| Returns Handling | $400 | 4% | US domestic returns |
| Branded Packaging | $400 | 4% | Unboxing experience |
| Tech & Tools | $200 | 2% | Claude API, domains, email |
| Buffer | $700 | 7% | Unexpected costs |

**$2,000 on acquisition. $8,000 on operations.**

---

## DHL-Direct Shipping

| Route | Cost | Used by |
|-------|------|---------|
| KZ → US (DHL -30%) | ~$30/item | All models (initial ship) |
| US return (domestic) | ~$10/item | Membership + Event only |
| Pre-positioned (domestic) | ~$10 each way | Event Rental |

**Rent-to-Own: ONE shipment, then done.** No returns. No cleaning. No re-shipping.

Pre-position 20-30 popular items at US contact → enables 2-day delivery for Event Rental.

---

## How It Actually Works (Customer Journeys)

### Rent-to-Own (rotate) — Step by Step

1. **Discovery**: Customer finds us on Instagram (organic post, influencer, or ad)
2. **Browse**: DM conversation or website → picks 1-3 items
3. **Checkout**: Stripe payment link. $79/item/month + **$200 refundable security deposit** per item (auth hold, not a charge)
4. **Shipping**: Item ships from KZ via DHL. 5-7 business days. Tracking shared via DM/email
5. **Wear**: Customer keeps and wears the item. No returns, no swaps
6. **Monthly billing**: Stripe charges $79/item automatically on the same date each month
7. **After 12 months**: Item is theirs. No final payment, no buyout fee. Deposit released
8. **Early buyout option**: Anytime — pay remaining balance minus 20%. Deposit returned
9. **Cancellation**: Can cancel anytime. Return item at customer's expense. Deposit refunded minus any damage. Prior payments forfeited (no equity built)

**Who does what:**
- **Us**: Post content, answer DMs, send Stripe link, ship via DHL, track delivery
- **Customer**: Pay monthly, keep item, report issues
- **Stripe**: Recurring billing, deposit hold, payment retries
- **DHL**: One shipment KZ→US, tracking

### Membership + Rental (ÉDIT) — Step by Step

1. **Discovery**: Instagram, influencer, or referral
2. **Join**: $29/month membership via Stripe + **$200 refundable security deposit** (auth hold)
3. **Browse**: Access to full luxury catalog at member pricing
4. **Rent**: Pick item → pay $49-99/week per item via Stripe
5. **Shipping**: DHL from KZ (5-7 days) or from US contact (2-3 days if pre-positioned)
6. **Wear**: 1-4 weeks typical rental period
7. **Return or Buy**: Return via prepaid label ($10 domestic) OR buy at 50% off retail
8. **Repeat**: Rent another item. Membership keeps catalog access active
9. **Cancel membership**: Return all items within 7 days. Deposit refunded minus damage

**Who does what:**
- **Us**: Manage catalog, DMs, ship/receive items, quality check returns, send to cleaning
- **Customer**: Pay membership + per-rental, return on time, report damage
- **US contact**: Receive returns, forward to cleaning, re-ship pre-positioned items
- **Cleaner**: Professional cleaning between rentals ($15-23/item)

### Event Rental (ÉDIT) — Step by Step

1. **Discovery**: Instagram content ("What to wear to [event]"), Google, referral
2. **Browse**: Website or DM → pick 1-3 items for specific event date
3. **Book**: Pay $69-199/item for 5-day rental + **$200 refundable security deposit** (auth hold)
4. **Shipping**: Pre-positioned item ships from US contact (2-3 days). If not pre-positioned, DHL from KZ (book 10+ days ahead)
5. **Event**: Customer wears item for 5 days
6. **Return or Buy**: Return via prepaid label within 5 days OR buy at 60% off retail
7. **Done**: One-off transaction. Deposit refunded 5-7 days after item inspection

**Who does what:**
- **Us**: Manage bookings, coordinate availability, ship or arrange domestic shipping
- **Customer**: Book ahead, wear, return on time
- **US contact**: Ship pre-positioned items, receive returns, send to cleaning
- **Cleaner**: Clean item for next rental

---

## Security Deposit & Policies

### Security Deposit
- **$200 authorization hold** on credit card (Stripe auth, NOT a charge — customer sees it as "pending")
- Released within 5-7 business days after item return and inspection
- Deducted for: unrepairable damage, lost item, late return (>3 days)
- Rent-to-Own: deposit released after 12 months when customer takes ownership

### Damage & Loss
- **Minor wear**: No charge (expected with normal use of luxury items)
- **Repairable damage**: Customer charged actual repair cost (deducted from deposit)
- **Unrepairable/Lost**: Customer charged up to retail value minus total payments already made
- **Transit damage**: DHL shipping insurance covers damage in transit (included in Insurance budget)

### Late Returns
- **1-3 days late**: Friendly reminder, no charge
- **4-7 days late**: $25/day late fee
- **7+ days late**: Treated as purchase at full rental-to-own price

### Cancellation
- **Rent-to-Own**: Cancel anytime. Return item. Forfeit prior payments (no ownership equity). Deposit returned
- **Membership**: Cancel anytime. Return all items within 7 days. Deposit returned
- **Event Rental**: Cancel 48+ hours before ship → full refund. <48 hours → 50% refund. After delivery → no refund

### Non-Payment
- Stripe handles automatic retries (3 attempts over 7 days)
- After failed retries: subscription paused, customer notified via email
- After 14 days: subscription cancelled, item treated as unreturned, deposit forfeited

---

## Inventory Tracking

- **Google Sheet** for MVP (< 50 items in circulation)
- Columns: SKU ID, Item Name, Brand, Status (Available / Rented / In Transit / Pre-positioned / Sold), Customer Name, Ship Date, Expected Return, Location (KZ / US Contact / Customer)
- **Pre-positioned items** (20-30): separate tab with US contact, tracked by item
- **Weekly reconciliation**: check sheet vs. actual items with US contact every Monday
- **Phase 2** (50+ items): migrate to Airtable or simple DB

---

## Legal Requirements (Before First Customer)

- [ ] **Terms of Service**: Rental agreement, damage liability, cancellation, dispute resolution
- [ ] **Privacy Policy**: Required for website and Stripe checkout
- [ ] **Rental Agreement template**: Auto-sent via email on every checkout
- [ ] **State regulations check**: Verify if rental/subscription requires specific licensing

---

## 16-Week Timeline

### Phase 1: Content + Organic (Weeks 1-4)
- Instagram accounts, daily posting (3/day), first DM sales
- DHL setup, test shipment, pre-position 20-30 items in US
- Product photography batch, Stripe payment links
- **W4 milestone: 5-10 organic customers, $0 CAC**

### Phase 2: Influencers + Build (Weeks 5-8)
- 10 micro-influencers receive items, post content
- Build 3 checkout flows on site
- First customer UGC, reviews, testimonials
- **W8 milestone: 20+ customers, model comparison data**

### Phase 3: Launch + Meta Ads (Weeks 9-12)
- Meta Ads: boost best organic posts, UGC as creative
- $400/week on best-performing model
- Kill weakest model if needed, reallocate
- **W12 milestone: 38+ customers, winner identified**

### Phase 4: Scale Winner (Weeks 13-16)
- All budget → winning model + channel
- Scale influencer program (proven ROI)
- Test TikTok organic
- Explore P2P hybrid (let customers list their items)
- **W16 milestone: 55+ customers, $5.8K MRR**

---

## Cashflow Projection

| Period | Customers | MRR | Costs | Net | Cumulative |
|--------|-----------|-----|-------|-----|------------|
| W1-4 (Organic) | 5 | $475 | $550 | -$75 | -$75 |
| W5-8 (+Influencers) | 15 | $1,475 | $1,350 | +$125 | +$50 |
| W9-12 (+Meta) | 28 | $2,800 | $2,100 | +$700 | +$750 |
| W13-16 (Scale) | 38 | $3,900 | $2,700 | +$1,200 | +$1,950 |
| Month 5 | 48 | $5,000 | $3,300 | +$1,700 | +$3,650 |
| Month 6 | 55 | $5,800 | $3,700 | +$2,100 | +$5,750 |

**Break-even: Week 6, ~11 subscribers.**
**$10K investment recovered: ~Month 5.**

---

## GO / NO-GO (Week 12)

### Per model — SCALE
- 10+ customers
- Contribution margin > 40%
- Repeating/retained customers

### Per model — KILL
- < 5 customers after 8 weeks
- CAC > $200 via Meta
- Zero retention

### Overall — CONTINUE
- 25+ total customers
- At least 1 model clearly winning
- Net positive monthly cashflow

### Overall — PAUSE
- < 15 customers
- All models negative unit economics
- Content getting zero engagement

---

## Competitor Intelligence

| Competitor | What we learned |
|------------|-----------------|
| **Rent the Runway** | 15 years, $300M revenue, STILL not profitable. Logistics eat everything. Don't copy this. |
| **Nuuly** | Profitable because 45% inventory at cost from parent co. 90% Year 1 retention (best). Simple = better (1 plan). |
| **Vivrelle** | Luxury accessories membership, profitable early, $62M Series C. Our closest analog. Blueprint. |
| **CaaStle** | $520M raised, $510M lost, CEO arrested for fraud. Unit economics don't lie. |
| **By Rotation** | P2P model, 500K community, 30% commission. Our Phase 2 evolution. |

**Key insight:** Luxury niche > mass market. Vivrelle > RTR in profitability.
**Our edge:** 2,347 items of European luxury already owned. $0 COGS.

---

## Growth Hacking Levers (ranked)

1. **Content as acquisition** — each item = Instagram/TikTok content ($0)
2. **Micro-influencers** — 340% more engagement than macro, $40-80 CAC
3. **DM sales** — zero-friction, zero-CAC first customers
4. **Scarcity** — "Only 47 Burberry items available"
5. **Referral** — "Give friend 50% off first month, get 50% off"
6. **UGC as ads** — customer unboxing videos as Meta Ad creative
7. **P2P hybrid (Phase 2)** — let customers list their own luxury items, 15-30% commission

---

## What's Done

- [x] US LLC exists
- [x] Inventory analyzed (2,347 items, $587K retail)
- [x] Both brands defined (rotate + ÉDIT, both US)
- [x] 3 business models designed with unit economics
- [x] Demo landing pages built (Vercel)
- [x] Dashboard with model comparison, projections, risks
- [x] DHL contact identified (-30% discount)
- [x] Customer journeys documented (all 3 models step-by-step)
- [x] Security deposit & policies defined ($200 auth hold)
- [x] Damage, late return, cancellation policies set
- [x] Inventory tracking plan (Google Sheet MVP)
- [ ] Terms of Service drafted
- [ ] Privacy Policy drafted
- [ ] Rental Agreement template created
- [ ] Instagram accounts created
- [ ] DHL account setup
- [ ] Domains purchased
- [ ] First content posted
- [ ] First DM sale
- [ ] Pre-position items to US contact
- [ ] Stripe payment links configured ($200 auth hold)
- [ ] Micro-influencers identified
- [ ] Checkout flows built
- [ ] Google Sheet inventory tracker set up
