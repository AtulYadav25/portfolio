import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { ProjectsPageContent } from "./ProjectsPageContent";

export const metadata: Metadata = {
    title: "Projects | Atul Yadav",
    description: "Explore all projects built by Atul Yadav - Full Stack Developer",
};

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <ProjectsPageContent />
                </div>
            </main>
            <Footer />
        </>
    );
}
