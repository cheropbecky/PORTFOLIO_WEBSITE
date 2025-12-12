import { Github, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-4 inline-block">
                            Becky
                        </a>
                        <p className="text-muted-foreground max-w-sm">
                            Building digital experiences with passion and precision. Always learning, always creating.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About", "Services", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:cheropbecky348@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    <Mail className="h-4 w-4" /> Email Me
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/cheropbecky" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                                    <Github className="h-4 w-4" /> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Cherop Becky. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Designed & Built with ❤️ By Becky
                    </p>
                </div>
            </div>
        </footer>
    );
};
