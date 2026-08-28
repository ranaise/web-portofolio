import Image from "next/image";
import { experienceData, orgExperienceData } from "@/data";
import { Reveal } from "@/components/reveal";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return <>{parts.map((part, index) => part.startsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part)}</>;
}

export function Experience() {
  const experience = experienceData[0];
  return (
    <section id="experience" className="experience-page-content home-experience-block">
      <header className="experience-section-heading"><p className="section-kicker"><span>02</span><span>Experience</span></p><h2>Professional experience</h2><p>Technical and organizational experience with a focus on dependable systems and collaborative work.</p></header>
      <Reveal className="experience-feature"><aside className="simple-timeline" aria-label="Internship timeline"><div><span>Jun</span><small>Start</small></div><div><span>Jul</span><small>Build</small></div><div><span>Aug</span><small>Complete</small></div></aside><article><div className="experience-title"><div><p className="chapter-label">{experience.status}, {experience.location}</p><h2>{experience.role}</h2><p>{experience.company}</p></div><span>June to August 2026</span></div><div className="experience-page-photos"><div><Image src={experience.photos[0]} alt="Rafa with the Medusa Technology team" fill sizes="(max-width: 767px) calc(100vw - 72px), 48vw" className="object-contain" /></div><div><Image src={experience.photos[1]} alt="Virtual world environment at Medusa Technology" fill sizes="(max-width: 767px) calc(100vw - 72px), 26vw" className="object-contain" /></div></div><p className="experience-summary">Completed a programming internship focused on virtual world systems, realtime backend services, AI moderation, dashboards, and algorithm simulators.</p><ul className="contribution-list">{experience.achievements.map((item, index) => <li key={item}><span>0{index + 1}</span><p><RichText text={item} /></p></li>)}</ul></article></Reveal>
      <section className="additional-experience"><p className="chapter-label">Organization experience</p>{orgExperienceData.map((item) => <article key={item.id}><div><span>{item.duration}</span><h3>{item.role}</h3><p>{item.organization}</p></div><ul>{item.tasks.map((task) => <li key={task}>{task}</li>)}</ul></article>)}</section>
    </section>
  );
}
