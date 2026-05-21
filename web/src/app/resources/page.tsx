import Link from "next/link";

export const metadata = {
  title: "Resources | Resume Tools & Guides | NachiketBhogawar.in",
  description: "Free resume tools, guides, and resources to help you land your dream job.",
};

export default function Resources() {
  const tools = [
    { name: "Resume Checker", desc: "Check your resume for ATS optimization", icon: "✓" },
    { name: "AI Resume Review", desc: "Get AI-powered feedback on your resume", icon: "🤖" },
    { name: "Resume Summary Generator", desc: "Create compelling professional summaries", icon: "✍" },
    { name: "Cover Letter Generator", desc: "Build matching cover letters", icon: "📝" },
    { name: "Interview Questions", desc: "Common interview questions & answers", icon: "❓" },
  ];

  const categories = [
    { name: "Resume Writing", count: "45 articles" },
    { name: "Cover Letters", count: "28 articles" },
    { name: "Job Search", count: "32 articles" },
    { name: "Interview Prep", count: "41 articles" },
    { name: "Career Growth", count: "23 articles" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">Resume Resources</h1>
          <p className="text-lg opacity-90">Free tools and guides to help you succeed in your job search</p>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Free Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <Link key={i} href="/resources" className="p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <span className="text-3xl mb-4 block">{tool.icon}</span>
                <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                <p className="text-muted text-sm">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <Link key={i} href="/blog" className="p-6 bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition-all flex justify-between items-center">
                <span className="font-bold">{cat.name}</span>
                <span className="text-muted text-sm">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Popular Guides</h2>
          <div className="space-y-4">
            {[
              "How to Write a Resume That Gets Noticed",
              "Resume Formats: Which One to Choose",
              "Cover Letter Writing Tips",
              "Common Interview Questions and Answers",
              "How to Tailor Your Resume for Each Job"
            ].map((guide, i) => (
              <Link key={i} href="/blog" className="block p-4 border border-gray-200 hover:border-primary hover:bg-[#f8f9fa] transition-all">
                <span className="font-bold">{guide}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1a1f71] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-4">Ready to Build Your Resume?</h2>
          <p className="opacity-90 mb-8">Use our free tools to create a professional resume</p>
          <Link href="/templates" className="inline-block bg-white text-[#1a1f71] font-bold px-8 py-4 uppercase hover:bg-gray-200 transition-colors">
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}