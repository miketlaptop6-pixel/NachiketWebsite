"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for testing the waters and creating a single standard resume.",
      features: [
        "1 Active Resume Draft",
        "The Professional Layout",
        "High-Fidelity PDF Export",
        "Local Draft Auto-Saving",
        "Standard Recruiter Guidelines"
      ],
      ctaText: "Get Started Free",
      ctaLink: "/templates",
      popular: false,
      color: "border-text/20",
      badge: "Starter"
    },
    {
      name: "Premium",
      price: isAnnual ? "11.99" : "14.99",
      period: "/month",
      billingNote: isAnnual ? "Billed annually ($143.88)" : "Billed monthly, cancel anytime",
      description: "Unlock all templates, AI-guided copywriter tools, and detailed ATS analysis.",
      features: [
        "Unlimited Resume Drafts",
        "All 4 Premium Blueprints",
        "Founder's Favorite Template",
        "AI Resume Writer & Tailoring",
        "Instant ATS Compatibility Checker",
        "Unlimited Cover Letter Builder",
        "Priority Support (under 12hr response)"
      ],
      ctaText: "Start 7-Day Free Trial",
      ctaLink: "/templates",
      popular: true,
      color: "border-primary shadow-[0_20px_50px_rgba(0,54,204,0.12)] bg-gradient-to-b from-primary/5 via-transparent to-transparent",
      badge: "Most Popular"
    },
    {
      name: "Executive Team",
      price: "49.99",
      period: "/month",
      billingNote: "Billed monthly or custom terms",
      description: "For recruiting agencies, high-end career consultants, and executive coaches.",
      features: [
        "Up to 5 Team Members",
        "Shared Recruiter Blueprints",
        "Custom Branding & Styling Configs",
        "Advanced Analytics Dashboard",
        "Dedicated Account Success Manager",
        "Full API Integration Options"
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact",
      popular: false,
      color: "border-text/20",
      badge: "Agencies"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-text text-white py-16 md:py-24 relative overflow-hidden border-b-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="font-serif italic text-primary text-sm mb-4 tracking-widest uppercase">Pricing blueprints</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight leading-none">
            Simple, Resilient Plans
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-xl mx-auto font-light leading-relaxed mb-10">
            Build your high-performance professional resume with total transparency. No hidden hooks.
          </p>

          {/* Billing Switch Toggle */}
          <div className="inline-flex items-center gap-4 bg-background/10 border-1 border-white/20 p-1.5 rounded-none">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                !isAnnual 
                  ? "bg-primary text-white" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                isAnnual 
                  ? "bg-primary text-white" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              Annual Billing
              <span className="bg-emerald-500 text-text text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border-1 border-emerald-400">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white border-2 border-text flex flex-col justify-between p-8 hover-lift relative ${plan.color}`}
              >
                {/* Popularity Badge */}
                {plan.badge && (
                  <span className={`absolute top-0 right-8 transform -translate-y-1/2 text-[9px] font-bold uppercase tracking-widest px-3 py-1 border-1 border-text ${
                    plan.popular ? "bg-primary text-white" : "bg-white text-text"
                  }`}>
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-text mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted mb-6 font-light leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                  
                  {/* Pricing Box */}
                  <div className="mb-6 border-b-1 border-text/10 pb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black uppercase tracking-tighter text-text">
                        ${plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-sm font-bold text-muted uppercase tracking-widest">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    {plan.billingNote && (
                      <p className="text-[10px] text-primary uppercase font-bold tracking-wider mt-2">
                        {plan.billingNote}
                      </p>
                    )}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-text/90 font-light">
                        <span className="text-primary font-bold text-sm leading-none">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={plan.ctaLink}
                  className={`w-full text-center py-4 font-bold uppercase text-xs tracking-widest border-1 border-text transition-all cta-button ${
                    plan.popular 
                      ? "bg-primary text-white hover:bg-text" 
                      : "bg-white text-text hover:bg-background"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Comparison Grid */}
      <section className="py-16 md:py-24 bg-white border-t-1 border-b-1">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-center mb-12 tracking-tight">
            Detailed Comparison Blueprint
          </h2>
          <div className="overflow-x-auto border-1 border-text">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-1 border-text bg-background">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-text">Platform Capability</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-center text-text border-l-1 border-text">Free</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-center text-text border-l-1 border-text bg-primary/5">Premium</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-center text-text border-l-1 border-text">Executive</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Resume Draft Limit", "1 Draft", "Unlimited", "Unlimited"],
                  ["Template Library", "1 Layout (Professional)", "All 4 Blueprints", "Custom Layouts"],
                  ["Cover Letter Builder", "✗ Not Included", "Unlimited Pages", "Unlimited Pages"],
                  ["AI Co-Writer Suggestions", "✗ Not Included", "✓ Unlimited Queries", "✓ Unlimited Queries"],
                  ["ATS Screening Compatibility", "✓ Fully Standard", "✓ Realtime Scanner", "✓ Realtime Scanner"],
                  ["Information Density Spacing", "✓ Static Compliance", "✓ Dynamic Adjustable", "✓ Dynamic Adjustable"],
                  ["Platform Branding Footers", "✗ None", "✗ None", "✗ None"],
                  ["Dedicated Account Manager", "✗ None", "✗ None", "✓ Included"],
                  ["Support Response Window", "24-48 Hours", "Under 12 Hours", "Dedicated Slack"],
                ].map((row, i) => (
                  <tr key={i} className="border-b-1 border-text/10 last:border-b-0 hover:bg-background/20 transition-colors">
                    <td className="py-4 px-6 text-xs font-bold text-text">{row[0]}</td>
                    <td className="py-4 px-6 text-xs text-center border-l-1 border-text/10 text-muted">{row[1]}</td>
                    <td className="py-4 px-6 text-xs text-center border-l-1 border-text/10 font-bold text-primary bg-primary/5">{row[2]}</td>
                    <td className="py-4 px-6 text-xs text-center border-l-1 border-text/10 text-text font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Polished FAQ Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-center mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                q: "Can I cancel my Premium plan at any time?", 
                a: "Absolutely. You can toggle off auto-renewal or close your account instantly directly inside your workspace settings. No telephone calls or complex questionnaires required." 
              },
              { 
                q: "Is there a trial available for Premium?", 
                a: "Yes. Our trial runs for 7 days, giving you complete access to premium resume layouts, cover letter drafting, and ATS checker telemetry without restrictions." 
              },
              { 
                q: "Does NachiketBhogawar.in insert advertising or branding markers on resumes?", 
                a: "Never. Regardless of your active tier, NachiketBhogawar.in generates resumes completely clean of our branding, logos, or telemetry. Your career documentation remains 100% yours." 
              },
              { 
                q: "What makes your templates ATS compatible?", 
                a: "Our templates are written in compliance with certified professional resume writer (CPRW) guidelines. We avoid custom tables, graphic markers, and binary structures that confuse AI screening algorithms." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-1 border-text p-6 md:p-8 hover-lift">
                <h3 className="font-bold text-sm uppercase tracking-wide text-text mb-3">{faq.q}</h3>
                <p className="text-xs text-muted leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Block */}
      <section className="bg-text text-white py-16 md:py-24 text-center border-t-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent"></div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight leading-none">
            Ready to stand out in the application pile?
          </h2>
          <p className="text-sm opacity-80 mb-8 max-w-md mx-auto leading-relaxed">
            Access certified resume blueprints and build recruiter-aligned career summaries in less than 10 minutes.
          </p>
          <Link 
            href="/templates" 
            className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-text border-1 border-white hover:shadow-lg transition-all cta-button"
          >
            Start Building For Free
          </Link>
        </div>
      </section>
    </>
  );
}