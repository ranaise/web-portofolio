import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profileDetails } from "@/data";

export function Contact() { return <section id="contact" className="contact-section"><div className="contact-block"><div><p className="section-kicker"><span>04</span><span>Contact</span></p><h2>Get in touch.</h2></div><div className="contact-simple-links"><Link href={`mailto:${profileDetails.email}`}><Mail /> {profileDetails.email} <ArrowUpRight /></Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn <ArrowUpRight /></Link><Link href={profileDetails.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub <ArrowUpRight /></Link></div></div></section>; }
