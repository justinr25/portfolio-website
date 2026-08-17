import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
    title: "All Projects — Justin Rosales",
    description:
        "A comprehensive collection of software projects, full-stack web applications, machine learning systems, and engineering tools built by Justin Rosales.",
};

export default function ProjectsPage() {
    return (
        <>
            <Navbar maxWidth="max-w-6xl" />
            <main className="mx-auto max-w-6xl px-6 pt-28 pb-20">
                <ScrollReveal>
                    <div className="mb-10">
                        <Link
                            href="/"
                            className="group mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-overlay transition-colors hover:text-mauve"
                        >
                            <ArrowLeft
                                size={13}
                                className="transition-transform group-hover:-translate-x-0.5"
                            />
                            <span>Back to home</span>
                        </Link>

                        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                            All Projects
                        </h1>
                        <p className="mt-2 text-sm text-subtext">
                            Web applications, hackathon projects, and stuff
                            I&apos;ve built for learning/fun.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delayMs={100}>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </ScrollReveal>
            </main>
            <Footer maxWidth="max-w-6xl" />
        </>
    );
}
