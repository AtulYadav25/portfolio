"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechChipProps {
    iconClass: string;
    name: string;
    showName?: boolean;
}

export function TechChip({ iconClass, name, showName = true }: TechChipProps) {
    const noColorIcons = new Set(["nextjs", "fastify", "express", "socket", "vercel"]);
    const shouldColor = ![...noColorIcons].some(key => iconClass.includes(key));

    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-dashed border-zinc-600 rounded-md text-xs sm:text-sm text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800 transition-all cursor-default !bg-gray-800">
                        <i className={`${iconClass} text-lg ${shouldColor ? "colored" : ""}`}></i>
                        {showName && <span className="text-white font-semibold">{name}</span>}
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
