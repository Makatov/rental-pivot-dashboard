import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DemoChooser() {
  return (
    <main className="min-h-screen bg-[#F9F6ED]">
      {/* Back button */}
      <div className="fixed top-3 left-3 z-50">
        <Link href="/" className="flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-xs text-[#3A3530]">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>
      </div>

      {/* ÉDIT — gold on warm cream */}
      <Link href="/demo/edit" className="block">
        <section className="min-h-[50vh] bg-[#F9F6ED] flex flex-col items-center justify-center px-5 py-12 relative group cursor-pointer border-b border-[#F0EDE4]">
          <p className="text-[#D4A017] text-[11px] tracking-[0.3em] uppercase mb-3">London</p>
          <h2 className="text-4xl font-playfair font-extrabold mb-2" style={{ color: '#D4A017' }}>ÉDIT</h2>
          <p className="text-[#3A3530]/60 text-xs max-w-xs text-center font-lora">
            A wardrobe that moves with you.
          </p>
          <p className="text-[#3A3530]/40 text-[10px] mt-3">Premium luxury &middot; From £149/mo</p>
          <div className="mt-5 px-5 py-1.5 border border-[#D4A017] rounded-full text-[#D4A017] text-xs group-hover:bg-[#D4A017] group-hover:text-white transition-all">
            Explore ÉDIT &rarr;
          </div>
        </section>
      </Link>

      {/* rotate — green on warm cream */}
      <Link href="/demo/rotate" className="block">
        <section className="min-h-[50vh] bg-[#F9F6ED] flex flex-col items-center justify-center px-5 py-12 relative group cursor-pointer">
          <p className="text-[#00B463] text-[11px] tracking-[0.3em] uppercase mb-3">New York</p>
          <h2 className="text-4xl font-extrabold mb-2 lowercase" style={{ color: '#00B463' }}>rotate</h2>
          <p className="text-[#3A3530]/60 text-xs max-w-xs text-center">
            Everyday outfits, handled.
          </p>
          <p className="text-[#3A3530]/40 text-[10px] mt-3">Accessible luxury &middot; From $89/mo</p>
          <div className="mt-5 px-5 py-1.5 border border-[#00B463] rounded-full text-[#00B463] text-xs group-hover:bg-[#00B463] group-hover:text-white transition-all">
            Explore rotate &rarr;
          </div>
        </section>
      </Link>
    </main>
  )
}
