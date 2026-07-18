"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  initialIndex?: number;
  // Optional content for the side panel
  description?: React.ReactNode;
}

export function LightboxDialog({
  isOpen,
  onClose,
  title,
  images,
  initialIndex = 0,
  description,
}: LightboxProps) {
  const titleId = React.useId();
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);
  const normalizedInitialIndex = Math.min(
    Math.max(initialIndex, 0),
    Math.max(images.length - 1, 0),
  );
  const [selection, setSelection] = React.useState({
    images,
    initialIndex,
    index: normalizedInitialIndex,
  });
  const currentIndex =
    selection.images === images && selection.initialIndex === initialIndex
      ? selection.index
      : normalizedInitialIndex;

  const moveBy = React.useEffectEvent((delta: number) => {
    setSelection((previous) => {
      const baseIndex =
        previous.images === images && previous.initialIndex === initialIndex
          ? previous.index
          : normalizedInitialIndex;

      return {
        images,
        initialIndex,
        index: images.length ? (baseIndex + delta + images.length) % images.length : 0,
      };
    });
  });

  // Keyboard navigation & Escape to close
  React.useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "ArrowRight") {
        moveBy(1);
        return;
      }

      if (e.key === "ArrowLeft") {
        moveBy(-1);
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [images, initialIndex, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-2 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={description ? titleId : undefined}
        aria-label={description ? undefined : title}
      >
        <motion.div
          ref={dialogRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-6xl max-h-full flex flex-col lg:flex-row bg-card border border-border shadow-2xl rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button - absolute top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Image Area */}
          <div className="relative flex-1 bg-black/5 min-h-[40vh] lg:min-h-[70vh] flex items-center justify-center p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full flex items-center justify-center"
                drag="x"
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                style={{ touchAction: "pan-y" }}
                onDragEnd={(e, { offset }) => {
                  const swipe = offset.x;
                  if (swipe < -50) moveBy(1);
                  else if (swipe > 50) moveBy(-1);
                }}
              >
                <div className="relative w-full h-full min-h-[40vh] lg:min-h-[70vh] max-h-[80vh]">
                  <Image
                    src={images[currentIndex]}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev/Next Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => moveBy(-1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-background text-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => moveBy(1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-background text-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary z-20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-mono font-medium backdrop-blur-md z-20">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Optional Side Panel for Workflows/Details */}
          {description && (
            <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-border bg-card p-6 lg:p-8 flex flex-col justify-center overflow-y-auto max-h-[40vh] lg:max-h-none">
              <h3 id={titleId} className="text-xl font-bold font-heading mb-4 text-foreground">
                {title}
              </h3>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
