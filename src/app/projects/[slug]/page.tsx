import { notFound } from "next/navigation";

import { projects } from "@/entities/project/model/data";
import ProjectDetail from "@/widgets/Project/ui/ProjectDetail";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({
    params,
}: Props) {
    const { slug } = await params;

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
                <ProjectDetail project={project} />
            </main>
      </div>
    );
}