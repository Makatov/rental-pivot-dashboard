'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { BrandTheme } from '@/types'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface SiteHeaderProps {
  theme: BrandTheme
}

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Collection', href: '#collection' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader({ theme }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const isEdit = theme.name === 'EDIT'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/demo" className="flex items-center gap-2">
          <span
            className={`font-heading text-xl font-bold ${
              isEdit ? 'tracking-wide' : 'lowercase tracking-tight'
            }`}
          >
            {theme.logoText}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm">Get Started</Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-4 mt-8">
              <span
                className={`font-heading text-xl font-bold ${
                  isEdit ? 'tracking-wide' : 'lowercase tracking-tight'
                }`}
              >
                {theme.logoText}
              </span>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button className="mt-4" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
