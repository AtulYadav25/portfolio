"use client";

import { PiLinkedinLogo, PiGithubLogo, PiTwitterLogo } from "react-icons/pi";
import { socialLinks } from "../config/socialConfig";

const iconMap = {
    linkedin: PiLinkedinLogo,
    github: PiGithubLogo,
    twitter: PiTwitterLogo,
};

export function SocialIcons() {
    return (
        <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white text-xl transition-colors"
                        aria-label={link.name}
                    >
                        <Icon />
                    </a>
                );
            })}
        </div>
    );
}
