import Link from "next/link";
import { profileDetails } from "@/data";
export function Footer() { return <footer className="border-t border-border"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8 lg:px-12"><p>© 2026 Rafa&apos;Na&apos;ilah Septia</p><div className="flex gap-5"><Link href={profileDetails.github} target="_blank" rel="noreferrer">GitHub</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link><Link href="#home">Back to top</Link></div></div></footer>; }
