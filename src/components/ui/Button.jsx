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
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/50 hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
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
