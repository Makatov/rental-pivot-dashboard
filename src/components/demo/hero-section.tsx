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
      className="min-h-[55vh] flex flex-col justify-center px-5 py-10"
      style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }}
    >
      <div className="max-w-lg mx-auto text-center space-y-4">
        <p className="text-[11px] tracking-[0.3em] uppercase opacity-60">{theme.city}</p>
        <h1
          className="leading-tight"
          style={{
            fontFamily: theme.fontHeading,
            color: isEdit ? theme.colors.primary : theme.colors.text,
            fontSize: isEdit ? '2.5rem' : '2.25rem',
            fontWeight: 800,
            letterSpacing: isEdit ? '0.02em' : '-0.02em',
            textTransform: isEdit ? 'none' : 'lowercase',
          }}
        >
          {theme.logoText}
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{
            fontFamily: theme.fontBody,
            color: theme.colors.text,
            fontWeight: 400,
          }}
        >
          {theme.tagline}
        </p>
        <p className="text-xs opacity-60 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: theme.fontBody }}>
          {theme.heroSubtitle}
        </p>
        <button
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
          style={{
            backgroundColor: theme.colors.primary,
            color: '#FFFFFF',
          }}
        >
          Get Started <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}
