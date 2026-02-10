'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion'

export function Methodology({ children }: { children: React.ReactNode }) {
  return (
    <Accordion type="single" collapsible className="border-t mt-3">
      <AccordionItem value="methodology" className="border-b-0">
        <AccordionTrigger className="py-2 text-[11px] text-gray-400 hover:text-gray-600 hover:no-underline">
          How this is calculated
        </AccordionTrigger>
        <AccordionContent className="text-[11px] text-gray-500 leading-relaxed space-y-2">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
