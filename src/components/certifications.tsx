import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { certificationsData } from "@/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
export function Certifications() { return <section id="certifications" className="section-shell"><SectionHeading index="05" label="Credentials" title="Certifications" description="Certificates from technology and artificial intelligence learning programs." /><div className="credential-grid">{certificationsData.map((certification, index) => <Reveal key={certification.id} delay={index * .05}><article className="credential-card"><div className="relative aspect-[16/10] overflow-hidden bg-white"><Image src={certification.image} alt={`${certification.title} certificate`} fill sizes="(max-width: 767px) calc(100vw - 40px), 33vw" className="object-contain p-4" /></div><div className="p-5"><p className="chapter-label">{certification.issuer}, {certification.date}</p><h3 className="mt-3 text-2xl font-serif font-normal">{certification.title}</h3><Link href={certification.link} target="_blank" rel="noreferrer" className="text-action mt-3">View credential <ArrowUpRight className="size-4" /></Link></div></article></Reveal>)}</div></section>; }
