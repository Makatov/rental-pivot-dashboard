import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DemoChooser() {
  return (
    <main className="min-h-screen">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-sm">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* EDIT — dark */}
      <Link href="/demo/edit" className="block">
        <section className="min-h-[50vh] bg-[#0A0A0A] flex flex-col items-center justify-center px-6 py-16 relative group cursor-pointer">
          <p className="text-[#C9A94E] text-sm tracking-[0.3em] uppercase mb-4">London</p>
          <h2 className="text-[#F5F5DC] text-5xl font-bold mb-3">EDIT</h2>
          <p className="text-[#F5F5DC]/60 text-sm max-w-xs text-center">
            Curate Your Wardrobe. Wear the Edit.
          </p>
          <p className="text-[#F5F5DC]/40 text-xs mt-4">Premium luxury &middot; From £149/mo</p>
          <div className="mt-6 px-6 py-2 border border-[#C9A94E] rounded-full text-[#C9A94E] text-sm group-hover:bg-[#C9A94E] group-hover:text-[#0A0A0A] transition-all">
            Explore EDIT &rarr;
          </div>
        </section>
      </Link>

      {/* ROTATE — warm */}
      <Link href="/demo/rotate" className="block">
        <section className="min-h-[50vh] bg-[#FDFCFB] flex flex-col items-center justify-center px-6 py-16 relative group cursor-pointer">
          <p className="text-[#E07A5F] text-sm tracking-[0.3em] uppercase mb-4">New York</p>
          <h2 className="text-[#2D2D2D] text-5xl font-bold mb-3">ROTATE</h2>
          <p className="text-[#2D2D2D]/60 text-sm max-w-xs text-center">
            Rent Designer. Wear Daily. Return & Repeat.
          </p>
          <p className="text-[#2D2D2D]/40 text-xs mt-4">Accessible luxury &middot; From $89/mo</p>
          <div className="mt-6 px-6 py-2 border border-[#E07A5F] rounded-full text-[#E07A5F] text-sm group-hover:bg-[#E07A5F] group-hover:text-white transition-all">
            Explore ROTATE &rarr;
          </div>
        </section>
      </Link>
    </main>
  )
}
