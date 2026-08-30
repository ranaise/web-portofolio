import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return <>
    <Link href="/#home" className="back-to-top-float" aria-label="Back to top" title="Back to top"><ArrowUp /></Link>
    <footer className="site-footer">
      <p className="site-footer-signature">Learning through what i build</p>
      <p className="site-footer-copyright">© 2026 Rafa&apos;Na&apos;ilah Septia</p>
    </footer>
  </>;
}
