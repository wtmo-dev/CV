import ProjectCard from "@/entities/project/ui/ProjectCard";
import { projects } from "../model/data";
import { Project } from "@/entities/project/model/project";

export default function ProjectSection(){

    return (
        <section>
        {
            projects.map((project: Project)=>(
                <ProjectCard
                    key={project.title}
                    project={project}
                />
            ))
        }
        </section>
    )
}