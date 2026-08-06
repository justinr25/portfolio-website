import { ExternalLink, Award } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { projects } from "@/data/portfolio";

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <h2 className="mb-10 font-mono text-lg font-semibold text-text">
                Projects
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group rounded-lg border border-surface/50 p-5 transition-colors hover:border-surface hover:bg-surface/20"
                    >
                        <div className="mb-3 flex items-start justify-between">
                            <h3 className="font-semibold text-text group-hover:text-mauve transition-colors">
                                {project.name}
                            </h3>

                            <div className="flex items-center gap-2">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.name} GitHub`}
                                        className="text-overlay transition-colors hover:text-mauve"
                                    >
                                        <GitHubIcon size={16} />
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.name} live demo`}
                                        className="text-overlay transition-colors hover:text-mauve"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                                {project.links.devpost && (
                                    <a
                                        href={project.links.devpost}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.name} Devpost`}
                                        className="text-overlay transition-colors hover:text-mauve"
                                    >
                                        <Award size={16} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="mb-4 text-sm leading-relaxed text-subtext">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full bg-surface/50 px-2.5 py-0.5 font-mono text-xs text-subtext"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
