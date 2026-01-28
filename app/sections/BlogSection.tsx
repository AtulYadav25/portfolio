"use client";

import { blogs } from "../config/blogsConfig";
import { BlogCard } from "../components/BlogCard";
import { RevealOnScroll } from "../components/RevealOnScroll";

export function BlogSection() {
    return (
        <section id="blog" className="py-12 sm:py-16">
            <RevealOnScroll>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-8">Latest Blog Posts</h2>
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
