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
}

export interface Testimonial {
  name: string
  city: string
  quote: string
  avatar?: string
  rating?: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface JourneyStep {
  step: number
  title: string
  description: string
  actor: 'customer' | 'us' | 'stripe' | 'dhl' | 'us-contact' | 'cleaner'
}

export interface CustomerJourney {
  modelId: string
  modelName: string
  brand: 'rotate' | 'edit'
  steps: JourneyStep[]
}

export interface Policy {
  id: string
  title: string
  items: { label: string; description: string }[]
}

export interface LegalItem {
  id: string
  title: string
  description: string
  done: boolean
}

export interface AcquisitionPhase {
  id: string
  name: string
  weeks: string
  budget: number
  expectedCustomers: string
  cac: string
  description: string
  color: string
}

export interface Competitor {
  id: string
  name: string
  lesson: string
  verdict: 'blueprint' | 'warning' | 'evolution' | 'neutral'
  detail: string
}

export interface GoNoGoCriteria {
  label: string
  conditions: string[]
}

export interface ProgressItem {
  title: string
  done: boolean
}

export interface BusinessModel {
  id: string
  brand: 'rotate' | 'edit'
  name: string
  subtitle: string
  type: 'subscription' | 'rental' | 'membership' | 'box'
  pricing: {
    display: string
    monthlyEquivalent: number
    details: string
  }
  mechanics: {
    items: string
    swaps: string
    buyout: string
    commitment: string
    securityDeposit: string
  }
  economics: {
    revenuePerCustomer: number
    shippingPerMonth: number
    otherVariable: number
    contributionMargin: number
    marginPercent: number
  }
  testSegment: string
  keyAdvantage: string
  keyRisk: string
}
