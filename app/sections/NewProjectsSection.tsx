"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../config/projectsConfig";
import { PiArrowRightBold, PiGlobeSimpleBold, PiGithubLogoBold, PiArrowSquareOutBold } from "react-icons/pi";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="py-24 lg:py-32 px-6 lg:px-20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">03 / PROJECTS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Selected work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            View all projects
            <PiArrowRightBold className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`group relative ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500 card-hover">
                {/* Image */}
                <div className={`relative overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-48 md:h-56"}`}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Project number */}
                  <span className="text-primary font-mono text-xs mb-2 block opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-1 rounded-md bg-secondary/80 text-xs font-medium text-muted-foreground"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-secondary/80 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <PiGlobeSimpleBold />
                        Live Demo
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
                        Source
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

                {/* Hover overlay glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
