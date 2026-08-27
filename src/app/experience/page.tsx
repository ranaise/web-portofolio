import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/page-intro";
import { Experience } from "@/components/experience";
export const metadata: Metadata = { title: "Experience", description: "Programming and organizational experience of Rafa'Na'ilah Septia." };
export default function ExperiencePage() { return <><Navbar /><main className="route-page"><PageIntro label="Experience / Timeline" title="Learning by building inside real systems." description="A record of technical contributions, collaboration, and completed responsibilities." /><Experience /></main><Footer /></>; }
