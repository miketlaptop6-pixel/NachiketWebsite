export const metadata = {
  title: "Terms of Service | ResumeHub.in",
  description: "Terms and conditions for using ResumeHub.in services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using ResumeHub.in, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance."
  },
  {
    title: "Service Description",
    content: "ResumeHub.in provides an online platform for creating, editing, and exporting professional resumes. Our service includes a free tier with basic features and premium tiers with advanced templates, unlimited exports, and AI-assisted content suggestions."
  },
  {
    title: "User Accounts",
    content: "You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate and complete information when creating an account. You are solely responsible for all activities that occur under your account."
  },
  {
    title: "Intellectual Property",
    content: "You retain all rights to the content you create using our platform. The resume content, personal data, and professional history you input remain your intellectual property. Our templates, design systems, and platform code are proprietary to ResumeHub Technologies Pvt. Ltd."
  },
  {
    title: "Acceptable Use",
    content: "You agree not to use our services for any unlawful purpose, to impersonate any person or entity, to upload malicious code, or to interfere with the proper functioning of the service. We reserve the right to suspend accounts that violate these terms."
  },
  {
    title: "Payment & Refunds",
    content: "Premium features are available through one-time purchases or subscription plans. All payments are processed securely through Razorpay. Refund requests must be submitted within 7 days of purchase. We offer a full refund if you are not satisfied with the premium features."
  },
  {
    title: "Limitation of Liability",
    content: "ResumeHub.in is provided 'as is' without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim."
  },
  {
    title: "Governing Law",
    content: "These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka."
  }
];

export default function Terms() {
  return (
    <>
      <section className="p-6 lg:p-12 pt-12 md:pt-20 border-b-1">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
          Terms of Service
        </h1>
        <p className="mt-6 text-sm text-muted uppercase tracking-widest font-bold">Effective: March 2026</p>
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
          Questions about these terms? Contact{" "}
          <a className="text-primary font-bold hover:underline" href="mailto:legal@resumehub.in">legal@resumehub.in</a>
        </p>
      </section>
    </>
  );
}
