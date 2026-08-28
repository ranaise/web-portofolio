import Link from "next/link";
import { profileDetails } from "@/data";

export function Footer() {
  return <footer className="site-footer"><div><p>Rafa&apos;Na&apos;ilah Septia</p><p>Backend engineer and AI enthusiast</p></div><div><Link href={profileDetails.github} target="_blank" rel="noreferrer">GitHub</Link><Link href={profileDetails.linkedin} target="_blank" rel="noreferrer">LinkedIn</Link><Link href="/#home">Back to top</Link></div></footer>;
}
