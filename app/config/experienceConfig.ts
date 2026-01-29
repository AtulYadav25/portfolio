export interface Experience {
    id: string;
    company: string;
    logo: string;
    role: string;
    startDate: string;
    endDate: string;
    location: string;
    locationType: string;
    technologies: { name: string; iconClass: string }[];
    responsibilities: string[];
}

export const experiences: Experience[] = [
    {
        id: "exp-1",
        company: "Good Vibes ;)",
        logo: "/assets/companies/techcorp.png",
        role: "Freelance Full Stack Developer",
        startDate: "March 2025",
        endDate: "September 2025",
        location: "Dubai",
        locationType: "Remote",
        technologies: [
            { name: "React", iconClass: "devicon-react-original" },
            { name: "Javascript", iconClass: "devicon-javascript-plain" },
            { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
            { name: "Node.js", iconClass: "devicon-nodejs-plain" },
            { name: "Express", iconClass: "devicon-express-original" },
            { name: "Socket IO", iconClass: "devicon-socketio-plain" },
            { name: "Redis", iconClass: "devicon-redis-plain" },
            { name: "Docker", iconClass: "devicon-docker-plain" },
            { name: "Ubuntu", iconClass: "devicon-ubuntu-plain" },

        ],
        responsibilities: [
            "Built a full-stack Web3 real-time application with live user interactions and competitive leaderboard mechanics",
            "Implemented real-time state synchronization, event handling, and basic anti-cheat validation using Socket.IO",
            "Designed, developed, and deployed SUI Move smart contracts to handle on-chain transactions and token-based actions",
            "Integrated Sui wallet connectivity using Mysten SUI Dapp Kit, enabling users to authenticate, participate, and receive on-chain rewards",
            "Developed multiple interactive frontend modules using JavaScript Canvas, Phaser.js, and HTML5",
            "Built a scalable backend using Node.js, Express, MongoDB, and Redis to manage sessions, scoring data, and real-time updates",
            "Deployed and maintained the application on an OVH Cloud VPS for reliability and performance",
            "Set up CI/CD pipelines to enable fast, zero-downtime deployments and smoother release cycles"
        ]

    }
];
