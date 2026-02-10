import { CustomerJourney } from '@/types'

export const customerJourneys: CustomerJourney[] = [
  {
    modelId: 'R2',
    modelName: 'Rent-to-Own',
    brand: 'rotate',
    steps: [
      { step: 1, title: 'Discovery', description: 'Customer finds us on Instagram (organic post, influencer, or ad)', actor: 'customer' },
      { step: 2, title: 'Browse & Pick', description: 'DM conversation or website — picks 1-3 items', actor: 'customer' },
      { step: 3, title: 'Checkout', description: 'Stripe payment link. $79/item/mo + $200 refundable deposit per item (auth hold)', actor: 'stripe' },
      { step: 4, title: 'Ship from KZ', description: 'Item ships via DHL. 5-7 business days. Tracking shared via DM/email', actor: 'dhl' },
      { step: 5, title: 'Wear & Keep', description: 'Customer keeps and wears the item. No returns, no swaps', actor: 'customer' },
      { step: 6, title: 'Monthly Billing', description: 'Stripe charges $79/item automatically on the same date each month', actor: 'stripe' },
      { step: 7, title: 'Ownership (12mo)', description: 'Item is theirs. No final payment, no buyout fee. Deposit released', actor: 'customer' },
      { step: 8, title: 'Early Buyout (optional)', description: 'Anytime — pay remaining balance minus 20%. Deposit returned', actor: 'customer' },
      { step: 9, title: 'Cancellation', description: 'Return item at customer expense. Deposit refunded minus damage. Prior payments forfeited', actor: 'us' },
    ],
  },
  {
    modelId: 'E1',
    modelName: 'Membership + Rental',
    brand: 'edit',
    steps: [
      { step: 1, title: 'Discovery', description: 'Instagram, influencer, or referral', actor: 'customer' },
      { step: 2, title: 'Join Membership', description: '$29/mo via Stripe + $200 refundable deposit (auth hold)', actor: 'stripe' },
      { step: 3, title: 'Browse Catalog', description: 'Access to full luxury catalog at member pricing', actor: 'customer' },
      { step: 4, title: 'Rent Item', description: 'Pick item — pay $49-99/week per item via Stripe', actor: 'stripe' },
      { step: 5, title: 'Shipping', description: 'DHL from KZ (5-7 days) or from US contact (2-3 days if pre-positioned)', actor: 'dhl' },
      { step: 6, title: 'Wear', description: '1-4 weeks typical rental period', actor: 'customer' },
      { step: 7, title: 'Return or Buy', description: 'Return via prepaid label ($10 domestic) OR buy at 50% off retail', actor: 'us-contact' },
      { step: 8, title: 'Cleaning', description: 'Professional cleaning between rentals ($15-23/item)', actor: 'cleaner' },
      { step: 9, title: 'Repeat', description: 'Rent another item. Membership keeps catalog access active', actor: 'customer' },
    ],
  },
  {
    modelId: 'E3',
    modelName: 'Event Rental',
    brand: 'edit',
    steps: [
      { step: 1, title: 'Discovery', description: 'Instagram content ("What to wear to [event]"), Google, referral', actor: 'customer' },
      { step: 2, title: 'Browse & Book', description: 'Website or DM — pick 1-3 items for specific event date', actor: 'customer' },
      { step: 3, title: 'Checkout', description: 'Pay $69-199/item for 5-day rental + $200 refundable deposit (auth hold)', actor: 'stripe' },
      { step: 4, title: 'Shipping', description: 'Pre-positioned item from US contact (2-3 days) or DHL from KZ (book 10+ days ahead)', actor: 'us-contact' },
      { step: 5, title: 'Event', description: 'Customer wears item for 5 days', actor: 'customer' },
      { step: 6, title: 'Return or Buy', description: 'Return via prepaid label within 5 days OR buy at 60% off retail', actor: 'us-contact' },
      { step: 7, title: 'Cleaning', description: 'Clean item for next rental', actor: 'cleaner' },
      { step: 8, title: 'Done', description: 'One-off transaction. Deposit refunded 5-7 days after item inspection', actor: 'us' },
    ],
  },
]
