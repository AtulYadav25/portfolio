"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PiArrowRight } from "react-icons/pi";
import type { Blog } from "../config/blogsConfig";

interface BlogCardProps {
    blog: Blog;
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function BlogCard({ blog }: BlogCardProps) {
    return (
        <Card className=" bg-zinc-900/50 border-zinc-800/50 overflow-hidden hover:border-zinc-700 transition-colors">
            <AspectRatio ratio={16 / 9} className="bg-zinc-800">
                <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-t-lg"
                />
            </AspectRatio>

            <div className="p-4">
                <h3 className="text-white font-medium mb-2 line-clamp-2">{blog.title}</h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-3 line-clamp-2">{blog.shortDescription}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                    {blog.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="flex items-center gap-3 text-zinc-500 text-xs mb-3">
                    <span className="whitespace-nowrap">{formatDate(blog.date)}</span>
                    <span className="whitespace-nowrap">{blog.readTime}</span>
                </div>

                <Link href={`/blog/${blog.slug}`} className="text-zinc-400 hover:text-white text-sm flex items-center gap-1 transition-colors">
                    Read More <PiArrowRight className="inline-block ml-1" />
                </Link>
            </div>
        </Card>
    );
}
