import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Button } from "@/components/ui/button";
import { PiCalendarBlank, PiEnvelope } from "react-icons/pi";
import { calendlyUrl, contactEmail } from "@/app/config/socialConfig";

export const metadata: Metadata = {
    title: "Contact | Atul Yadav",
    description: "Get in touch with Atul Yadav - Full Stack Developer",
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <section className="py-12 sm:py-16">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Let&apos;s Connect</h1>
                            <p className="text-zinc-400 leading-relaxed mb-8">
                                I&apos;m always open to discussing new projects, creative ideas,
                                or opportunities to be part of your vision. Feel free to reach
                                out!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button asChild size="lg">
                                    <a
                                        href={calendlyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <PiCalendarBlank className="mr-2" />
                                        Book a Call
                                    </a>
                                </Button>
                                or
                                <a href={`mailto:${contactEmail}`} className="flex items-center">
                                    <PiEnvelope className="mr-2" />
                                    atul007414@gmail.com
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
