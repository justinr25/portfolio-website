import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/portfolio";

export function Projects() {
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section id="projects" className="py-20">
            <h2 className="mb-10 font-mono text-lg font-semibold text-text">
                Featured Projects
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div className="mt-8">
                <Link
                    href="/projects"
                    className="group inline-flex items-center gap-1.5 font-mono text-xs text-overlay transition-colors hover:text-mauve"
                >
                    <span>See all projects</span>
                    <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5"
                    />
                </Link>
            </div>
        </section>
    );
}

