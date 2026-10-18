import { Github, Linkedin, Mail, MessageCircle, ArrowUp, FileText, Download, ExternalLink } from "lucide-react";

export const Footer = ({ onOpenResume }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 border-t border-border bg-card">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
                    {/* Brand & Mission */}
                    <div className="md:col-span-5 space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-base">
                                B
                            </div>
                            <span className="text-lg font-bold tracking-tight text-foreground">
                                Cherop Becky <span className="text-primary">Kiptanui</span>
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
                            Second-year Software Engineering student at University of Eastern Africa, Baraton & Frontend Developer. Building performant, accessible, and high-impact web products.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                            <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                            <span>Based in Nairobi, Kenya • Open to Roles Worldwide</span>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Navigation</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {[
                                { name: "Home", href: "#hero" },
                                { name: "About & Education", href: "#about" },
                                { name: "Projects & Demos", href: "#projects" },
                                { name: "Services", href: "#services" },
                                { name: "Get In Touch", href: "#contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors inline-block"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources & Documents */}
                    <div className="md:col-span-4 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Curriculum Vitae</h4>
                        <div className="space-y-2 text-xs sm:text-sm">
                            <button
                                onClick={onOpenResume}
                                className="text-primary font-semibold hover:underline flex items-center gap-1.5"
                            >
                                <FileText className="h-3.5 w-3.5" /> View CV Interactive Viewer
                            </button>
                            <div>
                                <a
                                    href="/Cherop_Becky_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground flex items-center gap-1.5"
                                >
                                    <ExternalLink className="h-3.5 w-3.5" /> Open PDF in Browser Tab
                                </a>
                            </div>
                            <div>
                                <a
                                    href="/Cherop_Becky_Resume.pdf"
                                    download="Cherop_Becky_Resume.pdf"
                                    className="text-muted-foreground hover:text-foreground flex items-center gap-1.5"
                                >
                                    <Download className="h-3.5 w-3.5" /> Download PDF File
                                </a>
                            </div>
                        </div>

                        <div className="pt-3 flex flex-wrap gap-2">
                            <a
                                href="https://github.com/cheropbecky"
                                target="_blank"
                                rel="noreferrer"
                                className="h-8 w-8 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-foreground border border-border"
                                aria-label="GitHub Profile"
                            >
                                <Github className="h-4 w-4" />
                            </a>
                            <a
                                href="https://linkedin.com/in/beckycherop"
                                target="_blank"
                                rel="noreferrer"
                                className="h-8 w-8 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-foreground border border-border"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href="mailto:cheropbecky348@gmail.com"
                                className="h-8 w-8 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-foreground border border-border"
                                aria-label="Email Address"
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                            <a
                                href="https://wa.me/254799049979"
                                target="_blank"
                                rel="noreferrer"
                                className="h-8 w-8 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-foreground border border-border"
                                aria-label="WhatsApp Chat"
                            >
                                <MessageCircle className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Cherop Becky Kiptanui. All rights reserved.</p>

                    <div className="flex items-center gap-4">
                        <span>Built with React, Vite & Tailwind CSS</span>
                        <button
                            onClick={scrollToTop}
                            className="h-7 w-7 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center text-foreground transition-colors border border-border"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
