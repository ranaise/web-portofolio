import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projectsData, projectDetails } from "@/data";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { ProjectGallery } from "@/components/project-gallery";
import { TechnicalTags } from "@/components/technical-tags";
import { PhotoLightbox } from "@/components/photo-lightbox";

interface PageProps { params: Promise<{ id: string }>; }

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((item) => item.id === id);
  if (!project) return {};
  return { title: project.title, description: project.overview, openGraph: { title: project.title, description: project.overview, images: [project.screenshot] } };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((item) => item.id === id);
  const details = projectDetails[id];
  if (!project || !details) notFound();

  const galleries = [...(details.gallery.mobile ?? []), ...(details.gallery.web ?? [])];
  const projectNumber = projectsData.findIndex((item) => item.id === project.id) + 1;
  const isInternship = id === "ai-moderator-2026" || id === "medusa-simulator-2026";
  const projectType = isInternship ? "Internship project" : "Academic and personal project";
  const architectureTitle = id === "medusa-simulator-2026" ? "From code to visible results" : id === "ai-moderator-2026" ? "From chat to clear action" : "How the system is connected";
  const heroImages = [details.image, ...(project.mobileScreenshot ? [project.mobileScreenshot] : [])];
  const sectionLinks = [
    { href: "#overview", label: "Overview" },
    ...(details.architecture ? [{ href: "#architecture", label: "Architecture" }] : []),
    { href: "#technical-work", label: "Technical work" },
    { href: "#features", label: "Features" },
    ...(galleries.length > 0 ? [{ href: "#gallery", label: "Gallery" }] : []),
  ];

  return (
    <>
      <Navbar />
      <main className="project-dossier">
      <nav className="project-dossier-nav" aria-label="Project navigation">
        <Link href="/projects"><ArrowLeft /> <span>All projects</span></Link>
        <span>Project {String(projectNumber).padStart(2, "0")} of {String(projectsData.length).padStart(2, "0")}</span>
      </nav>

      <header className="project-dossier-hero">
        <div className="project-dossier-hero-copy">
          <div className="project-dossier-kicker"><span>{String(projectNumber).padStart(2, "0")}</span><span>{projectType}</span><span>{project.year}</span></div>
          <h1>{project.title}</h1>
          <p className="project-dossier-subtitle">{project.subtitle}</p>
          <p className="project-dossier-overview">{project.overview}</p>
          <TechnicalTags items={project.technologies} className="project-dossier-tags" />
        </div>
        <div className="project-dossier-hero-media">
          <PhotoLightbox images={heroImages} title={`${project.title} interface preview`} description={<p>{details.alt}. Open the second frame to compare the mobile view when available.</p>} className="project-dossier-hero-media-trigger"><Image src={details.image} alt={details.alt} fill preload sizes="(max-width: 767px) 100vw, 60vw" className="object-contain" /></PhotoLightbox>
          <span>Interface preview</span>
        </div>
      </header>

      <div className="project-dossier-signalbar">
        <div><span>Build type</span><strong>{projectType}</strong></div>
        <div><span>Year</span><strong>{project.year}</strong></div>
        <div><span>Contribution</span><strong>{project.contribution}</strong></div>
      </div>

      {(project.github || project.demo) && <div className="project-dossier-hero-actions">
        {project.github && <Link href={project.github} target="_blank" rel="noreferrer">Source code <GithubIcon /></Link>}
        {project.demo && <Link href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></Link>}
      </div>}

      <div className="project-dossier-layout">
        <aside className="project-dossier-aside">
          <p className="chapter-label">On this page</p>
          <nav aria-label="Project sections">
            {sectionLinks.map((item, index) => <a key={item.href} href={item.href}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</a>)}
          </nav>
        </aside>

        <div className="project-dossier-content">
          <section id="overview" className="project-dossier-section project-dossier-overview-section">
            <div className="project-dossier-section-mark"><span>01</span><p>Overview</p></div>
            <div className="project-dossier-section-body">
              <h2>{id === "ai-moderator-2026" ? "Moderation with clear control" : id === "medusa-simulator-2026" ? "Making algorithms easier to understand" : "Project goals"}</h2>
              <div className="project-dossier-copy"><p>{details.description}</p><p>{details.workflow}</p></div>
            </div>
          </section>

          {details.architecture && <section id="architecture" className="project-dossier-section project-dossier-architecture-section">
            <div className="project-dossier-section-mark"><span>02</span><p>Architecture</p></div>
            <div className="project-dossier-section-body">
              <div className="project-dossier-section-heading"><h2>{architectureTitle}</h2><p>A traceable path from input to output, with each layer visible.</p></div>
              <ArchitectureFlow steps={details.architecture} />
            </div>
          </section>}

          <section id="technical-work" className="project-dossier-section">
            <div className="project-dossier-section-mark"><span>{details.architecture ? "03" : "02"}</span><p>Technical work</p></div>
            <div className="project-dossier-section-body">
              <h2>{id === "medusa-simulator-2026" ? "Execution, evaluation, and playback" : "Core technical decisions"}</h2>
              <ol className="project-logic-grid">{details.coreLogic.map((logic, index) => <li key={logic}><span>{String(index + 1).padStart(2, "0")}</span><p>{logic}</p></li>)}</ol>
            </div>
          </section>

          <section id="features" className="project-dossier-section">
            <div className="project-dossier-section-mark"><span>{details.architecture ? "04" : "03"}</span><p>Features</p></div>
            <div className="project-dossier-section-body">
              <h2>What it can do</h2>
              <div className="project-feature-grid">{details.features.map((feature, index) => <article key={feature.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.desc}</p></article>)}</div>
            </div>
          </section>

          {galleries.length > 0 && <section id="gallery" className="project-dossier-section project-dossier-gallery-section">
            <div className="project-dossier-section-mark"><span>{details.architecture ? "05" : "04"}</span><p>Gallery</p></div>
            <div className="project-dossier-section-body"><div className="project-dossier-section-heading"><h2>Screens and scenes</h2><p>Swipe through the screens and scenes. Open a frame for details.</p></div><ProjectGallery items={galleries} /></div>
          </section>}

          {project.videoDemo && <section className="project-dossier-section project-dossier-demo-section">
            <div className="project-dossier-section-mark"><span>{details.architecture ? "06" : "05"}</span><p>Demo</p></div>
            <div className="project-dossier-section-body"><h2>See it in motion</h2><video controls preload="metadata" poster={project.screenshot}><source src={project.videoDemo} type="video/mp4" /></video></div>
          </section>}
        </div>
      </div>

      </main>
      <Footer />
    </>
  );
}
