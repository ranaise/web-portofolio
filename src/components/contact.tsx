import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profileDetails } from "@/data";

export function Contact() {
  return <section id="contact" className="contact-section"><div className="contact-block"><div><p className="section-kicker"><span>05</span><span>Contact</span></p><h2>Let us connect</h2><p>Open to backend, software engineering, and AI opportunities.</p></div><div className="contact-simple-links"><Link href={`mailto:${profileDetails.email}`} aria-label="Send email"><Mail /><span>Email</span><ArrowUpRight /></Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn"><LinkedinIcon /><span>LinkedIn</span><ArrowUpRight /></Link><Link href={profileDetails.github} target="_blank" rel="noreferrer" aria-label="Open GitHub"><GithubIcon /><span>GitHub</span><ArrowUpRight /></Link></div></div></section>;
}
