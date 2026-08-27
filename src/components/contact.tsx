import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { profileDetails } from "@/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() { return <section id="contact" className="contact-section"><div className="contact-block"><div><p className="section-kicker"><span>03</span> Contact</p><h2>Let&apos;s make something <em>make sense.</em></h2></div><div className="contact-copy"><p>Open to thoughtful conversations about backend systems, AI-assisted products, and the work between a good idea and a working one.</p><div className="contact-actions"><Link href={`mailto:${profileDetails.email}`} className={cn(buttonVariants({ size: "lg" }), "contact-primary")}><Mail /> Say hello</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer" className="contact-link">LinkedIn <ArrowUpRight /></Link></div></div></div></section>; }
