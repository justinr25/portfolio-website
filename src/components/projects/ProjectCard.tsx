import { ExternalLink, Award } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group flex flex-col justify-between rounded-lg border border-surface/50 p-5 transition-colors hover:border-surface hover:bg-surface/20">
            <div>
                <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-text group-hover:text-mauve transition-colors">
                        {project.name}
                    </h3>

                    <div className="flex shrink-0 items-center gap-2">
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
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
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
    );
}
