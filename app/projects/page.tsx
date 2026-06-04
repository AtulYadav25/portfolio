import type { Metadata } from "next";
import { SideNav } from "@/app/components/SideNav";
import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { Footer } from "@/app/components/NewFooter";
import { ProjectsPageContent } from "./ProjectsPageContent";

export const metadata: Metadata = {
    title: "Projects | Atul Yadav",
    description: "Explore all projects built by Atul Yadav - Full Stack Developer",
};

export default function ProjectsPage() {
    return (
        <>
            <AnimatedBackground />
            <SideNav />
            <main className="relative z-10 min-h-screen pt-20 lg:pt-24 pb-12 px-6 lg:pl-28 lg:pr-20">
                <div className="max-w-6xl mx-auto">
                    <ProjectsPageContent />
                </div>
            </main>
            <Footer />
        </>
    );
}
