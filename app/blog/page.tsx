import type { Metadata } from "next";
import { SideNav } from "@/app/components/SideNav";
import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { Footer } from "@/app/components/NewFooter";
import { BlogPageContent } from "./BlogPageContent";

export const metadata: Metadata = {
    title: "Blog | Atul Yadav",
    description: "Read blog posts by Atul Yadav - Full Stack Developer",
};

export default function BlogPage() {
    return (
        <>
            <AnimatedBackground />
            <SideNav />
            <main className="relative z-10 min-h-screen pt-20 lg:pt-24 pb-12 px-6 lg:pl-28 lg:pr-20">
                <div className="max-w-6xl mx-auto">
                    <BlogPageContent />
                </div>
            </main>
            <Footer />
        </>
    );
}
