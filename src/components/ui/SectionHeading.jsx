import { motion } from "framer-motion";

export const SectionHeading = ({ title, highlight, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className={`mb-12 md:mb-16 text-center ${className}`}
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {title} <span className="text-gradient">{highlight}</span>
            </h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="h-1.5 w-24 bg-primary mx-auto rounded-full"
            />
        </motion.div>
    );
};
