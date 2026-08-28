import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data";
import { Reveal } from "@/components/reveal";
import { TechnicalTags } from "@/components/technical-tags";
import { BotanicalDecoration } from "@/components/botanical-decoration";
import { ProjectPreview } from "@/components/project-preview";

export function Projects() {
  const [featuredProject, ...otherProjects] = projectsData;

  return <section className="work-index projects-index" aria-label="Project list"><BotanicalDecoration className="projects-botanical" />
    <Reveal className="projects-featured">
      <Link href={`/projects/${featuredProject.id}`}>
        <div className="project-featured-image"><ProjectPreview title={featuredProject.title} slides={[featuredProject.screenshot, "/projects/ai-moderator/ai-moderator-world-object.webp"]} /></div>
        <div className="project-featured-copy"><div className="project-featured-topline"><span>01</span><span>Featured project</span></div><h2>{featuredProject.title}</h2><p>{featuredProject.subtitle}</p><TechnicalTags items={featuredProject.technologies.slice(0, 4)} className="mt-4" /><span className="case-action">View project <ArrowUpRight /></span></div>
      </Link>
    </Reveal>
    <div className="projects-catalog"><header className="projects-catalog-heading"><p className="section-kicker"><span>02</span><span>More projects</span></p><p>{String(otherProjects.length).padStart(2, "0")} projects</p></header>{otherProjects.map((project, index) => <Reveal key={project.id} delay={(index % 2) * .04} className="project-row"><Link href={`/projects/${project.id}`} className="project-row-link"><span className="project-row-number">{String(index + 2).padStart(2, "0")}</span><div className="project-row-copy"><h3>{project.title}</h3><p>{project.subtitle}</p><small>{project.technologies.slice(0, 3).join(", ")}</small></div><div className="project-row-image"><Image src={project.screenshot} alt={`${project.title} interface`} fill sizes="(max-width: 767px) 92px, 190px" className="object-contain" /></div><ArrowUpRight className="project-row-arrow" /></Link></Reveal>)}</div>
  </section>;
}
