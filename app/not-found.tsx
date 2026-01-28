import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Button } from "@/components/ui/button";
import { PiHouseLine } from "react-icons/pi";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <section className="py-24 text-center">
                        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                        <p className="text-xl text-zinc-400 mb-8">
                            Oops! The page you&apos;re looking for doesn&apos;t exist.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/">
                                <PiHouseLine className="mr-2" />
                                Back to Home
                            </Link>
                        </Button>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
