import { motion } from "framer-motion";
import { Code2, Palette, Globe, Terminal, Database, Layout } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

import { SectionHeading } from "@/components/ui/SectionHeading";

const skills = [
    { name: "Frontend Development", icon: Code2, description: "HTML, CSS, JavaScript, React" },
    { name: "Tools & Version Control", icon: Terminal, description: "Git, GitHub, VS Code" },
    { name: "UI/UX Design", icon: Palette, description: "Responsive Design, Modern UI" },
    { name: "Web Performance", icon: Globe, description: "Optimization, SEO Best Practices" },
];

export const About = () => {
    return (
        <SectionWrapper id="about" className="bg-secondary/20 rounded-[3rem]">
            <SectionHeading title="About" highlight="Me" />
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        I am a second-year Software Engineering student at the University of Eastern Africa, Baraton, with a strong interest in front-end web development. I have built a few responsive websites and small apps using HTML, CSS, JavaScript, React, and Tailwind CSS.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        I love solving real-world problems and I am currently deepening my skills in advanced JavaScript and modern web practices. My goal is to create impactful digital experiences that are both functional and visually stunning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <skill.icon className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                                <p className="text-sm text-muted-foreground">{skill.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
