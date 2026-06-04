"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "../components/SocialIcons";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { TechChip } from "../components/TechChip";
import { PiReadCvLogo } from "react-icons/pi";
import { RiTelegram2Fill } from "react-icons/ri";
import PixelBlast from "@/components/PixelBlast";

const TECH_STACK = [
    { iconClass: "devicon-typescript-plain", name: "TypeScript" },
    { iconClass: "devicon-react-plain", name: "React" },
    { iconClass: "devicon-nextjs-plain", name: "Next.js" },
    { iconClass: "devicon-nodejs-plain", name: "Node.js" },
    { iconClass: "devicon-mongodb-plain", name: "MongoDB" },
    { iconClass: "devicon-tailwindcss-plain", name: "Tailwind CSS" },
    { iconClass: "devicon-express-original", name: "Express" },
    { iconClass: "devicon-fastify-plain", name: "Fastify" },
    { iconClass: "devicon-postgresql-plain", name: "PostgreSQL" },
    { iconClass: "devicon-docker-plain", name: "Docker" },
    { iconClass: "devicon-git-plain", name: "Git" },
    { iconClass: "devicon-redis-plain", name: "Redis" },
];

export function IntroSection() {
    return (
        <section className="pt-2 pb-8 sm:pt-4 sm:pb-16">
            {/* ── HERO CARD ── */}
            <RevealOnScroll>
                <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-2">

                    {/* Profile row */}
                    <div className="flex items-center gap-4 px-5 py-4">
                        <Avatar className="w-24 h-24 rounded-full border-2 border-zinc-700 flex-shrink-0">
                            <AvatarImage
                                src="/assets/atul2.png"
                                className="object-contain"
                                alt="Atul Yadav"
                            />
                            <AvatarFallback>AY</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h2 className="text-white font-bold font-poppins text-lg leading-tight mb-1">
                                Hey, I&apos;m Atul
                            </h2>
                            <span className="text-zinc-400 text-sm mt-0.5">
                                I&apos;m a Full Stack Developer&nbsp;&nbsp;<span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />&nbsp;
                                Available for work
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-zinc-500 mt-0.5">

                            </span>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            {/* ── BIO TEXT ── */}
            <RevealOnScroll>
                <div className="flex flex-col items-center text-left w-full">
                    <div className="text-zinc-400 text-lg mb-6 max-w-2xl leading-8 tracking-wide">

                        I've <span className=" text-white bg-blue-500/70 px-2 rounded-sm whitespace-nowrap italic">1 Year of Experience</span> in Full Stack Web Dev.<br />I've been contributing open source <span className="text-white bg-green-500/70 px-2 rounded-sm whitespace-nowrap italic">5+ Major PR Merged</span>. <br />
                        My interests are in <span className="text-white bg-violet-800/70 px-2 rounded-sm whitespace-nowrap italic">Full Stack Web Development</span>, <span className="text-white bg-violet-800/70 px-2 rounded-sm whitespace-nowrap italic">Web3</span>, <span className="text-white bg-violet-800/70 px-2 rounded-sm whitespace-nowrap italic">Smart Contracts</span>, <span className=" text-white bg-blue-400/70 px-2 rounded-sm whitespace-nowrap italic">SUI</span>, <span className=" text-white bg-pink-400/70 px-2 rounded-sm whitespace-nowrap italic">SOLANA</span> and I love
                        learning new technologies.

                    </div>

                    {/* Buttons — centered */}
                    <div className="flex flex-wrap gap-3 mb-6 justify-center">
                        <Button asChild variant="outline" className="!border-zinc-500" size="lg">
                            <span className="flex items-center gap-2">
                                <PiReadCvLogo />
                                <Link href="/resume">Resume / CV</Link>
                            </span>
                        </Button>
                        <Button asChild variant="default" size="lg">
                            <span className="flex items-center gap-2">
                                <RiTelegram2Fill />
                                <Link href="/contact">Get in Touch</Link>
                            </span>
                        </Button>
                    </div>

                    {/* Social icons — centered */}
                    <SocialIcons />
                </div>
            </RevealOnScroll>

            {/* ── TECH STACK GRID ── */}
            <RevealOnScroll className="mt-10">
                <p className="text-zinc-500 text-sm mb-4 uppercase tracking-widest font-medium text-center">
                    Tech Stack
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                    {TECH_STACK.map((tech) => (
                        <TechChip
                            key={tech.name}
                            iconClass={tech.iconClass}
                            name={tech.name}
                            variant="card"
                        />
                    ))}
                </div>
            </RevealOnScroll>

        </section >
    );
}