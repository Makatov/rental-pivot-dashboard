import { BrandTheme } from '@/types'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  theme: BrandTheme
}

export function HeroSection({ theme }: HeroSectionProps) {
  const isEdit = theme.name === 'EDIT'

  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-4 py-16 bg-background">
      <div className="mx-auto max-w-2xl text-center space-y-6">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {theme.city}
        </p>

        <h1
          className={`font-heading leading-tight text-primary ${
            isEdit
              ? 'text-5xl sm:text-6xl font-extrabold tracking-wide'
              : 'text-4xl sm:text-5xl font-extrabold tracking-tight lowercase'
          }`}
        >
          {theme.logoText}
        </h1>

        <p className="font-body text-lg sm:text-xl text-foreground leading-relaxed max-w-lg mx-auto">
          {theme.tagline}
        </p>

        <p className="font-body text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          {theme.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button size="lg" className="rounded-full gap-2">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
