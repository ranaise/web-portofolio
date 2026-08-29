import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profileDetails } from "@/data";

export function Footer() {
  return <>
    <Link href="/#home" className="back-to-top-float" aria-label="Back to top" title="Back to top"><ArrowUp /></Link>
    <footer className="site-footer">
      <div className="site-footer-note"><span className="site-footer-mark">RN</span><div><p>Thanks for visiting</p><span>Backend systems, AI tools, and interactive work.</span></div></div>
      <div className="site-footer-context"><span>Bandung, Indonesia</span><span>Informatics, Telkom University</span></div>
      <div className="site-footer-links"><Link href={`mailto:${profileDetails.email}`}>Email</Link><Link href={profileDetails.github} target="_blank" rel="noreferrer">GitHub</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link></div>
    </footer>
  </>;
}
