import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data";
import { Reveal } from "@/components/reveal";
import { TechnicalTags } from "@/components/technical-tags";

export function Projects() {
  return <section className="work-index" aria-label="Project list">{projectsData.map((project, index) => <Reveal key={project.id} className="work-index-item" delay={(index % 2) * .04}><Link href={`/projects/${project.id}`}><div className="work-index-image"><Image src={project.screenshot} alt={`${project.title} interface`} fill sizes="(max-width: 767px) calc(100vw - 40px), 48vw" className="object-contain" /></div><div className="work-index-copy"><p className="project-number">{String(index + 1).padStart(2, "0")}, {project.year}</p><h2>{project.title}</h2><p>{project.subtitle}</p><TechnicalTags items={project.technologies.slice(0, 4)} className="mt-4" /><span className="case-action">View project <ArrowUpRight /></span></div></Link></Reveal>)}</section>;
}
