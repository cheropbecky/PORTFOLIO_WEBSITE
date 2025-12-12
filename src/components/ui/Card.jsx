import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Card = ({ children, className, ...props }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "glass-card rounded-2xl p-6 shadow-xl",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
