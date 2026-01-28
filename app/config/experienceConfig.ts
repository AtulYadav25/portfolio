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
            "Built a full-stack Web3 arcade game called 'Chop-SUI Panda' with real-time gameplay audit and real-time leaderboard competition",
            "Used Socket.IO to handle fast game updates, player actions, and basic security checks in real time gameplay",
            "Created and deployed SUI Move smart contracts for game token purchases and in-game transactions.",
            "Added wallet support using Mysten SUI Dapp Kit Packages, so players could connect, compete, and claim weekly rewards on the leaderboard",
            "Developed & Integrated 3 Frontend Games (Fruit Ninja, Timber Man, Knife Hit) using Javascript Canvas, Phaser Js, and HTML5",
            "Developed backend using Node.js, Express, MongoDB, and Redis for game sessions and leaderboard data",
            "Set up weekly prize distribution with automatic leaderboard reset and reward handling for top players",
            "Deployed the game on OVH Cloud VPS for stable hosting and easy updates",
            "Added a CI/CD pipeline to push updates faster without downtime or manual server steps",
        ]


    }
];
