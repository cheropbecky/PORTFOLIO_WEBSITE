import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Info, CheckCircle2, Sparkles, X, Search } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";

const categories = ["All Projects", "Web Apps & SaaS", "E-Commerce & Retail", "Fintech & Tools"];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All Projects");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projectsData.filter((project) => {
        const matchesCategory =
            activeCategory === "All Projects" || project.category === activeCategory;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <SectionWrapper id="projects" className="bg-secondary/10 rounded-[3rem] border border-border/40 p-6 sm:p-12 md:p-16">
            <SectionHeading title="Featured" highlight="Projects" />

            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <p className="text-muted-foreground text-sm sm:text-base">
                    Real-world applications and platforms I've built, committed to GitHub, and deployed live to production.
                </p>
            </div>

            {/* Controls: Search and Category Pills */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
                {/* Category Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                                activeCategory === cat
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                    : "bg-card/70 text-muted-foreground hover:text-foreground hover:bg-card border border-border/40"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Quick Search Input */}
                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by tech or keyword..."
                        className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-2xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-3.5 w-3.5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                    <p className="text-base font-medium">No projects match "{searchQuery}"</p>
                    <button
                        onClick={() => { setActiveCategory("All Projects"); setSearchQuery(""); }}
                        className="mt-3 text-xs text-primary underline"
                    >
                        Reset filters
                    </button>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                        >
                            <Card className="overflow-hidden p-0 group h-full flex flex-col bg-card/60 hover:bg-card/90 border border-border/50 hover:border-primary/50 transition-all duration-300 rounded-3xl shadow-xl">
                                {/* Project Image Box */}
                                <div className="h-52 w-full relative overflow-hidden bg-muted/40">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    {/* Top Overlay Badges */}
                                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-card text-foreground border border-border shadow-sm">
                                            {project.category}
                                        </span>
                                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-primary text-primary-foreground shadow-sm flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Hover Actions Bar */}
                                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex"
                                            >
                                                <Button size="sm" variant="primary" className="rounded-xl gap-1.5 text-xs">
                                                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                                                </Button>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex"
                                            >
                                                <Button size="sm" variant="secondary" className="rounded-xl gap-1.5 text-xs">
                                                    <Github className="h-3.5 w-3.5" /> GitHub
                                                </Button>
                                            </a>
                                        )}
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="rounded-xl gap-1.5 text-xs"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            <Info className="h-3.5 w-3.5" /> Details
                                        </Button>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div className="space-y-2 mb-4">
                                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs font-medium text-primary">
                                            {project.tagline}
                                        </p>
                                        <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-secondary/80 text-secondary-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Card Footer Buttons for Mobile / Non-hover */}
                                        <div className="flex items-center justify-between pt-1 text-xs">
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="text-primary font-semibold hover:underline flex items-center gap-1"
                                            >
                                                View highlights →
                                            </button>
                                            <div className="flex items-center gap-2">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted-foreground hover:text-foreground p-1"
                                                        aria-label="GitHub Repository"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                    </a>
                                                )}
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted-foreground hover:text-primary p-1"
                                                        aria-label="Live Demo Link"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-card border border-border/70 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 space-y-6"
                        >
                            {/* Modal Header */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                                            {selectedProject.category}
                                        </span>
                                        <span className="text-xs text-muted-foreground">• {selectedProject.status}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-sm text-primary font-medium mt-0.5">
                                        {selectedProject.tagline}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Image Preview */}
                            <div className="rounded-2xl overflow-hidden border border-border/40 aspect-video max-h-60 w-full bg-muted">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Detailed Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {selectedProject.description}
                            </p>

                            {/* Architectural Highlights */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                    <Sparkles className="h-3.5 w-3.5 text-primary" /> Key Architecture & Features
                                </h4>
                                <ul className="space-y-2">
                                    {selectedProject.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                                {selectedProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Modal CTAs */}
                            <div className="flex items-center justify-end gap-3 pt-3 border-t border-border/40">
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" size="sm" className="gap-1.5 rounded-xl">
                                            <Github className="h-4 w-4" /> View Source
                                        </Button>
                                    </a>
                                )}
                                {selectedProject.demo && (
                                    <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="primary" size="sm" className="gap-1.5 rounded-xl">
                                            <ExternalLink className="h-4 w-4" /> Open Live App
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};
