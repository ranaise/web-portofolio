"use client";

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 text-center flex flex-col items-center justify-center space-y-4">
        <div className="h-0.5 w-12 bg-primary/20 rounded-full" />
        <p className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase font-bold">
          &copy; 2026 Rafa&apos;Na&apos;ilah Septia
        </p>
      </div>
    </footer>
  );
}
