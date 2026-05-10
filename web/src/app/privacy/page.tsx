export const metadata = {
  title: "Privacy Policy | ResumeHub.in",
  description: "How ResumeHub.in collects, uses, and protects your data.",
};

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly to us, such as when you create an account, build a resume, or contact us for support. This includes your name, email address, professional history, and any other information you choose to provide in your resume content."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, including generating your resume documents, processing transactions, and sending you technical notices and support messages. We do not sell your personal data to third parties."
  },
  {
    title: "Data Storage & Security",
    content: "Your resume data is encrypted at rest and in transit using industry-standard TLS 1.3 encryption. We store data on secure servers within India (Mumbai region) in compliance with applicable Indian data protection regulations. We implement appropriate technical and organizational measures to protect against unauthorized access."
  },
  {
    title: "Cookies & Tracking",
    content: "We use strictly necessary cookies to maintain your session and preferences. We use privacy-respecting analytics (no cross-site tracking) to understand how our service is used. You can control cookie preferences through your browser settings."
  },
  {
    title: "Data Retention",
    content: "We retain your account data for as long as your account is active. Resume data can be permanently deleted at any time through your account settings. Upon account deletion, all associated data is purged from our systems within 30 days."
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal data at any time. You can export all your data in a standard format. You can request a complete copy of all data we hold about you by contacting privacy@resumehub.in."
  },
  {
    title: "Changes to This Policy",
    content: "We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the 'Last Updated' date."
  }
];

export default function Privacy() {
  return (
    <>
      <section className="p-6 lg:p-12 pt-12 md:pt-20 border-b-1">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm text-muted uppercase tracking-widest font-bold">Last Updated: March 2026</p>
      </section>

      <section className="max-w-4xl">
        {sections.map((section, i) => (
          <div key={i} className="p-8 md:p-12 border-b-1">
            <div className="flex gap-6 items-start">
              <span className="text-3xl font-bold text-muted font-serif italic shrink-0">
                {String(i + 1).padStart(2, '0')}.
              </span>
              <div>
                <h2 className="text-xl font-bold uppercase tracking-tight mb-4">{section.title}</h2>
                <p className="text-muted leading-relaxed">{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="p-8 md:p-12 border-b-1 bg-white">
        <p className="text-muted text-sm">
          For questions about this privacy policy, contact us at{" "}
          <a className="text-primary font-bold hover:underline" href="mailto:privacy@resumehub.in">privacy@resumehub.in</a>
        </p>
      </section>
    </>
  );
}
