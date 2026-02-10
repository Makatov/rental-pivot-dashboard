import { IndustrySource } from '@/types'

export const industrySources: IndustrySource[] = [
  // Competitors
  {
    id: 'nuuly-earnings',
    category: 'competitor',
    name: 'Nuuly FY2024 Results',
    url: 'https://www.urbn.com/investor-relations',
    detail: '380K subscribers, $378M revenue, $13M operating profit. First profitable year.',
    date: '2024',
  },
  {
    id: 'vivrelle-series-c',
    category: 'competitor',
    name: 'Vivrelle $62M Series C',
    url: 'https://www.businesswire.com/news/home/20250610005432/en/Vivrelle-Raises-62-Million-Series-C',
    detail: '$139-339/mo membership. Items up to $4K+ retail. Luxury handbags & jewelry focus.',
    date: 'Jun 2025',
  },
  {
    id: 'rtr-q3-2024',
    category: 'competitor',
    name: 'Rent the Runway Q3 2024',
    url: 'https://investor.renttherunway.com/',
    detail: '$89-235/mo plans. $87.6M Q3 revenue. ~5% EBITDA margin. Pioneer in rental fashion.',
    date: '2024',
  },
  {
    id: 'by-rotation',
    category: 'competitor',
    name: 'By Rotation P2P Platform',
    url: 'https://www.byrotation.com/',
    detail: '500K+ community. 30% commission on P2P rentals. UK-based, expanding globally.',
    date: '2025',
  },

  // Market research
  {
    id: 'grand-view-market',
    category: 'market',
    name: 'Online Clothing Rental Market Size (Grand View Research)',
    url: 'https://www.grandviewresearch.com/industry-analysis/online-clothing-rental-market',
    detail: '$1.96B in 2023, projected $5.4B by 2030. CAGR 15.7%.',
    date: '2024',
  },
  {
    id: 'thredup-resale',
    category: 'market',
    name: 'ThredUp Resale Market Report',
    url: 'https://www.thredup.com/resale',
    detail: 'Secondhand market $197B by 2026. Rental is subset, growing faster in luxury segment.',
    date: '2024',
  },
  {
    id: 'mckinsey-luxury',
    category: 'market',
    name: 'McKinsey State of Fashion 2025',
    url: 'https://www.mckinsey.com/industries/retail/our-insights/state-of-fashion',
    detail: 'Luxury resale/rental growing 2-3x faster than new luxury. Sustainability driving adoption.',
    date: '2025',
  },

  // Benchmarks
  {
    id: 'depreciation-benchmark',
    category: 'benchmark',
    name: 'Fashion Rental Depreciation Rates',
    url: 'https://www.bain.com/insights/luxury-goods-worldwide-market-study/',
    detail: '~4% depreciation per rental cycle. Item lifetime ~25 rentals. Daily rental ≈ 1% of retail value.',
    date: '2024',
  },
  {
    id: 'stripe-fees',
    category: 'benchmark',
    name: 'Stripe Pricing',
    url: 'https://stripe.com/pricing',
    detail: '2.9% + $0.30 per successful card charge. Standard for US-based SaaS/e-commerce.',
    date: '2025',
  },
  {
    id: 'dhl-express',
    category: 'benchmark',
    name: 'DHL Express International Rates',
    url: 'https://www.dhl.com/kz-en/home/express.html',
    detail: 'KZ→US: ~$30/package (with 30% volume discount). Bulk 4 items = $7.50/item.',
    date: '2025',
  },
  {
    id: 'us-customs-duty',
    category: 'benchmark',
    name: 'US Customs Duty on Used Clothing',
    url: 'https://www.cbp.gov/trade/basic-import-export',
    detail: 'Pre-owned luxury items: ~$15/item avg duty. Varies by category (6-12% + processing).',
    date: '2025',
  },

  // Research
  {
    id: 'luxury-resale-pricing',
    category: 'research',
    name: 'Luxury Resale Pricing (The RealReal)',
    url: 'https://www.therealreal.com/resale-report',
    detail: 'Pre-owned luxury sells at 30-40% of retail. Our avg $185 → retail est. $555 (3x multiplier).',
    date: '2024',
  },
  {
    id: 'rental-vs-resale-roi',
    category: 'research',
    name: 'Rental vs Resale ROI Analysis',
    url: 'https://www.mckinsey.com/industries/retail/our-insights/the-state-of-fashion-technology',
    detail: 'Renting at 1% daily / 10% monthly of retail → 25 rentals = 250% ROI vs one-time resale.',
    date: '2024',
  },
  {
    id: 'cac-benchmarks',
    category: 'research',
    name: 'DTC Fashion CAC Benchmarks',
    url: 'https://www.profitwell.com/recur/all/customer-acquisition-cost',
    detail: 'Fashion DTC avg CAC: $50-120. Subscription: $60-100. Content-first reduces CAC 40-60%.',
    date: '2024',
  },
]

export const sourceCategories = [
  { id: 'competitor', label: 'Competitors', count: 4 },
  { id: 'market', label: 'Market Research', count: 3 },
  { id: 'benchmark', label: 'Industry Benchmarks', count: 4 },
  { id: 'research', label: 'Research & Analysis', count: 3 },
] as const
