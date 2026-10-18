import { motion } from "framer-motion";
import { Layout, Smartphone, ShoppingCart, Gauge, ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Frontend Engineering & SPAs",
        description: "Transforming product specifications and wireframes into lightning-fast, reactive, and pixel-perfect web applications.",
        icon: Layout,
        deliverables: ["Single Page Applications (SPAs)", "Reusable Component Systems", "Complex State & API Integration"],
        tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript ES6+"],
    },
    {
        title: "E-Commerce & Checkout Engines",
        description: "Crafting modern storefronts with dynamic carts, inventory telemetry, multi-step checkout flows, and payment simulations.",
        icon: ShoppingCart,
        deliverables: ["Dynamic Shopping Carts", "M-Pesa & Card Payment UI", "Inventory & Order Tracking"],
        tech: ["Tailwind CSS", "Supabase", "EmailJS", "localStorage"],
    },
    {
        title: "UI/UX & Mobile Prototyping",
        description: "Designing modern, intuitive interfaces and building cross-platform interactive prototypes with precision.",
        icon: Smartphone,
        deliverables: ["Figma to Code Implementation", "FlutterFlow Mobile Prototyping", "100% Mobile Responsive Layouts"],
        tech: ["Figma", "FlutterFlow", "Responsive Systems"],
    },
    {
        title: "Web Modernization & Speed",
        description: "Upgrading outdated websites into modern, high-converting platforms optimized for fast loads, SEO, and smooth animations.",
        icon: Gauge,
        deliverables: ["Full Website Redesigns", "Web Performance & Core Web Vitals", "Production Deployments on Vercel"],
        tech: ["Framer Motion", "Vercel", "Semantic HTML5"],
    },
];

export const Services = () => {
    return (
        <SectionWrapper id="services" className="py-20 md:py-28">
            <SectionHeading title="My" highlight="Services" />

            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
                <p className="text-muted-foreground text-sm sm:text-base">
                    Tailored engineering and design services to help businesses, startups, and teams turn concepts into production software.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Card className="h-full flex flex-col p-7 bg-card/60 hover:bg-card/90 border border-border/50 hover:border-primary/50 transition-all duration-300 rounded-3xl shadow-xl justify-between">
                            <div className="space-y-4">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="font-bold text-lg text-foreground">{service.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>

                                <div className="space-y-2 pt-2 border-t border-border/40">
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">Deliverables</p>
                                    <ul className="space-y-1.5">
                                        {service.deliverables.map((d) => (
                                            <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                                <span>{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border/30 mt-4 flex flex-wrap gap-1">
                                {service.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Callout banner */}
            <div className="mt-14 p-8 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground">Have a project in mind or need a developer?</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Let's collaborate to build something remarkable together.</p>
                </div>
                <Button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    size="lg"
                    className="rounded-2xl gap-2 h-11 px-6 whitespace-nowrap shadow-lg shadow-primary/20"
                >
                    Get In Touch <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </SectionWrapper>
    );
};
