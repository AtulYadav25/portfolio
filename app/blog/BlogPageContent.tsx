"use client";

import { motion } from "motion/react";
import { blogs } from "@/app/config/blogsConfig";
import { PiCalendarBold, PiClockBold, PiArrowSquareOutBold } from "react-icons/pi";

export function BlogPageContent() {
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };

    return (
        <section className="py-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <span className="text-primary font-mono text-sm tracking-wider mb-4 block">ARTICLES</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Blog
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    I write about software development, technology trends, and my experiences as a developer. 
                    These articles share what I&apos;ve learned along the way.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-6" />
            </motion.div>

            {/* Blog Grid */}
            <div className="grid gap-6">
                {blogs.map((blog, index) => (
                    <motion.a
                        key={blog.id}
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 card-hover"
                    >
                        {/* Thumbnail */}
                        <div className="relative w-full md:w-56 h-40 md:h-40 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                                src={blog.thumbnail}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {blog.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h2>

                                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                                    {blog.shortDescription}
                                </p>
                            </div>

                            {/* Meta */}
                            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5">
                                    <PiCalendarBold className="text-primary" />
                                    {formatDate(blog.date)}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <PiClockBold className="text-primary" />
                                    {blog.readTime}
                                </span>
                                <span className="flex items-center gap-1.5 ml-auto text-primary font-medium">
                                    Read article
                                    <PiArrowSquareOutBold />
                                </span>
                            </div>
                        </div>

                        {/* Number indicator */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                            <span className="text-sm font-mono text-muted-foreground">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
