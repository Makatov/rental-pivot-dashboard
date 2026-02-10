import { Feature } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Gem, Sparkles, RefreshCw, Crown, Package } from 'lucide-react'

interface ValuePropsProps {
  features: Feature[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  gem: Gem,
  sparkles: Sparkles,
  'refresh-cw': RefreshCw,
  crown: Crown,
  package: Package,
}

export function ValueProps({ features }: ValuePropsProps) {
  return (
    <section className="px-4 py-16 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles
            return (
              <Card key={feature.title} className="text-center">
                <CardContent className="pt-6 space-y-3">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
