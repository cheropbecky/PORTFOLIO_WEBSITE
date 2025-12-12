import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import profileImg from "@/assets/profile.jpg";
import cvFile from "@/assets/Cherop_Becky_Resume.pdf?url";

export const Hero = () => {
    return (
        <SectionWrapper id="hero" className="min-h-screen flex items-center pt-32 md:pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
                    >
                        Available for Work
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        Hi, I'm <br />
                        <motion.span
                            initial={{ backgroundPosition: "0% 50%" }}
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="text-gradient bg-[length:200%_auto]"
                        >
                            Cherop Becky
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl text-muted-foreground mb-8 max-w-lg"
                    >
                        Software Engineering Student & Frontend Developer. I build accessible, pixel-perfect, performant, and beautiful web experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button size="lg" className="h-12 px-8 text-base" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Hire Me <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <a href={cvFile} download="Cherop_Becky_Resume.pdf">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                                Download CV <Download className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    className="relative"
                >
                    <div className="aspect-square rounded-full bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl absolute inset-0 -z-10 animate-pulse" />
                    <div className="aspect-square rounded-full overflow-hidden bg-muted relative border border-white/10 glass-card flex items-center justify-center shadow-2xl">
                        <img src={profileImg} alt="Cherop Becky" className="w-full h-full object-cover" />
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
