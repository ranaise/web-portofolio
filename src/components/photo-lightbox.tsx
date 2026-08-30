"use client";

import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";
import { ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const LightboxDialog = dynamic(() => import("@/components/ui/lightbox-dialog").then((mod) => mod.LightboxDialog));

interface PhotoLightboxProps {
  images: string[];
  title: string;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function PhotoLightbox({ images, title, description, className, children }: PhotoLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className={cn("photo-lightbox-trigger", className)} onClick={() => setIsOpen(true)} aria-label={`View ${title} in detail`}>
        {children}
        <span className="photo-lightbox-overlay" aria-hidden="true"><ZoomIn /></span>
      </button>
      {isOpen && <LightboxDialog isOpen onClose={() => setIsOpen(false)} title={title} images={images} description={description ?? <p>A closer look at {title}.</p>} />}
    </>
  );
}
