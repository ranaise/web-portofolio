import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { certificationsData } from "@/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PhotoLightbox } from "@/components/photo-lightbox";

export function Certifications() { return <section id="certifications" className="section-shell"><SectionHeading index="05" label="Credentials" title="Certifications" description="Certificates from technology and artificial intelligence learning programs." /><div className="credential-grid" role="region" aria-label="Certifications. Swipe to browse.">{certificationsData.map((certification, index) => <Reveal key={certification.id} delay={index * .05}><article className="credential-card"><PhotoLightbox images={[certification.image]} title={`${certification.title}, ${certification.issuer}`} description={<p>{certification.issuer}, {certification.date}. Credential {certification.credentialId ?? "available online"}.</p>} className="credential-photo-trigger"><Image src={certification.image} alt={`${certification.title} certificate`} fill sizes="(max-width: 767px) 86vw, 33vw" className="object-contain p-4" draggable={false} /></PhotoLightbox><div className="p-5"><p className="chapter-label">{certification.issuer}, {certification.date}</p><h3 className="mt-3 text-2xl font-serif font-normal">{certification.title}</h3><Link href={certification.link} target="_blank" rel="noreferrer" className="text-action mt-3">View credential <ArrowUpRight className="size-4" /></Link></div></article></Reveal>)}</div></section>; }
