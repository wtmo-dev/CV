interface Props {
    title: string;

    problem: string;

    solution: string;

    results: string[];
}

export default function ProjectCaseCard({
    title,
    problem,
    solution,
    results,
}: Props) {
    return (
        <article
            className="
                rounded-2xl
                border
                border-zinc-200
                bg-white
                p-8
            "
        >
            <h3 className="text-2xl font-bold">
                {title}
            </h3>

            <div className="mt-8">

                <h4 className="font-semibold text-red-500">
                    Problem
                </h4>

                <p className="mt-2 whitespace-pre-line leading-7 text-zinc-700">
                    {problem}
                </p>

            </div>

            <div className="mt-8">

                <h4 className="font-semibold text-blue-600">
                    Solution
                </h4>

                <p className="mt-2 whitespace-pre-line leading-7 text-zinc-700">
                    {solution}
                </p>

            </div>

            <div className="mt-8">

                <h4 className="font-semibold text-emerald-600">
                    Result
                </h4>

                <ul className="mt-3 space-y-2">
                    {results.map((result) => (
                        <li
                            key={result}
                            className="
                                flex
                                gap-2
                                text-emerald-700
                            "
                        >
                            <span>✔</span>

                            <span>{result}</span>
                        </li>
                    ))}
                </ul>

            </div>

        </article>
    );
}