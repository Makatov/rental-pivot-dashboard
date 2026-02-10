export interface BrandData {
  brand: string
  tier: string
  count: number
  avgPriceUsd: number
}

export interface CategoryData {
  category: string
  subcategory: string
  count: number
  avgPriceUsd: number
}

export interface ConditionData {
  condition: string
  count: number
  percentage: number
}

export interface PriceDistribution {
  range: string
  count: number
}

export interface Decision {
  id: string
  title: string
  status: 'decided' | 'pending' | 'exploring'
  description: string
  details?: string
}

export interface TimelineWeek {
  week: number
  phase: string
  phaseColor: string
  tasks: string[]
  milestone?: string
}

export interface BudgetItem {
  category: string
  amount: number
  percentage: number
}

export interface MonthProjection {
  month: number
  label: string
  subscribers: number
  revenue: number
  costs: number
  net: number
  cumulative: number
}

export interface Risk {
  id: string
  risk: string
  probability: 'LOW' | 'MEDIUM' | 'HIGH'
  impact: 'LOW' | 'MEDIUM' | 'HIGH'
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
  mitigation: string
}

export interface Milestone {
  week: number
  title: string
  criteria: string
  done: boolean
}

export interface SubscriptionPlan {
  name: string
  price: number
  currency: string
  items: number
  swaps: string
  bestFor: string
  featured?: boolean
}

export interface DemoCatalogItem {
  id: string
  brand: string
  category: string
  priceKzt: number
  priceUsd: number
  imagePath: string
  imageUrl: string
}

export interface BrandTheme {
  name: string
  logoText: string
  city: string
  currency: string
  tagline: string
  heroSubtitle: string
  fontHeading: string
  fontBody: string
  colors: {
    primary: string
    bg: string
    text: string
    accent: string
    muted: string
    card: string
    cardText: string
  }
}
