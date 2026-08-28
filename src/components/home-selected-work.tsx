import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, CalendarDays, Route } from "lucide-react";
import { projectsData } from "@/data";
import { Reveal } from "@/components/reveal";
import { BotanicalDecoration } from "@/components/botanical-decoration";

const selectedIds = ["ai-moderator-2026", "medusa-simulator-2026", "nexevent-2026"];
const projectIcons = { "ai-moderator-2026": Bot, "medusa-simulator-2026": Route, "nexevent-2026": CalendarDays };

export function HomeSelectedWork() {
  const selected = selectedIds.flatMap((id) => { const project = projectsData.find((item) => item.id === id); return project ? [project] : []; });
  return (
    <section id="projects" className="home-section home-work-section" aria-labelledby="selected-work-title"><BotanicalDecoration className="section-botanical section-botanical-right" />
      <header className="home-section-heading"><div><p className="section-kicker"><span>03</span><span>Projects</span></p><h2 id="selected-work-title">Selected work</h2><p className="section-lede">Three projects that show how I work across backend systems, artificial intelligence, and interactive products.</p></div><Link href="/projects" className="text-action">All projects <ArrowUpRight /></Link></header>
      <div className="home-project-grid">{selected.map((project, index) => {
        const Icon = projectIcons[project.id as keyof typeof projectIcons] ?? Route;
        return <Reveal key={project.id} delay={index * .08} className="home-project-card-wrap"><Link href={`/projects/${project.id}`} className="home-project-card"><div className="home-project-media"><Image src={project.screenshot} alt={`${project.title} interface preview`} fill sizes="(max-width: 767px) calc(100vw - 40px), 30vw" className="object-contain" /><span className="project-card-index">0{index + 1}</span><span className="project-card-year">{project.year}</span></div><div className="home-project-copy"><span className="project-card-icon" aria-hidden="true"><Icon /></span><div><h3>{project.title}</h3><p>{project.subtitle}</p></div><span className="case-action">View project <ArrowUpRight /></span></div></Link></Reveal>;
      })}</div>
    </section>
  );
}
