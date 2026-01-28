"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TechIcon } from "./TechIcon";
import { PiGlobeSimple, PiGithubLogo, PiArrowRight } from "react-icons/pi";
import type { Project } from "../config/projectsConfig";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="bg-zinc-900/50 border-zinc-800/50 overflow-hidden hover:border-zinc-700 transition-colors">
            <AspectRatio ratio={16 / 9} className="bg-zinc-800">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                />
            </AspectRatio>

            <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-medium">{project.title}</h3>
                    <div className=" flex items-center gap-2">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white text-lg transition-colors"
                                aria-label="Live site"
                            >
                                <PiGlobeSimple />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white text-lg transition-colors"
                                aria-label="GitHub repository"
                            >
                                <PiGithubLogo />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-3">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech) => (
                        <TechIcon
                            key={tech.name}
                            iconClass={tech.iconClass}
                            name={tech.name}
                            size="sm"
                        />
                    ))}
                </div>

                <Link href={`/project/${project.slug}`} className="text-zinc-400 hover:text-white text-sm flex items-center gap-1 transition-colors">
                    View Details <PiArrowRight className="inline-block ml-1" />
                </Link>
            </div>
        </Card>
    );
}
