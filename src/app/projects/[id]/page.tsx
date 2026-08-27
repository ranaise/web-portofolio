import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projectsData, projectDetails } from "@/data";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { ProjectGallery } from "@/components/project-gallery";
import { TechnicalTags } from "@/components/technical-tags";

interface PageProps { params: Promise<{ id: string }>; }
export const dynamicParams = false;
export function generateStaticParams() { return projectsData.map(({ id }) => ({ id })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { id } = await params; const project = projectsData.find((item) => item.id === id); if (!project) return {}; return { title: `${project.title} — Rafa'Na'ilah Septia`, description: project.overview, openGraph: { title: project.title, description: project.overview, images: [project.screenshot] } }; }

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params; const project = projectsData.find((item) => item.id === id); const details = projectDetails[id]; if (!project || !details) notFound();
  const galleries = [...(details.gallery.mobile ?? []), ...(details.gallery.web ?? [])];
  return <main className="project-page"><nav className="project-nav"><Link href="/#projects"><ArrowLeft className="size-4" /> Selected work</Link><span>Case file / {project.year}</span></nav>
    <header className="project-hero"><div><p className="eyebrow">{project.subtitle}</p><h1>{project.title}</h1><p>{project.overview}</p><TechnicalTags items={project.technologies} className="mt-8" /></div><div className="relative min-h-[360px] overflow-hidden bg-secondary sm:min-h-[520px]"><Image src={details.image} alt={details.alt} fill priority sizes="(max-width: 768px) 100vw, 52vw" className="object-cover" /></div></header>
    <section className="project-section split-copy"><p className="eyebrow">01 / Context</p><div><h2>What the system needed to do.</h2><p>{details.description}</p><p>{details.workflow}</p></div></section>
    {details.architecture && <section className="project-section"><p className="eyebrow mb-8">02 / Architecture flow</p><ArchitectureFlow steps={details.architecture} /></section>}
    <section className="project-section split-copy"><p className="eyebrow">03 / Core logic</p><div><h2>Decisions below the surface.</h2><ol className="logic-list">{details.coreLogic.map((logic, index) => <li key={logic}><span>0{index + 1}</span><p>{logic}</p></li>)}</ol></div></section>
    {galleries.length > 0 && <section className="project-section"><div className="mb-8 flex items-end justify-between gap-5"><div><p className="eyebrow">04 / Interface evidence</p><h2 className="mt-4">The system in view.</h2></div><p className="hidden max-w-xs text-sm text-muted-foreground sm:block">Open any frame for workflow notes and a larger view.</p></div><ProjectGallery items={galleries} /></section>}
    {project.videoDemo && <section className="project-section"><p className="eyebrow mb-6">05 / Demo</p><video controls preload="metadata" poster={project.screenshot} className="aspect-video w-full bg-black"><source src={project.videoDemo} type="video/mp4" /></video></section>}
    <footer className="project-footer"><div><p className="eyebrow">Contribution</p><p>{project.contribution}</p></div><div className="flex flex-wrap gap-3">{project.github && <Link href={project.github} target="_blank" rel="noreferrer">Source <GithubIcon /></Link>}{project.demo && <Link href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></Link>}</div></footer>
  </main>;
}
