import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="px-4 py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl text-center space-y-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold">
          Ready to transform your wardrobe?
        </h2>
        <p className="text-sm opacity-80 max-w-md mx-auto leading-relaxed">
          Join thousands of members who&apos;ve made the switch to smarter fashion.
          Start your free trial today.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full gap-2"
        >
          Start Free Trial <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
