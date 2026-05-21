export const metadata = {
  title: "Contact Us | NachiketBhogawar.in",
  description: "Get in touch with the NachiketBhogawar.in team.",
};

export default function Contact() {
  return (
    <>
      <section className="p-6 lg:p-12 pt-10 md:pt-20 border-b-1">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
          Contact Us
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-muted max-w-xl font-serif italic">
          We respond within 24 hours.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Contact Form */}
        <div className="p-6 md:p-12 md:border-r-1 border-b-1">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-6 md:mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="contact-name">Full Name</label>
              <input
                className="w-full px-4 py-3 border-1 bg-transparent text-sm font-bold focus:ring-0 focus:border-primary outline-none"
                id="contact-name"
                placeholder="YOUR NAME"
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="contact-email">Email Address</label>
              <input
                className="w-full px-4 py-3 border-1 bg-transparent text-sm font-bold focus:ring-0 focus:border-primary outline-none"
                id="contact-email"
                placeholder="YOUR@EMAIL.COM"
                type="email"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="contact-subject">Subject</label>
              <input
                className="w-full px-4 py-3 border-1 bg-transparent text-sm font-bold focus:ring-0 focus:border-primary outline-none"
                id="contact-subject"
                placeholder="WHAT IS THIS ABOUT?"
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="contact-message">Message</label>
              <textarea
                className="w-full px-4 py-3 border-1 bg-transparent text-sm font-bold focus:ring-0 focus:border-primary outline-none resize-none"
                id="contact-message"
                placeholder="TYPE YOUR MESSAGE HERE..."
                rows={6}
              ></textarea>
            </div>
            <button
              className="w-full py-4 bg-primary text-white font-bold uppercase text-sm tracking-widest btn-brutalist hover:bg-text"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="p-6 md:p-12 border-b-1 flex flex-col justify-between">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Email</h3>
              <p className="text-xl font-bold">hello@nachiketbhogawar.in</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Office</h3>
              <p className="text-lg text-muted leading-relaxed">
                NachiketBhogawar Technologies Pvt. Ltd.<br />
                Koramangala, Bangalore<br />
                Karnataka, India — 560034
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Social</h3>
              <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
                <a className="hover:text-primary transition-colors" href="https://twitter.com/nachiketbhogawar" target="_blank">Twitter</a>
                <a className="hover:text-primary transition-colors" href="https://linkedin.com/company/nachiketbhogawar" target="_blank">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t-1">
            <p className="text-xs text-muted uppercase tracking-widest">Response time: Within 24 business hours</p>
          </div>
        </div>
      </section>
    </>
  );
}
