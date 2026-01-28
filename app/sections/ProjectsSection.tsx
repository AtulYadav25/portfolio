"use client";

import Link from "next/link";
import { projects } from "../config/projectsConfig";
import { ProjectCard } from "../components/ProjectCard";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { PiArrowRight } from "react-icons/pi";

export function ProjectsSection() {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

    return (
        <section id="projects" className="py-12 sm:py-16">
            <RevealOnScroll>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-8">Featured Projects</h2>
                    <Link href="/projects" className="text-zinc-400 hover:text-white text-sm flex items-center gap-1 transition-colors">
                        View All <PiArrowRight className="inline-block ml-1" />
                    </Link>
                </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {featuredProjects.map((project, index) => (
                    <RevealOnScroll key={project.id} delay={index * 0.1}>
                        <ProjectCard project={project} />
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
