"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "../components/RevealOnScroll";

export function CTASection() {
    return (
        <section className="py-12 sm:py-16">
            <RevealOnScroll>
                <div className="text-center bg-zinc-900/50 rounded-xl p-8 sm:p-12 border border-zinc-800/50">
                    <h2 className="text-xl sm:text-2xl font-medium text-white mb-6">Hey, you scrolled this far — let&apos;s connect!</h2>
                    <Button asChild size="lg">
                        <Link href="/contact">Book a free call</Link>
                    </Button>
                </div>
            </RevealOnScroll>
        </section>
    );
}
