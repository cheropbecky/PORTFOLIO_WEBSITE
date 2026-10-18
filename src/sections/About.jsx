import { motion } from "framer-motion";
import { Code2, Palette, Database, Terminal, GraduationCap, CheckCircle2, Award, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        description: "Pixel-perfect, accessible, and reactive user interfaces built with modern toolchains.",
        skills: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / Semantic CSS", "Framer Motion"],
    },
    {
        title: "Backend & Database",
        icon: Database,
        description: "Building reliable APIs, data schemas, and cloud-backed persistence systems.",
        skills: ["Supabase", "SQL (MySQL)", "Node.js & Express", "XAMPP (phpMyAdmin)", "REST APIs", "Docker (Beginner)"],
    },
    {
        title: "Mobile & UI/UX Design",
        icon: Palette,
        description: "Transforming high-fidelity mockups into fluid, cross-platform mobile experiences.",
        skills: ["FlutterFlow", "Figma", "Interactive State Management", "Responsive Layouts", "Modern Design Systems"],
    },
    {
        title: "Tools & Deployment",
        icon: Terminal,
        description: "Continuous version control, collaborative workflows, and seamless cloud deployments.",
        skills: ["Git & GitHub", "Vercel Deployments", "VS Code", "npm Ecosystem", "Chrome DevTools", "macOS & Windows"],
    },
];

export const About = ({ onOpenResume }) => {
    return (
        <SectionWrapper id="about" className="bg-secondary/15 rounded-[3rem] border border-border/40 p-6 sm:p-12 md:p-16">
            <SectionHeading title="About" highlight="Me" />

            {/* Narrative & Education Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
                {/* Left: Biography Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 space-y-5"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                        <Sparkles className="h-3.5 w-3.5" /> Passionate Software Engineer & Builder
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                        Crafting intuitive digital products with precision, curiosity, and speed.
                    </h3>

                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                        I am <span className="text-foreground font-semibold">Cherop Becky Kiptanui</span>, a second-year Software Engineering student at the <span className="text-foreground font-semibold">University of Eastern Africa, Baraton</span> (Expected graduation 2028). I specialize in front-end web engineering, translating complex ideas into engaging, responsive, and accessible digital solutions.
                    </p>

                    <p className="text-muted-foreground text-base leading-relaxed">
                        My journey spans building everything from multi-step e-commerce storefronts like <span className="text-foreground font-medium">LUXX</span>, to SME operations suites like <span className="text-foreground font-medium">BiasharaPro</span>, financial independence platforms like <span className="text-foreground font-medium">SheEarns</span>, and collaborative hackathon engines like the <span className="text-foreground font-medium">BITSA</span> student platform.
                    </p>

                    <p className="text-muted-foreground text-base leading-relaxed">
                        I believe in strong software engineering fundamentals: clean modular architecture, maintainable components, semantic markup, and reliable performance. I am also continuously expanding my backend capabilities with SQL, Node.js, and Supabase.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4 text-sm font-medium">
                        <div className="flex items-center gap-2 text-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>Quick Learner & Problem Solver</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>Full-Stack Collaboration</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>Hackathon Competitor</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Academic & Milestones Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-5 space-y-4"
                >
                    <Card className="p-6 bg-card/60 border-border/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <GraduationCap className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Academic Degree</h4>
                                <p className="text-xs text-muted-foreground">Higher Education</p>
                            </div>
                        </div>

                        <div className="space-y-2 border-l-2 border-primary/40 pl-4 py-1">
                            <h5 className="font-semibold text-foreground text-sm sm:text-base">
                                Bachelor of Science in Software Engineering
                            </h5>
                            <p className="text-xs sm:text-sm text-primary font-medium">
                                University of Eastern Africa, Baraton
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                                <span>Status: 2nd Year Student</span>
                                <span>Class of 2028</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-card/60 border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Award className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Key Milestones</h4>
                                <p className="text-xs text-muted-foreground">Hackathons & Projects</p>
                            </div>
                        </div>

                        <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span><strong>BITSA Hackathon 2025:</strong> Engineered CRUD blog engine and registration UI for departmental platform.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span><strong>Active Open Source Builder:</strong> Over 15 public repositories and 8 live production deployments on Vercel.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span><strong>FlutterFlow & UI Architecture:</strong> Prototyping mobile banking & commerce solutions directly from Figma.</span>
                            </li>
                        </ul>

                        <div className="pt-4 border-t border-border/40 mt-4">
                            <button
                                onClick={onOpenResume}
                                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5"
                            >
                                Read full credentials in Curriculum Vitae →
                            </button>
                        </div>
                    </Card>
                </motion.div>
            </div>

            {/* Categorized Skills Grid */}
            <div>
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Technical Skill Matrix</h4>
                    <p className="text-sm text-muted-foreground">Technologies, libraries, and tools I use to turn ideas into reality.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full flex flex-col p-6 bg-card/60 hover:bg-card/90 transition-all border-border/50">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <cat.icon className="h-6 w-6" />
                                </div>
                                <h5 className="font-bold text-lg text-foreground mb-2">{cat.title}</h5>
                                <p className="text-xs text-muted-foreground mb-4 flex-1">{cat.description}</p>
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-secondary/70 text-secondary-foreground"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
