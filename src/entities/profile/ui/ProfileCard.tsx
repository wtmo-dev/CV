import Link from "next/link";
import { IoLogoGithub, IoMdMail, IoMdPhonePortrait } from "react-icons/io";

import type { Profile } from "../model/interface";

interface Props {
    profile: Profile;
}

export default function ProfileCard({
    profile,
}: Props) {
    return (
        <div className="w-full max-w-5xl mx-auto">

            {/* Header */}
            <div
                className="
                    flex
                    flex-col
                    items-center
                    gap-6

                    md:flex-row
                    md:items-center
                    md:gap-10
                "
            >
                {/* Profile Image */}
                <img
                    src="/profile.png"
                    alt={profile.name}
                    className="
                        h-40
                        w-40

                        sm:h-48
                        sm:w-48

                        md:h-56
                        md:w-56

                        rounded-full
                        object-cover
                        object-top

                        border-4
                        border-zinc-200

                        shadow-xl
                    "
                />

                {/* Name */}
                <div
                    className="
                        flex
                        flex-col

                        items-center
                        text-center

                        md:items-start
                        md:text-left
                    "
                >
                    <h1
                        className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl

                            font-bold
                        "
                    >
                        {profile.name}
                    </h1>

                    <h2
                        className="
                            mt-2

                            text-lg
                            sm:text-xl
                            md:text-2xl

                            font-semibold
                            text-zinc-600
                        "
                    >
                        {profile.role}
                    </h2>
                </div>
            </div>

            {/* Description */}
            <p
                className="
                    mt-10

                    whitespace-pre-line

                    text-base
                    sm:text-lg

                    leading-7
                    sm:leading-8

                    text-zinc-700
                "
            >
                {profile.description}
            </p>

            {/* Contact Info */}
            <div className="mt-8 flex flex-col gap-4">

                <Link
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex
                        items-center
                        gap-4

                        rounded-xl
                        border
                        border-zinc-200

                        p-4

                        transition
                        hover:bg-zinc-50
                    "
                >
                    <IoLogoGithub className="h-6 w-6 shrink-0" />

                    <div>
                        <p className="font-semibold">
                            GitHub
                        </p>

                        <p className="text-sm text-zinc-500">
                            github.com/wtmo-dev
                        </p>
                    </div>

                </Link>

                <Link
                    href={`mailto:${profile.email}`}
                    className="
                        flex
                        items-center
                        gap-4

                        rounded-xl
                        border
                        border-zinc-200

                        p-4

                        transition
                        hover:bg-zinc-50
                    "
                >
                    <IoMdMail className="h-6 w-6 shrink-0" />

                    <div>
                        <p className="font-semibold">
                            Email
                        </p>

                        <p className="text-sm text-zinc-500">
                            {profile.email}
                        </p>
                    </div>

                </Link>

                <Link
                    href={`tel:${profile.phone}`}
                    className="
                        flex
                        items-center
                        gap-4

                        rounded-xl
                        border
                        border-zinc-200

                        p-4

                        transition
                        hover:bg-zinc-50
                    "
                >
                    <IoMdPhonePortrait className="h-6 w-6 shrink-0" />

                    <div>
                        <p className="font-semibold">
                            Phone
                        </p>

                        <p className="text-sm text-zinc-500">
                            {profile.phone}
                        </p>
                    </div>

                </Link>

            </div>

        </div>
    );
}