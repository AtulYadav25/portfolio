"use client";

import { blogs } from "@/app/config/blogsConfig";
import { BlogCard } from "@/app/components/BlogCard";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

export function BlogPageContent() {
    return (
        <section className="projects-page">
            <RevealOnScroll>
                <h1 className="projects-page-title">Blog</h1>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {blogs.map((blog, index) => (
                    <RevealOnScroll key={blog.id} delay={index * 0.1}>
                        <BlogCard blog={blog} />
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
