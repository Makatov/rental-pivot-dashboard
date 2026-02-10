'use client'

import { SubscriptionPlan } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check } from 'lucide-react'

interface PricingSectionProps {
  plans: SubscriptionPlan[]
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="px-4 py-16 bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-2">
          Choose Your Plan
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Cancel anytime. 15% off annual plans.
        </p>

        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual (Save 15%)</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly">
            <PlanGrid plans={plans} discount={1} />
          </TabsContent>

          <TabsContent value="annual">
            <PlanGrid plans={plans} discount={0.85} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function PlanGrid({ plans, discount }: { plans: SubscriptionPlan[]; discount: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => {
        const price = Math.round(plan.price * discount)
        return (
          <Card
            key={plan.name}
            className={`relative ${plan.featured ? 'border-primary border-2 shadow-lg scale-[1.02]' : ''}`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Popular</Badge>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <CardTitle className="font-heading text-lg">{plan.name}</CardTitle>
              <p className="text-xs text-muted-foreground">{plan.bestFor}</p>
              <div className="mt-3">
                <span className="text-4xl font-bold text-primary">
                  {plan.currency}{price}
                </span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2.5">
                <PlanFeature text={`${plan.items} items at home`} />
                <PlanFeature text={`${plan.swaps} swaps`} />
                <PlanFeature text="Free shipping & returns" />
                <PlanFeature text="Professional cleaning included" />
                <PlanFeature text="Buy at members-only prices" />
              </ul>
              <Button className="w-full rounded-full" variant={plan.featured ? 'default' : 'outline'}>
                {plan.featured ? 'Start Free Trial' : 'Select Plan'}
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

function PlanFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-sm">
      <Check className="h-4 w-4 text-primary flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </li>
  )
}
