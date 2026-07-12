import ExperienceCard from "@/entities/experience/ui/ExperienceCard";

import { experiences } from "@/entities/experience/model/data";
import type { Experience } from "@/entities/experience/model/interface";
import { Section } from "@/shared/ui";

export default function ExperienceSection(){
    return (
        <Section className="py-0">
            <h1
                className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl

                    font-bold
                    mb-6
                "
            >
                Experiences
            </h1>
            {
                experiences.map((experience: Experience)=>(
                    <ExperienceCard
                        key={experience.period}
                        experience={experience}
                    />
                ))
            }
        </Section>
    );
}