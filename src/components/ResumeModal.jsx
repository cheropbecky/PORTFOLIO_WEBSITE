import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, Mail, MapPin, Github, GraduationCap, Code2, Briefcase, FileText, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ResumeModal = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState("pdf"); // 'pdf' | 'text'

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl h-[92vh] max-h-[900px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="px-5 py-4 border-b border-border bg-card flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  Cherop Becky Kiptanui — Curriculum Vitae
                </h2>
                <p className="text-xs text-muted-foreground">
                  BSc Software Engineering • University of Eastern Africa, Baraton
                </p>
              </div>
            </div>

            {/* View Mode Toggle & Actions */}
            <div className="flex items-center gap-2">
              <div className="flex items-center p-1 rounded-xl bg-secondary border border-border text-xs">
                <button
                  onClick={() => setViewMode("pdf")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    viewMode === "pdf"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">PDF Viewer</span>
                </button>
                <button
                  onClick={() => setViewMode("text")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    viewMode === "text"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <LayoutList className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Text View</span>
                </button>
              </div>

              <a
                href="/Cherop_Becky_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Open PDF in new tab"
              >
                <Button size="sm" variant="outline" className="gap-1.5 h-9 px-3 rounded-xl text-xs">
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Open in Tab</span>
                </Button>
              </a>

              <a
                href="/Cherop_Becky_Resume.pdf"
                download="Cherop_Becky_Resume.pdf"
                title="Download PDF file"
              >
                <Button size="sm" variant="primary" className="gap-1.5 h-9 px-3 rounded-xl text-xs">
                  <Download className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              </a>

              <button
                onClick={onClose}
                className="h-9 w-9 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors ml-1"
                aria-label="Close CV modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-hidden bg-background">
            {viewMode === "pdf" ? (
              <div className="w-full h-full flex flex-col relative bg-muted/20">
                {/* Embedded PDF iframe */}
                <iframe
                  src="/Cherop_Becky_Resume.pdf#view=FitH"
                  className="w-full h-full border-none"
                  title="Cherop Becky Resume PDF"
                />

                {/* Mobile / Fallback Helper Bar at Bottom */}
                <div className="p-3 bg-card border-t border-border flex items-center justify-between text-xs text-muted-foreground px-4">
                  <span>If PDF preview does not display on your mobile device:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode("text")}
                      className="text-primary font-semibold hover:underline"
                    >
                      Switch to Text View
                    </button>
                    <span>•</span>
                    <a
                      href="/Cherop_Becky_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Open PDF Directly <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Structured High-Fidelity Text View */
              <div className="w-full h-full overflow-y-auto p-6 sm:p-10 space-y-8 max-w-4xl mx-auto">
                {/* CV Document Header */}
                <div className="border-b border-border pb-6 space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground uppercase">
                    Cherop Becky Kiptanui
                  </h1>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-primary" />
                      <a href="mailto:cheropbecky348@gmail.com" className="hover:text-primary transition-colors">
                        cheropbecky348@gmail.com
                      </a>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span>Nairobi, Kenya</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Github className="h-3.5 w-3.5 text-primary" />
                      <a href="https://github.com/cheropbecky" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        github.com/cheropbecky
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <section className="space-y-2.5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                    <Briefcase className="h-4 w-4" /> Professional Summary
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed bg-card p-4 rounded-xl border border-border">
                    Hi, I am a second year Software Engineering student with a strong foundation in front-end development and responsive design currently learning backend. Experienced in building functional web applications using React, Vite, and Tailwind CSS. Proven ability to deliver "build and ship" solutions, ranging from multi-step e-commerce checkout engines to collaborative student association platforms.
                  </p>
                </section>

                {/* Technical Skills */}
                <section className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                    <Code2 className="h-4 w-4" /> Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                      <p className="font-semibold text-foreground text-xs uppercase tracking-wide">Languages</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        JavaScript (ES6+), HTML5, CSS3, SQL (MySQL)
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                      <p className="font-semibold text-foreground text-xs uppercase tracking-wide">Frameworks & Libraries</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        React.js, Vite, Tailwind CSS (v4), Framer Motion
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                      <p className="font-semibold text-foreground text-xs uppercase tracking-wide">Tools & Platforms</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Git/GitHub, FlutterFlow, Figma, XAMPP (phpMyAdmin), Docker (Beginner)
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-card border border-border space-y-1">
                      <p className="font-semibold text-foreground text-xs uppercase tracking-wide">Operating Systems</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        macOS, Windows
                      </p>
                    </div>
                  </div>
                </section>

                {/* Selected Projects */}
                <section className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Selected Projects
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-bold text-foreground text-sm sm:text-base">
                          BITSA Student Association Platform
                        </h4>
                        <a
                          href="https://bitsa-frontend-rosy.vercel.app"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1">
                        <li>Developed a full-stack platform for the Business Information Technology Student Association as part of a competitive hackathon team.</li>
                        <li>Engineered CRUD operations for the blog engine, ensuring seamless content and user management for administrators.</li>
                        <li>Focused on building a production-ready interface to manage registrations and student engagement.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-bold text-foreground text-sm sm:text-base">
                          Mobile Banking & Food Store Interface (FlutterFlow)
                        </h4>
                        <span className="text-xs text-muted-foreground font-medium">Cross-Platform UI</span>
                      </div>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1">
                        <li>Architected a responsive banking UI in FlutterFlow based on high-fidelity Figma designs.</li>
                        <li>Implemented custom navigation components, currency exchange tools, and transaction report layouts.</li>
                        <li>Utilized interactive state management and conditional visibility to ensure cross-platform consistency.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-bold text-foreground text-sm sm:text-base">
                          LUXX – E-Commerce Liquor Store
                        </h4>
                        <a
                          href="https://luxx-liquor-store.vercel.app"
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1">
                        <li>Built a fully responsive dark-themed storefront featuring a dynamic shopping cart and real-time total calculation logic.</li>
                        <li>Integrated localStorage for data persistence and EmailJS for automated order submission simulations.</li>
                        <li>Designed a multi-step checkout flow using Tailwind CSS, optimizing UI transitions for a high-quality user experience.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> Education
                  </h3>
                  <div className="p-4 rounded-xl bg-card border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-foreground text-sm sm:text-base">
                        Bachelor of Science in Software Engineering
                      </h4>
                      <p className="text-xs sm:text-sm text-primary font-medium">
                        University of Eastern Africa, Baraton
                      </p>
                    </div>
                    <div className="sm:text-right text-xs text-muted-foreground">
                      <p className="font-semibold text-foreground">Current Status: 2nd Year</p>
                      <p>Expected Graduation: 2028</p>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-border bg-card flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
            <span className="text-muted-foreground">
              Official document: Cherop Becky Kiptanui • Nairobi, Kenya
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="/Cherop_Becky_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial"
              >
                <Button variant="outline" size="sm" className="w-full gap-1.5 rounded-xl text-xs">
                  <ExternalLink className="h-3.5 w-3.5" /> Full Screen Tab
                </Button>
              </a>
              <a
                href="/Cherop_Becky_Resume.pdf"
                download="Cherop_Becky_Resume.pdf"
                className="flex-1 sm:flex-initial"
              >
                <Button variant="primary" size="sm" className="w-full gap-1.5 rounded-xl text-xs">
                  <Download className="h-3.5 w-3.5" /> Download PDF
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
