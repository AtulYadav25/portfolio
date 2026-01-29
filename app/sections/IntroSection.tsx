"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "../components/SocialIcons";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { TechChip } from "../components/TechChip";
import { PiReadCvLogo } from "react-icons/pi";
import { RiTelegram2Fill } from "react-icons/ri";

export function IntroSection() {
    return (
        <section className="py-12 sm:py-16">
            <RevealOnScroll className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                <Avatar className="w-32 h-32 sm:w-28 sm:h-28 rounded-full border-2 border-zinc-700 flex-shrink-0">
                    <AvatarImage src="/assets/atul2.png" className="object-contain" alt="Atul Yadav" />
                    <AvatarFallback>AY</AvatarFallback>
                </Avatar>
            </RevealOnScroll>
            <RevealOnScroll className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mt-5">
                <div className="flex flex-col items-start text-center sm:text-left">
                    <h1 className="text-2xl text-start sm:text-3xl font-semibold text-white mb-4 leading-8 sm:leading-tight">
                        Hi, I&apos;m Atul — <span className="text-zinc-400">A Full Stack Web Developer.</span>
                    </h1>

                    <div className="text-zinc-400 text-start text-lg mb-6 !max-w-2xl leading-10 tracking-wide">
                        <span>
                            I build web applications using&nbsp;
                        </span>
                        <TechChip iconClass="devicon-typescript-plain" name="TypeScript" />,&nbsp;
                        <TechChip iconClass="devicon-react-plain" name="React" />,&nbsp;
                        <TechChip iconClass="devicon-nextjs-plain" name="Next.js" /> and&nbsp;
                        <TechChip iconClass="devicon-mongodb-plain" name="MongoDB" />.
                        <span>
                            &nbsp;I&apos;m enthusiastic about UI-focused products, blockchain, web3, Full Stack Development and love learning new technologies.
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6 justify-center sm:justify-start">
                        <Button asChild variant="outline" className="!border-zinc-500" size="lg">
                            <span className="flex items-center gap-2">
                                <PiReadCvLogo />
                                <Link href="/resume">Resume / CV</Link>
                            </span>
                        </Button>
                        <Button asChild variant="default" size="lg">
                            <span>
                                <RiTelegram2Fill />
                                <Link href="/contact">Get in Touch</Link>
                            </span>
                        </Button>
                    </div>

                    <SocialIcons />
                </div>

            </RevealOnScroll>
        </section>
    );
}
