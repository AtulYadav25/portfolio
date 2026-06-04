import Link from "next/link";
import { SideNav } from "./components/SideNav";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Footer } from "./components/NewFooter";
import { Button } from "@/components/ui/button";
import { PiHouseBold, PiArrowRightBold } from "react-icons/pi";

export default function NotFound() {
    return (
        <>
            <AnimatedBackground />
            <SideNav />
            <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
                <div className="text-center max-w-lg">
                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <span className="text-[10rem] md:text-[14rem] font-bold leading-none gradient-text opacity-20">
                            404
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl md:text-8xl font-bold text-foreground">404</span>
                        </div>
                    </div>

                    {/* Message */}
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        Oops! It looks like you&apos;ve wandered into uncharted territory. 
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                            <Link href="/" className="flex items-center gap-2">
                                <PiHouseBold />
                                Back to Home
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-border hover:border-primary/50">
                            <Link href="/projects" className="flex items-center gap-2">
                                View Projects
                                <PiArrowRightBold />
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
