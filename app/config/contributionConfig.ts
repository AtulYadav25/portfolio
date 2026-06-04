export interface Contribution {
    title: string;
    description: string;
    repoName: string;
    prLevel: "Minor" | "Significant" | "Major" | "Critical";
    prLink: string;
    issueLink?: string;
    date: string;
}

export interface OrganizationContributions {
    organizationName: string;
    organizationLogo?: string;
    contributions: Contribution[];
}

export const contributionsList: OrganizationContributions[] = [
    {
        organizationName: "Modelence",
        organizationLogo: "/assets/companies/modelence.svg",
        contributions: [
            {
                title: "Added req and res to context parameter of handlers on runMethod",
                description: "Modelence Documentation claimed, the presence of request and response in api endpoints, upon testing i found it was missing. so, i added it.",
                repoName: "modelence/modelence",
                prLevel: "Major",
                prLink: "https://github.com/modelence/modelence/pull/269",
                date: "May 2026",
            },
            {
                title: "Refactored Core Auth & Session Layer",
                description: "Updated the authentication flow to persist and expose user profile data (name, picture) end-to-end. Extended database schemas, updated the useSession() client API, and integrated OAuth data extraction for Google and GitHub. Added custom handle generation, profile validation, and updated UI components to seamlessly consume the enhanced profile fields.",
                repoName: "modelence/modelence",
                prLevel: "Major",
                prLink: "https://github.com/modelence/modelence/pull/184",
                date: "March 2026",
            },

        ]
    }
];
