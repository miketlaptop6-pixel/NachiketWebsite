import Link from "next/link";

export const metadata = {
  title: "Blog | Resume & Career Advice | NachiketBhogawar.in",
  description: "Expert advice on resume writing, cover letters, job search, and career growth.",
};

export default function Blog() {
  const featuredPosts = [
    { title: "How to Write a Resume", category: "Resume Guides", readTime: "15 min read" },
    { title: "How to Write a Cover Letter", category: "Cover Letter Guides", readTime: "12 min read" },
    { title: "Resume Summary Examples", category: "Resume Guides", readTime: "8 min read" },
  ];

  const recentPosts = [
    { title: "One Page Resume: Is It Right for You?", category: "Resume Tips", date: "May 15, 2026" },
    { title: "Resume Format: Which One to Choose?", category: "Resume Tips", date: "May 12, 2026" },
    { title: "Cover Letter Format Guide", category: "Cover Letter Tips", date: "May 10, 2026" },
    { title: "Does ATS Reject Your Resume?", category: "Career Research", date: "May 8, 2026" },
    { title: "AI Hiring in 2026: Statistics", category: "Career Research", date: "May 5, 2026" },
    { title: "Ghost Jobs: The Hidden Tax", category: "Career Research", date: "May 3, 2026" },
  ];

  const categories = [
    { name: "Resume Advice", count: "45 articles" },
    { name: "Cover Letter Help", count: "28 articles" },
    { name: "Interview Tips", count: "32 articles" },
    { name: "Career Growth", count: "41 articles" },
    { name: "Career Research", count: "23 articles" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1f71] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-4">NachiketBhogawar.in Blog</h1>
          <p className="text-lg opacity-90">Expert advice on resumes, cover letters, and career success</p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-2xl mx-auto px-6">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full p-4 border border-gray-300 text-lg focus:border-primary focus:outline-none"
          />
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, i) => (
              <Link key={i} href="/blog" className="group">
                <div className="h-48 bg-gradient-to-br from-primary to-blue-600 mb-4 group-hover:opacity-90 transition-opacity"></div>
                <span className="text-xs font-bold uppercase text-primary">{post.category}</span>
                <h3 className="font-bold text-xl mt-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted mt-2">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat, i) => (
              <Link key={i} href="/blog" className="px-6 py-3 bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <span className="font-bold">{cat.name}</span>
                <span className="text-sm text-muted ml-2">({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold uppercase mb-8">Recent Articles</h2>
          <div className="space-y-6">
            {recentPosts.map((post, i) => (
              <Link key={i} href="/blog" className="flex items-center justify-between p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div>
                  <span className="text-xs font-bold uppercase text-primary">{post.category}</span>
                  <h3 className="font-bold text-lg mt-1">{post.title}</h3>
                </div>
                <span className="text-sm text-muted whitespace-nowrap">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-[#1a1f71] text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold uppercase mb-4">Get Career Advice Delivered</h2>
          <p className="opacity-90 mb-8">Subscribe to our newsletter for weekly tips and insights</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 p-4 text-black"
            />
            <button className="bg-white text-[#1a1f71] font-bold px-6 py-4 uppercase hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}