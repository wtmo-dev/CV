import Link from "next/link";

import { Button, Container } from "@/shared/ui";

import type { Project } from "../../../entities/project/model/interface";
import ImageGallery from "@/entities/image/ui/ImageGallary";
import ProjectCaseCard from "@/entities/project/ui/ProjectCaseCard";

interface Props {
    project: Project;
}

export default function ProjectDetail({
    project,
}: Props) {
    return (
        <Container>
            <Link
                href="/"
                className="
                    text-zinc-500
                    hover:text-black
                "
            >
                ← Back
            </Link>

            <h1
                className="
                    mt-8

                    text-5xl

                    font-bold
                "
            >
                {project.title}
            </h1>

            <p className="mt-2 text-zinc-500">
                {project.period}
            </p>

            <div
                className="
                    mt-6

                    flex
                    gap-3
                "
            >
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
                            Live Demo
                        </Button>
                    </Link>

                )}
            </div>

            {/* Overview */}

            <section className="mt-16">

                <h2
                    className="
                        text-3xl
                        font-bold
                    "
                >
                    Overview
                </h2>

                <p
                    className="
                        mt-4

                        whitespace-pre-line

                        leading-8
                    "
                >
                    {project.longDescription}
                </p>

            </section>

            {/* Problem Cases */}

            <section className="mt-20">

                <h2 className="text-3xl font-bold">
                    Problem Cases
                </h2>

                <div className="mt-8 space-y-8">

                    {project.cases.map((item) => (

                        <ProjectCaseCard
                            key={item.title}
                            title={item.title}
                            problem={item.problem}
                            solution={item.solution}
                            results={item.results}
                        />

                    ))}

                </div>

            </section>

            {/* Tech */}

            <section className="mt-16">

                <h2 className="text-3xl font-bold">
                    Tech Stack
                </h2>

                <div
                    className="
                        mt-6

                        flex
                        flex-wrap

                        gap-3
                    "
                >
                    {project.techStack.map((tech) => (

                        <span
                            key={tech}
                            className="
                                rounded-full

                                bg-zinc-100

                                px-4
                                py-2
                            "
                        >
                            {tech}
                        </span>

                    ))}
                </div>

            </section>

            <h2 className="mt-20 text-3xl font-bold">
                Project Images
            </h2>

            {
                project.images && 
                <ImageGallery
                    images={project.images}
                    title={project.title}
                />
            }
            

        </Container>
    );
}