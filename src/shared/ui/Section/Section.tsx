import { cn } from "@/shared/lib/cn";

interface Props {

    children: React.ReactNode;

    className?: string;
}

export function Section({
    children,
    className,
}: Props) {

    return (

        <section
            className={cn(
                "w-full py-24",
                className
            )}
        >
            {children}
        </section>

    );

}