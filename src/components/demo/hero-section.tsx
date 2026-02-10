'use client'

import { BrandTheme } from '@/types'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  theme: BrandTheme
}

export function HeroSection({ theme }: HeroSectionProps) {
  const isEdit = theme.name === 'EDIT'

  return (
    <section
      className="min-h-[70vh] flex flex-col justify-center px-6 py-16"
      style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }}
    >
      <div className="max-w-lg mx-auto text-center space-y-6">
        <p className="text-sm tracking-[0.3em] uppercase opacity-70">{theme.city}</p>
        <h1
          className="leading-tight"
          style={{
            fontFamily: theme.fontHeading,
            color: isEdit ? theme.colors.primary : theme.colors.text,
            fontSize: isEdit ? '3.5rem' : '3rem',
            fontWeight: isEdit ? 800 : 800,
            letterSpacing: isEdit ? '0.02em' : '-0.02em',
            textTransform: isEdit ? 'none' : 'lowercase',
          }}
        >
          {theme.logoText}
        </h1>
        <p
          className="text-xl sm:text-2xl leading-relaxed"
          style={{
            fontFamily: theme.fontBody,
            color: theme.colors.text,
            fontWeight: 400,
          }}
        >
          {theme.tagline}
        </p>
        <p className="text-sm opacity-70 max-w-md mx-auto" style={{ fontFamily: theme.fontBody }}>
          {theme.heroSubtitle}
        </p>
        <button
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
          style={{
            backgroundColor: theme.colors.primary,
            color: '#FFFFFF',
          }}
        >
          Get Started <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
