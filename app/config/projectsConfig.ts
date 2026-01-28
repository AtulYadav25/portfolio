export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    thumbnail: string;
    technologies: { name: string; iconClass: string }[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: "proj-1",
        slug: "giftchain",
        title: "Giftchain Fun",
        shortDescription:
            "A Web3 gifting platform (Alternative of BuyMeACoffee & Patreon Platform) where users can send crypto coins as gifts / Support to their favourite creators.",
        thumbnail: "/assets/projects/giftchain.png",
        technologies: [
            { name: "React", iconClass: "devicon-react-original" },
            { name: "TypeScript", iconClass: "devicon-typescript-plain" },
            { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original" },
            { name: "Fastify", iconClass: "devicon-fastify-plain" },
            { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
            { name: "Node JS", iconClass: "devicon-nodejs-plain" },
            { name: "Express JS", iconClass: "devicon-express-original" },
        ],
        liveUrl: "https://giftchain.fun",
        githubUrl: "https://github.com/AtulYadav25/giftchain",
        featured: true,
    },
    {
        id: "proj-2",
        slug: "sui-dao-voting-app",
        title: "SUI DAO Voting App",
        shortDescription:
            "A decentralized voting application for the SUI DAO ecosystem, enabling Members to vote on proposals and governance decisions.",
        thumbnail: "/assets/projects/sui-dao.png",
        technologies: [
            { name: "React js", iconClass: "devicon-react-original" },
            { name: "TypeScript", iconClass: "devicon-typescript-plain" },
            { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original" },
            { name: "Vercel", iconClass: "devicon-vercel-original" },
        ],
        liveUrl: "https://devflow.dev",
        githubUrl: "https://github.com/AtulYadav25/devflow",
        featured: true,
    },
    {
        id: "proj-3",
        slug: "genesis-prompt",
        title: "Genesis Prompt",
        shortDescription:
            "A web app to share and discover AI prompts built with Next JS",
        thumbnail: "/assets/projects/genesis2.png",
        technologies: [
            { name: "Next js", iconClass: "devicon-nextjs-plain" },
            { name: "TypeScript", iconClass: "devicon-typescript-plain" },
            { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original" },
            { name: "Vercel", iconClass: "devicon-vercel-original" },
        ],
        liveUrl: "https://devflow.dev",
        githubUrl: "https://github.com/AtulYadav25/devflow",
        featured: true,
    },

];
