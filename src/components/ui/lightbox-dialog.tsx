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
  return <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}><DialogContent className="grid max-h-[92svh] max-w-[calc(100%-1rem)] grid-cols-1 overflow-hidden bg-[#17130f] p-0 text-[#fffaf0] sm:max-w-6xl lg:grid-cols-[1fr_340px]">
    <div className="relative flex min-h-[55svh] items-center justify-center bg-black/35 p-4"><Image src={images[index]} alt={`${title}, image ${index + 1}`} fill preload sizes="(max-width: 1024px) 100vw, 70vw" className="object-contain p-4" />{images.length > 1 && <><Button variant="outline" size="icon" className="absolute left-3 top-1/2 size-11 -translate-y-1/2 rounded-full border-white/20 bg-black/50 text-white" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></Button><Button variant="outline" size="icon" className="absolute right-3 top-1/2 size-11 -translate-y-1/2 rounded-full border-white/20 bg-black/50 text-white" onClick={() => move(1)} aria-label="Next image"><ChevronRight /></Button><span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 font-mono text-xs">{index + 1}, {images.length}</span></>}</div>
    <div className="max-h-[32svh] overflow-y-auto border-t border-white/10 p-6 lg:max-h-none lg:border-l lg:border-t-0 lg:p-8"><DialogTitle className="font-serif text-3xl leading-tight">{title}</DialogTitle><DialogDescription className="mt-5 leading-7 text-[#c9bfb2]">{description}</DialogDescription></div>
  </DialogContent></Dialog>;
}
