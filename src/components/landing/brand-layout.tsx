import { BrandTheme } from '@/types'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

interface BrandLayoutProps {
  brand: 'edit' | 'rotate'
  theme: BrandTheme
  children: React.ReactNode
}

export function BrandLayout({ brand, theme, children }: BrandLayoutProps) {
  return (
    <div data-brand={brand} className="min-h-screen font-body">
      <SiteHeader theme={theme} />
      {children}
      <SiteFooter theme={theme} />
    </div>
  )
}
