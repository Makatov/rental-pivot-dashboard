import { IndustrySource } from '@/types'

export const industrySources: IndustrySource[] = [
  // Competitors
  {
    id: 'nuuly-earnings',
    category: 'competitor',
    name: 'Nuuly / URBN FY2025 Results',
    url: 'https://investor.urbn.com/news-releases/news-release-details/urbn-reports-record-q4-sales-and-fy25-profits',
    detail: 'Nuuly segment net sales +55% YoY. Q4 subscription revenue $112.5M. Record profits for URBN.',
    date: '2025',
  },
  {
    id: 'vivrelle-series-c',
    category: 'competitor',
    name: 'Vivrelle $62M Series C',
    url: 'https://www.businesswire.com/news/home/20250603774608/en/Vivrelle-Closes-62M-Series-C-Accelerating-Business-Growth-and-Innovation',
    detail: '$139-339/mo membership. Items up to $4K+ retail. Luxury handbags & jewelry focus.',
    date: 'Jun 2025',
  },
  {
    id: 'rtr-q1-2024',
    category: 'competitor',
    name: 'Rent the Runway Quarterly Results',
    url: 'https://investors.renttherunway.com/financial-information/quarterly-results',
    detail: '$89-235/mo plans. Q1 2024 revenue $75M. 145K active subscribers. Adjusted EBITDA $6.5M.',
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
    name: 'ThredUp 2024 Resale Market Report',
    url: 'https://www.thredup.com/resale/2024',
    detail: 'Online resale accelerating, expected to reach $40B by 2029. Rental growing faster in luxury.',
    date: '2024',
  },
  {
    id: 'mckinsey-fashion',
    category: 'market',
    name: 'McKinsey State of Fashion 2025',
    url: 'https://www.mckinsey.com/industries/retail/our-insights/state-of-fashion',
    detail: 'Luxury resale/rental growing 2-3x faster than new luxury. Sustainability driving adoption.',
    date: '2025',
  },

  // Benchmarks
  {
    id: 'bain-luxury',
    category: 'benchmark',
    name: 'Bain & Company Luxury Market Report 2024',
    url: 'https://www.bain.com/insights/luxury-in-transition-securing-future-growth/',
    detail: 'Global luxury ~€1.5T in 2024. ~4% depreciation per rental cycle. Item lifetime ~25 rentals.',
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
    id: 'realreal-resale',
    category: 'research',
    name: 'The RealReal 2024 Luxury Resale Report',
    url: 'https://www.therealreal.com/resale-report-24',
    detail: 'Pre-owned luxury sells at 30-40% of retail. Fine jewelry +22% YoY. 37M+ members.',
    date: '2024',
  },
  {
    id: 'mckinsey-fashion-tech',
    category: 'research',
    name: 'McKinsey: State of Fashion Technology',
    url: 'https://www.businessoffashion.com/reports/news-analysis/the-state-of-fashion-2025-bof-mckinsey-report/',
    detail: 'Renting at 1% daily / 10% monthly of retail value. Technology enabling rental at scale.',
    date: '2025',
  },
  {
    id: 'cac-benchmarks',
    category: 'research',
    name: 'DTC Fashion CAC Benchmarks',
    url: 'https://www.paddle.com/resources/customer-acquisition-cost',
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
