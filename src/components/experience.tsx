import { experienceData } from "@/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

function RichText({ text }: { text: string }) { const parts = text.split(/(\*\*.*?\*\*)/g); return <>{parts.map((part, index) => part.startsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part)}</>; }

export function Experience() {
  const experience = experienceData[0];
  return <section id="experience" className="section-shell border-t border-border">
    <SectionHeading index="02" label="Experience" title="Three months inside the system." description="A completed programming internship at Medusa Technology, June through August 2026." />
    <Reveal className="experience-layout">
      <aside className="timeline-rail" aria-label="Internship timeline"><div><span>Jun</span><small>Start</small></div><div><span>Jul</span><small>Build</small></div><div><span>Aug</span><small>Completed</small></div></aside>
      <article className="experience-story">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow mb-3">{experience.status} / {experience.location}</p><h3>{experience.role}</h3><p className="mt-2 text-lg text-muted-foreground">{experience.company}</p></div><span className="status-stamp">Jun—Aug 2026</span></div>
        <ul className="contribution-list">{experience.achievements.map((item, index) => <li key={item}><span>0{index + 1}</span><p><RichText text={item} /></p></li>)}</ul>
      </article>
    </Reveal>
  </section>;
}
