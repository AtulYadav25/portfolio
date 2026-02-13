import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Button } from "@/components/ui/button";
import { PiArrowLeft, PiDownload } from "react-icons/pi";

export const metadata: Metadata = {
    title: "Resume | Atul Yadav",
    description: "View the resume of Atul Yadav - Full Stack Developer",
};

export default function ResumePage() {
    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <section className="py-12 sm:py-16">
                        <div className="flex items-center justify-between mb-6">
                            <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6">
                                <PiArrowLeft /> Back to Home
                            </Link>
                            <Button asChild variant="outline" size="sm">
                                <a
                                    href="/assets/ATULKUMAR_RESUME.pdf"
                                    download="/assets/ATULKUMAR_RESUME.pdf"
                                >
                                    <PiDownload className="mr-2" />
                                    Download PDF
                                </a>
                            </Button>
                        </div>

                        <div className="bg-zinc-900/50 rounded-xl border border-zinc-800/50 overflow-hidden">
                            <iframe
                                src="/assets/ATULKUMAR_RESUME.pdf"
                                className="w-full h-[80vh]"
                                title="Atul Yadav Resume"
                            />
                            <noscript>
                                <div className="text-center py-12">
                                    <p className="text-zinc-400 mb-4">
                                        Unable to display PDF. Please download the resume instead.
                                    </p>
                                    <Button asChild>
                                        <a
                                            href="/assets/ATULKUMAR_RESUME.pdf"
                                            download="/assets/ATULKUMAR_RESUME.pdf"
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
