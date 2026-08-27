import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { profileDetails } from "@/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() { return <section id="contact" className="section-shell contact-panel border-t border-border"><p className="eyebrow"><span>06 / Contact</span><span>Open to thoughtful collaboration</span></p><h2 className="mt-10 max-w-[11ch]">Have a system worth <em>unpacking?</em></h2><p className="mt-7 max-w-xl text-lg leading-7 text-muted-foreground">Let&apos;s talk about backend systems, AI-assisted products, interactive environments, or the difficult seams between them.</p><div className="mt-10 flex flex-wrap gap-3"><Link href={`mailto:${profileDetails.email}`} className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-6")}><Mail /> Start a conversation</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-full px-6")}>LinkedIn <ArrowUpRight /></Link></div></section>; }
