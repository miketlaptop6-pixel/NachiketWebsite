import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    tagline: 'Get started, no strings attached',
    price: '₹0',
    period: 'forever',
    features: [
      '1 ATS-optimized resume',
      '3 professional templates',
      'Real-time live preview',
      'PDF download',
      'Basic formatting',
    ],
    cta: 'Start Building',
    href: '/templates',
    highlighted: false,
  },
  {
    name: 'Pro',
    tagline: 'For the ambitious professional',
    price: '₹299',
    period: '/month',
    features: [
      'Unlimited resumes',
      '12+ premium templates',
      'AI-powered content suggestions',
      'Cover letter builder',
      'Multiple export formats (PDF, DOCX)',
      'Custom color schemes',
      'Priority email support',
      'Remove ResumeHub watermark',
    ],
    cta: 'Go Pro',
    href: '/templates',
    highlighted: true,
  },
  {
    name: 'Lifetime',
    tagline: 'One payment. Forever access.',
    price: '₹1,999',
    period: 'one-time',
    features: [
      'Everything in Pro',
      'All future templates included',
      'All future features included',
      'LinkedIn profile optimizer',
      'Interview prep toolkit',
      'VIP support channel',
      'Early access to new tools',
    ],
    cta: 'Get Lifetime',
    href: '/templates',
    highlighted: false,
  },
];

const faqs = [
  {
    q: 'Can I really use it for free?',
    a: 'Yes. The free plan gives you everything you need to create one polished, ATS-optimized resume. No credit card required. No trial period.',
  },
  {
    q: 'What makes your templates ATS-optimized?',
    a: 'Our templates use semantic HTML structure, clean typography hierarchy, and standard section headings that Applicant Tracking Systems parse correctly — no columns, no graphics, no parsing failures.',
  },
  {
    q: 'Can I cancel Pro anytime?',
    a: 'Absolutely. Cancel anytime from your dashboard. No lock-in contracts, no cancellation fees. Your existing resumes remain accessible on the free plan.',
  },
  {
    q: 'Is the Lifetime plan really lifetime?',
    a: 'Yes. One payment, permanent access to every current and future feature. We don\'t sunset lifetime accounts.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="p-6 md:p-16 lg:p-24 border-b-1">
        <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Pricing</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none max-w-4xl">
          Honest Pricing.<br />No Surprises.
        </h1>
        <p className="text-sm md:text-base text-muted mt-4 md:mt-6 max-w-lg leading-relaxed">
          Start for free. Upgrade when you need more. Every plan includes our core ATS-optimization engine.
        </p>
      </section>

      {/* Plans Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 md:p-10 border-b-1 md:border-r-1 flex flex-col justify-between ${plan.highlighted ? 'bg-text text-white' : 'bg-background'
              }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-black uppercase tracking-tight">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
                    Popular
                  </span>
                )}
              </div>
              <p className={`text-xs mb-8 ${plan.highlighted ? 'text-gray-400' : 'text-muted'}`}>
                {plan.tagline}
              </p>
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-black tracking-tight">{plan.price}</span>
                <span className={`text-xs ml-2 ${plan.highlighted ? 'text-gray-400' : 'text-muted'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className={`text-xs mt-0.5 ${plan.highlighted ? 'text-primary' : 'text-primary'}`}>■</span>
                    <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-muted'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={plan.href}
              className={`block w-full py-4 text-center text-xs font-bold uppercase tracking-widest cta-button ${plan.highlighted
                  ? 'bg-primary text-white border border-primary'
                  : 'bg-text text-white border-1'
                }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </section>

      {/* Comparison Ticker */}
      <section className="border-b-1 overflow-hidden py-4">
        <div className="animate-ticker">
          {Array(3).fill(null).map((_, i) => (
            <span key={i} className="inline-flex gap-8 text-xs font-bold uppercase tracking-widest text-muted mr-8">
              <span>■ ATS-Optimized</span>
              <span>■ Semantic Structure</span>
              <span>■ Clean Typography</span>
              <span>■ No Parsing Failures</span>
              <span>■ Content-First</span>
              <span>■ Made in India</span>
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="p-6 md:p-16 lg:p-24 border-b-1">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-8 md:mb-12">
          Frequently Asked
        </h2>
        {/* Remove negative margins that cause clipping on mobile — use border-collapse via outline instead */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-1 border-l-1">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b-1 border-r-1 p-5 md:p-8">
              <h4 className="text-sm font-bold uppercase tracking-tight mb-3">{faq.q}</h4>
              <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="p-6 md:p-16 lg:p-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
          Stop Overthinking.<br />Start Building.
        </h2>
        <p className="text-sm text-muted mb-8 max-w-md mx-auto">
          Your next career move deserves a resume that gets past the algorithms and into human hands.
        </p>
        <Link
          href="/templates"
          className="inline-block bg-primary text-white px-10 py-4 text-xs font-bold uppercase tracking-widest cta-button"
        >
          Build Your Resume — Free
        </Link>
      </section>
    </div>
  );
}
