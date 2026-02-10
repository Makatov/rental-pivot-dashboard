import { TimelineWeek } from '@/types'

// v7 — code-first approach: build site → launch → market → scale
export const phases = [
  { name: 'Build MVP', weeks: [1, 2, 3], color: '#6366f1' },
  { name: 'Launch + First Sales', weeks: [4, 5, 6], color: '#8b5cf6' },
  { name: 'Content + Influencers', weeks: [7, 8, 9, 10], color: '#10b981' },
  { name: 'Ads + Scale', weeks: [11, 12, 13, 14, 15, 16], color: '#f59e0b' },
]

export const timelineData: TimelineWeek[] = [
  // Phase 1: Build MVP (code-first, no spreadsheets)
  {
    week: 1, phase: 'Build MVP', phaseColor: '#6366f1',
    tasks: ['Purchase domains', 'Deploy site (Shopify or custom Next.js)', 'Product catalog: upload first 50 items with photos', 'Stripe account setup'],
  },
  {
    week: 2, phase: 'Build MVP', phaseColor: '#6366f1',
    tasks: ['Checkout flows for RO1/ED1/ED2', 'Inventory tracking system in code', 'Order status tracking (placed → shipped → returned)', 'Security deposit + rental agreement on site'],
    milestone: 'Checkout working end-to-end',
  },
  {
    week: 3, phase: 'Build MVP', phaseColor: '#6366f1',
    tasks: ['Terms of Service + Privacy Policy live', 'Email notifications (order confirmation, shipping)', 'QA full flow: browse → checkout → payment → confirmation', 'DHL account setup (−30% rate)'],
    milestone: 'Site ready for real orders',
  },

  // Phase 2: Launch + First Sales
  {
    week: 4, phase: 'Launch + First Sales', phaseColor: '#8b5cf6',
    tasks: ['Ship 20-30 items to US contact (pre-position)', 'Product photography batch for pre-positioned items', 'Soft launch: share with friends & network', 'First test orders through the site'],
  },
  {
    week: 5, phase: 'Launch + First Sales', phaseColor: '#8b5cf6',
    tasks: ['Pre-positioned items arrive, go live on site', 'First real customer orders', 'Process first shipments (domestic US)', 'Instagram accounts created (link to site)'],
    milestone: 'First paying customers',
  },
  {
    week: 6, phase: 'Launch + First Sales', phaseColor: '#8b5cf6',
    tasks: ['5-10 customers across models', 'First returns processed', 'Cleaning partner confirmed', 'Collect first customer feedback + photos'],
    milestone: '5-10 customers, site validated',
  },

  // Phase 3: Content + Influencers
  {
    week: 7, phase: 'Content + Influencers', phaseColor: '#10b981',
    tasks: ['First Instagram content (real products, real site links)', 'Identify 10 micro-influencers', 'Customer UGC: unboxing photos/videos', 'Daily posting begins (3/day)'],
  },
  {
    week: 8, phase: 'Content + Influencers', phaseColor: '#10b981',
    tasks: ['Send items to 5 influencers', 'Email automation live (welcome, post-rental, referral)', 'Referral program launched', '15+ customers'],
    milestone: '15+ customers, influencers onboard',
  },
  {
    week: 9, phase: 'Content + Influencers', phaseColor: '#10b981',
    tasks: ['Influencer posts go live', 'Send items to 5 more influencers', 'First customer reviews/testimonials on site', 'Model comparison data: which model performs best?'],
  },
  {
    week: 10, phase: 'Content + Influencers', phaseColor: '#10b981',
    tasks: ['25+ customers across models', 'Prepare Meta Ad creatives (UGC-based)', 'Customer interviews (5+)', 'Identify winning model'],
    milestone: '25+ customers, model data clear',
  },

  // Phase 4: Ads + Scale
  {
    week: 11, phase: 'Ads + Scale', phaseColor: '#f59e0b',
    tasks: ['Meta Ads start: boost best organic posts', '$400/week on best-performing model', 'CAC tracking per channel', 'Scale winning model inventory'],
  },
  {
    week: 12, phase: 'Ads + Scale', phaseColor: '#f59e0b',
    tasks: ['CHECKPOINT: model + channel performance', 'Unit economics validation vs projections', '35+ customers target', 'Kill/reduce underperforming model if needed'],
    milestone: '35+ customers, winner validated',
  },
  {
    week: 13, phase: 'Ads + Scale', phaseColor: '#f59e0b',
    tasks: ['All budget → winning model + channel', 'Influencer round 2 (proven ROI creators)', 'Pre-position more inventory for demand', 'Test TikTok organic'],
  },
  {
    week: 14, phase: 'Ads + Scale', phaseColor: '#f59e0b',
    tasks: ['45+ customers', 'Optimize ad creatives (UGC performs best)', 'Retention analysis: who stayed, who churned?', 'Buyout conversion tracking'],
    milestone: '45+ customers, profitable',
  },
  {
    week: 15, phase: 'Ads + Scale', phaseColor: '#f59e0b',
    tasks: ['Full financial review vs projections', 'Inventory utilization report', 'Prepare 6-month scale plan', 'Explore P2P hybrid (let customers list items)'],
  },
  {
    week: 16, phase: 'Ads + Scale', phaseColor: '#f59e0b',
    tasks: ['55+ customers target', 'MRR $5,800+', 'Winning model + channel confirmed', 'Scale plan or pivot decision'],
    milestone: '55+ customers, $5.8K MRR',
  },
]
