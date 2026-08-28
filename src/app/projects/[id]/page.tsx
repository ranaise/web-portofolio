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
export async function generateMetadata({ params }: PageProps): Promise<Metadata> { const { id } = await params; const project = projectsData.find((item) => item.id === id); if (!project) return {}; return { title: project.title, description: project.overview, openGraph: { title: project.title, description: project.overview, images: [project.screenshot] } }; }

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params; const project = projectsData.find((item) => item.id === id); const details = projectDetails[id]; if (!project || !details) notFound();
  const galleries = [...(details.gallery.mobile ?? []), ...(details.gallery.web ?? [])];
  const isModerator = id === "ai-moderator-2026";
  const isSimulator = id === "medusa-simulator-2026";
  return <main className="project-page"><nav className="project-nav"><Link href="/projects"><ArrowLeft className="size-4" /> All projects</Link><span>Project, {project.year}</span></nav>
    <header className="project-hero"><div><p className="eyebrow">{project.subtitle}</p><h1>{project.title}</h1><p>{project.overview}</p><TechnicalTags items={project.technologies} className="mt-8" /></div><div className="relative min-h-[360px] overflow-hidden bg-secondary sm:min-h-[520px]"><Image src={details.image} alt={details.alt} fill preload sizes="(max-width: 768px) 100vw, 52vw" className="object-contain" /></div></header>
    <section className="project-section split-copy"><p className="eyebrow">01, Overview and problem</p><div><h2>{isModerator ? "Moderation with clear control" : isSimulator ? "Making algorithms easier to understand" : "Project goals"}</h2><p>{details.description}</p><p>{details.workflow}</p></div></section>
    {details.architecture && <section className="project-section"><p className="eyebrow mb-8">02, Architecture</p><ArchitectureFlow steps={details.architecture} /></section>}
    <section className="project-section split-copy"><p className="eyebrow">03, Technical work</p><div><h2>{isSimulator ? "Execution, evaluation, and playback" : "Core technical decisions"}</h2><ol className="logic-list">{details.coreLogic.map((logic, index) => <li key={logic}><span>0{index + 1}</span><p>{logic}</p></li>)}</ol></div></section>
    <section className="project-section split-copy"><p className="eyebrow">04, Features</p><div><h2>Main features</h2><div className="feature-list">{details.features.map((feature, index) => <article key={feature.title}><span>0{index + 1}</span><div><h3>{feature.title}</h3><p>{feature.desc}</p></div></article>)}</div></div></section>
    {galleries.length > 0 && <section className="project-section"><div className="mb-8 flex items-end justify-between gap-5"><div><p className="eyebrow">05, Gallery</p><h2 className="mt-4">Project gallery</h2></div><p className="hidden max-w-xs text-sm text-muted-foreground sm:block">Open an image to view it at a larger size.</p></div><ProjectGallery items={galleries} /></section>}
    {project.videoDemo && <section className="project-section"><p className="eyebrow mb-6">06, Demo</p><video controls preload="metadata" poster={project.screenshot} className="aspect-video w-full bg-black"><source src={project.videoDemo} type="video/mp4" /></video></section>}
    <footer className="project-footer"><div><p className="eyebrow">Technical contribution</p><p>{project.contribution}</p>{details.keyLearning && <><p className="eyebrow mt-7">Key learning</p><p>{details.keyLearning}</p></>}</div><div><TechnicalTags items={project.technologies} className="mb-4 max-w-md" /><div className="flex flex-wrap gap-3">{project.github && <Link href={project.github} target="_blank" rel="noreferrer">Source code <GithubIcon /></Link>}{project.demo && <Link href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></Link>}</div></div></footer>
  </main>;
}
