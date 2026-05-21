import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Professional Resume Templates | ATS-Friendly | NachiketBhogawar.in",
  description: "Choose from our premium, ATS-optimized resume templates designed to pass screening and wow recruiters. Fully functional editor.",
};

const templates = [
  {
    id: "founders-favorite",
    name: "Founder's Favorite",
    category: "Premium Executive",
    description: "Designed for high performers, senior executives, and leaders. Features double-column sections, areas of expertise, and achievement-focused highlights.",
    color: "from-amber-500/20 via-yellow-600/10 to-transparent",
    badge: "Most Popular",
    score: "99% ATS Score",
    tags: ["Product Management", "Executive", "Achievements-First"]
  },
  {
    id: "professional",
    name: "The Professional",
    category: "Modern Standard",
    description: "A clean, highly scannable single-column layout with bold professional typography and active blue branding. Suited for general professional roles.",
    color: "from-blue-600/20 via-indigo-600/10 to-transparent",
    badge: "Recruiter Approved",
    score: "98% ATS Score",
    tags: ["Universal", "Clean & Simple", "ATS-Perfect"]
  },
  {
    id: "executive",
    name: "The Executive",
    category: "Traditional",
    description: "A traditional, serif-style centered layout optimized for conservative corporate environments. Classic typography and structured formatting.",
    color: "from-gray-800/20 via-slate-700/10 to-transparent",
    badge: "Classic",
    score: "97% ATS Score",
    tags: ["Finance & Law", "Serif", "Traditional"]
  },
  {
    id: "tech-lead",
    name: "The Tech Lead",
    category: "Developer / Minimalist",
    description: "Sleek, monospace layout with dashed grid elements. Specially optimized for software engineers, technical architects, and builders.",
    color: "from-emerald-500/20 via-teal-600/10 to-transparent",
    badge: "Monospace",
    score: "96% ATS Score",
    tags: ["Engineering", "Product / Design", "Technical Stack"]
  }
];

export default function Templates() {
  return (
    <>
      {/* Hero */}
      <section className="bg-text text-white py-16 md:py-24 border-b-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="font-serif italic text-primary text-sm mb-4 tracking-wider uppercase">Utilitarian Design</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight leading-none">
            High-Performance Resume Templates
          </h1>
          <p className="text-lg md:text-xl opacity-85 max-w-2xl mx-auto font-light leading-relaxed">
            Tested extensively on Applicant Tracking Systems (ATS) and refined by professional recruiters to maximize your interview conversion rate.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {templates.map((tpl) => (
              <div 
                key={tpl.id} 
                className="bg-white border-1 border-text flex flex-col justify-between hover-lift relative overflow-hidden group"
              >
                {/* Visual Header */}
                <div className={`h-80 bg-gradient-to-b ${tpl.color} p-8 flex items-center justify-center border-b-1 relative`}>
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  
                  {tpl.badge && (
                    <span className="absolute top-4 left-4 bg-text text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 border-1 border-white">
                      {tpl.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {tpl.score}
                  </span>

                  {/* Render a beautiful abstract A4 miniature of the resume */}
                  <div className="w-56 h-72 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.15)] p-4 flex flex-col justify-between border-1 border-text transform group-hover:scale-[1.03] transition-transform duration-300">
                    <div className="space-y-2">
                      <div className="h-4 bg-text/90 w-2/3"></div>
                      <div className="h-2 bg-text/40 w-1/3"></div>
                      <div className="h-1 bg-text/20 w-3/4"></div>
                      
                      {tpl.id === "founders-favorite" ? (
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="space-y-1.5">
                            <div className="h-1 bg-text/30"></div>
                            <div className="h-1 bg-text/20 w-5/6"></div>
                            <div className="h-1.5 bg-text/50"></div>
                            <div className="h-1 bg-text/20 w-3/4"></div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-1 bg-text/30"></div>
                            <div className="h-1 bg-text/20 w-5/6"></div>
                            <div className="h-1.5 bg-text/50"></div>
                            <div className="h-1 bg-text/20 w-3/4"></div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 mt-4">
                          <div className="h-2 bg-text/20"></div>
                          <div className="h-2 bg-text/10 w-11/12"></div>
                          <div className="h-2 bg-text/10 w-4/5"></div>
                        </div>
                      )}
                    </div>
                    <div className="border-t-1 border-text/10 pt-2 flex justify-between items-center">
                      <div className="h-2 bg-text/30 w-1/3"></div>
                      <div className="h-2 bg-text/20 w-1/4"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between bg-white z-10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
                      {tpl.category}
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-text mb-3">
                      {tpl.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {tpl.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {tpl.tags.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-background border-1 border-text/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link 
                      href={`/build?template=${tpl.id}`} 
                      className="flex-1 text-center py-4 bg-primary text-white font-bold uppercase text-xs tracking-widest hover:bg-text hover:shadow-lg transition-all cta-button border-1 border-text"
                    >
                      Use Template
                    </Link>
                    <Link 
                      href={`/build?template=${tpl.id}`} 
                      className="flex-1 text-center py-4 border-1 border-text text-text font-bold uppercase text-xs tracking-widest hover:bg-background transition-colors"
                    >
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section featuring Screenshots */}
      <section className="py-16 md:py-24 bg-white border-t-1 border-b-1">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase text-center mb-12">Recruiter-Approved Design Standards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-1 border-text hover:shadow-[6px_6px_0px_#000] transition-shadow bg-background">
              <span className="text-3xl mb-4 block">✓</span>
              <h3 className="font-bold uppercase mb-2 text-sm tracking-wider">ATS Compatible</h3>
              <p className="text-xs text-muted leading-relaxed">No text boxes, hidden headers, or custom symbols that break ATS parser logic. Completely semantic HTML & plain-text structured layouts.</p>
            </div>
            <div className="p-6 border-1 border-text hover:shadow-[6px_6px_0px_#000] transition-shadow bg-background">
              <span className="text-3xl mb-4 block">✎</span>
              <h3 className="font-bold uppercase mb-2 text-sm tracking-wider">High Information Density</h3>
              <p className="text-xs text-muted leading-relaxed">Strategic spacing allowing maximum content storage without cluttering the page. Balanced padding and standard margin dimensions.</p>
            </div>
            <div className="p-6 border-1 border-text hover:shadow-[6px_6px_0px_#000] transition-shadow bg-background">
              <span className="text-3xl mb-4 block">★</span>
              <h3 className="font-bold uppercase mb-2 text-sm tracking-wider">Expert Reviewed</h3>
              <p className="text-xs text-muted leading-relaxed">Co-developed with executive hiring managers from top global tech & finance organizations. Optimized for visual flow and readability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* A4 Standards Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-none">Strict 1-Page A4 Grid Compliant</h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                All templates automatically constrain text and layout within standard international A4 dimensions (8.27in × 11.69in). The built-in layout compiler scales font heights, paragraph spacers, and line-height values so that your resume remains beautifully balanced without spilling over.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-8">
                Your draft is automatically saved as you type, and compilation to high-fidelity PDF is performed instantly on the client side without telemetry.
              </p>
              <Link 
                href="/build" 
                className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-text border-1 border-text hover:shadow-[4px_4px_0px_#000]"
              >
                Launch Builder
              </Link>
            </div>
            <div className="flex-1 w-full flex justify-center">
              {/* Interactive CSS A4 Grid Compiler Visualizer */}
              <div className="relative border-2 border-text shadow-[12px_12px_0px_#111] w-full max-w-sm bg-white p-6 font-mono select-none hover:scale-[1.02] transition-transform duration-300">
                {/* Visual grid sheet calibration header */}
                <div className="flex justify-between items-center border-b-1 border-text/10 pb-3 mb-4 text-[8px] font-bold text-muted uppercase">
                  <span>Sheet Standard: A4 ISO 216</span>
                  <span className="text-primary font-black">COMPILER READY</span>
                </div>

                {/* Simulated A4 canvas scale visualization */}
                <div className="border-1 border-dashed border-primary/40 bg-background/50 p-4 relative overflow-hidden">
                  {/* Spacing alignment guidelines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:10px_10px]"></div>

                  {/* Header calibration */}
                  <div className="relative z-10 space-y-3">
                    <div className="border-b-1 border-text/20 pb-2">
                      <div className="h-2 w-1/3 bg-text mb-1"></div>
                      <div className="h-1 w-2/3 bg-muted/40"></div>
                    </div>

                    {/* Section 1 */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="h-1.5 w-1/4 bg-primary"></div>
                        <span className="text-[6px] text-emerald-600 font-bold">MARGIN COMPLIANT</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 w-full bg-text/10"></div>
                        <div className="h-1 w-11/12 bg-text/10"></div>
                        <div className="h-1 w-5/6 bg-text/10"></div>
                      </div>
                    </div>

                    {/* Auto-Compacting Telemetry indicator */}
                    <div className="bg-emerald-500/10 border-1 border-dashed border-emerald-500 p-2 text-[7px] text-emerald-800 font-bold flex justify-between items-center">
                      <span>✓ DYNAMIC COMPACTOR TRIGGERED</span>
                      <span className="bg-emerald-500 text-white px-1">PAGE 1/1</span>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <div className="h-1.5 w-1/5 bg-text mb-1"></div>
                      <div className="space-y-1">
                        <div className="h-1 w-full bg-text/10"></div>
                        <div className="h-1 w-4/5 bg-text/10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t-1 border-text/10 flex justify-between items-center text-[8px] font-bold text-muted">
                  <span>SCALE: 100% COMPRESSED</span>
                  <span className="text-primary uppercase">No Spillover Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}