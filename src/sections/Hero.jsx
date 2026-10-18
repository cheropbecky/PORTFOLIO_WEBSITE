import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText, MapPin, Code2, Globe, Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import profileImg from "@/assets/profile.jpg";

export const Hero = ({ onOpenResume }) => {
    const [photoSrc, setPhotoSrc] = useState(() => {
        try {
            return localStorage.getItem("portfolio_user_photo") || profileImg;
        } catch {
            return profileImg;
        }
    });

    const handlePhotoUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const dataUrl = reader.result;
                setPhotoSrc(dataUrl);
                try {
                    localStorage.setItem("portfolio_user_photo", dataUrl);
                } catch {
                    /* ignore quota error */
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleResetPhoto = () => {
        setPhotoSrc(profileImg);
        try {
            localStorage.removeItem("portfolio_user_photo");
        } catch {
            /* ignore storage error */
        }
    };

    return (
        <SectionWrapper id="hero" className="min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-6"
                >
                    {/* Status Pill & Location */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-xs sm:text-sm">
                            <span className="h-2 w-2 rounded-full bg-primary"></span>
                            Available for Opportunities & Collaborations
                        </span>

                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground px-3 py-1.5 rounded-full bg-secondary border border-border">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            <span>Nairobi, Kenya</span>
                        </div>
                    </div>

                    {/* Headline - Solid Typography */}
                    <div>
                        <p className="text-base sm:text-lg font-medium text-muted-foreground mb-1">
                            Hello, world! I'm
                        </p>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                            Cherop Becky <span className="text-primary block sm:inline">Kiptanui</span>
                        </h1>
                    </div>

                    {/* Subtitle / Intro */}
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        Software Engineering Student at <span className="text-foreground font-semibold">University of Eastern Africa, Baraton</span> & <span className="text-foreground font-semibold">Frontend Developer</span>. Building accessible, high-performance web applications using React, Vite, Tailwind CSS, and Supabase.
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        <div className="p-3.5 rounded-2xl bg-card border border-border">
                            <p className="text-2xl font-bold text-primary">15+</p>
                            <p className="text-xs text-muted-foreground font-medium mt-0.5">GitHub Repos</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-card border border-border">
                            <p className="text-2xl font-bold text-primary">8+</p>
                            <p className="text-xs text-muted-foreground font-medium mt-0.5">Deployed Apps</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-card border border-border">
                            <p className="text-2xl font-bold text-primary">2nd Yr</p>
                            <p className="text-xs text-muted-foreground font-medium mt-0.5">BSc Software Eng</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-card border border-border">
                            <p className="text-2xl font-bold text-primary">100%</p>
                            <p className="text-xs text-muted-foreground font-medium mt-0.5">Pixel-Perfect UI</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                        <Button
                            size="lg"
                            className="h-11 px-5 rounded-xl gap-2 text-sm font-semibold"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Projects <ArrowRight className="h-4 w-4" />
                        </Button>

                        <Button
                            variant="secondary"
                            size="lg"
                            className="h-11 px-5 rounded-xl gap-2 text-sm font-semibold border border-border"
                            onClick={onOpenResume}
                        >
                            <FileText className="h-4 w-4 text-primary" /> View CV
                        </Button>

                        <a
                            href="/Cherop_Becky_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-11 px-4 rounded-xl gap-2 text-sm font-semibold"
                            >
                                <ExternalLink className="h-4 w-4" /> Open PDF
                            </Button>
                        </a>

                        <a
                            href="/Cherop_Becky_Resume.pdf"
                            download="Cherop_Becky_Resume.pdf"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-11 px-4 rounded-xl gap-2 text-sm font-semibold"
                            >
                                <Download className="h-4 w-4" /> Download
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Hero Real Image Frame - Solid Border & Card styling */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-5 flex justify-center relative"
                >
                    <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4]">
                        {/* Solid card container without gradients */}
                        <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-border bg-card shadow-lg relative group">
                            <img
                                src={photoSrc}
                                alt="Cherop Becky Kiptanui"
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                            />

                            {/* Camera upload button */}
                            <label
                                className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/90 text-foreground hover:bg-background flex items-center justify-center cursor-pointer border border-border transition-all opacity-80 group-hover:opacity-100 z-10 shadow"
                                title="Change or upload photo"
                            >
                                <Camera className="h-4 w-4" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoUpload}
                                    className="hidden"
                                />
                            </label>

                            {/* Reset button if custom photo was set */}
                            {photoSrc !== profileImg && (
                                <button
                                    onClick={handleResetPhoto}
                                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 text-foreground hover:bg-background text-[11px] font-medium border border-border z-10 transition-all shadow"
                                    title="Reset to default photo"
                                >
                                    Reset photo
                                </button>
                            )}

                            {/* Solid caption banner */}
                            <div className="absolute inset-x-0 bottom-0 bg-background/95 border-t border-border p-4">
                                <p className="font-bold text-foreground text-sm">Cherop Becky Kiptanui</p>
                                <p className="text-xs text-primary font-medium">
                                    Software Engineering Student • UEA Baraton
                                </p>
                            </div>
                        </div>

                        {/* Solid badge 1 */}
                        <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-xl bg-card border border-border shadow flex items-center gap-2 text-xs font-semibold text-foreground">
                            <span className="h-2 w-2 rounded-full bg-primary"></span>
                            <span>React & Vite</span>
                        </div>

                        {/* Solid badge 2 */}
                        <div className="absolute -bottom-3 -right-2 px-3 py-1.5 rounded-xl bg-card border border-border shadow flex items-center gap-2 text-xs font-semibold text-foreground">
                            <Code2 className="h-3.5 w-3.5 text-primary" />
                            <span>Tailwind CSS</span>
                        </div>

                        {/* Solid badge 3 */}
                        <div className="absolute top-1/2 -right-4 px-3 py-1.5 rounded-xl bg-card border border-border shadow hidden sm:flex items-center gap-1.5 text-xs font-semibold text-foreground">
                            <Globe className="h-3.5 w-3.5 text-primary" />
                            <span>Vercel Deployed</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
