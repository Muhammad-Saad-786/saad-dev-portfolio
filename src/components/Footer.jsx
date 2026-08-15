import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Coffee,
  Terminal,
  Heart,
} from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append("access_key", "0abb2ea7-40fe-4d76-bfd5-69252ddf1c38");
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const GithubIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const LinkedInIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  // Social links data
  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/Muhammad-Saad-786",
      label: "GitHub",
      color: "hover:text-gray-900 hover:bg-gray-100",
    },
    {
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/immuhammadsaad",
      label: "LinkedIn",
      color: "hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200",
    },
    {
      icon: Mail,
      href: "mailto:saadasimmalik@gmail.com",
      label: "Email",
      color:
        "hover:text-[#6a77d5] hover:bg-[#6a77d5]/5 hover:border-[#6a77d5]/30",
    },
  ];

  // Quick links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Stack", href: "/marquee" },
    { name: "Journey", href: "/journey" },
  ];

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative bg-[#fafbfc] pt-32 pb-12 overflow-hidden border-t border-gray-200/60"
    >
      {/* Background Layers */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#6a77d5 1px, transparent 1px), linear-gradient(90deg, #6a77d5 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#6a77d5]/5 to-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-400/5 to-[#6a77d5]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="footer-header text-center mb-20">
          <div className="overflow-hidden">
            <h2 className="footer-header-text text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">
              Let's Build
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="footer-header-text text-5xl md:text-7xl font-extrabold text-gray-400 tracking-tight leading-[1.05]">
              Something Great.
            </h2>
          </div>
          <div className="overflow-hidden mt-6">
            <p className="footer-header-text text-xl text-gray-400 font-medium max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life with modern technology.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#6a77d5]" />
              Contact Info
            </h3>

            {[
              {
                icon: Mail,
                title: "Email",
                value: "saadasimmalik@gmail.com",
                href: "mailto:saadasimmalik@gmail.com",
                description: "Send me an email anytime",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Pakistan",
                description: "Available for remote work",
              },
              {
                icon: LinkedInIcon,
                title: "LinkedIn",
                value: "Available on request",
                href: "https://www.linkedin.com/in/immuhammadsaad",
                description: "Let's connect",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href || "#"}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl hover:border-[#6a77d5]/30 hover:shadow-lg hover:shadow-[#6a77d5]/5 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6a77d5]/10 to-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-[#6a77d5]" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#6a77d5] transition-colors truncate">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#6a77d5] transition-all flex-shrink-0 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 footer-form">
            <div className="bg-white/60 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_70px_-15px_rgba(106,119,213,0.1)] transition-shadow duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-[#6a77d5]" />
                Send Me a Message
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#6a77d5] transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3.5 bg-white/80 border border-gray-200/80 rounded-xl focus:border-[#6a77d5]/40 focus:outline-none focus:ring-4 focus:ring-[#6a77d5]/5 text-gray-900 placeholder-gray-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#6a77d5] transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-11 pr-4 py-3.5 bg-white/80 border border-gray-200/80 rounded-xl focus:border-[#6a77d5]/40 focus:outline-none focus:ring-4 focus:ring-[#6a77d5]/5 text-gray-900 placeholder-gray-400 transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400 group-focus-within:text-[#6a77d5] transition-colors" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      placeholder="Tell me about your project..."
                      className="w-full pl-11 pr-4 py-3.5 bg-white/80 border border-gray-200/80 rounded-xl focus:border-[#6a77d5]/40 focus:outline-none focus:ring-4 focus:ring-[#6a77d5]/5 text-gray-900 placeholder-gray-400 transition-all resize-none text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden px-6 py-4 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-[#6a77d5] transition-all duration-300 shadow-lg shadow-gray-900/10 hover:shadow-[#6a77d5]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-900"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="flex items-center gap-2 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-xl"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <p className="text-sm font-medium text-emerald-700">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <p className="text-sm font-medium text-red-700">
                        Failed to send message. Please try again or email me
                        directly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Links & Social */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-8 border-t border-gray-200/60">
          {/* Quick Links */}
          <nav className="flex items-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-[#6a77d5] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label, color }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/60 flex items-center justify-center transition-all duration-300 shadow-sm ${color}`}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200/40">
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
            <span>© {new Date().getFullYear()} Saad Asim.</span>
            <span className="text-gray-300">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1.5 text-gray-400 font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-gray-300">$</span>
              <span className="text-[#6a77d5]">npm run build</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block w-1.5 h-4 bg-[#6a77d5] rounded-sm ml-0.5"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
