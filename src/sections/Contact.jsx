import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, MessageCircle, Send, Copy, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("cheropbecky348@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 3000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("sending");

        const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoUrl = `mailto:cheropbecky348@gmail.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            window.location.href = mailtoUrl;
            setFormStatus("success");
        }, 500);
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormStatus("idle");
    };

    return (
        <SectionWrapper id="contact" className="border-none py-16 md:py-24">
            <SectionHeading title="Get In" highlight="Touch" />

            <div className="grid lg:grid-cols-12 gap-10 items-start">
                {/* Left Info Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-5 space-y-6"
                >
                    <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                            Let's discuss your next project or role.
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Open to internship opportunities, frontend developer contracts, and collaborative software projects.
                        </p>
                    </div>

                    {/* Contact Channels */}
                    <div className="space-y-3">
                        {/* Email Card with Copy button */}
                        <div className="p-4 rounded-xl bg-card border border-border flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-muted-foreground font-medium">Direct Email</p>
                                    <a
                                        href="mailto:cheropbecky348@gmail.com"
                                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors block truncate"
                                    >
                                        cheropbecky348@gmail.com
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={handleCopyEmail}
                                className="h-8 px-3 rounded-lg bg-secondary hover:bg-secondary/80 text-xs font-medium text-foreground flex items-center gap-1.5 shrink-0 transition-colors border border-border"
                                title="Copy email address"
                            >
                                {copiedEmail ? (
                                    <>
                                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                                        <span className="text-primary font-semibold">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-3.5 w-3.5" />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* WhatsApp / Phone */}
                        <div className="p-4 rounded-xl bg-card border border-border flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-medium">Phone & WhatsApp</p>
                                    <a
                                        href="tel:+254799049979"
                                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors block"
                                    >
                                        +254 799 049 979
                                    </a>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/254799049979?text=Hi%20Cherop,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
                                target="_blank"
                                rel="noreferrer"
                                className="h-8 px-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors border border-border"
                            >
                                <MessageCircle className="h-3.5 w-3.5" /> Chat
                            </a>
                        </div>

                        {/* Location */}
                        <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground font-medium">Location</p>
                                <p className="text-sm font-semibold text-foreground">
                                    Nairobi / Baraton, Kenya (EAT / UTC+3)
                                </p>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="p-3.5 rounded-xl bg-secondary/50 border border-border flex items-center gap-2.5 text-xs text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary shrink-0" />
                            <span>Typical response time: Within 12-24 hours.</span>
                        </div>
                    </div>

                    {/* Social Profiles */}
                    <div className="pt-2">
                        <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-2.5">
                            Connect Online
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <a
                                href="https://github.com/cheropbecky"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all flex items-center gap-2 text-xs font-medium border border-border"
                            >
                                <Github className="h-3.5 w-3.5" /> GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/beckycherop"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all flex items-center gap-2 text-xs font-medium border border-border"
                            >
                                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                            </a>
                            <a
                                href="https://wa.me/254799049979"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all flex items-center gap-2 text-xs font-medium border border-border"
                            >
                                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                            </a>
                            <a
                                href="https://instagram.com/cherop._becky"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all flex items-center gap-2 text-xs font-medium border border-border"
                            >
                                <Instagram className="h-3.5 w-3.5" /> Instagram
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Form Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-7"
                >
                    <Card className="p-6 sm:p-8 bg-card border-border rounded-2xl">
                        <div className="mb-5">
                            <h4 className="text-lg font-bold text-foreground">Send a Direct Message</h4>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                Enter your details and message to get in touch.
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {formStatus === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="p-6 text-center space-y-4 bg-secondary/50 rounded-xl border border-border"
                                >
                                    <div className="h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <h5 className="text-base font-bold text-foreground">Message Ready / Email Launched</h5>
                                    <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                                        Thank you, {formData.name || "there"}! Your email client was opened with the message details filled in.
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                                        <Button size="sm" variant="outline" onClick={handleReset} className="rounded-lg text-xs">
                                            Send Another
                                        </Button>
                                        <a
                                            href="https://wa.me/254799049979"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Button size="sm" variant="primary" className="rounded-lg gap-1.5 text-xs">
                                                <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
                                            </Button>
                                        </a>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="text-xs font-semibold text-foreground">
                                                Your Name <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="email" className="text-xs font-semibold text-foreground">
                                                Your Email Address <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="subject" className="text-xs font-semibold text-foreground">
                                            Subject <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            name="subject"
                                            id="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
                                            placeholder="Internship opportunity / project inquiry"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="text-xs font-semibold text-foreground">
                                            Message <span className="text-primary">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-muted-foreground"
                                            placeholder="Write your message here..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={formStatus === "sending"}
                                        className="w-full h-10 rounded-lg gap-2 font-semibold text-xs"
                                    >
                                        {formStatus === "sending" ? (
                                            <>Opening Mail Client...</>
                                        ) : (
                                            <>
                                                Send Message <Send className="h-3.5 w-3.5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </AnimatePresence>
                    </Card>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
