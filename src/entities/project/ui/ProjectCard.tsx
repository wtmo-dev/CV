import Link from "next/link";

import { Button } from "@/shared/ui";
import type { Project } from "../model/interface";

interface Props {
    project: Project;
}

export default function ProjectCard({
    project,
}: Props) {
    return (
        <article
            className="
                w-full

                rounded-2xl
                border
                border-zinc-200

                p-6

                transition
                hover:bg-zinc-50
            "
        >
            {/* Header */}
            <div
                className="
                    flex
                    flex-col
                    gap-2

                    md:flex-row
                    md:items-start
                    md:justify-between
                "
            >
                <div>
                    <h2 className="text-3xl font-bold">
                        {project.title}
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        {project.period}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p
                className="
                    mt-5

                    text-zinc-700
                    leading-7

                    line-clamp-2
                "
            >
                {project.shortDescription}
            </p>

            {/* Achievements */}
            <ul className="space-y-2 mt-2">
                {project.achievements.slice(0, 2).map((achievement) => (
                    <li
                        key={achievement}
                        className="
                            flex
                            items-start
                            gap-2

                            text-sm
                            leading-6

                            text-emerald-700
                        "
                    >
                        <span className="mt-0.5 font-bold">
                            ✔
                        </span>

                        <span>
                            {achievement}
                        </span>
                    </li>
                ))}

                {project.achievements.length > 2 && (
                    <li
                        className="
                            flex
                            items-start
                            gap-2

                            text-sm
                            leading-6

                            text-emerald-700
                        "
                    >
                        +{project.achievements.length - 2}
                    </li>
                )}
            </ul>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                    <span
                        key={tech}
                        className="
                            rounded-full
                            bg-zinc-100

                            px-3
                            py-1

                            text-sm
                            font-medium
                        "
                    >
                        {tech}
                    </span>
                ))}

                {project.techStack.length > 4 && (
                    <span
                        className="
                            rounded-full
                            bg-zinc-200
                            px-3
                            py-1
                            text-sm
                            font-medium
                            text-zinc-600
                        "
                    >
                        +{project.techStack.length - 4}
                    </span>
                )}
            </div>

            {/* Footer */}
            <div
                className="
                    mt-8

                    flex
                    flex-wrap

                    items-center
                    justify-between

                    gap-3
                "
            >
                <div className="flex gap-3">

                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                        >
                            <Button>
                                GitHub
                            </Button>
                        </Link>
                    )}

                    {project.demo && (
                        <Link
                            href={project.demo}
                            target="_blank"
                        >
                            <Button variant="ghost">
                                Demo
                            </Button>
                        </Link>
                    )}

                </div>

                <Link
                    href={`/projects/${project.slug}`}
                >
                    <Button variant="ghost">
                        Read More →
                    </Button>
                </Link>

            </div>

        </article>
    );
}