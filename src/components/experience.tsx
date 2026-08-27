import { experienceData, orgExperienceData } from "@/data";
import { Reveal } from "@/components/reveal";

function RichText({ text }: { text: string }) { const parts = text.split(/(\*\*.*?\*\*)/g); return <>{parts.map((part, index) => part.startsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part)}</>; }

export function Experience() {
  const experience = experienceData[0];
  return <div className="experience-page-content"><Reveal className="experience-feature"><aside className="simple-timeline" aria-label="Internship timeline"><div><span>Jun</span><small>Start</small></div><div><span>Jul</span><small>Build</small></div><div><span>Aug</span><small>Complete</small></div></aside><article><div className="experience-title"><div><p className="chapter-label">{experience.status} / {experience.location}</p><h2>{experience.role}</h2><p>{experience.company}</p></div><span>Jun — Aug 2026</span></div><p className="experience-summary">Completed a programming internship focused on interactive virtual-world systems, real-time backend services, AI-assisted moderation, dashboards, and algorithm-learning simulations.</p><ul className="contribution-list">{experience.achievements.map((item, index) => <li key={item}><span>0{index + 1}</span><p><RichText text={item} /></p></li>)}</ul></article></Reveal><section className="additional-experience"><p className="chapter-label">Earlier chapters</p>{orgExperienceData.map((item) => <article key={item.id}><div><span>{item.duration}</span><h3>{item.role}</h3><p>{item.organization}</p></div><ul>{item.tasks.map((task) => <li key={task}>{task}</li>)}</ul></article>)}</section></div>;
}
