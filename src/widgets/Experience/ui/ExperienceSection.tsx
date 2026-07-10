import ExperienceCard from "@/entities/experience/ui/ExperienceCard";
import { experiences } from "../model/data";
import { Experience } from "@/entities/experience/model/experience";

export default function ExperienceSection(){
    return (
        <section>
            {
                experiences.map((experience: Experience)=>(
                    <ExperienceCard
                        key={experience.period}
                        experience={experience}
                    />
                ))
            }
        </section>
    );
}