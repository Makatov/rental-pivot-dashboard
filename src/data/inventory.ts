import { BrandData, CategoryData, ConditionData, PriceDistribution } from '@/types'

export const inventorySummary = {
  totalItems: 3631,
  totalValueUsd: 587178,
  rentalIdealItems: 2347,
  rentalIdealValueUsd: 435131,
  rentalIdealPercentage: 64.6,
  avgPriceUsd: 185.40,
}

export const brandData: BrandData[] = [
  { brand: 'Dolce Gabbana', tier: 'vip', count: 142, avgPriceUsd: 215 },
  { brand: 'Max Mara', tier: 'vip', count: 81, avgPriceUsd: 146 },
  { brand: 'Gucci', tier: 'vip', count: 79, avgPriceUsd: 263 },
  { brand: 'Prada', tier: 'vip', count: 78, avgPriceUsd: 281 },
  { brand: 'Kenzo', tier: 'vip', count: 77, avgPriceUsd: 99 },
  { brand: 'Burberry', tier: 'vip', count: 73, avgPriceUsd: 221 },
  { brand: 'Moschino', tier: 'vip', count: 64, avgPriceUsd: 136 },
  { brand: 'Dior', tier: 'vip', count: 61, avgPriceUsd: 304 },
  { brand: 'Emporio Armani', tier: 'vip', count: 58, avgPriceUsd: 116 },
  { brand: 'By Malene Birger', tier: 'vip', count: 54, avgPriceUsd: 104 },
  { brand: 'Sergio Rossi', tier: 'vip', count: 51, avgPriceUsd: 191 },
  { brand: 'Ralph Lauren', tier: 'vip', count: 49, avgPriceUsd: 96 },
  { brand: 'Hugo Boss', tier: 'vip', count: 47, avgPriceUsd: 97 },
  { brand: 'Louis Vuitton', tier: 'vip', count: 42, avgPriceUsd: 292 },
  { brand: 'Christian Louboutin', tier: 'vip', count: 38, avgPriceUsd: 214 },
]

export const categoryData: CategoryData[] = [
  { category: 'Footwear', subcategory: 'Shoes', count: 415, avgPriceUsd: 164 },
  { category: 'Dresses', subcategory: 'Casual', count: 336, avgPriceUsd: 130 },
  { category: 'Boots', subcategory: 'Boots', count: 304, avgPriceUsd: 220 },
  { category: 'Footwear', subcategory: 'Sandals', count: 244, avgPriceUsd: 144 },
  { category: 'Pants', subcategory: 'Casual', count: 154, avgPriceUsd: 111 },
  { category: 'Dresses', subcategory: 'Evening', count: 129, avgPriceUsd: 213 },
  { category: 'Outerwear', subcategory: 'Jackets', count: 104, avgPriceUsd: 288 },
  { category: 'Outerwear', subcategory: 'Coats', count: 96, avgPriceUsd: 449 },
  { category: 'Dresses', subcategory: 'Cocktail', count: 95, avgPriceUsd: 148 },
  { category: 'Sneakers', subcategory: 'Sneakers', count: 91, avgPriceUsd: 179 },
]

export const conditionData: ConditionData[] = [
  { condition: 'Excellent', count: 2535, percentage: 70.8 },
  { condition: 'Good', count: 517, percentage: 14.4 },
  { condition: 'New', count: 218, percentage: 6.1 },
  { condition: 'Perfect', count: 192, percentage: 5.4 },
  { condition: 'Average', count: 116, percentage: 3.2 },
]

export const priceDistribution: PriceDistribution[] = [
  { range: '<$75', count: 855 },
  { range: '$75-200', count: 1996 },
  { range: '$200-500', count: 579 },
  { range: '$500-1K', count: 111 },
  { range: '>$1K', count: 38 },
]
