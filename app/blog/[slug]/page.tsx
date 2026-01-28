import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiArrowLeft } from "react-icons/pi";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Badge } from "@/components/ui/badge";
import { blogs } from "@/app/config/blogsConfig";

interface PageProps {
    params: Promise<{ slug: string }>;
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found | Atul Yadav",
        };
    }

    return {
        title: `${blog.title} | Atul Yadav`,
        description: blog.shortDescription,
    };
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <article className="py-12 sm:py-16">
                        <Link href="/#blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6">
                            <PiArrowLeft /> Back to Blog
                        </Link>

                        <header className="mb-8">
                            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{blog.title}</h1>

                            <div className="flex items-center gap-4 text-zinc-500 text-sm mb-4">
                                <span>{formatDate(blog.date)}</span>
                                <span>•</span>
                                <span>{blog.readTime}</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </header>

                        <div className="max-w-none prose-headings:text-white prose-headings:font-semibold prose-p:text-zinc-400 prose-a:text-white prose-a:underline prose-ul:text-zinc-400 prose-ol:text-zinc-400 prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-lg">
                            <p>{blog.shortDescription}</p>

                            <h2>Introduction</h2>
                            <p>
                                This is a placeholder for the full blog content. Replace this
                                content by creating a markdown file at{" "}
                                <code>/content/blogs/{blog.slug}.md</code> and parsing it here.
                            </p>

                            <h2>Main Content</h2>
                            <p>
                                Add your detailed blog content here. You can include code
                                examples, images, and other rich content.
                            </p>

                            <pre>
                                <code>{`// Example code block
const greeting = "Hello, World!";
console.log(greeting);`}</code>
                            </pre>

                            <h2>Conclusion</h2>
                            <p>
                                Wrap up your blog post with key takeaways and next steps for
                                readers.
                            </p>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}
