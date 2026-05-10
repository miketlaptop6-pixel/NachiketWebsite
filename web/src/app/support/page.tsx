import Link from "next/link";

export const metadata = {
  title: "Support Center | ResumeHub.in",
  description: "Get help with ResumeHub.in — FAQs, guides, and direct support.",
};

const faqs = [
  { q: "How do I create a new resume?", a: "Click 'Start Building' on the homepage. You can either enter your details manually or upload an existing resume to get started. Our system will parse your content and structure it into an optimized format." },
  { q: "Is ResumeHub.in really free?", a: "Yes! Our core builder with the Standard template and single PDF export is completely free. Premium templates and unlimited exports are available through our paid plans." },
  { q: "What file formats can I export?", a: "Currently we support PDF export optimized for ATS systems. The PDF is generated with proper text encoding ensuring 100% parseability by all major Applicant Tracking Systems." },
  { q: "How do I cancel my premium subscription?", a: "You can cancel anytime from your account settings. Your premium features will remain active until the end of your billing period. No questions asked." },
  { q: "Can I use ResumeHub.in on mobile?", a: "Our builder is optimized for desktop and tablet experiences for the best editing workflow. The landing pages and templates gallery are fully responsive on all devices." },
  { q: "Is my data secure?", a: "Yes. All data is encrypted using TLS 1.3, stored on secure Indian servers, and never shared with third parties. You can delete your data at any time from your account settings." },
];

export default function Support() {
  return (
    <>
      <section className="p-6 lg:p-12 pt-12 md:pt-20 border-b-1">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
          Support Center
        </h1>
        <p className="mt-6 text-lg text-muted max-w-xl font-serif italic">
          Everything you need to know about using ResumeHub.in effectively.
        </p>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b-1">
        <Link href="/contact" className="p-8 md:p-12 border-r-1 border-b-1 md:border-b-0 group hover:bg-white transition-colors">
          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Contact Us</h3>
          <p className="text-sm text-muted">Reach our team directly →</p>
        </Link>
        <Link href="/feedback" className="p-8 md:p-12 border-r-1 border-b-1 md:border-b-0 group hover:bg-white transition-colors">
          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Send Feedback</h3>
          <p className="text-sm text-muted">Help us improve →</p>
        </Link>
        <Link href="/resources" className="p-8 md:p-12 group hover:bg-white transition-colors">
          <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">Career Resources</h3>
          <p className="text-sm text-muted">Tips & guides →</p>
        </Link>
      </section>

      {/* FAQs */}
      <section>
        <div className="p-6 md:p-12 border-b-1">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Frequently Asked Questions</h2>
        </div>
        {faqs.map((faq, i) => (
          <details key={i} className="border-b-1 group">
            <summary className="p-6 md:px-12 cursor-pointer font-bold text-lg uppercase tracking-tight hover:bg-white transition-colors flex justify-between items-center list-none">
              <span>{faq.q}</span>
              <span className="text-2xl text-primary group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <div className="px-6 md:px-12 pb-8">
              <p className="text-muted leading-relaxed max-w-2xl">{faq.a}</p>
            </div>
          </details>
        ))}
      </section>
    </>
  );
}
