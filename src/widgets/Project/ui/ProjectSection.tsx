import ProjectCard from "@/entities/project/ui/ProjectCard";
import { projects } from "@/entities/project/model/data";
import type { Project } from "@/entities/project/model/interface";
import { Section } from "@/shared/ui";

export default function ProjectSection(){

    return (
        <Section>
            {
                projects.map((project: Project)=>(
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))
            }
        </Section>
    )
}