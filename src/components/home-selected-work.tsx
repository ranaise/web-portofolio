import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data";

const selectedIds = ["ai-moderator-2026", "medusa-simulator-2026", "nexevent-2026"];

export function HomeSelectedWork() {
  const selected = selectedIds.flatMap((id) => { const project = projectsData.find((item) => item.id === id); return project ? [project] : []; });
  return <section className="home-section home-work-section" aria-labelledby="selected-work-title"><header className="home-section-heading"><div><p className="section-kicker"><span>01</span> Selected work</p><h2 id="selected-work-title">A few things I&apos;ve built lately.</h2><p className="section-lede">Small, considered case files from backend systems, AI workflows, and interactive worlds.</p></div><Link href="/projects" className="text-action">View all work <ArrowUpRight /></Link></header><div className="home-work-list">{selected.map((project, index) => <article key={project.id} className={`home-work-item ${index === 0 ? "is-featured" : ""}`}><Link href={`/projects/${project.id}`} className="home-work-row"><div className="home-work-media"><Image src={project.screenshot} alt={`${project.title} interface preview`} fill sizes={index === 0 ? "(max-width: 767px) calc(100vw - 40px), 46vw" : "(max-width: 767px) 34vw, 22vw"} className="object-cover" /></div><div className="home-work-copy"><div className="home-work-meta"><span>0{index + 1}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.subtitle}</p><span className="case-action">Read case study <ArrowUpRight /></span></div></Link></article>)}</div></section>;
}
