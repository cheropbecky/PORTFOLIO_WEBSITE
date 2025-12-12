import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

import { SectionHeading } from "@/components/ui/SectionHeading";

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const subject = formData.get("subject");
        const message = formData.get("message");
        const body = `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\nMessage:\n${message}`;

        const mailtoUrl = `mailto:cheropbecky348@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
        e.target.reset();
    };

    return (
        <SectionWrapper id="contact" className="border-none">
            <SectionHeading title="Get in" highlight="Touch" />
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-muted-foreground mb-8 text-lg">
                        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Email</p>
                                <a href="mailto:cheropbecky348@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">cheropbecky348@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-muted-foreground">0799049979</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-muted-foreground">Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="font-medium mb-4">Connect with me</p>
                        <div className="flex gap-4">
                            <a href="https://github.com/cheropbecky" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com/in/beckycherop" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://instagram.com/cherop._becky" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://wa.me/254799049979" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <MessageCircle className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input name="name" id="name" type="text" required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="enter your name..." />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input name="email" id="email" type="email" required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="enter your email.." />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input name="subject" id="subject" type="text" required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="subject inquiry..." />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea name="message" id="message" rows={4} required className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" placeholder="Tell me about your project..." />
                            </div>
                            <Button type="submit" className="w-full gap-2">
                                Send Message <Mail className="h-4 w-4" />
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

