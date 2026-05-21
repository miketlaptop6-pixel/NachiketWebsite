import Link from "next/link";

export const metadata = {
  title: "Resume Examples | Professional Resume Samples | NachiketBhogawar.in",
  description: "Browse 10M+ resume examples by job title, industry, and experience level.",
};

export default function ResumeExamples() {
  const examples = [
    { title: "Project Manager", category: "Management", views: "125K" },
    { title: "Data Scientist", category: "Technology", views: "98K" },
    { title: "Scrum Master", category: "Technology", views: "87K" },
    { title: "Business Analyst", category: "Business", views: "76K" },
    { title: "Software Engineer", category: "Technology", views: "112K" },
    { title: "Marketing Manager", category: "Marketing", views: "65K" },
    { title: "Sales Representative", category: "Sales", views: "54K" },
    { title: "Product Manager", category: "Product", views: "89K" },
    { title: "UX Designer", category: "Design", views: "71K" },
    { title: "Data Analyst", category: "Analytics", views: "63K" },
  ];

  const byIndustry = [
    "Technology", "Healthcare", "Finance", "Marketing", "Sales", 
    "Education", "Engineering", "Retail", "Hospitality", "Manufacturing"
  ];

  const byLevel = [
    "Entry Level", "Mid Level", "Senior Level", "Executive", "Career Changer"
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">Resume Examples</h1>
          <p className="text-lg opacity-90">10M+ professional resume examples to inspire your job search</p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-2xl mx-auto px-6">
          <input 
            type="text" 
            placeholder="Search by job title, industry, or keyword..." 
            className="w-full p-4 border border-gray-300 text-lg focus:border-primary focus:outline-none"
          />
        </div>
      </section>

      {/* Popular Examples */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Popular Resume Examples</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((example, i) => (
              <Link key={i} href="/examples" className="bg-white border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all">
                <span className="text-xs font-bold uppercase text-primary mb-2 block">{example.category}</span>
                <h3 className="font-bold text-lg mb-2">{example.title}</h3>
                <p className="text-sm text-muted">{example.views} views</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8 text-center">Browse by Industry</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {byIndustry.map((ind, i) => (
              <Link key={i} href="/examples" className="px-6 py-3 border border-gray-300 font-bold uppercase text-sm hover:border-primary hover:bg-primary hover:text-white transition-all">
                {ind}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By Experience Level */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8 text-center">Browse by Experience Level</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {byLevel.map((level, i) => (
              <Link key={i} href="/examples" className="px-6 py-3 border border-gray-300 font-bold uppercase text-sm hover:border-primary hover:shadow-lg transition-all">
                {level}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8 text-center">How to Use Resume Examples</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Find Your Match", desc: "Search by job title or industry to find relevant examples" },
              { step: "2", title: "Get Inspired", desc: "Review the structure, formatting, and content of successful resumes" },
              { step: "3", title: "Create Yours", desc: "Use our templates to build your own professional resume" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#1a1f71] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4">Create Your Professional Resume</h2>
          <p className="text-lg opacity-90 mb-8">Use our templates inspired by successful resumes</p>
          <Link href="/templates" className="inline-block bg-white text-[#1a1f71] font-bold px-8 py-4 uppercase hover:bg-gray-200 transition-colors">
            Start Building Now
          </Link>
        </div>
      </section>
    </>
  );
}