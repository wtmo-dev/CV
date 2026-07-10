import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button({
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded-lg bg-black text-white hover:opacity-80",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}