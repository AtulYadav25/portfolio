"use client";

import { experiences } from "../config/experienceConfig";
import { TechChip } from "../components/TechChip";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ExperienceSection() {
    return (
        <section id="experience" className="py-12 sm:py-16">
            <RevealOnScroll>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-8">Work Experience</h2>
            </RevealOnScroll>

            <div className="flex flex-col gap-6">
                {experiences.map((exp, index) => (
                    <RevealOnScroll key={exp.id} delay={index * 0.1}>
                        <div className="bg-zinc-900/50 rounded-xl p-5 sm:p-6 border border-zinc-800/50">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-12 h-12 rounded-lg flex-shrink-0">
                                        <AvatarImage src={exp.logo} alt={exp.company} />
                                        <AvatarFallback>
                                            📢
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-white font-medium text-lg  filter blur-[5px] ">{exp.company}</h3>
                                        <p className=" text-zinc-400 text-sm">{exp.role}</p>
                                    </div>
                                </div>

                                <div className="text-right sm:text-right">
                                    <p className="text-zinc-300 text-sm">
                                        {exp.startDate} - {exp.endDate}
                                    </p>
                                    <p className=" text-zinc-500 text-sm">
                                        {exp.location} ({exp.locationType})
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {exp.technologies.map((tech) => (
                                    <TechChip
                                        key={tech.name}
                                        iconClass={tech.iconClass}
                                        name={tech.name}
                                    />
                                ))}
                            </div>

                            <ul className="list-disc list-inside text-zinc-400 text-md space-y-1.5">
                                {exp.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
