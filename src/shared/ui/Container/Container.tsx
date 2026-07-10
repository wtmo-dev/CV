import { cn } from "@/shared/lib/cn";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({
    children,
    className,
}: ContainerProps) {
    return (
        <div
            className={cn(
                "px-6",
                className
            )}
        >
            {children}
        </div>
    );
}