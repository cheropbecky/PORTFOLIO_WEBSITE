import { cn } from "@/lib/utils";

export const SectionWrapper = ({ children, id, className }) => {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full border-b border-border/40",
                className
            )}
        >
            {children}
        </section>
    );
};
