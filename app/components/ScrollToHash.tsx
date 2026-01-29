"use client";

import { useEffect } from "react";

export function ScrollToHash() {
    useEffect(() => {
        // Check if there's a hash in the URL
        const hash = window.location.hash;
        if (hash) {
            // Small delay to ensure the page is fully loaded
            setTimeout(() => {
                const element = document.getElementById(hash.replace("#", ""));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
        }
    }, []);

    return null;
}
