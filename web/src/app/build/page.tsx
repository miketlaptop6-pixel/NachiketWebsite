"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect, Suspense } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const templateNames: Record<string, string> = {
  professional: "The Professional",
  executive: "The Executive",
  "tech-lead": "The Tech Lead",
  "founders-favorite": "Founder's Favorite",
};

interface Achievement {
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
}

interface ResumeData {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  expertise: string[];
  experience: { company: string; role: string; duration: string; bullets: string[] }[];
  education: { institution: string; degree: string; year: string }[];
  skills: string[];
  achievements: Achievement[];
  projects: Project[];
}

const defaultData: ResumeData = {
  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  summary: "",
  expertise: [""],
  experience: [{ company: "", role: "", duration: "", bullets: [""] }],
  education: [{ institution: "", degree: "", year: "" }],
  skills: [""],
  achievements: [{ title: "", description: "" }],
  projects: [{ title: "", description: "" }],
};

function BuilderContent() {
  const searchParams = useSearchParams();
  const template = searchParams.get("template") || "professional";
  const templateName = templateNames[template] || "The Professional";

  const [data, setData] = useState<ResumeData>(defaultData);
  const [activeSection, setActiveSection] = useState("personal");
  const [mobilePanel, setMobilePanel] = useState<"form" | "preview">("form");
  const [isGenerating, setIsGenerating] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load draft from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("resume-draft");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      const fileName = data.fullName ? `${data.fullName.replace(/\s+/g, "-")}-Resume.pdf` : "Resume.pdf";
      pdf.save(fileName);
    } catch {
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveDraft = () => {
    localStorage.setItem("resume-draft", JSON.stringify(data));
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "text/plain" && !file.name.endsWith(".txt")) {
      alert("Please upload a .txt file with your resume content.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
      let name = "";
      let jobTitle = "";
      let email = "";
      let phone = "";
      let location = "";
      let summary = "";
      const skills: string[] = [];
      const experience: ResumeData["experience"] = [];
      const education: ResumeData["education"] = [];

      let section = "";
      let currentExp: ResumeData["experience"][number] | null = null;
      let currentEdu: ResumeData["education"][number] | null = null;

      for (const line of lines) {
        if (/^(name|full\s*name)\s*[:\-]/i.test(line)) {
          name = line.replace(/^(name|full\s*name)\s*[:\-]\s*/i, "").trim();
        } else if (/^(title|job\s*title|role)\s*[:\-]/i.test(line)) {
          jobTitle = line.replace(/^(title|job\s*title|role)\s*[:\-]\s*/i, "").trim();
        } else if (/^email\s*[:\-]/i.test(line)) {
          email = line.replace(/^email\s*[:\-]\s*/i, "").trim();
        } else if (/^phone\s*[:\-]/i.test(line)) {
          phone = line.replace(/^phone\s*[:\-]\s*/i, "").trim();
        } else if (/^(location|address)\s*[:\-]/i.test(line)) {
          location = line.replace(/^(location|address)\s*[:\-]\s*/i, "").trim();
        } else if (/^(summary|objective|profile)\s*[:\-]?$/i.test(line)) {
          section = "summary";
        } else if (/^(experience|work\s*history|employment)\s*[:\-]?$/i.test(line)) {
          section = "experience";
        } else if (/^(education)\s*[:\-]?$/i.test(line)) {
          section = "education";
        } else if (/^(skills|technical\s*skills)\s*[:\-]?$/i.test(line)) {
          section = "skills";
        } else if (/^#/i.test(line) && !name) {
          name = line.replace(/^#+\s*/, "").trim();
        } else if (/^[A-Z][\w\s&,.()-]+$/.test(line) && !name && line.length < 50) {
          name = line.trim();
        } else if (section === "summary" && line) {
          summary += (summary ? " " : "") + line;
        } else if (section === "skills" && line) {
          const items = line.split(/[,;|•·\t]/).map(s => s.trim()).filter(Boolean);
          skills.push(...items);
        } else if (section === "experience") {
          if (/^\d{4}.*\d{4}|present/i.test(line) && line.length < 40) {
            if (currentExp) experience.push(currentExp);
            currentExp = { company: "", role: "", duration: line, bullets: [] };
          } else if (currentExp && !currentExp.company && line.length < 80) {
            currentExp.company = line;
          } else if (currentExp && !currentExp.role && line.length < 60) {
            currentExp.role = line;
          } else if (currentExp && (line.startsWith("•") || line.startsWith("-") || line.startsWith("*"))) {
            currentExp.bullets.push(line.replace(/^[•\-*]\s*/, ""));
          } else if (line && currentExp) {
            currentExp.bullets.push(line);
          }
        } else if (section === "education") {
          if (/^\d{4}/.test(line) && line.length < 40) {
            if (currentEdu) education.push(currentEdu);
            currentEdu = { institution: "", degree: "", year: line };
          } else if (currentEdu && !currentEdu.degree) {
            currentEdu.degree = line;
          } else if (currentEdu && !currentEdu.institution) {
            currentEdu.institution = line;
          }
        } else if (!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(line)) {
          email = line;
        } else if (!phone && /[\d]{10,}/.test(line.replace(/\D/g, ""))) {
          phone = line;
        }
      }

      if (currentExp) experience.push(currentExp);
      if (currentEdu) education.push(currentEdu);

      setData({
        fullName: name || data.fullName,
        jobTitle: jobTitle || data.jobTitle,
        email: email || data.email,
        phone: phone || data.phone,
        location: location || data.location,
        linkedin: data.linkedin,
        summary: summary || data.summary,
        expertise: data.expertise,
        experience: experience.length > 0 ? experience : data.experience,
        education: education.length > 0 ? education : data.education,
        skills: skills.length > 0 ? skills : data.skills,
        achievements: data.achievements,
        projects: data.projects,
      });
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const isFounders = template === "founders-favorite";

  const baseSections = [
    { id: "personal", label: "Personal" },
    { id: "summary", label: "Summary" },
  ];

  const foundersSections = [
    ...baseSections,
    { id: "expertise", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "projects", label: "Projects" },
  ];

  const defaultSections = [
    ...baseSections,
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ];

  const sections = isFounders ? foundersSections : defaultSections;

  // --- Helpers ---
  const addExperience = () => {
    setData({ ...data, experience: [...data.experience, { company: "", role: "", duration: "", bullets: [""] }] });
  };
  const addEducation = () => {
    setData({ ...data, education: [...data.education, { institution: "", degree: "", year: "" }] });
  };
  const addBullet = (expIndex: number) => {
    const newExp = [...data.experience];
    newExp[expIndex].bullets.push("");
    setData({ ...data, experience: newExp });
  };
  const addSkill = () => {
    setData({ ...data, skills: [...data.skills, ""] });
  };
  const addExpertise = () => {
    setData({ ...data, expertise: [...data.expertise, ""] });
  };
  const addAchievement = () => {
    setData({ ...data, achievements: [...data.achievements, { title: "", description: "" }] });
  };
  const addProject = () => {
    setData({ ...data, projects: [...data.projects, { title: "", description: "" }] });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const newExp = [...data.experience];
    (newExp[index] as Record<string, unknown>)[field] = value;
    setData({ ...data, experience: newExp });
  };
  const updateBullet = (expIndex: number, bulletIndex: number, value: string) => {
    const newExp = [...data.experience];
    newExp[expIndex].bullets[bulletIndex] = value;
    setData({ ...data, experience: newExp });
  };
  const updateEducation = (index: number, field: string, value: string) => {
    const newEdu = [...data.education];
    (newEdu[index] as Record<string, unknown>)[field] = value;
    setData({ ...data, education: newEdu });
  };
  const updateSkill = (index: number, value: string) => {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    setData({ ...data, skills: newSkills });
  };
  const updateExpertiseItem = (index: number, value: string) => {
    const newExpertise = [...data.expertise];
    newExpertise[index] = value;
    setData({ ...data, expertise: newExpertise });
  };
  const updateAchievement = (index: number, field: keyof Achievement, value: string) => {
    const newAch = [...data.achievements];
    newAch[index] = { ...newAch[index], [field]: value };
    setData({ ...data, achievements: newAch });
  };
  const updateProject = (index: number, field: keyof Project, value: string) => {
    const newProj = [...data.projects];
    newProj[index] = { ...newProj[index], [field]: value };
    setData({ ...data, projects: newProj });
  };

  // ============= FORM SECTIONS =============
  const renderPersonalForm = () => (
    <>
      <div className="border-1 border-dashed p-4 mb-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">Upload existing resume (.txt)</p>
        <input type="file" ref={fileInputRef} accept=".txt" onChange={handleResumeUpload} className="hidden" />
        <button onClick={() => fileInputRef.current?.click()} className="w-full py-3 border-1 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-colors">
          Browse & Upload
        </button>
        <p className="text-[9px] text-muted mt-2">Auto-fills your details from a plain text resume</p>
      </div>
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Full Name</label>
        <input type="text" value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} className="w-full px-4 py-3 border-1 bg-transparent text-sm font-medium focus:border-primary outline-none" placeholder="e.g. Nachiket Bhogawar" />
      </div>
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Job Title / Branding</label>
        <input type="text" value={data.jobTitle} onChange={(e) => setData({ ...data, jobTitle: e.target.value })} className="w-full px-4 py-3 border-1 bg-transparent text-sm font-medium focus:border-primary outline-none" placeholder={isFounders ? "e.g. Product Manager | E-Commerce | Fintech" : "e.g. Senior Product Manager"} />
      </div>
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Email</label>
        <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="w-full px-4 py-3 border-1 bg-transparent text-sm font-medium focus:border-primary outline-none" placeholder="you@example.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Phone</label>
          <input type="text" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className="w-full px-4 py-3 border-1 bg-transparent text-sm font-medium focus:border-primary outline-none" placeholder="+91 99999 88888" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Location</label>
          <input type="text" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} className="w-full px-4 py-3 border-1 bg-transparent text-sm font-medium focus:border-primary outline-none" placeholder="Noida, India" />
        </div>
      </div>
      {isFounders && (
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">LinkedIn URL</label>
          <input type="text" value={data.linkedin} onChange={(e) => setData({ ...data, linkedin: e.target.value })} className="w-full px-4 py-3 border-1 bg-transparent text-sm font-medium focus:border-primary outline-none" placeholder="linkedin.com/in/yourname" />
        </div>
      )}
    </>
  );

  const renderSummaryForm = () => (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Professional Summary</label>
      <textarea value={data.summary} onChange={(e) => setData({ ...data, summary: e.target.value })} rows={8} className="w-full px-4 py-3 border-1 bg-transparent text-sm font-medium focus:border-primary outline-none resize-none" placeholder="Write a compelling summary of your professional background..." />
      <p className="text-[10px] text-muted mt-2 uppercase tracking-wider">{data.summary.length} / 500 characters</p>
    </div>
  );

  const renderExpertiseForm = () => (
    <>
      <p className="text-[10px] text-muted uppercase tracking-wider mb-4">Add your key areas of expertise. These appear in a multi-column grid on the resume.</p>
      <div className="space-y-2">
        {data.expertise.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input value={item} onChange={(e) => updateExpertiseItem(i, e.target.value)} className="flex-1 px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="e.g. Stakeholder Management" />
            {data.expertise.length > 1 && (
              <button onClick={() => setData({ ...data, expertise: data.expertise.filter((_, idx) => idx !== i) })} className="px-3 py-2 border-1 text-red-600 text-xs font-bold hover:bg-red-50">×</button>
            )}
          </div>
        ))}
      </div>
      <button onClick={addExpertise} className="w-full py-3 border-1 border-dashed text-xs font-bold uppercase tracking-widest text-muted hover:border-primary hover:text-primary transition-colors mt-4">+ Add Expertise</button>
    </>
  );

  const renderExperienceForm = () => (
    <>
      {data.experience.map((exp, i) => (
        <div key={i} className="border-1 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-widest">Position {i + 1}</h4>
            {data.experience.length > 1 && (
              <button onClick={() => setData({ ...data, experience: data.experience.filter((_, idx) => idx !== i) })} className="text-[10px] font-bold uppercase text-red-600 hover:underline">Remove</button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Company, Role</label>
              <input value={exp.company} onChange={(e) => updateExperience(i, "company", e.target.value)} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="Biz2X, Product Manager" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Duration</label>
              <input value={exp.duration} onChange={(e) => updateExperience(i, "duration", e.target.value)} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="Feb 2025 - Present" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Role Title</label>
            <input value={exp.role} onChange={(e) => updateExperience(i, "role", e.target.value)} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="Senior Product Manager" />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Achievement Bullets</label>
            {exp.bullets.map((bullet, bi) => (
              <div key={bi} className="flex items-center gap-2 mb-2">
                <span className="text-muted text-xs">•</span>
                <input value={bullet} onChange={(e) => updateBullet(i, bi, e.target.value)} className="flex-1 px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="Reduced onboarding time by 25 days..." />
              </div>
            ))}
            <button onClick={() => addBullet(i)} className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline mt-1">+ Add Bullet</button>
          </div>
        </div>
      ))}
      <button onClick={addExperience} className="w-full py-3 border-1 border-dashed text-xs font-bold uppercase tracking-widest text-muted hover:border-primary hover:text-primary transition-colors">+ Add Experience</button>
    </>
  );

  const renderEducationForm = () => (
    <>
      {data.education.map((edu, i) => (
        <div key={i} className="border-1 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-widest">Education {i + 1}</h4>
            {data.education.length > 1 && (
              <button onClick={() => setData({ ...data, education: data.education.filter((_, idx) => idx !== i) })} className="text-[10px] font-bold uppercase text-red-600 hover:underline">Remove</button>
            )}
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Degree & Field</label>
            <input value={edu.degree} onChange={(e) => updateEducation(i, "degree", e.target.value)} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="PGDM (Operations & Supply Chain Management)" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Institution</label>
              <input value={edu.institution} onChange={(e) => updateEducation(i, "institution", e.target.value)} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="Sri Balaji University, Pune" />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Duration</label>
              <input value={edu.year} onChange={(e) => updateEducation(i, "year", e.target.value)} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="Jun 2017 - July 2019" />
            </div>
          </div>
        </div>
      ))}
      <button onClick={addEducation} className="w-full py-3 border-1 border-dashed text-xs font-bold uppercase tracking-widest text-muted hover:border-primary hover:text-primary transition-colors">+ Add Education</button>
    </>
  );

  const renderSkillsForm = () => (
    <>
      <div className="space-y-2">
        {data.skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2">
            <input value={skill} onChange={(e) => updateSkill(i, e.target.value)} className="flex-1 px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="e.g. Product Strategy" />
            {data.skills.length > 1 && (
              <button onClick={() => setData({ ...data, skills: data.skills.filter((_, idx) => idx !== i) })} className="px-3 py-2 border-1 text-red-600 text-xs font-bold hover:bg-red-50">×</button>
            )}
          </div>
        ))}
      </div>
      <button onClick={addSkill} className="w-full py-3 border-1 border-dashed text-xs font-bold uppercase tracking-widest text-muted hover:border-primary hover:text-primary transition-colors">+ Add Skill</button>
    </>
  );

  const renderAchievementsForm = () => (
    <>
      <p className="text-[10px] text-muted uppercase tracking-wider mb-4">Highlight your biggest career wins. Bold title + description format.</p>
      {data.achievements.map((ach, i) => (
        <div key={i} className="border-1 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-widest">Achievement {i + 1}</h4>
            {data.achievements.length > 1 && (
              <button onClick={() => setData({ ...data, achievements: data.achievements.filter((_, idx) => idx !== i) })} className="text-[10px] font-bold uppercase text-red-600 hover:underline">Remove</button>
            )}
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Title</label>
            <input value={ach.title} onChange={(e) => updateAchievement(i, "title", e.target.value)} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="Launched New Business Model" />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Description</label>
            <textarea value={ach.description} onChange={(e) => updateAchievement(i, "description", e.target.value)} rows={3} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none resize-none" placeholder="Led the successful launch of the Myntra Smart Assist program..." />
          </div>
        </div>
      ))}
      <button onClick={addAchievement} className="w-full py-3 border-1 border-dashed text-xs font-bold uppercase tracking-widest text-muted hover:border-primary hover:text-primary transition-colors">+ Add Achievement</button>
    </>
  );

  const renderProjectsForm = () => (
    <>
      <p className="text-[10px] text-muted uppercase tracking-wider mb-4">Side projects, ventures, or additional experience.</p>
      {data.projects.map((proj, i) => (
        <div key={i} className="border-1 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-widest">Project {i + 1}</h4>
            {data.projects.length > 1 && (
              <button onClick={() => setData({ ...data, projects: data.projects.filter((_, idx) => idx !== i) })} className="text-[10px] font-bold uppercase text-red-600 hover:underline">Remove</button>
            )}
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Title</label>
            <input value={proj.title} onChange={(e) => updateProject(i, "title", e.target.value)} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none" placeholder="Wardha Grocery, Founder & CEO" />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-1">Description</label>
            <textarea value={proj.description} onChange={(e) => updateProject(i, "description", e.target.value)} rows={3} className="w-full px-3 py-2 border-1 bg-transparent text-sm focus:border-primary outline-none resize-none" placeholder="Directed the development of Android customer app..." />
          </div>
        </div>
      ))}
      <button onClick={addProject} className="w-full py-3 border-1 border-dashed text-xs font-bold uppercase tracking-widest text-muted hover:border-primary hover:text-primary transition-colors">+ Add Project</button>
    </>
  );

  // ============= FOUNDER'S FAVORITE PREVIEW =============
  const renderFoundersPreview = () => (
    <div style={{ fontFamily: "'Inter', Arial, sans-serif", color: "#000", lineHeight: 1.35 }}>
      {/* --- Header --- */}
      <div style={{ textAlign: "center", marginBottom: 4 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, margin: 0 }}>
          {data.fullName || "YOUR NAME"}
        </h1>
        {data.jobTitle && (
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginTop: 4, color: "#000" }}>
            {data.jobTitle}
          </p>
        )}
      </div>

      {/* Contact Row */}
      {(data.location || data.email || data.linkedin || data.phone) && (
        <p style={{ textAlign: "center", fontSize: 10, color: "#444", margin: "6px 0 0" }}>
          {[data.location, data.email, data.linkedin, data.phone].filter(Boolean).join(" | ")}
        </p>
      )}

      <hr style={{ border: "none", borderTop: "1.5px solid #000", margin: "10px 0" }} />

      {/* --- Summary --- */}
      {data.summary && (
        <div style={{ marginBottom: 14 }}>
          <p style={{ fontSize: 11, color: "#444", lineHeight: 1.5 }}>{data.summary}</p>
        </div>
      )}

      {/* --- Area of Expertise --- */}
      {data.expertise.some(e => e) && (
        <div style={{ marginBottom: 14 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", borderBottom: "1.5px solid #000", paddingBottom: 3, marginBottom: 8 }}>
            Area of Expertise
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4px 16px" }}>
            {data.expertise.filter(e => e).map((item, i) => (
              <span key={i} style={{ fontSize: 10.5, color: "#222" }}>{item}</span>
            ))}
          </div>
        </div>
      )}

      {/* --- Professional Experience --- */}
      {data.experience.some(e => e.company || e.role) && (
        <div style={{ marginBottom: 14 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", borderBottom: "1.5px solid #000", paddingBottom: 3, marginBottom: 8 }}>
            Professional Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {data.experience.map((exp, i) =>
              (exp.company || exp.role) && (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <strong style={{ fontSize: 11, fontWeight: 700 }}>{exp.company}</strong>
                    <span style={{ fontSize: 10.5, color: "#444" }}>{exp.duration}</span>
                  </div>
                  {exp.role && <p style={{ fontSize: 10.5, fontStyle: "italic", color: "#444", marginTop: 1 }}>{exp.role}</p>}
                  {exp.bullets.some(b => b) && (
                    <ul style={{ paddingLeft: 16, margin: "4px 0 0", listStyleType: "disc" }}>
                      {exp.bullets.map((b, bi) => b && (
                        <li key={bi} style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45, marginBottom: 2 }}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* --- Education --- */}
      {data.education.some(e => e.institution || e.degree) && (
        <div style={{ marginBottom: 14 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", borderBottom: "1.5px solid #000", paddingBottom: 3, marginBottom: 8 }}>
            Education
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.education.map((edu, i) =>
              (edu.institution || edu.degree) && (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <strong style={{ fontSize: 11, fontWeight: 700 }}>{edu.degree}</strong>
                    <span style={{ fontSize: 10.5, color: "#444" }}>{edu.year}</span>
                  </div>
                  <p style={{ fontSize: 10.5, color: "#444", marginTop: 1 }}>{edu.institution}</p>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* --- Key Achievements --- */}
      {data.achievements.some(a => a.title || a.description) && (
        <div style={{ marginBottom: 14 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", borderBottom: "1.5px solid #000", paddingBottom: 3, marginBottom: 8 }}>
            Key Achievements
          </h2>
          <ul style={{ paddingLeft: 16, margin: 0, listStyleType: "disc" }}>
            {data.achievements.map((ach, i) =>
              (ach.title || ach.description) && (
                <li key={i} style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45, marginBottom: 4 }}>
                  {ach.title && <strong style={{ color: "#000" }}>{ach.title}:</strong>}{" "}
                  {ach.description}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* --- Projects / Additional Experience --- */}
      {data.projects.some(p => p.title || p.description) && (
        <div style={{ marginBottom: 14 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", borderBottom: "1.5px solid #000", paddingBottom: 3, marginBottom: 8 }}>
            Additional Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.projects.map((proj, i) =>
              (proj.title || proj.description) && (
                <div key={i}>
                  <strong style={{ fontSize: 11, fontWeight: 700 }}>{proj.title}</strong>
                  {proj.description && (
                    <p style={{ fontSize: 10.5, color: "#444", lineHeight: 1.45, marginTop: 2 }}>{proj.description}</p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Empty state */}
      {!data.fullName && !data.summary && !data.experience.some(e => e.company) && (
        <div style={{ textAlign: "center", padding: "60px 0", opacity: 0.3 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📄</div>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, fontWeight: 700 }}>
            Start filling in the form to see your resume
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Builder Header */}
      <div className="border-b-1 bg-background flex items-center justify-between px-3 lg:px-8 h-14 lg:h-16">
        <div className="flex items-center gap-2 lg:gap-4">
          <Link href="/templates" className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-muted hover:text-primary min-h-[44px] flex items-center">← Back</Link>
          <span className="text-muted hidden sm:inline">|</span>
          <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest hidden sm:inline">{templateName}</span>
        </div>
        {/* Mobile Form/Preview toggle — large tap targets */}
        <div className="flex lg:hidden items-center border-1 overflow-hidden">
          <button onClick={() => setMobilePanel("form")} className={`px-4 min-h-[40px] text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${mobilePanel === "form" ? "bg-text text-white" : "text-muted"}`}>Form</button>
          <button onClick={() => setMobilePanel("preview")} className={`px-4 min-h-[40px] text-[10px] font-bold uppercase tracking-widest border-l-1 transition-colors cursor-pointer ${mobilePanel === "preview" ? "bg-text text-white" : "text-muted"}`}>Preview</button>
        </div>
        <div className="flex items-center gap-2 lg:gap-3">
          <button onClick={handleSaveDraft} className="hidden sm:flex items-center px-4 lg:px-5 min-h-[40px] border-1 text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-text hover:text-white transition-colors">Save Draft</button>
          <button onClick={handleDownloadPDF} disabled={isGenerating} className="flex items-center px-3 lg:px-5 min-h-[40px] bg-primary text-white text-[10px] lg:text-xs font-bold uppercase tracking-widest btn-brutalist hover:bg-text disabled:opacity-50 disabled:cursor-not-allowed">
            {isGenerating ? "Generating..." : "Download PDF"}
          </button>
        </div>
      </div>

      {/* Main Builder Area — use 100dvh to handle Android URL bar correctly */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden" style={{ height: "calc(100dvh - 56px)" }}>
        {/* LEFT: Form Panel */}
        <div className={`w-full lg:w-[480px] border-r-1 bg-white flex-shrink-0 overflow-y-auto ${mobilePanel === "preview" ? "hidden lg:block" : ""}`}>
          {/* Section Tabs — horizontally scrollable, no-scrollbar */}
          <div className="border-b-1 flex overflow-x-auto no-scrollbar">
            {sections.map((section) => (
              <button key={section.id} onClick={() => setActiveSection(section.id)} className={`px-4 min-h-[44px] text-[10px] font-bold uppercase tracking-widest whitespace-nowrap border-r-1 transition-colors cursor-pointer ${activeSection === section.id ? "bg-text text-white" : "text-muted hover:bg-background"}`}>
                {section.label}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="p-4 md:p-6 space-y-5 md:space-y-6">
            {activeSection === "personal" && renderPersonalForm()}
            {activeSection === "summary" && renderSummaryForm()}
            {activeSection === "expertise" && renderExpertiseForm()}
            {activeSection === "experience" && renderExperienceForm()}
            {activeSection === "education" && renderEducationForm()}
            {activeSection === "skills" && renderSkillsForm()}
            {activeSection === "achievements" && renderAchievementsForm()}
            {activeSection === "projects" && renderProjectsForm()}
          </div>
        </div>

        {/* RIGHT: Live Preview */}
        <div className={`flex-1 bg-[#e8e8e8] p-3 sm:p-6 lg:p-12 overflow-y-auto flex justify-center ${mobilePanel === "form" ? "hidden lg:flex" : ""}`}>
          {/* A4 Page Container */}
          <div
            ref={previewRef}
            className={`bg-white shadow-lg border-1 ${isFounders ? "" : "p-8 lg:p-12"}`}
            style={{
              width: "100%",
              maxWidth: isFounders ? 794 : 640,
              padding: isFounders ? 40 : undefined,
              minHeight: isFounders ? 1123 : 842,
            }}
          >
            <div>
              {/* Founder's Favorite */}
              {template === "founders-favorite" && renderFoundersPreview()}

              {/* Professional */}
              {template === "professional" && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl font-black uppercase tracking-tight">{data.fullName || "Your Name"}</h1>
                    <p className="text-sm text-primary font-bold uppercase mt-1">{data.jobTitle || "Your Title"}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted mt-2">
                      {data.email && <span>{data.email}</span>}
                      {data.phone && <span>{data.phone}</span>}
                      {data.location && <span>{data.location}</span>}
                    </div>
                  </div>
                  <div className="w-full h-px bg-text"></div>
                  {data.summary && (<div><h2 className="text-xs font-bold uppercase tracking-widest mb-2">Summary</h2><p className="text-sm text-muted leading-relaxed">{data.summary}</p></div>)}
                  {data.experience.some(e => e.company || e.role) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest mb-3">Experience</h2>
                      <div className="space-y-4">
                        {data.experience.map((exp, i) => (exp.company || exp.role) && (
                          <div key={i}>
                            <div className="flex justify-between items-baseline"><strong className="text-sm">{exp.company}</strong><span className="text-xs text-muted">{exp.duration}</span></div>
                            <p className="text-sm italic text-muted mt-0.5">{exp.role}</p>
                            {exp.bullets.some(b => b) && (<ul className="list-disc pl-4 mt-1 space-y-0.5">{exp.bullets.map((b, bi) => b && (<li key={bi} className="text-sm text-muted">{b}</li>))}</ul>)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.education.some(e => e.institution || e.degree) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest mb-3">Education</h2>
                      <div className="space-y-2">
                        {data.education.map((edu, i) => (edu.institution || edu.degree) && (
                          <div key={i} className="flex justify-between items-baseline"><div><strong className="text-sm">{edu.institution}</strong><p className="text-sm text-muted">{edu.degree}</p></div><span className="text-xs text-muted">{edu.year}</span></div>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.skills.some(s => s) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest mb-2">Skills</h2>
                      <div className="flex flex-wrap gap-1.5">{data.skills.map((skill, i) => skill && (<span key={i} className="px-2 py-0.5 bg-background border-1 text-xs font-medium">{skill}</span>))}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Executive */}
              {template === "executive" && (
                <div className="space-y-6 font-serif">
                  <div className="text-center">
                    <h1 className="text-2xl font-black uppercase tracking-tight">{data.fullName || "Your Name"}</h1>
                    <p className="text-sm text-muted italic mt-1">{data.jobTitle || "Your Title"} {data.location && `• ${data.location}`}</p>
                    <div className="flex justify-center gap-4 text-xs text-muted mt-2">{data.email && <span>{data.email}</span>}{data.phone && <span>{data.phone}</span>}</div>
                  </div>
                  <div className="w-full border-b-2 border-text"></div>
                  {data.summary && (<div className="text-center"><h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-2">Executive Profile</h2><p className="text-sm text-muted leading-relaxed">{data.summary}</p></div>)}
                  {data.experience.some(e => e.company || e.role) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-center mb-3">Experience</h2>
                      <div className="space-y-4">
                        {data.experience.map((exp, i) => (exp.company || exp.role) && (
                          <div key={i}>
                            <div className="flex justify-between items-baseline"><strong className="text-sm">{exp.company}</strong><span className="text-xs text-muted italic">{exp.duration}</span></div>
                            <p className="text-sm italic text-muted mt-0.5">{exp.role}</p>
                            {exp.bullets.some(b => b) && (<ul className="list-disc pl-4 mt-1 space-y-0.5">{exp.bullets.map((b, bi) => b && (<li key={bi} className="text-sm text-muted">{b}</li>))}</ul>)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.education.some(e => e.institution || e.degree) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-center mb-3">Education</h2>
                      <div className="space-y-2">{data.education.map((edu, i) => (edu.institution || edu.degree) && (<div key={i} className="text-center"><strong className="text-sm">{edu.institution}</strong><p className="text-sm text-muted">{edu.degree} — {edu.year}</p></div>))}</div>
                    </div>
                  )}
                  {data.skills.some(s => s) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-center mb-2">Core Competencies</h2>
                      <p className="text-sm text-muted text-center">{data.skills.filter(s => s).join(" • ")}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Tech Lead */}
              {template === "tech-lead" && (
                <div className="space-y-6 font-mono">
                  <div>
                    <h1 className="text-2xl font-black uppercase tracking-tight text-primary">{data.fullName || "Your Name"}</h1>
                    <p className="text-xs text-muted tracking-widest mt-1">{data.jobTitle || "Your Title"}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted mt-2">{data.email && <span>{data.email}</span>}{data.phone && <span>{data.phone}</span>}{data.location && <span>{data.location}</span>}</div>
                  </div>
                  <div className="w-full border-b border-dashed border-muted"></div>
                  {data.summary && (<div><h2 className="text-xs font-bold uppercase tracking-widest mb-2">About</h2><p className="text-sm text-muted leading-relaxed">{data.summary}</p></div>)}
                  {data.experience.some(e => e.company || e.role) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest mb-3">Technical Experience</h2>
                      <div className="space-y-4">
                        {data.experience.map((exp, i) => (exp.company || exp.role) && (
                          <div key={i}>
                            <div className="flex justify-between items-baseline"><strong className="text-sm text-primary">{exp.company}</strong><span className="text-xs text-muted">{exp.duration}</span></div>
                            <p className="text-xs text-muted mt-0.5">{exp.role}</p>
                            {exp.bullets.some(b => b) && (<ul className="mt-1 space-y-0.5">{exp.bullets.map((b, bi) => b && (<li key={bi} className="text-sm text-muted">→ {b}</li>))}</ul>)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {data.education.some(e => e.institution || e.degree) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest mb-3">Education</h2>
                      <div className="space-y-2">{data.education.map((edu, i) => (edu.institution || edu.degree) && (<div key={i}><strong className="text-sm text-primary">{edu.institution}</strong><p className="text-xs text-muted">{edu.degree} [{edu.year}]</p></div>))}</div>
                    </div>
                  )}
                  {data.skills.some(s => s) && (
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest mb-2">Tech Stack</h2>
                      <div className="flex flex-wrap gap-1.5">{data.skills.map((skill, i) => skill && (<span key={i} className="px-2 py-0.5 border border-dashed border-muted text-xs">{skill}</span>))}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Empty state for non-founders */}
              {template !== "founders-favorite" && !data.fullName && !data.summary && !data.experience.some(e => e.company) && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="text-6xl mb-4 opacity-10">📄</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted">Start filling in the form to see your resume</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuildPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xs font-bold uppercase tracking-widest text-muted animate-pulse">Loading Builder...</p>
      </div>
    }>
      <BuilderContent />
    </Suspense>
  );
}
