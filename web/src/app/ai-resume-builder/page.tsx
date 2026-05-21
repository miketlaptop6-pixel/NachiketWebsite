import Link from "next/link";

export const metadata = {
  title: "AI Resume Builder | Smart Resume Creation | NachiketBhogawar.in",
  description: "Create your resume with AI assistance - smart suggestions, auto-formatting, and more.",
};

export default function AIResumeBuilder() {
  const features = [
    { title: "AI Content Generation", desc: "Get AI-suggested content for your resume sections" },
    { title: "Smart Parsing", desc: "Import and enhance your existing resume" },
    { title: "Skills Finder", desc: "Discover relevant skills based on your target job" },
    { title: "Translation", desc: "Translate your resume into multiple languages" },
  ];

  return (
    <>
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">AI Resume Builder</h1>
          <p className="text-lg opacity-90">Create professional resumes with AI assistance</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">AI-Powered Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 border border-gray-200">
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold uppercase mb-4">Try AI Resume Builder</h2>
          <p className="text-muted mb-8">Start building your resume with AI assistance</p>
          <Link href="/templates" className="inline-block bg-primary text-white font-bold px-8 py-4 uppercase hover:bg-text transition-colors">
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}