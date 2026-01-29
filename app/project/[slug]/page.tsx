import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiArrowLeft, PiGlobeSimple, PiGithubLogo } from "react-icons/pi";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { TechChip } from "@/app/components/TechChip";
import { projects } from "@/app/config/projectsConfig";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Function to get markdown content for a project
async function getProjectContent(slug: string): Promise<string | null> {
    const contentDir = path.join(process.cwd(), "content", "projects");
    const filePath = path.join(contentDir, `${slug}.md`);

    try {
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { content } = matter(fileContent);
            return content;
        }
    } catch (error) {
        console.error(`Error reading markdown file for ${slug}:`, error);
    }

    return null;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found | Atul Yadav",
        };
    }

    return {
        title: `${project.title} | Atul Yadav`,
        description: project.shortDescription,
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Get markdown content
    const markdownContent = await getProjectContent(slug);

    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <section className="py-12 sm:py-16">
                        <Link href="/projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6">
                            <PiArrowLeft /> Back to Projects
                        </Link>

                        <div className="mb-8">
                            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{project.title}</h1>
                            <AspectRatio ratio={16 / 9} className="bg-zinc-800 rounded-lg my-5">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-contain rounded-t-lg"
                                />
                            </AspectRatio>
                            <div className="flex items-center gap-4 mb-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <PiGlobeSimple /> Live Site
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <PiGithubLogo /> GitHub
                                    </a>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <TechChip
                                        key={tech.name}
                                        iconClass={tech.iconClass}
                                        name={tech.name}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="markdown-content">
                            {markdownContent ? (
                                <ReactMarkdown>{markdownContent}</ReactMarkdown>
                            ) : (
                                <>
                                    <p>{project.shortDescription}</p>

                                    <h2>Overview</h2>
                                    <p>
                                        This is a placeholder for the full project description. Replace
                                        this content by creating a markdown file at{" "}
                                        <code>/content/projects/{project.slug}.md</code> and parsing it
                                        here.
                                    </p>

                                    <h2>Features</h2>
                                    <ul>
                                        <li>Feature 1 - Add your project features here</li>
                                        <li>Feature 2 - Describe key functionality</li>
                                        <li>Feature 3 - Highlight technical achievements</li>
                                    </ul>

                                    <h2>Technical Details</h2>
                                    <p>
                                        Add detailed technical information about the project, including
                                        architecture decisions, challenges faced, and solutions
                                        implemented.
                                    </p>
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
