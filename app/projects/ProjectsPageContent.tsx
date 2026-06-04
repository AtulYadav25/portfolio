"use client";

import { motion } from "motion/react";
import { projects } from "../config/projectsConfig";
import Image from "next/image";
import Link from "next/link";
import { PiGlobeSimpleBold, PiGithubLogoBold, PiArrowSquareOutBold } from "react-icons/pi";

export function ProjectsPageContent() {
    return (
        <section className="py-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <span className="text-primary font-mono text-sm tracking-wider mb-4 block">ALL PROJECTS</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    My Work
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A collection of projects I&apos;ve built, from web applications to blockchain solutions. 
                    Each project represents a unique challenge and learning experience.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-6" />
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="h-full overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 card-hover">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                                
                                {/* Project number */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-mono text-primary border border-border">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                                    {project.shortDescription}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech.name}
                                            className="px-2 py-0.5 rounded-md bg-secondary text-xs text-muted-foreground"
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-3 pt-3 border-t border-border">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <PiGlobeSimpleBold />
                                            Live
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <PiGithubLogoBold />
                                            Code
                                        </a>
                                    )}
                                    <Link
                                        href={`/project/${project.slug}`}
                                        className="flex items-center gap-1.5 text-sm text-primary hover:underline ml-auto"
                                    >
                                        Details
                                        <PiArrowSquareOutBold />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
