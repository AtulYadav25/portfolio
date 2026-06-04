"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { blogs } from "../config/blogsConfig";
import { PiArrowRightBold, PiCalendarBold, PiClockBold, PiArrowSquareOutBold } from "react-icons/pi";

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section id="blog" className="py-24 lg:py-32 px-6 lg:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">04 / WRITING</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Recent articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            View all articles
            <PiArrowRightBold className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-6">
          {blogs.slice(0, 3).map((blog, index) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 card-hover"
            >
              {/* Thumbnail */}
              <div className="relative w-full md:w-48 h-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
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
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
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
                  <span className="flex items-center gap-1.5 ml-auto text-primary">
                    Read article
                    <PiArrowSquareOutBold />
                  </span>
                </div>
              </div>

              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs font-mono text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
