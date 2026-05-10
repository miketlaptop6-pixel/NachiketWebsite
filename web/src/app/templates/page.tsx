import Link from "next/link";
export const metadata = {
  title: "Template Library | ResumeHub.in",
  description: "Curated collection of high-impact, ATS-optimized layouts designed for the modern professional landscape.",
};

const templates = [
  {
    id: 1,
    slug: "professional",
    name: "The Professional",
    category: "High Density",
    plan: "Free",
    previewBody: (
      <div className="space-y-4">
        <h2 className="text-sm font-black uppercase leading-tight">Sameer Verma</h2>
        <p className="text-[10px] text-primary font-bold uppercase">Senior Product Manager</p>
        <div className="w-full h-px bg-border my-2"></div>
        <h4 className="text-[10px] font-bold uppercase">Experience</h4>
        <div className="text-[8px] space-y-2 text-muted">
          <div>
            <div className="flex justify-between font-bold text-text"><span>Zomato</span><span>2021 — Present</span></div>
            <div className="italic mb-1">Senior PM - Growth</div>
            <ul className="list-disc pl-3">
              <li>Led the &quot;Intercity Legends&quot; vertical from 0 to 1, reaching ₹50Cr monthly GMV.</li>
              <li>Optimized reactivation loops for churned users, improving D30 retention by 18%.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    slug: "executive",
    name: "The Executive",
    category: "Corporate",
    plan: "Premium",
    previewBody: (
      <div className="space-y-4 font-serif">
        <h2 className="text-sm font-black uppercase leading-tight text-center">Ananya Sharma</h2>
        <p className="text-[10px] text-muted italic text-center">Chief Financial Officer • Mumbai • +91 99999 88888</p>
        <div className="w-full border-b-2 border-text my-2"></div>
        <h4 className="text-[10px] font-bold uppercase text-center tracking-widest">Executive Profile</h4>
        <div className="text-[8px] text-center text-muted">
          Strategic Financial Leader with 18+ years of experience. Orchestrated capital raising of over $500M and led high-stakes acquisitions for India&apos;s leading unicorns.
        </div>
      </div>
    )
  },
  {
    id: 3,
    slug: "tech-lead",
    name: "The Tech Lead",
    category: "Clean Tech",
    plan: "Free",
    previewBody: (
      <div className="space-y-4 font-mono">
        <h2 className="text-sm font-black uppercase leading-tight text-primary">Aditya Iyer</h2>
        <p className="text-[8px] text-muted tracking-widest">Engineering Manager | Distributed Systems</p>
        <div className="w-full border-b border-dashed border-muted my-2"></div>
        <h4 className="text-[10px] font-bold uppercase">Technical Projects</h4>
        <div className="text-[8px] space-y-1 text-muted">
          <p><strong className="text-text">Distributed Lock Manager:</strong> Open-source implementation of Redlock for high-availability environments.</p>
          <p><strong className="text-text">Auto-Scaler Bot:</strong> Custom K8s operator for cost-optimized node provisioning based on prediction models.</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    slug: "founders-favorite",
    name: "Founder's Favorite",
    category: "Impact-Driven",
    plan: "Premium",
    previewBody: (
      <div className="space-y-3">
        <h2 className="text-sm font-black uppercase leading-tight text-center">Nachiket Bhogawar</h2>
        <p className="text-[8px] text-muted text-center">Noida | email@example.com | LinkedIn | +91 99999 88888</p>
        <p className="text-[9px] font-bold uppercase text-center tracking-wide">Product Manager | E-Commerce | Fintech</p>
        <div className="w-full h-px bg-text my-1"></div>
        <h4 className="text-[10px] font-bold uppercase" style={{ borderBottom: '1px solid #000', paddingBottom: 2 }}>Area of Expertise</h4>
        <div className="grid grid-cols-3 gap-x-2 text-[7px] text-muted">
          <span>• Stakeholder Mgmt</span>
          <span>• Product Strategy</span>
          <span>• Growth Hacking</span>
          <span>• Data-Driven</span>
          <span>• User Research</span>
          <span>• Agile Delivery</span>
        </div>
        <h4 className="text-[10px] font-bold uppercase" style={{ borderBottom: '1px solid #000', paddingBottom: 2 }}>Experience</h4>
        <div className="text-[8px] text-muted">
          <div className="flex justify-between font-bold text-text"><span>Biz2X, Product Manager</span><span>2025 — Present</span></div>
          <ul className="list-disc pl-3 mt-0.5">
            <li>Reduced onboarding time by 25 days through workflow automation.</li>
            <li>Improved API performance by 40%, cutting latency by 200ms.</li>
          </ul>
        </div>
      </div>
    )
  }
];

export default function Templates() {
  return (
    <>
      <section className="bg-background border-b-1 p-6 lg:p-12 min-h-[35vh] md:min-h-[40vh] flex flex-col justify-end">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] max-w-4xl">
          Template<br />Library
        </h2>
        <p className="mt-5 md:mt-8 text-base md:text-xl font-serif italic text-muted max-w-xl leading-relaxed">
          Curated collection of high-impact, ATS-optimized layouts designed for the modern professional landscape.
        </p>
      </section>

      {/* Filter Bar — sticky with corrected top for mobile header height (~60px) */}
      <section className="border-b-1 sticky top-[57px] md:top-[73px] bg-background z-10">
        <div className="p-3 md:p-4 lg:px-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Filter buttons — horizontally scrollable on mobile */}
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 flex-nowrap min-w-max sm:min-w-0 sm:flex-wrap">
              <button className="px-4 py-2.5 bg-text text-white text-xs font-bold uppercase whitespace-nowrap min-h-[40px]">All Templates</button>
              <button className="px-4 py-2.5 border-1 text-xs font-bold uppercase hover:bg-primary hover:text-white transition-colors whitespace-nowrap min-h-[40px]">Minimalist</button>
              <button className="px-4 py-2.5 border-1 text-xs font-bold uppercase hover:bg-primary hover:text-white transition-colors whitespace-nowrap min-h-[40px]">Executive</button>
              <button className="px-4 py-2.5 border-1 text-xs font-bold uppercase hover:bg-primary hover:text-white transition-colors whitespace-nowrap min-h-[40px]">Academic</button>
            </div>
          </div>
          <div className="sm:ml-auto w-full sm:w-64">
            <input
              className="w-full px-4 py-2.5 bg-transparent border-1 text-xs font-bold uppercase focus:ring-0 focus:border-primary outline-none min-h-[40px]"
              placeholder="SEARCH TEMPLATES"
              type="text"
            />
          </div>
        </div>
      </section>

      {/* Template Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <article key={template.id} className="border-r-1 border-b-1 group flex flex-col bg-white">
            <div className="p-8 h-80 flex justify-center items-start overflow-hidden bg-background relative border-b-1 group-hover:bg-[#f2f2f2] transition-colors">
              <div className="w-full bg-white p-6 shadow-sm border-1 grid-border pointer-events-none scale-90 transform origin-top hover:scale-100 transition-transform duration-300">
                {template.previewBody}
              </div>
            </div>
            <div className="p-6 bg-white flex-1 flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="text-xl font-bold uppercase tracking-tighter">{template.name}</h3>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-text text-white text-[9px] font-bold uppercase tracking-wider">{template.category}</span>
                  <span className="px-2 py-0.5 border-1 text-[9px] font-bold uppercase tracking-wider">{template.plan}</span>
                </div>
              </div>
              <Link href={`/build?template=${template.slug}`}>
                <button className="w-full py-4 bg-primary text-white font-bold uppercase text-sm tracking-widest btn-brutalist hover:bg-text">
                  Select Template
                </button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
