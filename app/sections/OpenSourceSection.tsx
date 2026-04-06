"use client";

import { contributionsList } from "../config/contributionConfig";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitPullRequest } from "lucide-react";

export function OpenSourceSection() {
    return (
        <section id="open-source" className="py-12 sm:py-16">
            <RevealOnScroll>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-8">Open Source Contributions</h2>
            </RevealOnScroll>

            <div className="flex flex-col gap-8">
                {contributionsList.map((org, index) => (
                    <RevealOnScroll key={org.organizationName} delay={index * 0.1}>
                        <div className="bg-zinc-900/50 rounded-xl p-5 sm:p-6 border border-zinc-800/50">
                            <div className="flex items-center gap-3 mb-6">
                                <Avatar className="w-12 h-12 rounded-lg flex-shrink-0 bg-zinc-800 border border-zinc-700/50">
                                    <AvatarImage src={org.organizationLogo} alt={org.organizationName} />
                                    <AvatarFallback className="bg-transparent text-white font-medium">
                                        {org.organizationName.substring(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-white font-medium text-lg">{org.organizationName}</h3>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 pl-4 sm:pl-6 border-l-2 border-zinc-800/80 ml-2">
                                {org.contributions.map((contribution, i) => (
                                    <div key={i} className="relative">
                                        {/* Connecting dot */}
                                        <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[23px] sm:-left-[31px] top-1.5 ring-4 ring-zinc-900/50" />
                                        
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                            <h4 className="text-white font-medium text-md">{contribution.title}</h4>
                                            <span className="text-zinc-500 text-sm whitespace-nowrap">{contribution.date}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                                            <span className="text-zinc-400 text-sm font-mono flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                                {contribution.repoName}
                                            </span>
                                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium border ${
                                                contribution.prLevel === 'Major' || contribution.prLevel === 'Critical' 
                                                ? 'bg-purple-900/20 text-purple-400 border-purple-800/50' 
                                                : contribution.prLevel === 'Significant'
                                                ? 'bg-blue-900/20 text-blue-400 border-blue-800/50'
                                                : 'bg-emerald-900/20 text-emerald-400 border-emerald-800/50'
                                            }`}>
                                                {contribution.prLevel} PR
                                            </span>
                                        </div>
                                        
                                        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                            {contribution.description}
                                        </p>
                                        
                                        <div className="flex gap-4">
                                            <a href={contribution.prLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-zinc-300 transition-colors flex items-center gap-1.5">
                                                <GitPullRequest className="w-4 h-4" />
                                                View PR
                                            </a>
                                            {contribution.issueLink && (
                                                <a href={contribution.issueLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                                                    Related Issue
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
