import Link from 'next/link';

const footerLinks = {
  Product: [
    { label: 'Templates', href: '/templates' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
    { label: 'Start Building', href: '/templates' },
  ],
  Company: [
    { label: 'Philosophy', href: '/philosophy' },
    { label: 'Contact', href: '/contact' },
    { label: 'Feedback', href: '/feedback' },
    { label: 'Support', href: '/support' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t-1 bg-background">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {/* Brand — full-width on mobile */}
        <div className="col-span-2 md:col-span-1 p-6 md:p-10 border-b-1 md:border-b-0 md:border-r-1">
          <h4 className="text-xl font-bold uppercase tracking-tighter mb-4">ResumeHub.in</h4>
          <p className="text-xs text-muted max-w-xs leading-relaxed mb-6">
            A utilitarian approach to professional career documentation. Designed for substance over style.
          </p>
          <div className="flex gap-4">
            <Link className="text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors min-h-[44px] flex items-center" href="https://twitter.com/resumehub" target="_blank">
              Twitter
            </Link>
            <Link className="text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors min-h-[44px] flex items-center" href="https://linkedin.com/company/resumehub" target="_blank">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Link Columns — 2-col on mobile, 1-col each on md+ */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="p-6 md:p-10 border-b-1 md:border-b-0 border-l-1 md:border-l-0 md:border-r-1 last:border-r-0">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">{category}</h5>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors min-h-[36px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t-1 px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-[10px] text-muted uppercase tracking-widest text-center md:text-left">
          © {new Date().getFullYear()} ResumeHub.in — All rights reserved.
        </p>
        <p className="text-[10px] text-muted uppercase tracking-widest">
          Made with ■ in India
        </p>
      </div>
    </footer>
  );
}
