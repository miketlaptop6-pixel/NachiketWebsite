import Link from "next/link";

export const metadata = {
  title: "About NachiketBhogawar.in | Our Mission & Story",
  description: "Learn about NachiketBhogawar.in's mission to help job seekers create professional resumes.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">About NachiketBhogawar.in</h1>
          <p className="text-lg opacity-90">Our mission is to help every job seeker land their dream job</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-6">Our Mission</h2>
          <p className="text-lg text-muted mb-8">
            At NachiketBhogawar.in, we believe the best resumes feel human. We&apos;re here to help you personalize your application around your unique experiences—so you stand out, feel confident, and land interviews that align with your goals.
          </p>
          <p className="text-lg text-muted">
            We combine flexible, ATS-friendly templates with intuitive tools and tailored content suggestions. Our resume builder supports multiple languages and includes everything from drag-and-drop customization to matching cover letters—so job seekers can present a complete, polished story.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15M+", label: "Resumes Created" },
              { number: "10M+", label: "Resume Examples" },
              { number: "10M+", label: "Users Worldwide" },
              { number: "11+", label: "Years Helping Job Seekers" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Human-Centered Design", desc: "We create tools that help job seekers express their unique stories" },
              { title: "Accessibility", desc: "Professional resume tools should be accessible to everyone" },
              { title: "Quality", desc: "Every template is reviewed by certified professional resume writers" },
              { title: "Innovation", desc: "We continuously improve our AI and tools based on user feedback" },
            ].map((value, i) => (
              <div key={i} className="p-6 border border-gray-200">
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Smith", role: "CEO & Founder" },
              { name: "Sarah Johnson", role: "Head of Product" },
              { name: "Michael Chen", role: "Head of Engineering" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-muted text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold uppercase mb-4">Join Our Team</h2>
          <p className="text-muted mb-8">Help us revolutionize the job search experience</p>
          <Link href="/careers" className="inline-block bg-primary text-white font-bold px-8 py-4 uppercase hover:bg-text transition-colors">
            View Open Positions
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-[#1a1f71] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-4">Get in Touch</h2>
          <p className="opacity-90 mb-8">Have questions? We&apos;re here to help</p>
          <Link href="/support" className="inline-block bg-white text-[#1a1f71] font-bold px-8 py-4 uppercase hover:bg-gray-200 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}