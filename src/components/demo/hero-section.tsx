'use client'

import { BrandTheme } from '@/types'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  theme: BrandTheme
}

export function HeroSection({ theme }: HeroSectionProps) {
  return (
    <section
      className="min-h-[70vh] flex flex-col justify-center px-6 py-16"
      style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }}
    >
      <div className="max-w-lg mx-auto text-center space-y-6">
        <p className="text-sm tracking-[0.3em] uppercase opacity-70">{theme.city}</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: theme.colors.text }}>
          {theme.name}
        </h1>
        <p className="text-xl sm:text-2xl font-light leading-relaxed" style={{ color: theme.colors.primary }}>
          {theme.tagline}
        </p>
        <p className="text-sm opacity-70 max-w-md mx-auto">
          {theme.heroSubtitle}
        </p>
        <button
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.name === 'EDIT' ? '#0A0A0A' : '#FFFFFF',
          }}
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
