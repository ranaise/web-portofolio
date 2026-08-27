import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
export const metadata: Metadata = { title: "About", description: "Background, capabilities, and learning credentials of Rafa'Na'ilah Septia." };
export default function AboutPage() { return <><Navbar /><main className="route-page"><PageIntro label="About / Profile" title="A curious engineer with an editorial eye." description="I work across backend systems, AI-assisted applications, and interactive environments—then document the connections clearly." /><About /><Skills /><Certifications /></main><Footer /></>; }
