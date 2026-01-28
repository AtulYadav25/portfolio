export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-zinc-800/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                <p className="text-zinc-500 text-sm">
                    Built by Atul. All rights reserved. © {currentYear}
                </p>
            </div>
        </footer>
    );
}
