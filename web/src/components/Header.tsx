"use client";

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Templates', href: '/templates' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b-1 sticky top-0 bg-background z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 p-4 md:p-6 border-r-1 flex items-center">
          <Link href="/" className="text-lg md:text-2xl font-bold tracking-tighter uppercase">ResumeHub.in</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-6 text-xs font-bold uppercase tracking-widest text-muted hover:text-text border-r-1 transition-colors link-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="px-6 py-6 text-xs font-bold uppercase tracking-widest bg-primary text-white hover:bg-text transition-colors"
            href="/templates"
          >
            Start Building
          </Link>
        </div>

        {/* Mobile Hamburger — min 44×44px touch target for Android */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] px-4 text-xl font-bold"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-1 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center px-6 min-h-[52px] text-sm font-bold uppercase tracking-widest border-b-1 hover:bg-primary hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/templates"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center px-6 min-h-[52px] text-sm font-bold uppercase tracking-widest bg-primary text-white"
          >
            Start Building →
          </Link>
        </div>
      )}
    </nav>
  );
}
