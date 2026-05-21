import Link from "next/link";

export const metadata = {
  title: "Resume Skills | 300+ Skills for Your Resume | NachiketBhogawar.in",
  description: "Discover 300+ resume skills extracted from analyzing 1,000,000+ resumes.",
};

export default function ResumeSkills() {
  const categories = [
    "Soft Skills", "Computer Skills", "Design Skills", "Business & Management",
    "Accounting & Finance", "Engineering", "Marketing", "Sales",
    "IT & Data", "Office Skills", "Food Service", "Medical & Healthcare",
    "Legal", "Customer Service", "HR", "Technical", "Hospitality"
  ];

  const topSkills = [
    "Communication", "Leadership", "Problem Solving", "Teamwork",
    "Time Management", "Adaptability", " Creativity", "Analytical",
    "Project Management", "Customer Service", "Technical Skills", "Collaboration"
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">300+ Resume Skills to Use on Your Resume</h1>
          <p className="text-lg opacity-90">Wondering what skills to put on your resume? We extracted skills from analyzing over 1,000,000 resumes.</p>
        </div>
      </section>

      {/* Top Skills */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-6">Top In-Demand Skills</h2>
          <div className="flex flex-wrap gap-3">
            {topSkills.map((skill, i) => (
              <Link key={i} href="/skills" className="px-4 py-2 bg-[#f8f9fa] border border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all text-sm">
                {skill}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <Link key={i} href="/skills" className="bg-white p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all text-center">
                <h3 className="font-bold">{cat}</h3>
                <p className="text-sm text-muted mt-1">View skills →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills by Category Detail */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold uppercase mb-4">Soft Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["Communication", "Leadership", "Teamwork", "Problem Solving", "Time Management", "Adaptability", "Critical Thinking", "Creativity", "Conflict Resolution", "Emotional Intelligence"].map((s, i) => (
                <Link key={i} href="/skills" className="px-4 py-2 border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold uppercase mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript", "SQL", "Data Analysis", "Machine Learning", "Project Management", "Excel", "PowerPoint", "Git", "Cloud Computing"].map((s, i) => (
                <Link key={i} href="/skills" className="px-4 py-2 border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold uppercase mb-4">Industry-Specific Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["SEO", "Digital Marketing", "Financial Analysis", "Budgeting", "Supply Chain", "Logistics", "Healthcare", "Nursing", "Legal Research", "Compliance"].map((s, i) => (
                <Link key={i} href="/skills" className="px-4 py-2 border border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all">
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">How to List Skills on Your Resume</h2>
          <div className="space-y-6">
            {[
              { title: "Choose Relevant Skills", desc: "Select skills that match the job description and requirements." },
              { title: "Use Action Verbs", desc: "Start bullet points with strong action verbs like 'Led', 'Developed', 'Managed'." },
              { title: "Include Both Hard and Soft Skills", desc: "Balance technical abilities with interpersonal skills." },
              { title: "Quantify When Possible", desc: "Show impact with numbers like 'Managed team of 10' or 'Increased sales by 25%'." },
            ].map((tip, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-muted">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#1a1f71] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4">Build a Skill-Focused Resume</h2>
          <p className="text-lg opacity-90 mb-8">Use our resume builder to showcase your skills professionally</p>
          <Link href="/templates" className="inline-block bg-white text-[#1a1f71] font-bold px-8 py-4 uppercase hover:bg-gray-200 transition-colors">
            Build Free Resume
          </Link>
        </div>
      </section>
    </>
  );
}