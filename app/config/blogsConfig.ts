export interface Blog {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    thumbnail: string;
    tags: string[];
    date: string;
    readTime: string;
}

export const blogs: Blog[] = [
    {
        id: "blog-1",
        slug: "building-scalable-web-apps",
        title: "Building Scalable Web Applications with Next.js",
        shortDescription:
            "Learn the best practices for building high-performance, scalable web applications using Next.js 14 and the App Router.",
        thumbnail: "/assets/blogs/nextjs-scalable.svg",
        tags: ["Next.js", "React", "Performance"],
        date: "2025-12-15",
        readTime: "8 min read",
    }
];
