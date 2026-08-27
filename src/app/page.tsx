import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HomeToolkit } from "@/components/home-toolkit";
import { HomeSelectedWork } from "@/components/home-selected-work";
import { HomeExperiencePreview } from "@/components/home-experience-preview";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() { return <><Navbar /><main id="home"><Hero /><HomeToolkit /><HomeSelectedWork /><HomeExperiencePreview /><Contact /></main><Footer /></>; }
