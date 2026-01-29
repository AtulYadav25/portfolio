import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { BlogPageContent } from "./BlogPageContent";

export const metadata: Metadata = {
    title: "Blog | Atul Yadav",
    description: "Read blog posts by Atul Yadav - Full Stack Developer",
};

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <BlogPageContent />
                </div>
            </main>
            <Footer />
        </>
    );
}
