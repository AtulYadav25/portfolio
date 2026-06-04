import type { Metadata } from "next";
import Link from "next/link";
import { SideNav } from "@/app/components/SideNav";
import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { Footer } from "@/app/components/NewFooter";
import { Button } from "@/components/ui/button";
import { PiArrowLeftBold, PiDownloadSimpleBold, PiFilePdfBold } from "react-icons/pi";

export const metadata: Metadata = {
    title: "Resume | Atul Yadav",
    description: "View the resume of Atul Yadav - Full Stack Developer",
};

export default function ResumePage() {
    return (
        <>
            <AnimatedBackground />
            <SideNav />
            <main className="relative z-10 min-h-screen pt-20 lg:pt-24 pb-12 px-6 lg:pl-28 lg:pr-20">
                <div className="max-w-4xl mx-auto">
                    <section className="py-8">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <Link 
                                    href="/" 
                                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
                                >
                                    <PiArrowLeftBold /> Back to Home
                                </Link>
                                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                                    My Resume
                                </h1>
                            </div>
                            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                                <a
                                    href="/assets/RESUME_ATULKUMAR.pdf"
                                    download="/assets/RESUME_ATULKUMAR.pdf"
                                    className="flex items-center gap-2"
                                >
                                    <PiDownloadSimpleBold />
                                    Download PDF
                                </a>
                            </Button>
                        </div>

                        {/* PDF Viewer */}
                        <div className="rounded-2xl border border-border bg-card overflow-hidden">
                            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-secondary/50">
                                <PiFilePdfBold className="text-primary text-lg" />
                                <span className="text-sm font-medium text-foreground">RESUME_ATULKUMAR.pdf</span>
                            </div>
                            <iframe
                                src="/assets/RESUME_ATULKUMAR.pdf"
                                className="w-full h-[75vh]"
                                title="Atul Yadav Resume"
                            />
                            <noscript>
                                <div className="text-center py-12">
                                    <p className="text-muted-foreground mb-4">
                                        Unable to display PDF. Please download the resume instead.
                                    </p>
                                    <Button asChild>
                                        <a
                                            href="/assets/RESUME_ATULKUMAR.pdf"
                                            download="/assets/RESUME_ATULKUMAR.pdf"
                                        >
                                            Download Resume
                                        </a>
                                    </Button>
                                </div>
                            </noscript>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
