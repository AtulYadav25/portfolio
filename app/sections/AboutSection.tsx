"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TechIcon } from "../components/TechIcon";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { skills } from "../config/skillsConfig";

export function AboutSection() {
    return (
        <section id="about" className=" py-12 sm:py-16">
            <RevealOnScroll className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                <Avatar className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl flex-shrink-0">
                    <AvatarImage src="/assets/atul2.png" alt="Atul Yadav" />
                    <AvatarFallback>AY</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h2 className="text-2xl font-semibold text-white mb-3">Atul Yadav</h2>

                    <p className="text-zinc-400 leading-relaxed mb-6">
                        I&apos;m a Full Stack web developer and Open Source Contributor. I
                        love building products to solve real-world problems. I&apos;m
                        specialized in building MVP&apos;s.
                    </p>

                    <h2 className="text-xl font-semibold text-white mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {skills.map((skill) => (
                            <TechIcon
                                key={skill.name}
                                iconClass={skill.iconClass}
                                name={skill.name}
                                size="lg"
                            />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
