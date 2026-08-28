import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data";
import { projectsData } from "@/data";
import { BotanicalDecoration } from "@/components/botanical-decoration";
import { Reveal } from "@/components/reveal";

const internshipProjectIds = ["ai-moderator-2026", "medusa-simulator-2026"];

function ProjectAtlasCard({ project, index }: { project: ProjectItem; index: number }) {
  const isInternship = internshipProjectIds.includes(project.id);
  return (
    <Reveal className={`project-atlas-card atlas-card-${index + 1}${isInternship ? " is-internship" : ""}`} delay={index * 0.06}>
      <Link href={`/projects/${project.id}`} className="project-atlas-link">
        <div className="project-atlas-frame">
          <Image
            src={project.screenshot}
            alt={`${project.title} interface preview`}
            fill
            sizes="(max-width: 767px) 47vw, (max-width: 1100px) 42vw, 58vw"
            className="object-contain"
          />
          <span className="project-atlas-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-atlas-open">Open <ArrowUpRight /></span>
        </div>
        <div className="project-atlas-cardline">
          <div className="project-atlas-title">
            <span>{isInternship ? "Internship work" : "Project"}</span>
            <h3>{project.title}</h3>
          </div>
          <div className="project-atlas-meta">
            <span>{project.year}</span>
            <span>{project.technologies.slice(0, 3).join(", ")}</span>
            <ArrowUpRight aria-hidden="true" />
          </div>
        </div>
        <p className="project-atlas-subtitle">{project.subtitle}</p>
      </Link>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section className="projects-atlas" aria-label="All projects">
      <BotanicalDecoration className="projects-atlas-botanical" />
      <header className="projects-atlas-header">
        <div>
          <p className="section-kicker"><span>01</span><span>Project archive</span></p>
          <h2>Built across screens and systems</h2>
        </div>
        <div className="projects-atlas-count">
          <strong>{String(projectsData.length).padStart(2, "0")}</strong>
          <p>Projects from 2025 to 2026, covering backend systems, AI tools, mobile applications, and interactive software.</p>
        </div>
      </header>
      <div className="projects-atlas-toolbar">
        <p><span>02</span> All projects</p>
        <p>Each frame opens the full build</p>
      </div>
      <div className="project-atlas-grid">
        {projectsData.map((project, index) => <ProjectAtlasCard key={project.id} project={project} index={index} />)}
      </div>
      <footer className="projects-atlas-footer">
        <span>03</span>
        <p>Selected work is on Home. This archive keeps the rest of the work close by.</p>
        <Link href="/#contact" className="text-action">Start a conversation <ArrowUpRight /></Link>
      </footer>
    </section>
  );
}
