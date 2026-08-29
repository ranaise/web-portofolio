"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Layers, ZoomIn } from "lucide-react";
import type { ProjectGalleryItem } from "@/data";

const LightboxDialog = dynamic(() => import("@/components/ui/lightbox-dialog").then((mod) => mod.LightboxDialog));

export function ProjectGallery({ items }: { items: ProjectGalleryItem[] }) {
  const [active, setActive] = useState<ProjectGalleryItem | null>(null);

  return (
    <>
      <div className="project-gallery-grid" role="region" aria-label="Screens and scenes. Swipe to browse.">
        {items.map((item, index) => (
          <button key={item.id} type="button" className={`project-gallery-card gallery-card-${(index % 3) + 1}`} onClick={() => setActive(item)}>
            <span className="project-gallery-image">
              <Image src={item.images[0]} alt={item.label} fill sizes="(max-width: 767px) 86vw, 42vw" className="object-contain" draggable={false} />
              <span className="project-gallery-hover"><ZoomIn /></span>
              {item.images.length > 1 && <span className="project-gallery-count"><Layers />{item.images.length}</span>}
            </span>
            <span className="project-gallery-caption">
              <span className="project-gallery-number">{String(index + 1).padStart(2, "0")}</span>
              <span><strong>{item.label}</strong><small>{item.description}</small></span>
            </span>
          </button>
        ))}
      </div>
      {active && <LightboxDialog isOpen onClose={() => setActive(null)} title={active.label} images={active.images} description={<div className="space-y-5"><p>{active.description}</p><div><strong className="eyebrow text-[#fffaf0]">Workflow</strong><p className="mt-2">{active.workflow}</p></div><ul className="list-disc space-y-2 pl-4">{active.coreLogic.map((item) => <li key={item}>{item}</li>)}</ul></div>} />}
    </>
  );
}
