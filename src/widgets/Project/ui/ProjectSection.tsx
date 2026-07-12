"use client"

import { usePathname } from "next/navigation";

import ProjectCard from "@/entities/project/ui/ProjectCard";
import { projects } from "@/entities/project/model/data";
import type { Project } from "@/entities/project/model/interface";
import { Section } from "@/shared/ui";
import Link from "next/link";

export default function ProjectSection(){
    const pathname = usePathname();

    const featuredSlugs = [
        "ordinary-day",
        "ai-bot",
        "predict-elect",
        "data-crawl",
        "contactless-reservation",
    ];

    const visibleProjects = pathname.includes("/projects")
        ? projects
        : projects.filter((project) =>
              featuredSlugs.includes(project.slug)
          );

    return (
        <Section className={pathname.includes("/projects") ? "py-5" : ""}>
            {
                pathname.includes("/projects") &&
                <Link
                    href="/"
                    className="
                        text-zinc-500
                        hover:text-black
                    "
                >
                    ← Back
                </Link>
            }
            <div className="flex flex-row">
                <h1
                    className="
                        text-4xl
                        sm:text-5xl
                        md:text-6xl

                        font-bold
                        mb-6
                    "
                >
                    Projects
                </h1>
                {
                    !pathname.includes("/projects") &&
                    <Link
                        href="/projects"
                        className="
                            text-zinc-500
                            hover:text-black
                            mt-5
                            ml-5
                        "
                    >
                        More →
                    </Link>
                }
            </div>
            {
                visibleProjects.map((project: Project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                    />
                ))
            }
        </Section>
    )
}