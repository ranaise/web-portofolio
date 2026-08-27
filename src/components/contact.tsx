import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profileDetails } from "@/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() { return <section id="contact" className="contact-section"><div className="contact-block"><div><p className="section-kicker"><span>06</span> Contact</p><h2>Get in <em>Touch</em></h2></div><div className="contact-copy"><p>Direct access to my channels. Click any item below to message me, check repositories, or connect professionally.</p><div className="contact-actions"><Link href={`mailto:${profileDetails.email}`} className={cn(buttonVariants({ size: "lg" }), "contact-primary")}><Mail /> Email me</Link><Link href={`https://wa.me/${profileDetails.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="contact-link"><Phone /> WhatsApp</Link></div><div className="contact-socials"><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn <ArrowUpRight /></Link><Link href={profileDetails.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub <ArrowUpRight /></Link></div></div></div></section>; }
