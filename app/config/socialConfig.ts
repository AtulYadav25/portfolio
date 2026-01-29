export interface SocialLink {
    name: string;
    url: string;
    icon: "linkedin" | "github" | "x" | "medium";
}

export const socialLinks: SocialLink[] = [
    {
        name: "LinkedIn",
        url: "www.linkedin.com/in/atulyadav25",
        icon: "linkedin",
    },
    {
        name: "GitHub",
        url: "https://github.com/AtulYadav25",
        icon: "github",
    },
    {
        name: "Medium",
        url: "https://medium.com/@atulprogrammer",
        icon: "medium",
    },
    {
        name: "X",
        url: "https://x.com/atulcode",
        icon: "x",
    },
];

export const contactEmail = "atul007414@gmail.com";
export const calendlyUrl = "https://cal.com/atulyadav/30min";
