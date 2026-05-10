import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* BEGIN: Hero Section */}
      <header className="min-h-[80vh] flex flex-col md:flex-row border-b-1">
        <div className="flex-[4] p-6 md:p-12 flex flex-col justify-between border-b-1 md:border-b-0 md:border-r-1 text-text">
          <div>
            <p className="font-serif italic text-muted text-sm mb-8 md:mb-12">Fig. 01 — Introduction</p>
            <h1 className="heading-huge font-bold uppercase mb-8 md:mb-12">
              ATS-Optimized Resumes For The Ruthlessly Efficient.
            </h1>
          </div>
          <div className="mb-8 md:mb-0">
            <Link href="/templates" className="bg-primary text-white text-xl sm:text-2xl md:text-4xl font-black px-8 sm:px-12 py-6 md:py-10 uppercase cta-button border-border border-2 shadow-sm block w-fit">
              Start Building For Free
            </Link>
          </div>
        </div>
        <div className="flex-1 p-6 flex flex-col justify-end bg-[#eee] min-h-[80px] md:min-h-0">
          <p className="text-xs uppercase tracking-widest text-muted whitespace-nowrap mb-4">Editorial System v1.0</p>
        </div>
      </header>

      {/* Social Proof Ticker */}
      <section className="border-b-1 py-6 overflow-hidden bg-white text-muted">
        <div className="animate-ticker text-xl sm:text-3xl md:text-6xl font-bold uppercase tracking-tight">
          HIRED AT: ZOMATO &nbsp;&nbsp;—&nbsp;&nbsp; FLIPKART &nbsp;&nbsp;—&nbsp;&nbsp; TCS &nbsp;&nbsp;—&nbsp;&nbsp; INFOSYS &nbsp;&nbsp;—&nbsp;&nbsp; RAZORPAY &nbsp;&nbsp;—&nbsp;&nbsp; CRED &nbsp;&nbsp;—&nbsp;&nbsp; PAYTM &nbsp;&nbsp;—&nbsp;&nbsp; ZOMATO &nbsp;&nbsp;—&nbsp;&nbsp; FLIPKART &nbsp;&nbsp;—&nbsp;&nbsp; TCS &nbsp;&nbsp;—&nbsp;&nbsp; INFOSYS &nbsp;&nbsp;—&nbsp;&nbsp; RAZORPAY &nbsp;&nbsp;—&nbsp;&nbsp; CRED &nbsp;&nbsp;—&nbsp;&nbsp; PAYTM &nbsp;&nbsp;—&nbsp;&nbsp;
        </div>
      </section>

      {/* How It Works */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b-1 text-text">
        <div className="p-8 md:p-12 border-b-1 md:border-b-0 md:border-r-1 group hover:bg-white transition-colors">
          <span className="block text-4xl md:text-5xl font-bold mb-6 md:mb-8 group-hover:text-primary transition-colors">01.</span>
          <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4">BASIC DETAILS OR UPLOAD</h3>
          <p className="text-muted leading-relaxed text-sm md:text-base">Key in your basic details or upload your existing resume to get started instantly. We strip the noise and keep the substance.</p>
        </div>
        <div className="p-8 md:p-12 border-b-1 md:border-b-0 md:border-r-1 group hover:bg-white transition-colors">
          <span className="block text-4xl md:text-5xl font-bold mb-6 md:mb-8 group-hover:text-primary transition-colors">02.</span>
          <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4">Refine Structure</h3>
          <p className="text-muted leading-relaxed text-sm md:text-base">Use our brutalist markdown editor to organize hierarchy. No drag-and-drop, just pure content control.</p>
        </div>
        <div className="p-8 md:p-12 group hover:bg-white transition-colors">
          <span className="block text-4xl md:text-5xl font-bold mb-6 md:mb-8 group-hover:text-primary transition-colors">03.</span>
          <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4">Export ATS PDF</h3>
          <p className="text-muted leading-relaxed text-sm md:text-base">Get a pristine, high-contrast PDF that passes every recruiter's filter with 100% structural integrity.</p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="text-text">
        <div className="p-6 md:p-12 border-b-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">02. CAPABILITIES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 md:p-12 border-b-1 md:border-b-0 md:border-r-1 group hover:bg-text hover:text-background transition-all duration-0">
            <div className="mb-8 md:mb-12">
              <svg className="stroke-current" fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
                <rect height="39" stroke="currentColor" width="39" x="0.5" y="0.5"></rect>
                <path d="M10 20H30" stroke="currentColor"></path>
                <path d="M20 10V30" stroke="currentColor"></path>
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 uppercase">Parsing Logic</h4>
            <p className="text-muted group-hover:text-gray-400 text-sm md:text-base">Advanced extraction algorithms built specifically for Indian corporate job portals.</p>
          </div>
          <div className="p-8 md:p-12 border-b-1 md:border-b-0 md:border-r-1 group hover:bg-text hover:text-background transition-all duration-0">
            <div className="mb-8 md:mb-12">
              <svg className="stroke-current" fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
                <rect height="39" stroke="currentColor" width="39" x="0.5" y="0.5"></rect>
                <circle cx="20" cy="20" r="10" stroke="currentColor"></circle>
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 uppercase">Zero Bloat</h4>
            <p className="text-muted group-hover:text-gray-400 text-sm md:text-base">No graphics, no icons, no bars. Just high-density typographic excellence.</p>
          </div>
          <div className="p-8 md:p-12 border-b-1 md:border-b-0 group hover:bg-text hover:text-background transition-all duration-0">
            <div className="mb-8 md:mb-12">
              <svg className="stroke-current" fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
                <rect height="39" stroke="currentColor" width="39" x="0.5" y="0.5"></rect>
                <path d="M5 5L35 35" stroke="currentColor"></path>
              </svg>
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 uppercase">Swiss Precision</h4>
            <p className="text-muted group-hover:text-gray-400 text-sm md:text-base">Layouts rooted in mid-century design principles for maximum visual authority.</p>
          </div>
        </div>
      </section>

      {/* Interactive Editor Preview */}
      <section className="border-b-1 border-t-1 bg-white" id="interactive-preview">
        <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[600px]">
          <div className="flex-1 p-6 md:p-12 border-b-1 md:border-b-0 md:border-r-1 bg-[#F1F1F1] font-mono">
            <p className="text-xs uppercase tracking-widest text-muted mb-6 md:mb-8 text-black">Raw Markdown Input</p>
            <div className="text-lg text-muted leading-relaxed" id="editor-text">
              # Arjun Mehta<br />
              ## Senior Frontend Engineer<br /><br />
              &gt; Optimized core rendering engine<br />
              &gt; Resulted in 40% faster LCP<br />
              &gt; Tech: React, WebGL, WASM<br />
              <span className="cursor-blink"></span>
            </div>
          </div>
          <div className="flex-1 p-6 md:p-12 flex flex-col items-center justify-center">
            <p className="text-xs uppercase tracking-widest text-muted mb-6 md:mb-8 self-start">Editorial Output</p>
            <div className="w-full max-w-md bg-white border-1 grid-border p-8 shadow-sm">
              <h2 className="text-3xl font-bold uppercase border-b-1 pb-4 mb-6 text-black">ARJUN MEHTA</h2>
              <p className="font-serif italic text-muted mb-8 text-black">Senior Frontend Engineer</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-bold text-black">01.</span>
                  <p className="text-sm text-black">Optimized core rendering engine for massive data sets.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-black">02.</span>
                  <p className="text-sm text-black">Led to a 40% reduction in Largest Contentful Paint (LCP).</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-black">03.</span>
                  <p className="text-sm text-black">Technologies: React, WebGL, Rust/WASM integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="p-8 sm:p-16 md:p-32 border-b-1 flex flex-col items-start bg-white">
        <h2 className="heading-huge font-bold uppercase leading-none mb-8 md:mb-12 text-black">
          "IT STRIPPED AWAY THE NOISE. I GOT THE INTERVIEW."
        </h2>
        <p className="font-serif italic text-2xl text-muted">— Arjun M., Senior Frontend Engineer</p>
      </section>

      {/* Pricing & CTA */}
      <section className="flex flex-col text-text">
        <div className="flex flex-col md:flex-row border-b-1">
          <div className="flex-[2] p-6 md:p-12 border-b-1 md:border-b-0 md:border-r-1">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase leading-tight tracking-tight">
              Built for results.<br />Ready in minutes.
            </h2>
          </div>
          <Link href="/pricing" className="flex-1 p-6 md:p-12 flex flex-col justify-center bg-white hover:bg-background transition-colors group border-b-1 md:border-b-0">
            <div className="mb-3 md:mb-4">
              <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter uppercase">Premium Access</span>
            </div>
            <p className="text-muted uppercase text-xs md:text-sm tracking-widest font-bold">
              Unlock unlimited PDF exports and advanced layouts. No hidden subscriptions.
            </p>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mt-3 md:mt-4 group-hover:underline">
              View Pricing →
            </span>
          </Link>
        </div>
        <div className="p-0 border-b-1">
          <Link href="/templates">
            <button className="w-full bg-primary text-white h-[80px] sm:h-[120px] md:h-[180px] text-2xl sm:text-4xl md:text-7xl font-black uppercase cta-button border-t-2 border-border hover:bg-black transition-colors duration-200">
              Start For Free
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
