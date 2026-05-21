export const metadata = {
  title: "Feedback | NachiketBhogawar.in",
  description: "Send us your feedback about NachiketBhogawar.in",
};

export default function Feedback() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl font-bold uppercase mb-4">Send Us Feedback</h1>
      <p className="text-muted mb-8">We&apos;d love to hear from you! Share your thoughts, suggestions, or report any issues.</p>
      
      <form className="space-y-6">
        <div>
          <label className="block font-bold mb-2">Your Email (optional)</label>
          <input type="email" className="w-full p-3 border border-gray-300" placeholder="you@example.com" />
        </div>
        
        <div>
          <label className="block font-bold mb-2">Category</label>
          <select className="w-full p-3 border border-gray-300">
            <option>General Feedback</option>
            <option>Bug Report</option>
            <option>Feature Request</option>
            <option>Content Suggestion</option>
          </select>
        </div>
        
        <div>
          <label className="block font-bold mb-2">Your Feedback</label>
          <textarea className="w-full p-3 border border-gray-300 h-40" placeholder="Tell us what you think..."></textarea>
        </div>
        
        <button type="submit" className="w-full bg-primary text-white font-bold py-4 uppercase hover:bg-text transition-colors">
          Send Feedback
        </button>
      </form>
    </div>
  );
}