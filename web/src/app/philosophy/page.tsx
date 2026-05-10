import Link from "next/link";
export const metadata = {
  title: "Our Philosophy | ResumeHub.in",
  description: "Shaping the future of career narratives through minimalist design.",
};

export default function Philosophy() {
  return (
    <>
      <section className="px-6 lg:px-12 pt-10 md:pt-20 pb-10 md:pb-12 border-b-1">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[10rem] font-bold leading-[0.9] tracking-tighter uppercase max-w-4xl">
            Our<br />Philosophy
          </h1>
          <div className="max-w-sm lg:mt-8">
            <p className="text-base md:text-xl font-serif italic leading-relaxed border-l-4 border-primary pl-5 md:pl-6">
              Shaping the future of career narratives through modern utilitarian design and high-impact content flow.
            </p>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="px-6 lg:px-12 py-12 md:py-32 border-b-1 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <div className="md:col-span-4">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">The Vision</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight uppercase">
              "We believe that a resume is a tool for communication, not a canvas for decoration."
            </h2>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="px-6 lg:px-12 py-12 md:py-32 border-b-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-10 md:gap-y-16">
          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-3xl md:text-4xl font-black italic font-serif">01.</span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase">Absolute Clarity</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Your expertise shouldn't be buried under fancy graphics. We prioritize layout logic that helps recruiters find what they need in less than 6 seconds.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-3xl md:text-4xl font-black italic font-serif">02.</span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase">Content is King</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              A beautiful template cannot save poor writing. We focus on framing your achievements through metrics and powerful verbs that command attention.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-3xl md:text-4xl font-black italic font-serif">03.</span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase">ATS Optimized</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              The machines come first, then the humans. Our architecture ensures your data is perfectly parsed by every Applicant Tracking System on the market.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-3xl md:text-4xl font-black italic font-serif">04.</span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase">Evergreen Design</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Trends fade, but professional elegance is timeless. Our designs are built to look as relevant in ten years as they do today.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Callout */}
      <section className="bg-text text-background py-16 md:py-32">
        <div className="px-6 lg:px-12 text-center max-w-4xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 md:mb-8">Ready to transform your career?</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-12 uppercase text-white">Let's build something meaningful together.</h2>
          <div className="flex justify-center border-t-1 border-white/20 pt-8 md:pt-12">
            <Link href="/templates">
              <button className="bg-primary text-white border-2 border-primary px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold uppercase tracking-widest cta-button min-h-[52px]">
                Create Resume
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
