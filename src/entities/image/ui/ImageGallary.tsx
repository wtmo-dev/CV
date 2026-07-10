"use client";

import { useState } from "react";

interface Props {
    images: string[];
    title: string;
}

export default function ImageGallery({
    images,
    title,
}: Props) {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    const next = () => {
        setCurrent((current + 1) % images.length);
    };

    return (
        <section className="mt-10">

            {/* Main Image */}

            <div className="relative">

                <img
                    src={images[current]}
                    alt={title}
                    className="
                        w-full

                        rounded-2xl

                        border

                        object-cover

                        aspect-video
                    "
                />

                <button
                    onClick={prev}
                    className="
                        absolute

                        left-4
                        top-1/2

                        -translate-y-1/2

                        rounded-full

                        bg-white/80

                        p-3

                        shadow
                    "
                >
                    ←
                </button>

                <button
                    onClick={next}
                    className="
                        absolute

                        right-4
                        top-1/2

                        -translate-y-1/2

                        rounded-full

                        bg-white/80

                        p-3

                        shadow
                    "
                >
                    →
                </button>

            </div>

            {/* Thumbnails */}

            <div
                className="
                    mt-6

                    flex

                    gap-4

                    overflow-x-auto

                    pb-2
                "
            >

                {images.map((image, index) => (

                    <button
                        key={image}
                        onClick={() => setCurrent(index)}
                        className={`
                            shrink-0

                            overflow-hidden

                            rounded-xl

                            border-2

                            transition

                            ${
                                current === index
                                    ? "border-black"
                                    : "border-transparent"
                            }
                        `}
                    >

                        <img
                            src={image}
                            alt={`${title}-${index}`}
                            className="
                                h-24
                                w-40

                                object-cover
                            "
                        />

                    </button>

                ))}

            </div>

        </section>
    );
}