import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
export const metadata: Metadata = { title: "Work", description: "An overview of engineering systems, AI tools, and software projects by Rafa'Na'ilah Septia." };
export default function WorkPage() { return <><Navbar /><main className="route-page"><Projects /></main><Footer /></>; }
