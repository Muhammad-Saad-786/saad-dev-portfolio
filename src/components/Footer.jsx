import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - Replace with your actual API endpoint
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);

    // For real implementation, use this:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   if (response.ok) {
    //     setSubmitStatus("success");
    //     setFormData({ name: "", email: "", message: "" });
    //   }
    // } catch (error) {
    //   setSubmitStatus("error");
    // }
  };

  // Social links data
  const socialLinks = [
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
      href: "https://github.com/Muhammad-Saad-786",
      label: "GitHub",
      filter: "invert(1)",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
      href: "https://www.linkedin.com/in/immuhammadsaad",
      label: "LinkedIn",
      filter: "invert(1)",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg",
      href: "mailto:saadasimmalik@gmail.com",
      label: "Gmail",
      filter: "invert(1)",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative py-24 bg-gray-900 border-t border-gray-800 overflow-hidden text-white"
    >
      {/* Subtle particle background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 opacity-[0.03] pattern-grid-lg bg-center" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 mb-6 tracking-tight">
            Let's Connect.
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Interested in building something AI-powered or modernizing your web
            app? Let's talk about your project.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: Mail,
              title: "Email",
              value: "saadasimmalik@gmail.com",
              href: "mailto:saadasim@gmail.com",
            },
            { icon: MapPin, title: "Location", value: "Pakistan" },
            {
              icon: Phone,
              title: "WhatsApp",
              value: "Chat on WhatsApp",
              href: "https://wa.me/923095909052",
              target: "_blank",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.target}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-indigo-500/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-400 text-sm mb-1">{item.title}</p>
                  <p className="text-white font-semibold group-hover:text-indigo-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-indigo-400" />
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-500 transition-all"
                  />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-500 transition-all"
                  />
                </div>
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your Message"
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group overflow-hidden px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-white shadow-lg hover:shadow-indigo-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center font-medium"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center font-medium"
                >
                  ✗ Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map(({ src, href, label, filter }, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.1, y: -5 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-indigo-500 hover:bg-gray-700 shadow-lg transition-all"
            >
              <img
                src={src}
                alt={label}
                className="w-5 h-5"
                style={{ filter }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 font-medium text-sm">
          <p>© Saad Asim 2026. All rights reserved.</p>

          <p className="mt-4 md:mt-0 font-mono text-teal-500">
            <span className="text-gray-600">$</span> npm run build
            <span className="ml-2 animate-pulse cursor">▋</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
