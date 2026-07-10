import {Project} from "../model/project";

interface Props{
    project:Project;
}

export default function projectCard({
    project
}:Props){
    return (
        <div>
            <h1 className="text-4xl font-bold">
            {project.title}
            </h1>
            <h2 className="text-xl">
            {project.period}
            </h2>
            <p>
            {project.description}
            </p>
            <p>
            {project.techStack}
            </p>
        </div>
    )
}