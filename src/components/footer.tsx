import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profileDetails } from "@/data";

export function Footer() {
  return <>
    <Link href="/#home" className="back-to-top-float" aria-label="Back to top" title="Back to top"><ArrowUp /></Link>
    <footer className="site-footer"><div><p>Rafa&apos;Na&apos;ilah Septia</p><p>Backend engineer and AI enthusiast</p></div><div><Link href={profileDetails.github} target="_blank" rel="noreferrer">GitHub</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link></div></footer>
  </>;
}
