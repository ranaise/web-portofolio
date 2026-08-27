import Link from "next/link";
import { profileDetails } from "@/data";
export function Footer() { return <footer className="border-t border-border"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-5 px-5 py-7 text-sm text-muted-foreground sm:flex-row sm:px-8"><p>© 2026 Rafa&apos;Na&apos;ilah Septia</p><div className="flex flex-wrap gap-5"><Link href={profileDetails.github} target="_blank" rel="noreferrer">GitHub</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link><Link href="/">Home</Link></div></div></footer>; }
