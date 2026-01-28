"use client";

import { useEffect, useState } from "react";
import { RevealOnScroll } from "../components/RevealOnScroll";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface GitHubStats {
    totalContributions: number;
    weeks: ContributionDay[][];
}

const GITHUB_USERNAME = "AtulYadav25";

export function GitHubActivitySection() {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                // Fetch from the public GitHub contributions API
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch GitHub contributions");
                }

                const data = await response.json();

                // Transform the data to match our expected format
                const contributions = data.contributions || [];
                const totalContributions = data.total?.lastYear || 0;

                // Group contributions by week (GitHub style: columns are weeks, rows are days)
                const weeks: ContributionDay[][] = [];
                let currentWeek: ContributionDay[] = [];

                contributions.forEach(
                    (
                        day: { date: string; count: number; level: number },
                        index: number
                    ) => {
                        const dayOfWeek = new Date(day.date).getDay();

                        // Start a new week on Sunday
                        if (dayOfWeek === 0 && currentWeek.length > 0) {
                            weeks.push(currentWeek);
                            currentWeek = [];
                        }

                        currentWeek.push({
                            date: day.date,
                            count: day.count,
                            level: day.level,
                        });

                        // Push the last week
                        if (index === contributions.length - 1 && currentWeek.length > 0) {
                            weeks.push(currentWeek);
                        }
                    }
                );

                setStats({
                    totalContributions,
                    weeks,
                });
            } catch (err) {
                console.error("Error fetching GitHub contributions:", err);
                setError("Failed to load GitHub contributions");
            } finally {
                setLoading(false);
            }
        };

        fetchContributions();
    }, []);

    const getLevelColor = (level: number) => {
        // GitHub's exact contribution colors for dark mode
        const colors = [
            "#161b22", // Level 0 - no contributions
            "#0e4429", // Level 1 - few contributions
            "#006d32", // Level 2 - moderate contributions
            "#26a641", // Level 3 - good contributions
            "#39d353", // Level 4 - high contributions
        ];
        return colors[level] || colors[0];
    };

    // Get month labels with their approximate position
    const getMonthLabels = () => {
        if (!stats || stats.weeks.length === 0) return [];

        const months: { label: string; weekIndex: number }[] = [];
        let lastMonth = -1;

        stats.weeks.forEach((week, weekIndex) => {
            if (week.length > 0) {
                const date = new Date(week[0].date);
                const month = date.getMonth();

                if (month !== lastMonth) {
                    months.push({
                        label: date.toLocaleDateString("en-US", { month: "short" }),
                        weekIndex: weekIndex,
                    });
                    lastMonth = month;
                }
            }
        });

        return months;
    };

    const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];
    const totalWeeks = stats?.weeks.length || 52;

    return (
        <section className="py-12 sm:py-16">
            <RevealOnScroll>
                <div className="flex items-center gap-2  ">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-0">GitHub Activity</h2>

                </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
                <div className="bg-zinc-900/50 rounded-xl p-4 sm:p-6 border border-zinc-800/50 overflow-x-auto sm:overflow-visible">
                    {loading ? (
                        <div className="text-zinc-500 text-center py-8">Loading contributions...</div>
                    ) : error ? (
                        <div className="text-red-400 text-center py-8">{error}</div>
                    ) : stats ? (
                        <div className="flex flex-col min-w-[700px] sm:min-w-0">
                            {/* Month labels row */}
                            <div className="flex mb-1">
                                {/* Spacer for day labels column */}
                                <div className="w-8 shrink-0"></div>
                                {/* Month labels - positioned relative to weeks */}
                                <div className="flex-1 flex text-[10px] text-zinc-500 gap-0">
                                    {getMonthLabels().map((month, i, arr) => {
                                        // Calculate width based on weeks until next month
                                        const nextMonthIndex = arr[i + 1]?.weekIndex || totalWeeks;
                                        const weeksInMonth = nextMonthIndex - month.weekIndex;
                                        const widthPercent = (weeksInMonth / totalWeeks) * 100;

                                        return (
                                            <span
                                                key={i}
                                                style={{ width: `${widthPercent}%` }}
                                            >
                                                {month.label}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Graph with day labels */}
                            <div className="flex">
                                {/* Day labels */}
                                <div className="flex flex-col gap-[2px] text-[10px] text-zinc-500 pr-1 w-8 shrink-0">
                                    {dayLabels.map((label, i) => (
                                        <div
                                            key={i}
                                            className="h-[10px] sm:h-3 flex items-center justify-end pr-1"
                                        >
                                            {label}
                                        </div>
                                    ))}
                                </div>

                                {/* Contribution graph */}
                                <div className="flex-1 flex gap-[2px]">
                                    {stats.weeks.map((week, weekIndex) => (
                                        <div
                                            key={weekIndex}
                                            className="flex flex-col gap-[2px] flex-1"
                                        >
                                            {week.map((day, dayIndex) => (
                                                <div
                                                    key={`${weekIndex}-${dayIndex}`}
                                                    className="w-full aspect-square rounded-[2px] cursor-default transition-all hover:ring-1 hover:ring-zinc-500"
                                                    style={{
                                                        backgroundColor: getLevelColor(day.level),
                                                        minHeight: '10px',
                                                        maxHeight: '12px',
                                                    }}
                                                    title={`${day.count} contribution${day.count !== 1 ? "s" : ""} on ${new Date(day.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer with total and legend */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                                <p className="text-zinc-400 text-sm">
                                    {stats.totalContributions.toLocaleString()} contributions in
                                    the last year
                                </p>

                                <div className="flex items-center gap-1">
                                    <span className="text-zinc-500 text-xs mr-1">Less</span>
                                    {[0, 1, 2, 3, 4].map((level) => (
                                        <div
                                            key={level}
                                            className="w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-[2px]"
                                            style={{ backgroundColor: getLevelColor(level) }}
                                        />
                                    ))}
                                    <span className="text-zinc-500 text-xs ml-1">More</span>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </RevealOnScroll>
        </section>
    );
}
