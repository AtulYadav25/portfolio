"use client";

import { PiLinkedinLogo, PiGithubLogo, PiMediumLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { socialLinks } from "../config/socialConfig";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const iconMap = {
    linkedin: PiLinkedinLogo,
    github: PiGithubLogo,
    x: RiTwitterXLine,
    medium: PiMediumLogo,
};

export function SocialIcons() {
    return (
        <div className="flex items-center">
            {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                    <TooltipProvider key={link.name}>
                        <Tooltip delayDuration={200}>
                            <TooltipTrigger asChild>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 px-2 hover:text-white text-xl transition-colors"
                                    aria-label={link.name}
                                >
                                    <Icon />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{link.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                );
            })}
        </div>
    );
}
