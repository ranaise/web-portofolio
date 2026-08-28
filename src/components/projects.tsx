import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data";
import { projectsData } from "@/data";
import { BotanicalDecoration } from "@/components/botanical-decoration";
import { Reveal } from "@/components/reveal";

const internshipProjectIds = ["ai-moderator-2026", "medusa-simulator-2026"];

function ProjectIndexCard({
  project,
  number,
  compact = false,
  category,
}: {
  project: ProjectItem;
  number: number;
  compact?: boolean;
  category: string;
}) {
  const cardClass = compact ? "project-index-card is-compact" : "project-index-card";

  return (
    <Reveal className={cardClass} delay={number * 0.045}>
      <Link href={`/projects/${project.id}`} className="project-index-link">
        <div className="project-index-media">
          <Image
            src={project.screenshot}
            alt={`${project.title} interface preview`}
            fill
            sizes={compact ? "(max-width: 767px) 46vw, 31vw" : "(max-width: 767px) calc(100vw - 40px), 50vw"}
            className="object-contain"
          />
          <span className="project-index-corner">{String(number).padStart(2, "0")}</span>
          <span className="project-index-view">Open project <ArrowUpRight /></span>
        </div>
        <div className="project-index-copy">
          <div className="project-index-meta">
            <span>{category}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <div className="project-index-foot">
            <span>{project.technologies.slice(0, compact ? 2 : 4).join(", ")}</span>
            <ArrowUpRight aria-hidden="true" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function Projects() {
  const internshipProjects = projectsData.filter((project) => internshipProjectIds.includes(project.id));
  const otherProjects = projectsData.filter((project) => !internshipProjectIds.includes(project.id));

  return (
    <section className="projects-index-v2" aria-label="All projects">
      <BotanicalDecoration className="projects-index-v2-botanical" />

      <div className="projects-index-v2-intro">
        <div>
          <p className="section-kicker"><span>01</span><span>Project index</span></p>
          <h2>Things I built and learned from</h2>
        </div>
        <p><strong>{String(projectsData.length).padStart(2, "0")}</strong> projects across backend systems, AI tools, mobile applications, and interactive software.</p>
      </div>

      <section className="project-shelf project-shelf-internship" aria-labelledby="internship-projects-title">
        <header className="project-shelf-header">
          <div>
            <p className="chapter-label">02, Internship work</p>
            <h3 id="internship-projects-title">Systems that connect code and worlds</h3>
          </div>
          <p>Two connected systems built during my programming internship at Medusa Technology.</p>
        </header>
        <div className="project-index-feature-grid">
          {internshipProjects.map((project, index) => (
            <ProjectIndexCard key={project.id} project={project} number={index + 1} category="Internship" />
          ))}
        </div>
      </section>

      <section className="project-shelf project-shelf-other" aria-labelledby="other-projects-title">
        <header className="project-shelf-header">
          <div>
            <p className="chapter-label">03, Other projects</p>
            <h3 id="other-projects-title">A wider range of experiments</h3>
          </div>
          <p>Academic and personal work across web, mobile, artificial intelligence, and computer vision.</p>
        </header>
        <div className="project-index-mini-grid">
          {otherProjects.map((project, index) => (
            <ProjectIndexCard key={project.id} project={project} number={index + internshipProjects.length + 1} category="Project" compact />
          ))}
        </div>
      </section>
    </section>
  );
}
