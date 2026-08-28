import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
export const metadata: Metadata = { title: "About", description: "Background, capabilities, and learning credentials of Rafa'Na'ilah Septia." };
export default function AboutPage() { return <><Navbar /><main className="route-page"><PageIntro label="About" title="About Rafa" description="Seventh semester Informatics student building backend systems, AI tools, and interactive applications." /><About /><Skills /><Certifications /></main><Footer /></>; }
