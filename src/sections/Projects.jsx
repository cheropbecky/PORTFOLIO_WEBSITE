import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import bitsaImg from "@/assets/bitsa.png";
import luxxImg from "@/assets/luxx.png";
import techflowImg from "@/assets/techflow.png";

import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
    {
        title: "BITSA Club Website",
        description: "Official website for the Bachelor of Information Technology Students Association. Empowering tech leaders through innovation and collaboration.",
        tags: ["React", "Tailwind CSS", "Node.js", "Mongo DB"],
        image: bitsaImg,
        demo: "https://bitsa-frontend-rosy.vercel.app/",
        github: "https://github.com/cheropbecky",
    },
    {
        title: "Luxx Liquor Store",
        description: "A fully responsive dark-themed liquor store website with elegant product cards, shopping cart functionality, and modal checkout.",
        tags: ["HTML", "CSS", "JavaScript", "EmailJS"],
        image: luxxImg,
        demo: "https://cheropbecky.github.io/luxx-liquor-store/",
        github: "https://github.com/cheropbecky/luxx-liquor-store",
    },
    {
        title: "Techflow",
        description: "A modern tech platform showcasing innovation and digital solutions. Features a clean interface and responsive design.",
        tags: ["Tailwindcss","Javascript", "HTML"],
        image: techflowImg,
        demo: "https://cheropbecky.github.io/Techflow/",
        github: "https://github.com/cheropbecky/Techflow",
    },
];

export const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-secondary/20 rounded-[3rem]">
            <SectionHeading title="Featured" highlight="Projects" />
            <div className="text-center mb-16">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="overflow-hidden p-0 group h-full flex flex-col">
                            <div className="h-48 w-full relative overflow-hidden bg-muted">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">{project.title}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Button size="icon" variant="secondary" className="rounded-full" onClick={() => window.open(project.github, '_blank')}>
                                        <Github className="h-5 w-5" />
                                    </Button>
                                    <Button size="icon" variant="primary" className="rounded-full" onClick={() => window.open(project.demo, '_blank')}>
                                        <ExternalLink className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
