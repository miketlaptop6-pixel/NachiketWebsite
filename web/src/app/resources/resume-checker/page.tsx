import Link from "next/link";

export const metadata = {
  title: "Resume Checker | Free ATS Check | NachiketBhogawar.in",
  description: "Check your resume for ATS optimization and get instant feedback.",
};

export default function ResumeChecker() {
  return (
    <>
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">Resume Checker</h1>
          <p className="text-lg opacity-90">Check your resume for ATS optimization and get instant feedback</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="border-2 border-dashed border-gray-300 p-12 mb-8">
            <p className="text-4xl mb-4">📄</p>
            <p className="text-muted mb-4">Drag and drop your resume here</p>
            <p className="text-sm text-muted">or</p>
            <button className="mt-4 bg-primary text-white font-bold px-8 py-3 uppercase hover:bg-text transition-colors">
              Upload Resume
            </button>
          </div>
          <p className="text-sm text-muted">Supported formats: PDF, DOC, DOCX</p>
        </div>
      </section>

      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">What We Check</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "ATS Compatibility", desc: "Ensure your resume can be read by applicant tracking systems" },
              { title: "Keyword Optimization", desc: "Check for relevant industry keywords" },
              { title: "Formatting", desc: "Verify clean, consistent formatting" },
              { title: "Content Quality", desc: "Review for clarity and impact" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center bg-white">
        <Link href="/templates" className="inline-block bg-primary text-white font-bold px-8 py-4 uppercase hover:bg-text transition-colors">
          Create ATS-Friendly Resume
        </Link>
      </section>
    </>
  );
}