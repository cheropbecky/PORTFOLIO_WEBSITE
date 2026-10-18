import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, Mail, Phone, MapPin, Github, GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import cvFile from "@/assets/Cherop_Becky_Resume.pdf?url";

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                CB
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Cherop Becky Kiptanui</h3>
                <p className="text-xs text-muted-foreground">Software Engineering Resume • Verified 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href={cvFile} download="Cherop_Becky_Resume.pdf">
                <Button size="sm" variant="primary" className="rounded-xl gap-2 text-xs h-9">
                  <Download className="h-4 w-4" /> Download PDF
                </Button>
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm">
            {/* Top Contact Strip */}
            <div className="bg-secondary/20 rounded-2xl p-4 sm:p-5 border border-border/40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:cheropbecky348@gmail.com" className="hover:text-primary transition-colors truncate font-medium">
                  cheropbecky348@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="font-medium">+254 799 049 979</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="font-medium">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary shrink-0" />
                <a href="https://github.com/cheropbecky" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors font-medium">
                  github.com/cheropbecky
                </a>
              </div>
            </div>

            {/* Summary */}
            <section>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" /> Professional Summary
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Second-year Software Engineering student with a strong foundation in front-end development and responsive design, currently learning backend. Experienced in building functional web applications using React, Vite, and Tailwind CSS. Proven ability to deliver &ldquo;build and ship&rdquo; solutions, ranging from multi-step e-commerce checkout engines to collaborative student association platforms and financial tracking apps.
              </p>
            </section>

            {/* Education */}
            <section className="border-t border-border/40 pt-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> Education
              </h4>
              <div className="bg-secondary/15 rounded-2xl p-4 border border-border/30 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h5 className="font-bold text-base">Bachelor of Science in Software Engineering</h5>
                  <p className="text-muted-foreground">University of Eastern Africa, Baraton</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs mb-1">
                    Current: 2nd Year
                  </span>
                  <p className="text-xs text-muted-foreground">Expected Graduation: 2028</p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="border-t border-border/40 pt-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-4 flex items-center gap-2">
                <Award className="h-4 w-4" /> Technical Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-secondary/15 border border-border/30">
                  <p className="font-semibold text-xs text-foreground mb-1.5">Languages &amp; Markup</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    JavaScript (ES6+), HTML5, CSS3, SQL (MySQL)
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-secondary/15 border border-border/30">
                  <p className="font-semibold text-xs text-foreground mb-1.5">Frameworks &amp; Libraries</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    React.js, Vite, Tailwind CSS (v4), Framer Motion
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-secondary/15 border border-border/30">
                  <p className="font-semibold text-xs text-foreground mb-1.5">Tools &amp; Platforms</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Git, GitHub, FlutterFlow, Figma, XAMPP (phpMyAdmin), Docker (Beginner)
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-secondary/15 border border-border/30">
                  <p className="font-semibold text-xs text-foreground mb-1.5">Operating Systems &amp; Workflow</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    macOS, Windows, REST API Integration, Responsive Design
                  </p>
                </div>
              </div>
            </section>

            {/* Selected Projects */}
            <section className="border-t border-border/40 pt-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-4 flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> Selected Deployed Projects
              </h4>
              <div className="space-y-4">
                {/* SheEarns */}
                <div className="p-4 rounded-2xl bg-secondary/10 border border-border/40 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-foreground">SheEarns — Female Entrepreneurship Platform</h5>
                    <div className="flex gap-2">
                      <a href="https://sheearns-frontend.vercel.app/" target="_blank" rel="noreferrer" className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://github.com/cheropbecky/SheEarns" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground font-semibold hover:text-foreground inline-flex items-center gap-1">
                        GitHub <Github className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Built an all-in-one business tool for women entrepreneurs with bookings, pricing calculators, and income tracking.</li>
                    <li>Combined modern React frontend with scalable REST APIs to streamline daily business operations.</li>
                  </ul>
                </div>

                {/* BITSA */}
                <div className="p-4 rounded-2xl bg-secondary/10 border border-border/40 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-foreground">BITSA Student Association Platform</h5>
                    <div className="flex gap-2">
                      <a href="https://bitsa-frontend-rosy.vercel.app/" target="_blank" rel="noreferrer" className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://github.com/cheropbecky/BITSA_Frontend" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground font-semibold hover:text-foreground inline-flex items-center gap-1">
                        GitHub <Github className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Developed a full-stack platform for the Business Information Technology Student Association in a competitive hackathon.</li>
                    <li>Engineered CRUD operations for the blog engine, ensuring seamless content and user management.</li>
                    <li>Built production-ready user interface to manage registrations and student engagement.</li>
                  </ul>
                </div>

                {/* LoanSync */}
                <div className="p-4 rounded-2xl bg-secondary/10 border border-border/40 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-foreground">LoanSync — Financial Loan &amp; Repayment Engine</h5>
                    <div className="flex gap-2">
                      <a href="https://loan-sync-omega.vercel.app" target="_blank" rel="noreferrer" className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://github.com/cheropbecky/LoanSync" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground font-semibold hover:text-foreground inline-flex items-center gap-1">
                        GitHub <Github className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Interactive loan management dashboard with interest calculating tools, repayment calendars, and progress statistics.</li>
                  </ul>
                </div>

                {/* LUXX */}
                <div className="p-4 rounded-2xl bg-secondary/10 border border-border/40 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-foreground">LUXX — E-Commerce Store &amp; Checkout</h5>
                    <div className="flex gap-2">
                      <a href="https://luxx-liquor-store.vercel.app" target="_blank" rel="noreferrer" className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://github.com/cheropbecky/luxx-liquor-store" target="_blank" rel="noreferrer" className="text-xs text-muted-foreground font-semibold hover:text-foreground inline-flex items-center gap-1">
                        GitHub <Github className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Built fully responsive dark-themed storefront featuring dynamic shopping cart and real-time total calculation logic.</li>
                    <li>Integrated localStorage for client-side persistence and EmailJS for automated checkout notifications.</li>
                    <li>Designed a multi-step checkout flow using Tailwind CSS with optimized UI transitions.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-border/50 bg-secondary/30 flex items-center justify-between">
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Verified &amp; Updated directly from GitHub &amp; Academic Records
            </p>
            <Button variant="outline" size="sm" onClick={onClose} className="rounded-xl">
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
