import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {
  const codeBracketRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    // GSAP animation for floating elements
    if (codeBracketRef.current) {
      gsap.to(codeBracketRef.current, {
        y: -20,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }

    // Additional floating animation for illustration
    if (illustrationRef.current) {
      gsap.to(illustrationRef.current, {
        y: 15,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-16 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] rounded-full bg-emerald-400/10 blur-[100px] -z-10" />
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-400/10 blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-purple-400/10 blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-medium text-sm"
          >
            <span className="mr-2">✨</span> Available for new projects
          </motion.div>

          {/* Fixed height container to prevent layout shift */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-[44px] font-extrabold text-gray-900 tracking-tight leading-tight ">
              Hi, I'm <br />
              <div className="h-[1.2em] md:h-[1.3em] mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 inline-block">
                  <TypeAnimation
                    sequence={[
                      "Saad Asim",
                      2000,
                      "a MERN Stack Developer",
                      2000,
                      "an AI Enthusiast",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                    className="inline-block"
                  />
                </span>
              </div>
            </h1>
          </div>

          <p className="text-xl text-gray-600 font-medium max-w-lg leading-relaxed">
            AI-Powered MERN Stack Developer | OpenAI & RAG Integration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              View My Projects
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold hover:border-indigo-600 transition-all hover:bg-slate-50"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.a>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            {["React", "Node.js", "MongoDB", "OpenAI", "RAG"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-700 overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-[1px] rounded-full bg-white" />
                  <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-teal-600 transition-all duration-300">
                    {tech}
                  </span>
                </motion.span>
              ),
            )}
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          ref={illustrationRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-[500px] flex justify-center items-center"
        >
          {/* Modern Developer Illustration */}
          <div className="relative w-full h-full max-w-lg">
            {/* Main Illustration Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-teal-500/10 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
              {/* Animated Code Lines Background */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -100 }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 8,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-4 bg-indigo-600 mb-2 rounded"
                    style={{ width: `${Math.random() * 40 + 30}%` }}
                  />
                ))}
              </div>

              {/* Centered SVG Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  ref={codeBracketRef}
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-80 h-80"
                >
                  <defs>
                    <linearGradient
                      id="primaryGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#0D9488" />
                    </linearGradient>
                    <linearGradient
                      id="secondaryGradient"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>

                  {/* Laptop/Code Illustration */}
                  <rect
                    x="120"
                    y="140"
                    width="160"
                    height="110"
                    rx="8"
                    fill="url(#primaryGradient)"
                    opacity="0.9"
                  />
                  <rect
                    x="135"
                    y="155"
                    width="130"
                    height="80"
                    rx="4"
                    fill="#1E1E2E"
                  />
                  {/* Code lines */}
                  <rect
                    x="145"
                    y="165"
                    width="80"
                    height="6"
                    rx="3"
                    fill="#4F46E5"
                  />
                  <rect
                    x="145"
                    y="180"
                    width="100"
                    height="6"
                    rx="3"
                    fill="#0D9488"
                  />
                  <rect
                    x="145"
                    y="195"
                    width="60"
                    height="6"
                    rx="3"
                    fill="#8B5CF6"
                  />
                  <rect
                    x="145"
                    y="210"
                    width="90"
                    height="6"
                    rx="3"
                    fill="#EC4899"
                  />

                  {/* Cursor */}
                  <motion.rect
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    x="235"
                    y="165"
                    width="8"
                    height="6"
                    rx="2"
                    fill="#FFFFFF"
                  />

                  {/* Floating Elements */}
                  <motion.circle
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    cx="80"
                    cy="120"
                    r="8"
                    fill="url(#secondaryGradient)"
                  />

                  <motion.circle
                    animate={{
                      y: [0, 15, 0],
                      x: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    cx="320"
                    cy="300"
                    r="12"
                    fill="url(#primaryGradient)"
                  />

                  {/* AI Sparkles */}
                  <motion.path
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    d="M 200 80 L 205 95 L 220 100 L 205 105 L 200 120 L 195 105 L 180 100 L 195 95 Z"
                    fill="#FBBF24"
                    opacity="0.8"
                  />
                </svg>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-800">
                    MERN Stack
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  <span className="text-sm font-semibold text-gray-800">
                    AI Ready
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 left-12 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-gray-100"
              >
                <div className="text-xs font-medium text-gray-600">
                  OpenAI • RAG • LangChain
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
