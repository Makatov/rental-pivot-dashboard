import { BrandTheme } from '@/types'

export const rotateTheme: BrandTheme = {
  name: 'ROTATE',
  logoText: 'rotate',
  city: 'New York',
  currency: '$',
  tagline: 'Everyday outfits, handled.',
  heroSubtitle: 'Access 100+ luxury pieces from European designers. Swap monthly. No commitment.',
  fontHeading: 'var(--font-inter)',
  fontBody: 'var(--font-dm-sans)',
  colors: {
    primary: '#00B463',
    bg: '#F9F6ED',
    text: '#3A3530',
    accent: '#3153FF',
    muted: '#F0EDE4',
    card: '#FFFFFF',
    cardText: '#3A3530',
  },
}

export const editTheme: BrandTheme = {
  name: 'EDIT',
  logoText: 'ÉDIT',
  city: 'London',
  currency: '£',
  tagline: 'A wardrobe that moves with you.',
  heroSubtitle: 'Hand-picked luxury from the world\'s finest houses. Subscribe to your personal wardrobe.',
  fontHeading: 'var(--font-playfair)',
  fontBody: 'var(--font-lora)',
  colors: {
    primary: '#D4A017',
    bg: '#F9F6ED',
    text: '#3A3530',
    accent: '#F7E7CE',
    muted: '#F0EDE4',
    card: '#FFFFFF',
    cardText: '#3A3530',
  },
}
