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
            <main className="main-content">
                <div className="container">
                    <BlogPageContent />
                </div>
            </main>
            <Footer />
        </>
    );
}
