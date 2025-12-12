import { motion } from "framer-motion";
import { Layout, Smartphone, Database, PenTool } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
    {
        title: "Portfolio Website Development",
        description: "Showcase your work with a stunning, personal portfolio website.",
        icon: Layout,
    },
    {
        title: "Business Website Development",
        description: "Professional websites to establish your brand and grow your business.",
        icon: Database, // Using Database as a placeholder for "Business" or generic structure
    },
    {
        title: "Landing Page Development",
        description: "High-converting landing pages designed to capture leads and sales.",
        icon: Smartphone, // Smartphone fits "Landing Page" / responsive
    },
    {
        title: "Website Redesign",
        description: "Revamp your existing website with a modern, responsive, and fresh look.",
        icon: PenTool,
    },
];

export const Services = () => {
    return (
        <SectionWrapper id="services">
            <SectionHeading title="My" highlight="Services" />
            <div className="text-center mb-16">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    I offer a wide range of services to help you build your digital presence.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col items-center text-center p-8">
                            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
