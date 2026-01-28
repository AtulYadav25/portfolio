"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechIconProps {
    iconClass: string;
    name: string;
    size?: "sm" | "md" | "lg";
}

export function TechIcon({ iconClass, name, size = "md" }: TechIconProps) {
    const sizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
    };
    const noColorIcons = new Set(["nextjs", "solidity", "fastify", "express", "socket", "vercel"]);
    const shouldColor = ![...noColorIcons].some(key => iconClass.includes(key));

    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    <div className="p-2 text-2xl rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors cursor-default">
                        <i className={` ${iconClass}  ${shouldColor ? "colored" : ""}`}></i>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
