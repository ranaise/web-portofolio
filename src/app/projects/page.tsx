import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { Projects } from "@/components/projects";
export const metadata: Metadata = { title: "Work", description: "Selected engineering systems and software projects by Rafa'Na'ilah Septia." };
export default function WorkPage() { return <><Navbar /><main className="route-page"><PageIntro label="Projects" title="Projects I have built" description="Backend systems, artificial intelligence tools, interactive learning projects, and campus applications." /><Projects /></main><Footer /></>; }
