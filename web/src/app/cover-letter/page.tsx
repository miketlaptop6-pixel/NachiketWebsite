import Link from "next/link";

export const metadata = {
  title: "Cover Letter Builder | Free Cover Letter Generator | NachiketBhogawar.in",
  description: "Create professional cover letters that match your resume design. Free cover letter builder.",
};

export default function CoverLetterBuilder() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">Cover Letter Builder</h1>
          <p className="text-lg opacity-90">Writing a cover letter that matches your resume has never been easier</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "✓", title: "AI-Powered", desc: "Get AI suggestions for your cover letter content" },
              { icon: "✎", title: "Easy Editing", desc: "Customize every section with our simple editor" },
              { icon: "↓", title: "PDF Export", desc: "Download your cover letter as a professional PDF" },
            ].map((f, i) => (
              <div key={i} className="text-center p-6 border border-gray-200">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-bold uppercase mb-2">{f.title}</h3>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Professional Cover Letter Templates</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Modern", "Classic", "Simple", "Creative"].map((style, i) => (
              <div key={i} className="bg-white border border-gray-200 p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Preview</span>
                </div>
                <h3 className="font-bold text-center">{style}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/cover-letter/templates" className="text-primary font-bold uppercase hover:underline">
              View All Templates →
            </Link>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Cover Letter Examples by Job</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Software Engineer", "Marketing Manager", "Project Manager",
              "Data Analyst", "UX Designer", "Sales Representative",
              "Nurse", "Teacher", "Accountant"
            ].map((job, i) => (
              <Link key={i} href="/cover-letter/examples" className="p-4 border border-gray-200 hover:border-primary hover:bg-[#f8f9fa] transition-all">
                <span className="font-bold">{job}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8 text-center">How It Works</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Choose a Template", desc: "Select from our professional cover letter designs" },
              { step: "2", title: "Fill in Your Details", desc: "Enter your information or import from your resume" },
              { step: "3", title: "AI Assistance", desc: "Get AI suggestions to improve your content" },
              { step: "4", title: "Download PDF", desc: "Export your cover letter as a polished PDF" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-6 border border-gray-200">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[#1a1f71] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4">Create Your Cover Letter</h2>
          <p className="text-lg opacity-90 mb-8">Free cover letter builder with professional templates</p>
          <Link href="/cover-letter/templates" className="inline-block bg-white text-[#1a1f71] font-bold px-8 py-4 uppercase hover:bg-gray-200 transition-colors">
            Start Building Free
          </Link>
        </div>
      </section>
    </>
  );
}