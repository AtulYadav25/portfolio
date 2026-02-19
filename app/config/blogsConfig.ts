export interface Blog {
    id: string;
    title: string;
    shortDescription: string;
    thumbnail: string;
    tags: string[];
    date: string;
    url: string;
    readTime: string;
}

export const blogs: Blog[] = [
    {
        id: "blog-1",
        title: "Will Quantum Computers END Crypto?",
        shortDescription:
            "Quantum computers are becoming so powerful that today’s security starts feeling old. I’ll reveal what's cooking around this. Some say that the problem that normal computer takes long years, quantum computers will need minutes!",
        thumbnail: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7wQEY_Q9YAsMIXpcS3AEIg.png",
        tags: ["Quantum", "Crypto", "Security"],
        date: "2026-01-13",
        readTime: "3 min read",
        url: "https://medium.com/@atulprogrammer/will-quantum-computers-end-crypto-30ca50c06a72"
    },
    {
        id: "blog-2",
        title: "How Uber Handles TRILLIONS of Transactions — The Secret",
        shortDescription:
            "How can software handle TRILLIONS of payments without missing a single transaction? In this post, I’ll reveal the secret of the Uber engineer's solution and easily explain how it all works.",
        thumbnail: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*gUCk2psAyR3h5TBfrR-NfA.png",
        tags: ["Uber", "Transactions", "Fintech"],
        date: "2024-11-03",
        readTime: "5 min read",
        url: "https://medium.com/@atul.yadav_123456789/how-uber-handles-trillions-of-transactions-the-secret-123456789"
    }
];
