import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download, FileText, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = ({ onOpenResume }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        setIsMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
                    isScrolled
                        ? "bg-background/95 backdrop-blur-md py-3 border-b border-border shadow-sm"
                        : "bg-transparent py-4"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                    {/* Brand Logo - Solid Colors */}
                    <a
                        href="#"
                        className="flex items-center gap-2 group"
                    >
                        <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-base shadow-sm">
                            B
                        </div>
                        <span className="text-lg font-bold tracking-tight text-foreground">
                            Becky<span className="text-primary">.dev</span>
                        </span>
                    </a>

                    {/* Desktop Nav Items */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <button
                            onClick={onOpenResume}
                            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5"
                        >
                            <FileText className="h-3.5 w-3.5" />
                            <span>View CV</span>
                        </button>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-2.5">
                        {/* Theme Switcher */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-xl w-8 h-8 p-0 border border-border"
                            title="Toggle color theme"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>

                        {/* Open CV PDF directly */}
                        <a
                            href="/Cherop_Becky_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open CV in browser"
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl h-8 px-3 text-xs font-semibold gap-1.5 border-border"
                            >
                                <ExternalLink className="h-3.5 w-3.5" /> Open PDF
                            </Button>
                        </a>

                        {/* Download CV */}
                        <a
                            href="/Cherop_Becky_Resume.pdf"
                            download="Cherop_Becky_Resume.pdf"
                            title="Download PDF file"
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-xl h-8 px-3 text-xs font-semibold gap-1.5 border-border"
                            >
                                <Download className="h-3.5 w-3.5" /> Download
                            </Button>
                        </a>

                        {/* Hire Me CTA */}
                        <Button
                            onClick={() => scrollTo("contact")}
                            size="sm"
                            className="rounded-xl h-8 px-3.5 text-xs font-semibold bg-primary text-primary-foreground"
                        >
                            Hire Me
                        </Button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-xl w-8 h-8 p-0 border border-border"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="h-8 w-8 rounded-xl bg-secondary flex items-center justify-center text-foreground border border-border"
                            aria-label="Toggle navigation menu"
                        >
                            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-x-0 top-[54px] z-30 bg-card border-b border-border p-5 md:hidden shadow-xl space-y-4"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm font-semibold text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-secondary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onOpenResume();
                                }}
                                className="text-sm font-semibold text-primary py-2 px-3 rounded-lg hover:bg-secondary transition-colors text-left flex items-center gap-2"
                            >
                                <FileText className="h-4 w-4" /> View Curriculum Vitae (CV)
                            </button>
                        </div>

                        <div className="pt-3 border-t border-border grid grid-cols-2 gap-2">
                            <a
                                href="/Cherop_Becky_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full"
                            >
                                <Button variant="outline" size="sm" className="w-full rounded-xl gap-1.5 text-xs">
                                    <ExternalLink className="h-3.5 w-3.5" /> Open PDF
                                </Button>
                            </a>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => scrollTo("contact")}
                                className="w-full rounded-xl text-xs"
                            >
                                Hire Me
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
