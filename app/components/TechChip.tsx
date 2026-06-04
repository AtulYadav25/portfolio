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
    variant?: "normal" | "card";
}

export function TechChip({ iconClass, name, showName = true, variant = "normal" }: TechChipProps) {
    const noColorIcons = new Set(["nextjs", "fastify", "express", "socket", "vercel"]);
    const shouldColor = ![...noColorIcons].some(key => iconClass.includes(key));

    if (variant === "card") {
        return (
            <TooltipProvider>
                <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col items-center justify-center gap-2 p-4 w-[110px] h-[90px] bg-zinc-900 border border-zinc-700/60 rounded-xl hover:border-zinc-500 hover:bg-zinc-800/80 transition-all cursor-default group">
                            <i
                                className={`${iconClass} text-3xl ${shouldColor ? "colored" : "text-zinc-300"} group-hover:scale-110 transition-transform`}
                            />
                            {showName && (
                                <span className="text-zinc-400 text-[11px] font-medium text-center leading-tight group-hover:text-zinc-200 transition-colors">
                                    {name}
                                </span>
                            )}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }

    // variant === "normal" (default)
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