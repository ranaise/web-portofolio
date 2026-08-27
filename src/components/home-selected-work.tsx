import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data";

const selectedIds = ["ai-moderator-2026", "medusa-simulator-2026", "nexevent-2026"];

export function HomeSelectedWork() {
  const selected = selectedIds.flatMap((id) => { const project = projectsData.find((item) => item.id === id); return project ? [project] : []; });
  return <section className="home-section" aria-labelledby="selected-work-title"><header className="home-section-heading"><div><p className="chapter-label">Chapter 01 / Selected work</p><h2 id="selected-work-title">Three systems worth opening.</h2></div><Link href="/projects" className="text-action">View all projects <ArrowUpRight /></Link></header><div className="home-work-grid">{selected.map((project, index) => <article key={project.id} className={index === 0 ? "home-project home-project-lead" : "home-project"}><Link href={`/projects/${project.id}`} className="home-project-link"><div className="home-project-image"><Image src={project.screenshot} alt={`${project.title} interface preview`} fill sizes={index === 0 ? "(max-width: 767px) calc(100vw - 40px), 58vw" : "(max-width: 767px) calc(100vw - 40px), 36vw"} className="object-cover" /></div><div className="home-project-copy"><p className="project-number">0{index + 1} / {project.year}</p><h3>{project.title}</h3><p>{project.subtitle}</p><span className="case-action">Open case study <ArrowUpRight /></span></div></Link></article>)}</div></section>;
}
