import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DemoChooser() {
  return (
    <main className="min-h-screen bg-[#F9F6ED]">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-sm text-[#3A3530]">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* ÉDIT — gold on warm cream */}
      <Link href="/demo/edit" className="block">
        <section className="min-h-[50vh] bg-[#F9F6ED] flex flex-col items-center justify-center px-6 py-16 relative group cursor-pointer border-b border-[#F0EDE4]">
          <p className="text-[#D4A017] text-sm tracking-[0.3em] uppercase mb-4">London</p>
          <h2 className="text-5xl font-playfair font-extrabold mb-3" style={{ color: '#D4A017' }}>ÉDIT</h2>
          <p className="text-[#3A3530]/60 text-sm max-w-xs text-center font-lora">
            A wardrobe that moves with you.
          </p>
          <p className="text-[#3A3530]/40 text-xs mt-4">Premium luxury &middot; From £149/mo</p>
          <div className="mt-6 px-6 py-2 border border-[#D4A017] rounded-full text-[#D4A017] text-sm group-hover:bg-[#D4A017] group-hover:text-white transition-all">
            Explore ÉDIT &rarr;
          </div>
        </section>
      </Link>

      {/* rotate — green on warm cream */}
      <Link href="/demo/rotate" className="block">
        <section className="min-h-[50vh] bg-[#F9F6ED] flex flex-col items-center justify-center px-6 py-16 relative group cursor-pointer">
          <p className="text-[#00B463] text-sm tracking-[0.3em] uppercase mb-4">New York</p>
          <h2 className="text-5xl font-extrabold mb-3 lowercase" style={{ color: '#00B463' }}>rotate</h2>
          <p className="text-[#3A3530]/60 text-sm max-w-xs text-center">
            Everyday outfits, handled.
          </p>
          <p className="text-[#3A3530]/40 text-xs mt-4">Accessible luxury &middot; From $89/mo</p>
          <div className="mt-6 px-6 py-2 border border-[#00B463] rounded-full text-[#00B463] text-sm group-hover:bg-[#00B463] group-hover:text-white transition-all">
            Explore rotate &rarr;
          </div>
        </section>
      </Link>
    </main>
  )
}
