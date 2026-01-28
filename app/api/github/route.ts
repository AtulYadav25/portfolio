import { NextResponse } from "next/server";

const GITHUB_USERNAME = "AtulYadav25";

interface ContributionDay {
    date: string;
    contributionCount: number;
    contributionLevel: string;
}

interface ContributionWeek {
    contributionDays: ContributionDay[];
}

interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
}

interface GitHubResponse {
    data: {
        user: {
            contributionsCollection: {
                contributionCalendar: ContributionCalendar;
            };
        };
    };
}

export async function GET() {
    try {
        // Using GitHub's public GraphQL endpoint via a proxy service
        // Since we don't have a GitHub token, we'll use a public API
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

        // Group contributions by week
        const weeks: { date: string; count: number; level: number }[][] = [];
        let currentWeek: { date: string; count: number; level: number }[] = [];

        contributions.forEach(
            (day: { date: string; count: number; level: number }, index: number) => {
                const dayOfWeek = new Date(day.date).getDay();

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

        return NextResponse.json({
            totalContributions,
            weeks,
        });
    } catch (error) {
        console.error("Error fetching GitHub contributions:", error);

        // Return empty data on error
        return NextResponse.json(
            {
                totalContributions: 0,
                weeks: [],
                error: "Failed to fetch contributions",
            },
            { status: 500 }
        );
    }
}
