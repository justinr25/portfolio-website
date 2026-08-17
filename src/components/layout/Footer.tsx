import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";

export function Footer({ maxWidth = "max-w-4xl" }: { maxWidth?: string }) {
    return (
        <footer className="border-t border-surface/60 py-8">
            <div className={`mx-auto flex ${maxWidth} justify-between gap-4 px-6`}>
                <p className="font-mono text-xs text-overlay">
                    © {new Date().getFullYear()} Justin Rosales
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/justinr25"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-overlay transition-colors hover:text-mauve"
                    >
                        <GitHubIcon size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/justinrosales"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-overlay transition-colors hover:text-mauve"
                    >
                        <LinkedInIcon size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
