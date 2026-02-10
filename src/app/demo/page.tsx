import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DemoChooser() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back button */}
      <div className="fixed top-3 left-3 z-50">
        <Link href="/">
          <Button variant="secondary" size="sm" className="rounded-full gap-1 shadow-sm">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Button>
        </Link>
      </div>

      {/* ÉDIT */}
      <Link href="/demo/edit" className="block">
        <section data-brand="edit" className="min-h-[50vh] bg-background flex flex-col items-center justify-center px-5 py-12 group cursor-pointer border-b border-border">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">London</p>
          <h2 className="font-heading text-4xl font-extrabold text-primary tracking-wide mb-2">
            ÉDIT
          </h2>
          <p className="text-muted-foreground text-xs max-w-xs text-center font-body">
            A wardrobe that moves with you.
          </p>
          <p className="text-muted-foreground/60 text-[10px] mt-3">Premium luxury &middot; From £149/mo</p>
          <div className="mt-5">
            <Button variant="outline" size="sm" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              Explore ÉDIT &rarr;
            </Button>
          </div>
        </section>
      </Link>

      {/* rotate */}
      <Link href="/demo/rotate" className="block">
        <section data-brand="rotate" className="min-h-[50vh] bg-background flex flex-col items-center justify-center px-5 py-12 group cursor-pointer">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">New York</p>
          <h2 className="font-heading text-4xl font-extrabold text-primary lowercase tracking-tight mb-2">
            rotate
          </h2>
          <p className="text-muted-foreground text-xs max-w-xs text-center font-body">
            Everyday outfits, handled.
          </p>
          <p className="text-muted-foreground/60 text-[10px] mt-3">Accessible luxury &middot; From $89/mo</p>
          <div className="mt-5">
            <Button variant="outline" size="sm" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              Explore rotate &rarr;
            </Button>
          </div>
        </section>
      </Link>
    </main>
  )
}
