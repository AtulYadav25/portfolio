import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiArrowLeftBold, PiGlobeSimpleBold, PiGithubLogoBold, PiArrowSquareOutBold } from "react-icons/pi";
import { SideNav } from "@/app/components/SideNav";
import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { Footer } from "@/app/components/NewFooter";
import { projects } from "@/app/config/projectsConfig";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

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
            <AnimatedBackground />
            <SideNav />
            <main className="relative z-10 min-h-screen pt-20 lg:pt-24 pb-12 px-6 lg:pl-28 lg:pr-20">
                <div className="max-w-4xl mx-auto">
                    <section className="py-8">
                        {/* Back Link */}
                        <Link 
                            href="/projects" 
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                        >
                            <PiArrowLeftBold /> Back to Projects
                        </Link>

                        {/* Project Header */}
                        <div className="mb-8">
                            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">PROJECT</span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                {project.title}
                            </h1>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                {project.shortDescription}
                            </p>
                        </div>

                        {/* Project Image */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-border mb-8">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                        </div>

                        {/* Project Links & Tech */}
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between p-6 rounded-2xl glass border border-border mb-8">
                            {/* Links */}
                            <div className="flex items-center gap-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                    >
                                        <PiGlobeSimpleBold />
                                        Live Demo
                                        <PiArrowSquareOutBold />
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                                    >
                                        <PiGithubLogoBold />
                                        Source Code
                                    </a>
                                )}
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground border border-border"
                                    >
                                        <i className={`${tech.iconClass} text-base`} />
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Content */}
                        <div className="prose prose-invert max-w-none">
                            {markdownContent ? (
                                <div className="markdown-content">
                                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    <div className="p-6 rounded-2xl border border-border bg-card">
                                        <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    <div className="p-6 rounded-2xl border border-border bg-card">
                                        <h2 className="text-xl font-semibold text-foreground mb-4">Key Features</h2>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-muted-foreground">
                                                <span className="text-primary mt-1">-</span>
                                                Modern, responsive user interface built with React
                                            </li>
                                            <li className="flex items-start gap-3 text-muted-foreground">
                                                <span className="text-primary mt-1">-</span>
                                                Full stack implementation with secure backend APIs
                                            </li>
                                            <li className="flex items-start gap-3 text-muted-foreground">
                                                <span className="text-primary mt-1">-</span>
                                                Optimized for performance and scalability
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
                                        <p className="text-muted-foreground text-sm">
                                            Want more details about this project? Check out the source code or 
                                            <Link href="/contact" className="text-primary hover:underline ml-1">
                                                get in touch
                                            </Link>
                                            {" "}for a detailed walkthrough.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
