import Link from "next/link";

export const metadata = {
  title: "Support Center | Help & FAQ | NachiketBhogawar.in",
  description: "Get help with NachiketBhogawar.in - FAQs, tutorials, and customer support.",
};

export default function Support() {
  const faqs = [
    { q: "How do I create my first resume?", a: "Simply sign up, choose a template, and fill in your details. You can also import from LinkedIn or upload an existing resume." },
    { q: "Are the resumes ATS-friendly?", a: "Yes! All our templates are tested with major ATS systems to ensure compatibility." },
    { q: "Can I download my resume for free?", a: "Yes, you can create and download one resume for free. Premium users get unlimited downloads." },
    { q: "How do I customize my resume template?", a: "Click on any section to edit. You can change colors, fonts, and rearrange sections using drag-and-drop." },
    { q: "Can I create a cover letter too?", a: "Absolutely! Our cover letter builder matches your resume design automatically." },
    { q: "How do I cancel my subscription?", a: "Go to Account Settings > Subscription > Cancel. You&apos;ll keep access until your billing period ends." },
  ];

  const helpTopics = [
    { title: "Getting Started", desc: "Learn the basics of creating your resume" },
    { title: "Templates & Design", desc: "Customize your resume look and feel" },
    { title: "Writing Tips", desc: "Expert advice on resume content" },
    { title: "ATS Optimization", desc: "Make your resume pass applicant tracking systems" },
    { title: "Export & Download", desc: "Get your resume in PDF or other formats" },
    { title: "Account & Billing", desc: "Manage your subscription and account" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">Support Center</h1>
          <p className="text-lg opacity-90">We&apos;re here to help you succeed</p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-2xl mx-auto px-6">
          <input 
            type="text" 
            placeholder="How can we help you today?" 
            className="w-full p-4 border border-gray-300 text-lg focus:border-primary focus:outline-none"
          />
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Browse by Topic</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {helpTopics.map((topic, i) => (
              <Link key={i} href="/support" className="p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <h3 className="font-bold mb-1">{topic.title}</h3>
                <p className="text-sm text-muted">{topic.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200">
                <summary className="p-6 font-bold cursor-pointer hover:bg-[#f8f9fa]">
                  {faq.q}
                </summary>
                <div className="px-6 pb-6 text-muted">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8 text-center">Still Need Help?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200">
              <span className="text-3xl mb-4 block">✉</span>
              <h3 className="font-bold uppercase mb-2">Email</h3>
              <p className="text-muted text-sm mb-4">We usually reply within 24 hours</p>
              <a href="mailto:support@nachiketbhogawar.in" className="text-primary font-bold">support@nachiketbhogawar.in</a>
            </div>
            <div className="text-center p-6 border border-gray-200">
              <span className="text-3xl mb-4 block">💬</span>
              <h3 className="font-bold uppercase mb-2">Live Chat</h3>
              <p className="text-muted text-sm mb-4">Available 9AM - 6PM EST</p>
              <button className="text-primary font-bold">Start Chat</button>
            </div>
            <div className="text-center p-6 border border-gray-200">
              <span className="text-3xl mb-4 block">📚</span>
              <h3 className="font-bold uppercase mb-2">Help Center</h3>
              <p className="text-muted text-sm mb-4">Browse detailed tutorials</p>
              <Link href="/support" className="text-primary font-bold">Visit Help Center</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}