export const metadata = {
  title: "Feedback | ResumeHub.in",
  description: "Share your feedback to help us improve ResumeHub.in.",
};

export default function Feedback() {
  return (
    <>
      <section className="p-6 lg:p-12 pt-12 md:pt-20 border-b-1">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
          Feedback
        </h1>
        <p className="mt-6 text-lg text-muted max-w-xl font-serif italic">
          Your input shapes the future of this product. Every submission is reviewed by our team.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12 border-r-1 border-b-1">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Share Your Thoughts</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="fb-name">Name (Optional)</label>
              <input 
                className="w-full px-4 py-3 border-1 bg-transparent text-sm font-bold focus:ring-0 focus:border-primary outline-none" 
                id="fb-name"
                placeholder="YOUR NAME" 
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="fb-email">Email (Optional)</label>
              <input 
                className="w-full px-4 py-3 border-1 bg-transparent text-sm font-bold focus:ring-0 focus:border-primary outline-none" 
                id="fb-email"
                placeholder="FOR FOLLOW-UPS" 
                type="email"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-4">Category</label>
              <div className="flex flex-wrap gap-2">
                {["Bug Report", "Feature Request", "General Feedback", "Template Suggestion"].map((cat) => (
                  <button 
                    key={cat}
                    className="px-4 py-2 border-1 text-xs font-bold uppercase hover:bg-primary hover:text-white transition-colors" 
                    type="button"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2" htmlFor="fb-message">Your Feedback</label>
              <textarea 
                className="w-full px-4 py-3 border-1 bg-transparent text-sm font-bold focus:ring-0 focus:border-primary outline-none resize-none" 
                id="fb-message"
                placeholder="TELL US WHAT YOU THINK..."
                rows={8}
              ></textarea>
            </div>
            <button 
              className="w-full py-4 bg-primary text-white font-bold uppercase text-sm tracking-widest btn-brutalist hover:bg-text" 
              type="submit"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        <div className="p-8 md:p-12 border-b-1 bg-white">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-8">Why We Ask</h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold uppercase mb-2">We Read Everything</h4>
              <p className="text-muted text-sm leading-relaxed">Every piece of feedback is triaged by our product team. No automated responses, no black holes.</p>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-2">Ship Fast</h4>
              <p className="text-muted text-sm leading-relaxed">Feature requests that align with our roadmap are typically shipped within 2-4 weeks.</p>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-2">Transparency</h4>
              <p className="text-muted text-sm leading-relaxed">We publish a public changelog so you can see exactly what we've built based on user feedback.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
