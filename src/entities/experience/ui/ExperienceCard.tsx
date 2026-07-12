import type { Experience } from "../model/interface";

interface Props{
    experience:Experience;
}

export default function ExperienceCard({
    experience
}:Props){
    return (
        <article
            className="
                w-full

                rounded-2xl
                border
                border-zinc-200

                p-6
                mb-4

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
                        {experience.company}
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        {experience.period}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                        {experience.position}
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
                {experience.description}
            </p>
        </article>
    )
}