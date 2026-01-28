"use client";

import { projects } from "../config/projectsConfig";
import { ProjectCard } from "../components/ProjectCard";
import { RevealOnScroll } from "../components/RevealOnScroll";

export function ProjectsPageContent() {
    return (
        <section className="py-12 sm:py-16">
            <RevealOnScroll>
                <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-8">All Projects</h1>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <RevealOnScroll key={project.id} delay={index * 0.1}>
                        <ProjectCard project={project} />
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
