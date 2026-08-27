import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data";
import { Reveal } from "@/components/reveal";

const selectedIds = ["ai-moderator-2026", "medusa-simulator-2026", "nexevent-2026"];

export function HomeSelectedWork() {
  const selected = selectedIds.flatMap((id) => { const project = projectsData.find((item) => item.id === id); return project ? [project] : []; });
  return <section id="projects" className="home-section home-work-section" aria-labelledby="selected-work-title"><header className="home-section-heading"><div><p className="section-kicker"><span>02</span><span>Projects</span></p><h2 id="selected-work-title">Selected projects.</h2><p className="section-lede">A few systems I have built, with the details kept on their own pages.</p></div><Link href="/projects" className="text-action">All projects <ArrowUpRight /></Link></header><div className="home-project-grid">{selected.map((project, index) => <Reveal key={project.id} delay={index * .07} className="home-project-card-wrap"><Link href={`/projects/${project.id}`} className="home-project-card"><div className="home-project-media"><Image src={project.screenshot} alt={`${project.title} interface preview`} fill sizes="(max-width: 767px) calc(100vw - 40px), 30vw" className="object-contain" /><span className="project-card-index">0{index + 1}</span><span className="project-card-year">{project.year}</span></div><div className="home-project-copy"><p className="project-card-type">Project</p><h3>{project.title}</h3><p>{project.subtitle.replace(/[\-–—/&:+]/g, " ").replace(/\s+/g, " ").trim()}</p><span className="case-action">View project <ArrowUpRight /></span></div></Link></Reveal>)}</div></section>;
}
