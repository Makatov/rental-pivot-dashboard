import { BrandTheme } from '@/types'
import { Separator } from '@/components/ui/separator'

interface SiteFooterProps {
  theme: BrandTheme
}

const footerLinks = {
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  help: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#' },
    { label: 'Shipping', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}

export function SiteFooter({ theme }: SiteFooterProps) {
  const isEdit = theme.name === 'EDIT'

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span
              className={`font-heading text-xl font-bold ${
                isEdit ? 'tracking-wide' : 'lowercase tracking-tight'
              }`}
            >
              {theme.logoText}
            </span>
            <p className="mt-2 text-sm opacity-60">{theme.city}</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Help</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <p className="text-xs opacity-40 text-center">
          &copy; {new Date().getFullYear()} {theme.logoText}. Demo prototype &mdash; not a real service (yet).
        </p>
      </div>
    </footer>
  )
}
