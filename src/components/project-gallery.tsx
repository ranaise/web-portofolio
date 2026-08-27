"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Layers, ZoomIn } from "lucide-react";
import type { ProjectGalleryItem } from "@/data";

const LightboxDialog = dynamic(() => import("@/components/ui/lightbox-dialog").then((mod) => mod.LightboxDialog));
export function ProjectGallery({ items }: { items: ProjectGalleryItem[] }) {
  const [active, setActive] = useState<ProjectGalleryItem | null>(null);
  return <><div className="gallery-strip">{items.map((item) => <button key={item.id} type="button" className="gallery-tile group" onClick={() => setActive(item)}><span className="relative block aspect-[16/10] overflow-hidden"><Image src={item.images[0]} alt={item.label} fill sizes="(max-width: 640px) 82vw, 360px" className="object-cover transition duration-500 group-hover:scale-[1.03]" /><span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/35"><ZoomIn className="size-7 text-white opacity-0 transition group-hover:opacity-100" /></span>{item.images.length > 1 && <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 font-mono text-[10px] text-white"><Layers className="size-3" />{item.images.length}</span>}</span><span className="block p-4 text-left"><strong className="font-serif text-xl font-normal">{item.label}</strong><span className="mt-2 block text-sm leading-6 text-muted-foreground">{item.description}</span></span></button>)}</div>{active && <LightboxDialog isOpen onClose={() => setActive(null)} title={active.label} images={active.images} description={<div className="space-y-5"><p>{active.description}</p><div><strong className="eyebrow text-[#fffaf0]">Workflow</strong><p className="mt-2">{active.workflow}</p></div><ul className="list-disc space-y-2 pl-4">{active.coreLogic.map((item) => <li key={item}>{item}</li>)}</ul></div>} />}</>;
}
