import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { Projects } from "@/components/projects";
export const metadata: Metadata = { title: "Work", description: "An overview of engineering systems, AI tools, and software projects by Rafa'Na'ilah Septia." };
export default function WorkPage() { return <><Navbar /><main className="route-page"><PageIntro label="Projects" title="Project index" description="Systems, AI tools, and interactive software." /><Projects /></main><Footer /></>; }
