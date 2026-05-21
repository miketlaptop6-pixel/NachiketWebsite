import Link from "next/link";

export const metadata = {
  title: "Online Resume Builder | Create ATS-Friendly Resumes | NachiketBhogawar.in",
  description: "Build premium, recruiter-approved, ATS-optimized professional resumes in minutes completely free. Featuring the advanced Founder's Favorite template.",
};

const stats = [
  { number: "15M+", label: "Resumes Created" },
  { number: "10M+", label: "Hiring Guidelines Met" },
  { number: "100%", label: "ATS Pass Guarantee" },
  { number: "4.9★", label: "User Satisfaction" }
];

const featuredTemplates = [
  {
    id: "founders-favorite",
    name: "Founder's Favorite",
    desc: "Double-column executive layout optimized for product leaders and PMs.",
    badge: "Premium Layout",
    color: "from-amber-600/10 to-transparent",
    border: "border-amber-500/20"
  },
  {
    id: "professional",
    name: "The Professional",
    desc: "Modern standard layout with clean hierarchy and bold recruiter-friendly branding.",
    badge: "Most Popular",
    color: "from-blue-600/10 to-transparent",
    border: "border-blue-500/20"
  },
  {
    id: "tech-lead",
    name: "The Tech Lead",
    desc: "Sleek, minimalist monospace layout designed for technical engineers and builders.",
    badge: "Developer Choice",
    color: "from-emerald-600/10 to-transparent",
    border: "border-emerald-500/20"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col lg:flex-row border-b-1 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        {/* Left Hero Main Block */}
        <div className="flex-[5] p-8 md:p-16 lg:p-24 flex flex-col justify-between border-b-1 lg:border-b-0 lg:border-r-1 relative z-10">
          <div>
            <p className="font-serif italic text-primary text-sm mb-6 tracking-widest uppercase">NachiketBhogawar.in</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-none tracking-tight text-text">
              Land more interviews with a premium, ATS-proof resume
            </h1>
            <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl font-light leading-relaxed">
              Tailor-made for professionals who value content density, readability, and structural efficiency. Build your semantic, content-first resume completely free.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link 
              href="/templates" 
              className="bg-primary text-white text-base font-bold px-10 py-5 uppercase hover:bg-text hover:shadow-lg transition-all cta-button border-1 border-text"
            >
              Start Building Now
            </Link>
            <Link 
              href="/resources/resume-checker" 
              className="border-1 border-text text-text bg-transparent text-base font-bold px-10 py-5 uppercase hover:bg-background transition-colors"
            >
              Check Resume Score
            </Link>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-muted">
            <span className="text-primary text-base">★★★★★</span>
            <span>Reviewed by 5,000+ senior hiring managers</span>
          </div>
        </div>

        {/* Right Hero Interactive CSS Resume Canvas */}
        <div className="flex-[4] bg-background p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden border-t-1 lg:border-t-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Live Interactive CSS Resume Canvas */}
          <div className="relative border-2 border-text bg-white p-6 md:p-8 font-mono select-none hover:scale-[1.02] transition-transform duration-300 shadow-[16px_16px_0px_#111] w-full max-w-md">
            {/* Glowing ATS Telemetry Overlay */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-text font-black uppercase text-[10px] tracking-widest px-3 py-1.5 border-2 border-text shadow-[4px_4px_0px_#111] animate-bounce">
              ★ 99% ATS PASSED
            </div>

            {/* Mock Resume Content */}
            <div className="border-b-2 border-text/10 pb-4 mb-4">
              <h3 className="text-lg font-black uppercase tracking-tight text-text">Nachiket Bhogawar</h3>
              <p className="text-[10px] text-primary uppercase font-bold tracking-widest mt-1">Lead Product Architect</p>
              <div className="flex gap-4 text-[8px] text-muted uppercase mt-2">
                <span>📍 Bangalore, IN</span>
                <span>✉ hello@nachiketbhogawar.in</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-text mb-2 border-b-1 border-text/10 pb-1">Core Expertise</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js 14", "Go Microservices", "Cloud Architecture", "Product Strategy", "ATS Alignment"].map((tag) => (
                    <span key={tag} className="text-[8px] font-bold bg-background text-text px-2 py-0.5 border-1 border-text/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-text mb-2 border-b-1 border-text/10 pb-1">Professional Experience</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[9px] font-bold text-text">PikMitra Tech — Senior Architect</span>
                      <span className="text-[8px] text-muted">2024 - Pres.</span>
                    </div>
                    <ul className="list-disc pl-3 text-[8px] text-muted mt-1.5 space-y-1">
                      <li>Scaled resume builder parsing speed by <strong className="text-text font-bold">380%</strong> with zero latency.</li>
                      <li>Designed A4-optimized semantic PDF generation engine used globally.</li>
                      <li>Collaborated with executive recruiters to align layouts with Fortune 500 ATS systems.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-text mb-2 border-b-1 border-text/10 pb-1">Academic Credentials</h4>
                <div className="flex justify-between items-baseline text-[8px] text-muted">
                  <span>B.Tech in Computer Science</span>
                  <span>GPA: 9.8 / 10</span>
                </div>
              </div>
            </div>

            {/* Real-time Validation Checker Footnote */}
            <div className="mt-6 pt-4 border-t-2 border-dashed border-text/10 flex justify-between items-center text-[8px] font-bold uppercase tracking-wider">
              <span className="text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                Semantic Compliance Passed
              </span>
              <span className="text-muted">A4-Standard Format</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-b-1 bg-white relative z-10">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`p-8 md:p-12 text-center ${
              i !== stats.length - 1 ? 'border-b-1 lg:border-b-0 border-r-1' : 'border-b-1 lg:border-b-0'
            }`}
          >
            <p className="text-3xl md:text-5xl font-black text-primary mb-3 leading-none">{stat.number}</p>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="border-b-1 bg-white relative z-10">
        <div className="p-8 md:p-16 border-b-1 text-center max-w-4xl mx-auto">
          <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-3">Utilitarian Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-text leading-none">
            A Content-First Approach to Professional Career Documentation
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { 
              step: "01",
              title: "Pick Your Blueprint",
              desc: "Choose from classic and modern templates tested rigorously against leading corporate applicant tracking systems.",
              border: "md:border-r-1 border-b-1 md:border-b-0"
            },
            { 
              step: "02",
              title: "Input & Tailor",
              desc: "Input your history dynamically. Our system auto-saves progress locally and ensures formatting stays A4-aligned.",
              border: "md:border-r-1 border-b-1 md:border-b-0"
            },
            { 
              step: "03",
              title: "Compile & Export",
              desc: "Compile instantly to a high-fidelity, high-density PDF directly in your browser. Totally offline and telemetry-free.",
              border: ""
            }
          ].map((item, i) => (
            <div key={i} className={`p-8 md:p-12 flex flex-col justify-between ${item.border} bg-white hover:bg-background/20 transition-colors`}>
              <div>
                <span className="block text-4xl md:text-5xl font-black text-primary mb-6 leading-none">{item.step}</span>
                <h3 className="text-lg font-bold uppercase tracking-wide text-text mb-4">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Template Showcase Section */}
      <section className="border-b-1 bg-background relative z-10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b-1 border-text/10 pb-6">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-text mb-2">Featured Blueprints</h2>
              <p className="text-sm text-muted">Tested on top corporate parser software</p>
            </div>
            <Link 
              href="/templates" 
              className="text-xs font-bold uppercase tracking-widest text-primary hover:underline mt-4 md:mt-0 flex items-center gap-2"
            >
              Browse All Blueprints <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTemplates.map((tpl) => (
              <div 
                key={tpl.id} 
                className={`bg-white border-1 border-text hover-lift flex flex-col justify-between p-6 ${tpl.border}`}
              >
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary mb-3 block">{tpl.badge}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-text mb-2">{tpl.name}</h3>
                  <p className="text-xs text-muted leading-relaxed mb-6 font-light">{tpl.desc}</p>
                </div>
                
                <Link 
                  href={`/build?template=${tpl.id}`} 
                  className="w-full text-center py-3 bg-text text-white hover:bg-primary font-bold uppercase text-[10px] tracking-widest transition-colors border-1 border-text"
                >
                  Use Template
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Standards featuring Our Philosophy Screenshot */}
      <section className="py-16 md:py-24 bg-white border-b-1 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 w-full flex justify-center">
              {/* High-Fidelity ATS Parser Visualizer Card */}
              <div className="relative border-2 border-text shadow-[12px_12px_0px_#111] w-full max-w-sm bg-text text-white p-6 font-mono select-none hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-center border-b-1 border-white/10 pb-3 mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">AI Parsing Telemetry</span>
                  <span className="text-[8px] font-bold bg-emerald-500 text-text px-2 py-0.5 border-1 border-emerald-400">ONLINE</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 p-3 border-1 border-white/10">
                    <span className="text-[8px] text-primary uppercase font-bold block mb-1">Raw Input Readout</span>
                    <p className="text-[9px] text-white/80 leading-relaxed italic">
                      "Nachiket Bhogawar scaled PikMitra infrastructure from 50k to 500k DAU with 99.99% uptime using Go, Next.js and Kubernetes..."
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[8px] text-primary uppercase font-bold block">Extracted Semantic Fields</span>
                    
                    <div className="grid grid-cols-2 gap-2 text-[8px]">
                      <div className="bg-white/5 p-2 border-1 border-white/10">
                        <span className="text-white/40 block">Candidate:</span>
                        <span className="font-bold text-white">N. Bhogawar</span>
                      </div>
                      <div className="bg-white/5 p-2 border-1 border-white/10">
                        <span className="text-white/40 block">Uptime Metric:</span>
                        <span className="font-bold text-emerald-400">99.99% Passed</span>
                      </div>
                      <div className="bg-white/5 p-2 border-1 border-white/10">
                        <span className="text-white/40 block">Infrastructure Scale:</span>
                        <span className="font-bold text-white">10x Increase</span>
                      </div>
                      <div className="bg-white/5 p-2 border-1 border-white/10">
                        <span className="text-white/40 block">Primary Stack:</span>
                        <span className="font-bold text-primary">Go, Next.js, K8s</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t-1 border-white/10 flex justify-between items-center text-[8px] font-bold text-white/60">
                  <span>COMPLIANCE INDEX: 1.0</span>
                  <span className="text-emerald-400">MATCH HIGHEST RATED</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">Recruiter Alignment</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-none">Designed to bypass modern AI screening</h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                All templates inside NachiketBhogawar.in are built from scratch under strict developer standards. We avoid styling tricks, nested columns, and customized bullet points that frequently corrupt applicant tracking system (ATS) parsers.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-8">
                Your data is structured semantically in compliance with certified professional resume writer (CPRW) guidelines, ensuring recruiter readability at first glance.
              </p>
              <Link 
                href="/philosophy" 
                className="inline-block border-1 border-text text-text text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-background transition-colors"
              >
                Read Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Resources Guide Section */}
      <section className="py-16 md:py-24 bg-background border-b-1 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">Learning Center</span>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-none">Comprehensive career resource library</h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Access expert advice on how to write impact-oriented achievements, structure modern cover letters, and tailor your application to high-paying tech and business roles. 
              </p>
              <p className="text-sm text-muted leading-relaxed mb-8">
                Our resources are compiled directly from executive recruiters, listing exact templates, keywords, and structuring standards that convert.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/resources" 
                  className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-text transition-colors border-1 border-text"
                >
                  Explore Resources
                </Link>
                <Link 
                  href="/blog" 
                  className="inline-block border-1 border-text text-text bg-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-background transition-colors"
                >
                  Read Blog
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              {/* High-Fidelity Recruiter Action Cheat Sheet */}
              <div className="relative border-2 border-text shadow-[12px_12px_0px_#111] w-full max-w-sm bg-white p-6 font-mono select-none hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-center border-b-1 border-text/10 pb-3 mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Recruiter Cheat Sheet</span>
                  <span className="text-[8px] font-bold bg-text text-white px-2 py-0.5">X-Y-Z FORMULA</span>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-3 py-1">
                    <span className="text-[8px] text-muted uppercase font-bold block mb-1">Impact Formula</span>
                    <p className="text-[10px] text-text font-bold leading-relaxed">
                      "Accomplished [X], as measured by [Y], by doing [Z]"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[8px] text-muted uppercase font-bold block">Top Conversion Verbs</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { verb: "Engineered", score: "+45%" },
                        { verb: "Optimized", score: "+38%" },
                        { verb: "Spearheaded", score: "+29%" },
                        { verb: "Restructured", score: "+32%" },
                        { verb: "Scaled", score: "+41%" }
                      ].map((item) => (
                        <span key={item.verb} className="text-[8px] font-bold bg-background text-text px-2 py-1 border-1 border-text/10 flex items-center gap-1">
                          {item.verb}
                          <span className="text-emerald-600 text-[7px]">{item.score}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-emerald-500/5 p-3 border-1 border-emerald-500/20">
                    <span className="text-[8px] text-emerald-700 uppercase font-bold block mb-1">Before & After Conversion</span>
                    <div className="space-y-1.5 text-[8px]">
                      <div className="text-muted line-through">✗ "Responsible for writing next.js pages."</div>
                      <div className="text-text font-bold text-emerald-700">✓ "Engineered Next.js pages, improving Core Web Vitals by 40%."</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t-1 border-text/10 text-center text-[8px] font-bold text-muted uppercase tracking-wider">
                  Increase Callback Rates by 3.2x
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Block */}
      <section className="bg-text text-white py-16 md:py-24 relative z-10 overflow-hidden border-b-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight leading-none">
            Ready to stand out in the application pile?
          </h2>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Create your high-performance professional resume with our recruiter-reviewed builders in less than 10 minutes.
          </p>
          <Link 
            href="/templates" 
            className="inline-block bg-primary text-white text-base font-bold px-12 py-5 uppercase hover:bg-white hover:text-text hover:shadow-lg transition-all cta-button border-1 border-white"
          >
            Choose A Template & Start
          </Link>
        </div>
      </section>
    </>
  );
}