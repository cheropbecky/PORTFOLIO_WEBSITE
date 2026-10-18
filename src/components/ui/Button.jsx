import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Button = ({
    children,
    variant = "primary",
    className,
    icon: Icon,
    ...props
}) => {
    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground",
        ghost: "text-foreground hover:bg-secondary hover:text-foreground",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
            {Icon && <Icon className="ml-2 h-4 w-4" />}
        </motion.button>
    );
};
