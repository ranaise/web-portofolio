"use client";

export function Footer() {
  return (
    <footer className="bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-6 py-6 text-center flex flex-col items-center justify-center space-y-2">
        <div className="h-px w-8 bg-primary/20 rounded-full" />
        <p className="text-[9px] font-mono tracking-widest text-muted-foreground/80 uppercase font-bold">
          &copy; 2026 Rafa&apos;Na&apos;ilah Septia
        </p>
      </div>
    </footer>
  );
}
