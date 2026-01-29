"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navLinks = [
    { name: "Work", href: "#experience", isScrollLink: true },
    { name: "Projects", href: "/projects", isScrollLink: false },
    { name: "Blog", href: "/blog", isScrollLink: false },
];

export function Navbar() {
    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex-shrink-0">
                    <Avatar className="w-10 h-10 border-2 border-zinc-700 rounded-lg">
                        <AvatarImage src="/assets/atul.png" alt="Atul Yadav" />
                        <AvatarFallback>AY</AvatarFallback>
                    </Avatar>
                </Link>

                <div className="flex items-center gap-2 sm:gap-6">
                    {navLinks.map((link) => (
                        link.isScrollLink ? (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollToSection(e, link.href.replace("#", ""))}
                                className="text-sm sm:text-base text-zinc-400 hover:text-white transition-colors px-2 py-1 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link key={link.name} href={link.href} className="text-sm sm:text-base text-zinc-400 hover:text-white transition-colors px-2 py-1">
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </nav>
    );
}
