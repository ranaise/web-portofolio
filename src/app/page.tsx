import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HomeSelectedWork } from "@/components/home-selected-work";
import { HomeExperiencePreview } from "@/components/home-experience-preview";
import { HomeFocus } from "@/components/home-focus";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() { return <><Navbar /><main><Hero /><HomeSelectedWork /><HomeExperiencePreview /><HomeFocus /><Contact /></main><Footer /></>; }
