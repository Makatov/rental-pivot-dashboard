import { Competitor } from '@/types'

export const competitors: Competitor[] = [
  {
    id: 'rtr',
    name: 'Rent the Runway',
    lesson: '15 years, $300M revenue, STILL not profitable. Logistics eat everything.',
    verdict: 'warning',
    detail: "Don't copy this. Mass-market rental has terrible unit economics.",
  },
  {
    id: 'nuuly',
    name: 'Nuuly',
    lesson: 'Profitable: 45% inventory at cost from parent co. 90% Year 1 retention (best in industry).',
    verdict: 'neutral',
    detail: 'Simple = better (1 plan). But we lack parent-co inventory advantage.',
  },
  {
    id: 'vivrelle',
    name: 'Vivrelle',
    lesson: 'Luxury accessories membership, profitable early, $62M Series C.',
    verdict: 'blueprint',
    detail: 'Our closest analog. Luxury niche > mass market. This is our blueprint.',
  },
  {
    id: 'caastle',
    name: 'CaaStle',
    lesson: '$520M raised, $510M lost, CEO arrested for fraud.',
    verdict: 'warning',
    detail: 'Unit economics don\'t lie. Vanity metrics kill companies.',
  },
  {
    id: 'by-rotation',
    name: 'By Rotation',
    lesson: 'P2P model, 500K community, 30% commission.',
    verdict: 'evolution',
    detail: 'Our Phase 2 evolution — let customers list their own luxury items.',
  },
]
