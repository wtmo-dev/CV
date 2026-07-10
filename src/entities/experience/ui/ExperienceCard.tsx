import {Experience} from "../model/experience";

interface Props{
    experience:Experience;
}

export default function ExperienceCard({
    experience
}:Props){
    return (
        <div>
            <h1 className="text-4xl font-bold">
            {experience.company}
            </h1>
            <h2 className="text-xl">
            {experience.position}
            </h2>
            <h2 className="text-xl">
            {experience.period}
            </h2>
            <p>
            {experience.description}
            </p>
        </div>
    )
}