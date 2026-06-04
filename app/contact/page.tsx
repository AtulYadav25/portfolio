import type { Metadata } from "next";
import { SideNav } from "@/app/components/SideNav";
import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { Footer } from "@/app/components/NewFooter";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
    title: "Contact | Atul Yadav",
    description: "Get in touch with Atul Yadav - Full Stack Developer",
};

export default function ContactPage() {
    return (
        <>
            <AnimatedBackground />
            <SideNav />
            <main className="relative z-10 min-h-screen pt-20 lg:pt-24 pb-12 px-6 lg:pl-28 lg:pr-20">
                <div className="max-w-4xl mx-auto">
                    <ContactPageContent />
                </div>
            </main>
            <Footer />
        </>
    );
}
