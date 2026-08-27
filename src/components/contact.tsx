import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { profileDetails } from "@/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() { return <section id="contact" className="section-shell contact-panel"><p className="chapter-label">Chapter 04 / Contact</p><h2 className="mt-5">Have a system worth <em>unpacking?</em></h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">Let&apos;s talk about backend systems, AI-assisted products, interactive environments, or the seams between them.</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`mailto:${profileDetails.email}`} className={cn(buttonVariants({ size: "lg" }), "primary-action")}><Mail /> Start a conversation</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-h-11 rounded-md px-4")}>LinkedIn <ArrowUpRight /></Link></div></section>; }
