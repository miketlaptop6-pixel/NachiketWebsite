"use client";

import { useState } from "react";
import Link from "next/link";

const articles = [
  {
    category: "Resume Writing",
    title: "The 6-Second Rule: How Recruiters Actually Read Resumes",
    excerpt:
      "Research shows recruiters spend an average of 6 seconds on initial resume screening. Learn the visual hierarchy patterns that ensure your key qualifications are seen first.",
    content: [
      "Eye-tracking studies from Ladders Inc. reveal a consistent F-pattern when recruiters scan resumes. They focus on the top third first, then scan left-aligned headings before diving deeper.",
      "Key Takeaways:",
      "• Place your strongest selling point — job title, company, or quantified achievement — in the top 20% of your resume.",
      "• Use bold section headers and consistent formatting so the eye can quickly jump to relevant sections.",
      "• Quantify impact wherever possible: \"Increased revenue by 34%\" is processed faster than \"Responsible for revenue growth.\"",
      "• Keep your resume to one page if you have under 10 years of experience. Two pages maximum for senior roles.",
      "• Use a clean, ATS-compatible font like Inter, Calibri, or Arial at 10–12pt. Avoid columns and tables that break ATS parsing.",
      "The bottom line: your resume isn't read — it's scanned. Design for scanning, and you'll make it past the 6-second filter.",
    ],
    readTime: "5 min read",
  },
  {
    category: "ATS Optimization",
    title: "Beat the Bots: ATS-Friendly Resume Formatting",
    excerpt:
      "Applicant Tracking Systems reject up to 75% of resumes before a human sees them. Master the formatting rules that ensure your resume passes automated screening.",
    content: [
      "ATS software like Workday, Greenhouse, and Lever parse your resume into structured data. If your formatting confuses the parser, your resume is rejected — no matter how qualified you are.",
      "Formatting Rules That Matter:",
      "• Use standard section headings: \"Work Experience\" not \"My Career Journey.\" ATS looks for conventional labels.",
      "• Avoid headers, footers, text boxes, and multi-column layouts. ATS reads top-to-bottom, left-to-right.",
      "• Save as .docx or .pdf (check the job posting). Some older ATS systems can't parse PDFs reliably.",
      "• Don't embed critical information in images or graphics — ATS can't read pixels.",
      "Keyword Strategy:",
      "• Mirror the exact phrases from the job description. If they say \"project management,\" don't write \"managed projects\" — use the noun phrase.",
      "• Include both spelled-out terms and acronyms: \"Search Engine Optimization (SEO).\"",
      "• Place keywords naturally in your experience bullets, not stuffed in a hidden footer.",
      "Pro Tip: Run your resume through ResumeHub's ATS checker before submitting. One formatting mistake can tank an otherwise perfect application.",
    ],
    readTime: "8 min read",
  },
  {
    category: "Cover Letters",
    title: "Writing Cover Letters That Actually Get Read",
    excerpt:
      "Most cover letters are ignored. The ones that aren't follow a specific structure that demonstrates value in the first two sentences.",
    content: [
      "The harsh truth: hiring managers spend less time on cover letters than resumes. You have one paragraph — maybe two — to hook them.",
      "The Formula That Works:",
      "• Opening Line: State the role + one specific reason you're uniquely qualified. \"As a product manager who scaled a B2B SaaS from $2M to $18M ARR, I'm excited about the PM role at [Company].\"",
      "• Value Paragraph: 2–3 sentences connecting your biggest achievements to their specific challenges. Reference something from their website, product, or recent news.",
      "• Cultural Fit: One sentence showing you understand their mission or values — not generic praise, but specific alignment.",
      "• Close: Clear call to action. \"I'd love to discuss how my experience with [specific skill] could help [specific company goal]. I'm available for a call this week.\"",
      "What NOT to Do:",
      "• Don't repeat your resume in paragraph form.",
      "• Don't start with \"I am writing to apply for...\" — that's the most ignored opening in job applications.",
      "• Don't exceed one page. 250–350 words is the sweet spot.",
      "Keep it tight, make it specific, and always customize. A great cover letter is a sales pitch, not an autobiography.",
    ],
    readTime: "6 min read",
  },
  {
    category: "Interview Prep",
    title: "The STAR Method: Structured Interview Responses",
    excerpt:
      "Situation, Task, Action, Result. This framework transforms rambling answers into compelling stories that demonstrate your impact.",
    content: [
      "Behavioral interview questions (\"Tell me about a time when...\") are the most common format in modern hiring. The STAR method is the gold standard for answering them.",
      "Breaking Down STAR:",
      "• Situation: Set the scene in 1–2 sentences. Context matters, but don't over-explain. \"At my previous company, our customer churn rate hit 15% — double the industry average.\"",
      "• Task: What was your specific responsibility? \"I was tasked with identifying the root causes and building a retention program.\"",
      "• Action: This is where you shine. Detail the specific steps YOU took — not your team, not your manager. Use \"I\" not \"we.\" Be precise about methods, tools, and decisions.",
      "• Result: Quantify the outcome. \"Customer churn dropped to 6% within two quarters, saving $1.2M in annual recurring revenue.\"",
      "Preparation Strategy:",
      "• Prepare 8–10 STAR stories that cover: leadership, conflict, failure, teamwork, innovation, pressure, and stakeholder management.",
      "• Each story should be adaptable to multiple questions. A story about resolving a conflict can answer questions about teamwork, communication, and leadership.",
      "• Practice telling each story in under 2 minutes. If you can't, trim the Situation and expand the Action.",
      "Common Mistakes:",
      "• Too much \"we\" — interviewers want to know what YOU did.",
      "• Vague results — \"it went well\" is not a result. Use numbers.",
      "• Choosing the wrong example — pick stories where you were the driving force, not a bystander.",
    ],
    readTime: "4 min read",
  },
  {
    category: "Career Growth",
    title: "Salary Negotiation: Data-Driven Approaches",
    excerpt:
      "Stop leaving money on the table. Use market data, timing, and proven scripts to negotiate compensation packages 15-30% higher than initial offers.",
    content: [
      "Most professionals accept the first offer. Studies from Glassdoor show that 59% of employees didn't negotiate at all. Those who do earn an average of $5,000 more per year — compounding over a career.",
      "Before the Negotiation:",
      "• Research: Use Levels.fyi, Glassdoor, Payscale, and LinkedIn Salary Insights to build a range. Know the 25th, 50th, and 75th percentile for your role, location, and experience level.",
      "• Timing: Never discuss salary first. Let the employer make the initial number. If pressed early, say: \"I'd like to understand the full scope of the role before discussing compensation.\"",
      "• Know Your BATNA: Best Alternative to a Negotiated Agreement. Having another offer — or being willing to walk away — is your strongest lever.",
      "The Negotiation Script:",
      "• \"Thank you for the offer. I'm excited about the role. Based on my research and the value I'd bring with [specific skill/experience], I was expecting something closer to [X]. Can we discuss?\"",
      "• If they can't move on base salary, negotiate: signing bonus, equity/RSUs, remote work flexibility, professional development budget, extra PTO, or a 6-month salary review.",
      "Advanced Tactics:",
      "• Use the \"anchoring\" effect — stating a higher number first shifts the negotiation range upward.",
      "• Frame requests as questions: \"Is there flexibility on the base salary?\" is softer than \"I need more.\"",
      "• Always get the final offer in writing before accepting. Verbal agreements mean nothing.",
      "Remember: negotiation is expected. Employers build 10–20% padding into initial offers. Not negotiating isn't being polite — it's leaving your money on their table.",
    ],
    readTime: "7 min read",
  },
  {
    category: "Industry Trends",
    title: "2026 Hiring Trends: What Employers Actually Want",
    excerpt:
      "The job market is evolving. Skills-based hiring, AI literacy, and remote-first culture are reshaping what matters on your resume.",
    content: [
      "The 2026 hiring landscape looks fundamentally different from even two years ago. Here's what's actually changing — and what it means for your resume.",
      "Trend 1: Skills-Based Hiring Over Credentials",
      "• 65% of employers now prioritize demonstrated skills over degree requirements. Google, Apple, and IBM dropped degree requirements years ago — mid-market companies are following.",
      "• Implication: Your skills section matters more than your education section. Lead with certifications, portfolios, and measurable outcomes.",
      "Trend 2: AI Literacy Is Table Stakes",
      "• Employers expect baseline AI fluency across all roles, not just technical ones. Marketing managers who can prompt-engineer, analysts who can use Copilot, designers who leverage generative tools.",
      "• Implication: Add specific AI tools to your skills section. \"Proficient in ChatGPT, GitHub Copilot, Midjourney\" signals you're current.",
      "Trend 3: Remote-First → Return-to-Office → Hybrid",
      "• The pendulum has settled. 42% of companies operate hybrid, 28% are fully remote, and 30% require full-time office. Know your preference and target accordingly.",
      "• Implication: Highlight remote collaboration tools and self-management skills if targeting remote/hybrid roles.",
      "Trend 4: The Rise of Fractional and Contract Work",
      "• More professionals are going fractional — working part-time for multiple companies rather than full-time for one. This is especially common in executive and specialized roles.",
      "• Implication: Structure your resume to highlight breadth of impact across multiple engagements, not just tenure.",
      "The Bottom Line: Adaptability is the new stability. Your resume should signal that you learn fast, adopt new tools, and deliver results regardless of the work model.",
    ],
    readTime: "6 min read",
  },
];

const categories = [
  "All",
  "Resume Writing",
  "ATS Optimization",
  "Cover Letters",
  "Interview Prep",
  "Career Growth",
  "Industry Trends",
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedArticles, setExpandedArticles] = useState<Set<number>>(
    new Set()
  );

  const toggleArticle = (index: number) => {
    setExpandedArticles((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="p-6 lg:p-12 pt-10 md:pt-20 border-b-1">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
          Career Resources
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-muted max-w-xl font-serif italic">
          Practical guides. No fluff. Written by hiring managers and career
          coaches.
        </p>
      </section>

      {/* Category Filter — horizontally scrollable on mobile */}
      <section className="border-b-1">
        <div className="p-4 md:px-12 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 flex-nowrap min-w-max md:min-w-0 md:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-widest border-1 transition-colors cursor-pointer whitespace-nowrap min-h-[44px] ${activeCategory === cat
                    ? "bg-text text-white"
                    : "hover:bg-text hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="divide-y divide-gray-200">
        {filtered.map((article, i) => {
          const globalIndex = articles.indexOf(article);
          const isExpanded = expandedArticles.has(globalIndex);

          return (
            <article key={globalIndex} className="group">
              {/* Clickable Header */}
              <button
                onClick={() => toggleArticle(globalIndex)}
                className="w-full text-left p-5 md:p-10 flex items-start justify-between gap-4 md:gap-6 hover:bg-gray-50 transition-colors cursor-pointer min-h-[44px]"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted font-bold uppercase tracking-widest">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mt-3 max-w-3xl">
                    {article.excerpt}
                  </p>
                </div>

                {/* Expand/Collapse Icon */}
                <div
                  className={`flex-shrink-0 w-10 h-10 border-1 flex items-center justify-center text-lg font-bold transition-transform duration-300 ${isExpanded ? "rotate-45 bg-text text-white" : ""
                    }`}
                >
                  +
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 md:px-10 pb-8 md:pb-12">
                  <div className="bg-gray-50 border-1 p-6 md:p-8 max-w-4xl">
                    {article.content.map((paragraph, pi) => {
                      // Detect heading-like lines (ending with ":")
                      if (paragraph.endsWith(":")) {
                        return (
                          <h4
                            key={pi}
                            className="text-sm font-bold uppercase tracking-widest mt-6 mb-3 first:mt-0"
                          >
                            {paragraph}
                          </h4>
                        );
                      }
                      // Detect bullet points
                      if (paragraph.startsWith("•")) {
                        return (
                          <p
                            key={pi}
                            className="text-sm text-muted leading-relaxed pl-4 mb-2"
                          >
                            {paragraph}
                          </p>
                        );
                      }
                      // Regular paragraph
                      return (
                        <p
                          key={pi}
                          className="text-sm text-muted leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Empty State */}
      {filtered.length === 0 && (
        <section className="p-16 text-center">
          <p className="text-muted font-serif italic text-lg">
            No articles in this category yet. Check back soon.
          </p>
        </section>
      )}

      {/* CTA */}
      <section className="p-6 md:p-16 text-center border-t-1">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
          Ready to Apply What You&apos;ve Learned?
        </h2>
        <p className="text-muted max-w-md mx-auto mb-6 md:mb-8 font-serif italic text-sm md:text-base">
          Put theory into practice with a professionally designed resume.
        </p>
        <Link
          href="/templates"
          className="px-8 py-4 bg-primary text-white font-bold uppercase text-sm tracking-widest btn-brutalist hover:bg-text inline-block min-h-[52px] flex items-center justify-center w-fit mx-auto"
        >
          Build Your Resume Now
        </Link>
      </section>
    </>
  );
}
