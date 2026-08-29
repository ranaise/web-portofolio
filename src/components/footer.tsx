import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profileDetails } from "@/data";

export function Footer() {
  return <>
    <Link href="/#home" className="back-to-top-float" aria-label="Back to top" title="Back to top"><ArrowUp /></Link>
    <footer className="site-footer">
      <p className="site-footer-signature">Built with intent.</p>
      <div className="site-footer-links"><Link href={`mailto:${profileDetails.email}`}>Email</Link><Link href={profileDetails.github} target="_blank" rel="noreferrer">GitHub</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link></div>
      <span className="site-footer-year">2026</span>
    </footer>
  </>;
}
