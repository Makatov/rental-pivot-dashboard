import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  variant: 'editorial' | 'conversion'
}

export function CTASection({ variant }: CTASectionProps) {
  if (variant === 'editorial') {
    return (
      <section className="px-4 py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-lg text-center space-y-4">
          <h2 className="font-heading text-xl sm:text-2xl font-bold">
            Join the ÉDIT circle
          </h2>
          <p className="text-sm opacity-80 leading-relaxed">
            Be the first to access new arrivals, exclusive collections, and members-only events.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2.5 rounded-full text-sm text-foreground bg-primary-foreground placeholder:text-muted-foreground"
            />
            <Button variant="secondary" className="rounded-full">
              Join
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-lg text-center space-y-4">
        <h2 className="font-heading text-xl sm:text-2xl font-bold">
          Your dream wardrobe starts here
        </h2>
        <p className="text-sm opacity-80 leading-relaxed">
          Join thousands of renters who switched to smarter fashion. First month 50% off.
        </p>
        <Button size="lg" variant="secondary" className="rounded-full gap-2">
          Start Renting <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
