"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface LightboxProps { isOpen: boolean; onClose: () => void; title: string; images: string[]; initialIndex?: number; description?: React.ReactNode; }
export function LightboxDialog({ isOpen, onClose, title, images, initialIndex = 0, description }: LightboxProps) {
  const [index, setIndex] = React.useState(initialIndex);
  const move = React.useCallback((delta: number) => setIndex((value) => (value + delta + images.length) % images.length), [images.length]);
  React.useEffect(() => { if (!isOpen) return; const handler = (event: KeyboardEvent) => { if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, [isOpen, move]);
  if (!images.length) return null;
  return <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}><DialogContent className="lightbox-content grid max-h-[92svh] max-w-[calc(100%-1rem)] grid-cols-1 overflow-hidden bg-[#17130f] p-0 text-[#fffaf0] sm:max-w-6xl lg:grid-cols-[minmax(0,1fr)_330px]">
    <div className="lightbox-stage">
      <div className="lightbox-stage-meta"><span>Image detail</span><span>{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></div>
      <Image key={`${images[index]}-${index}`} src={images[index]} alt={`${title}, image ${index + 1}`} fill preload sizes="(max-width: 1024px) 100vw, 70vw" className="lightbox-image object-contain" />
      {images.length > 1 && <><Button variant="outline" size="icon" className="lightbox-nav lightbox-nav-previous" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></Button><Button variant="outline" size="icon" className="lightbox-nav lightbox-nav-next" onClick={() => move(1)} aria-label="Next image"><ChevronRight /></Button></>}
    </div>
    <div className="lightbox-panel">
      <div className="lightbox-panel-kicker"><span>View detail</span><span>Use arrows to browse</span></div>
      <DialogTitle className="lightbox-title">{title}</DialogTitle>
      {description && <DialogDescription className="lightbox-description">{description}</DialogDescription>}
      {images.length > 1 && <div className="lightbox-thumbnails" aria-label="Choose image">{images.map((image, imageIndex) => <button key={image} type="button" className={imageIndex === index ? "is-active" : undefined} onClick={() => setIndex(imageIndex)} aria-label={`View image ${imageIndex + 1}`} aria-current={imageIndex === index ? "true" : undefined}><span><Image src={image} alt="" fill sizes="76px" className="object-contain" /></span></button>)}</div>}
    </div>
  </DialogContent></Dialog>;
}
