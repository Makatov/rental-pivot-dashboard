import { BrandTheme } from '@/types'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  theme: BrandTheme
  variant: 'editorial' | 'conversion'
  backgroundImage?: string
}

export function HeroSection({ theme, variant, backgroundImage }: HeroSectionProps) {
  if (variant === 'editorial') {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center px-4 py-16 relative overflow-hidden">
        {backgroundImage && (
          <>
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-background/75" />
          </>
        )}
        {!backgroundImage && <div className="absolute inset-0 bg-background" />}
        <div className="mx-auto max-w-2xl text-center space-y-5 relative z-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {theme.city}
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-extrabold tracking-wide text-primary leading-tight">
            {theme.logoText}
          </h1>
          <p className="font-heading text-xl sm:text-2xl text-foreground leading-relaxed">
            {theme.tagline}
          </p>
          <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
            {theme.heroSubtitle}
          </p>
          <div className="pt-2">
            <Button size="lg" className="rounded-full gap-2">
              Explore the Collection <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Conversion variant — with pricing, dual CTAs (Rent the Runway style)
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 py-16 relative overflow-hidden">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-background/60" />
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-background" />}
      <div className="mx-auto max-w-2xl text-center space-y-5 relative z-10">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight lowercase text-primary leading-tight">
          {theme.logoText}
        </h1>
        <p className="font-body text-lg sm:text-xl text-foreground leading-relaxed max-w-md mx-auto">
          {theme.tagline}
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          {theme.heroSubtitle}
        </p>
        <p className="text-2xl font-bold text-primary">
          From {theme.currency}89<span className="text-sm font-normal text-muted-foreground">/month</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
          <Button size="lg" className="rounded-full gap-2">
            Start Renting <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full">
            How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
