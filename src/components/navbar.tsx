import Link from "next/link";
import { Menu } from "lucide-react";
import { navigationItems } from "@/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="site-nav">
      <nav className="site-nav-inner" aria-label="Primary navigation">
        <Link href="/" className="brand-mark" aria-label="Rafa'Na'ilah home"><span>R</span><span>N</span></Link>
        <div className="desktop-nav">
          {navigationItems.map((item) => <Link key={item.label} href={item.href} className="nav-link">{item.label}</Link>)}
        </div>
        <div className="mobile-nav-actions">
          <Sheet><SheetTrigger render={<Button variant="ghost" size="icon" className="menu-toggle" aria-label="Open menu" />}><Menu /></SheetTrigger><SheetContent className="mobile-sheet"><SheetHeader className="mobile-sheet-header"><SheetTitle className="font-serif text-4xl font-normal">Menu</SheetTitle><SheetDescription>Rafa&apos;Na&apos;ilah Septia portfolio</SheetDescription></SheetHeader><div className="mobile-sheet-links">{navigationItems.map((item, index) => <SheetClose key={item.label} render={<Link href={item.href} className="mobile-sheet-link" />}><span>{item.label}</span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></SheetClose>)}</div></SheetContent></Sheet>
        </div>
      </nav>
    </header>
  );
}
