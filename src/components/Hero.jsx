import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Mail,
  ExternalLink,
  Terminal,
  Play,
  Copy,
  Check,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// TECH ICONS CONFIGURATION
// ============================================
const TECH_ICONS = [
  { name: "React", color: "#61DAFB", size: 48, orbit: 220, speed: 25 },
  { name: "Next.js", color: "#000000", size: 44, orbit: 260, speed: 30 },
  { name: "TypeScript", color: "#3178C6", size: 40, orbit: 200, speed: 20 },
  { name: "Node.js", color: "#339933", size: 42, orbit: 240, speed: 28 },
  { name: "Python", color: "#3776AB", size: 38, orbit: 280, speed: 32 },
  { name: "Supabase", color: "#3ECF8E", size: 40, orbit: 230, speed: 22 },
  { name: "PostgreSQL", color: "#336791", size: 36, orbit: 250, speed: 26 },
  { name: "Docker", color: "#2496ED", size: 42, orbit: 270, speed: 24 },
  { name: "Git", color: "#F05032", size: 38, orbit: 210, speed: 27 },
  { name: "GitHub", color: "#181717", size: 40, orbit: 290, speed: 23 },
  { name: "Tailwind", color: "#06B6D4", size: 44, orbit: 235, speed: 29 },
  { name: "GSAP", color: "#88CE02", size: 36, orbit: 255, speed: 21 },
  { name: "OpenAI", color: "#412991", size: 40, orbit: 245, speed: 31 },
  { name: "TensorFlow", color: "#FF6F00", size: 38, orbit: 265, speed: 19 },
  { name: "MongoDB", color: "#47A248", size: 42, orbit: 225, speed: 33 },
];

// ============================================
// SIMPLE SVG ICONS (inline SVGs for performance)
// ============================================
const TechIcon = ({ name, color, size }) => {
  const icons = {
    React: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.5" fill={color} />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" fill={color}>
        <rect x="2" y="2" width="20" height="20" rx="2" fill={color} />
        <text
          x="12"
          y="17"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontWeight="bold"
          fontFamily="monospace"
        >
          TS
        </text>
      </svg>
    ),
    // Simplified - using colored circles with text for others to keep bundle small
    default: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill={color} opacity="0.15" />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill={color}
          fontSize="8"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {name.slice(0, 2).toUpperCase()}
        </text>
      </svg>
    ),
  };

  return (
    <div style={{ width: size, height: size }}>
      {icons[name] || icons.default}
    </div>
  );
};

// ============================================
// VS CODE TERMINAL
// ============================================
const TERMINAL_COMMANDS = {
  whoami: {
    output: `👤 saad-asim
─────────────────────
Full Stack Engineer
AI Developer  
React Specialist
Software Architect
─────────────────────
📍 Based in Pakistan
🎯 Building production-ready AI apps
💡 Open to opportunities`,
    delay: 800,
  },
  skills: {
    output: `🛠️ TECHNICAL SKILLS
────────────────────────────────────────────
Frontend    │ React • Next.js • JavaScript • Tailwind
Backend     │ Node.js • Express • Supabase • MongoDb
AI/ML       │ OpenAI • RAG • TensorFlow • LangChain
DevOps      │ Docker • Git • CI/CD 
Design      │ Figma • Motion • UI/UX
────────────────────────────────────────────
✨ 3+ years of full-stack development`,
    delay: 1000,
  },
  projects: {
    output: `📁 FEATURED PROJECTS
────────────────────────────────────────────
1. ZAZA Store     🛍️  Full-stack Marketplace
2. MentorAI       🤖  AI-Powered Mentorship
3. VerixaAI       📊  A RAG Document Q&A Platform
────────────────────────────────────────────
Type 'project <number>' for details
or visit /projects`,
    delay: 900,
  },
  github: {
    output: `🔗 GITHUB PROFILE
────────────────────────────────────────────
Username:   @Muhammad-Saad-786
Repos:      51
Stars:      23+
Contribs:   50+
────────────────────────────────────────────
Opening github.com/Muhammad-Saad-786...`,
    delay: 300,
  },
  contact: {
    output: `📬 CONTACT INFO
────────────────────────────────────────────
Email:    saadasimmalik@gamil.com
LinkedIn: linkedin.com/in/immuhammadsaad
GitHub:  github.com/Muhammad-Saad-786
────────────────────────────────────────────
💬 Let's build something amazing!`,
    delay: 700,
  },
  resume: {
    output: `📄 RESUME
────────────────────────────────────────────
Downloading resume.pdf...
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%
────────────────────────────────────────────
 Resume downloaded successfully!`,
    delay: 1200,
  },
  help: {
    output: `📋 AVAILABLE COMMANDS
────────────────────────────────────────────
whoami     • About me
skills     • Technical skills
projects   • Featured work
github     • GitHub profile
contact    • Get in touch
resume     • Download resume
clear      • Clear terminal
help       • Show this menu`,
    delay: 500,
  },
};

const VsCodeTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to Saad's Terminal v2.0.4" },
    { type: "system", content: 'Type "help" to see available commands' },
    { type: "system", content: "──────────────────────────────────────" },
  ]);
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  // Function to trigger resume download
  const downloadResume = useCallback(() => {
    setIsDownloading(true);
    setDownloadProgress(0);

    // Simulate download progress
    const progressInterval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsDownloading(false);

          // Trigger actual download
          const link = document.createElement("a");
          link.href = "/aad_Asim_Resume.pdf";
          link.download = "Saad_Asim_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  }, []);

  const executeCommand = useCallback(
    (cmd) => {
      const command = cmd.toLowerCase().trim();
      const newHistory = [...history, { type: "input", content: `❯ ${cmd}` }];

      if (command === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      if (command === "resume") {
        setHistory([
          ...newHistory,
          {
            type: "output",
            content: "Downloading resume...",
            isResume: true,
          },
        ]);
        downloadResume();
        setInput("");
        return;
      }

      const commandConfig = TERMINAL_COMMANDS[command];
      if (commandConfig) {
        setHistory([
          ...newHistory,
          { type: "output", content: commandConfig.output, loading: true },
        ]);
        setTimeout(() => {
          setHistory((prev) =>
            prev.map((item, i) =>
              i === prev.length - 1 ? { ...item, loading: false } : item,
            ),
          );
        }, commandConfig.delay);
      } else if (command === "") {
        // Do nothing for empty command
      } else if (command.startsWith("project")) {
        setHistory([
          ...newHistory,
          {
            type: "output",
            content: `🔍 Opening project details...\nRedirecting to projects section ↓`,
          },
        ]);
        setTimeout(() => {
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      } else {
        setHistory([
          ...newHistory,
          {
            type: "error",
            content: `Command not found: ${cmd}\nType "help" for available commands`,
          },
        ]);
      }
      setInput("");
    },
    [history, downloadResume],
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, downloadProgress]);

  return (
    <div className="w-full max-w-[560px] mx-auto">
      {/* Terminal Window */}
      <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 bg-white/60 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] group hover:shadow-[0_25px_70px_-15px_rgba(106,119,213,0.15)] transition-shadow duration-500">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Title Bar */}
        <div className="flex items-center gap-3 px-5 py-3 bg-gray-50/80 border-b border-gray-200/50 relative z-10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80 hover:bg-amber-500 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80 hover:bg-emerald-500 transition-colors cursor-pointer" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-500 font-medium tracking-wide">
              saad — bash — 80×24
            </span>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                history.map((h) => h.content).join("\n"),
              );
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="p-1 rounded-md hover:bg-gray-200/50 transition-colors"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-gray-400" />
            )}
          </button>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          onClick={() => inputRef.current?.focus()}
          className="p-5 h-[320px] overflow-y-auto font-mono text-sm leading-relaxed cursor-text relative z-10 space-y-1"
          style={{
            background: "transparent",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0,0,0,0.1) transparent",
          }}
        >
          <AnimatePresence>
            {history.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${
                  entry.type === "system"
                    ? "text-gray-400"
                    : entry.type === "error"
                      ? "text-red-500"
                      : entry.type === "input"
                        ? "text-[#6a77d5] font-medium"
                        : "text-gray-700"
                }`}
              >
                {entry.loading ? (
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#6a77d5] rounded-full animate-pulse" />
                    <span className="text-gray-400">Processing...</span>
                  </div>
                ) : entry.isResume ? (
                  <div className="space-y-2">
                    <pre className="font-mono whitespace-pre-wrap text-gray-700">
                      📄 RESUME
                      {"\n"}────────────────────────────────────────────
                      {"\n"}Preparing download...
                    </pre>

                    {/* Progress Bar */}
                    {isDownloading && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">
                            {downloadProgress < 100
                              ? "Downloading..."
                              : "✅ Download complete!"}
                          </span>
                          <span className="text-[#6a77d5] font-medium">
                            {Math.min(Math.round(downloadProgress), 100)}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, #6a77d5, #8b5cf6, #6366f1)",
                            }}
                            initial={{ width: "0%" }}
                            animate={{
                              width: `${Math.min(downloadProgress, 100)}%`,
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />
                        </div>

                        {/* Animated download blocks */}
                        {downloadProgress < 100 && (
                          <div className="flex gap-1">
                            {[...Array(10)].map((_, j) => (
                              <motion.div
                                key={j}
                                className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
                              >
                                <motion.div
                                  className="h-full bg-[#6a77d5]/30 rounded-full"
                                  animate={{
                                    width: ["0%", "100%", "0%"],
                                    x: ["-100%", "100%", "-100%"],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: j * 0.1,
                                    ease: "easeInOut",
                                  }}
                                />
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}

                    {!isDownloading && downloadProgress >= 100 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-emerald-600"
                      >
                        <Check className="w-4 h-4" />
                        <span className="text-sm">
                          Resume downloaded successfully!
                        </span>
                      </motion.div>
                    )}

                    <pre className="font-mono whitespace-pre-wrap text-gray-400 text-xs">
                      ────────────────────────────────────────────
                    </pre>
                  </div>
                ) : (
                  <pre className="font-mono whitespace-pre-wrap">
                    {entry.content}
                  </pre>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[#6a77d5] font-medium">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-gray-800 font-mono text-sm placeholder:text-gray-300"
              placeholder="Type a command..."
              spellCheck={false}
              autoComplete="off"
              disabled={isDownloading}
            />
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-2 h-5 bg-[#6a77d5] rounded-sm"
            />
          </div>
        </div>

        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(106,119,213,0.06), transparent 40%)",
          }}
        />
      </div>

      {/* Quick Command Chips */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {["whoami", "skills", "projects", "contact", "resume"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-3 py-1.5 text-xs font-mono text-gray-500 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-lg hover:border-[#6a77d5]/40 hover:text-[#6a77d5] hover:bg-[#6a77d5]/5 transition-all duration-300"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

// ============================================
// MAGNETIC BUTTON
// ============================================
const MagneticButton = ({
  children,
  href,
  variant = "primary",
  className = "",
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-gray-900 text-white shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-[#6a77d5]/20",
    secondary:
      "bg-white text-gray-900 border-2 border-gray-200 hover:border-[#6a77d5]/40 hover:bg-gray-50",
    outline:
      "border-2 border-gray-200 text-gray-700 hover:border-[#6a77d5]/40 hover:text-[#6a77d5]",
  };

  const Component = href?.startsWith("/") ? Link : href ? "a" : "button";

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Component
        to={href?.startsWith("/") ? href : undefined}
        href={href?.startsWith("/") ? undefined : href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {/* Gradient border glow */}
        {variant === "primary" && (
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, #6a77d5, #8b5cf6, #6366f1)",
              padding: "2px",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
        )}
        {/* Ripple effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Component>
    </motion.div>
  );
};

// ============================================
// FLOATING TECH ICONS ORBIT
// ============================================
const FloatingTechIcons = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    iconsRef.current.forEach((icon, i) => {
      if (!icon) return;
      const config = TECH_ICONS[i];

      gsap.to(icon, {
        rotation: 360,
        duration: config.speed,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      // Floating animation for the orbit
      gsap.to(icon, {
        y: `random(-15, 15)`,
        x: `random(-10, 10)`,
        duration: `random(3, 5)`,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: `random(0, 2)`,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ perspective: "800px" }}
    >
      {TECH_ICONS.map((tech, i) => {
        const angle = (i / TECH_ICONS.length) * Math.PI * 2;
        const baseX = Math.cos(angle) * tech.orbit;
        const baseY = Math.sin(angle) * tech.orbit;
        const parallaxX = mousePos.x * 0.02;
        const parallaxY = mousePos.y * 0.02;

        return (
          <div
            key={tech.name}
            ref={(el) => (iconsRef.current[i] = el)}
            className="absolute left-1/2 top-1/2 pointer-events-auto"
            style={{
              transform: `translate(calc(-50% + ${baseX + parallaxX}px), calc(-50% + ${baseY + parallaxY}px))`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="relative p-3 rounded-2xl bg-white/40 backdrop-blur-md border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group/icon"
              style={{
                boxShadow: `0 4px 20px -8px ${tech.color}20, 0 0 0 1px rgba(0,0,0,0.03)`,
              }}
            >
              <TechIcon
                name={tech.name}
                color={tech.color}
                size={tech.size * 0.55}
              />
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none">
                <span className="text-[10px] font-medium text-gray-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md border border-gray-200/50 whitespace-nowrap shadow-sm">
                  {tech.name}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }}>
        {TECH_ICONS.map((tech, i) => {
          const angle = (i / TECH_ICONS.length) * Math.PI * 2;
          const x1 = 50 + Math.cos(angle) * (tech.orbit / 6);
          const y1 = 50 + Math.sin(angle) * (tech.orbit / 6);
          const nextAngle = ((i + 1) / TECH_ICONS.length) * Math.PI * 2;
          const x2 =
            50 +
            Math.cos(nextAngle) *
              (TECH_ICONS[(i + 1) % TECH_ICONS.length].orbit / 6);
          const y2 =
            50 +
            Math.sin(nextAngle) *
              (TECH_ICONS[(i + 1) % TECH_ICONS.length].orbit / 6);
          return (
            <line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#6a77d5"
              strokeWidth="0.5"
              strokeDasharray="3,3"
            />
          );
        })}
      </svg>
    </div>
  );
};

// ============================================
// DECRYPT TEXT (Enhanced)
// ============================================

// ============================================
// HERO SECTION
// ============================================
const Hero = () => {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const rotatingTitles = [
    "Full Stack Engineer",
    "AI Developer",
    "React Specialist",
    "Problem Solver",
    "Software Architect",
  ];
  // Cycle through rotating titles every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  // Mouse spotlight tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll to projects
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#fafbfc]"
    >
      {/* ============================================ */}
      {/* BACKGROUND LAYERS */}
      {/* ============================================ */}

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#6a77d5 1px, transparent 1px), linear-gradient(90deg, #6a77d5 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
        }}
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Mouse Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute pointer-events-none"
        style={{
          left: mousePos.x - 400,
          top: mousePos.y - 400,
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, rgba(106,119,213,0.06) 0%, transparent 70%)",
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-[-20%] right-[-15%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#6a77d5]/5 to-purple-500/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-400/5 to-[#6a77d5]/5 blur-[100px]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#6a77d5]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ============================================ */}
      {/* MAIN CONTENT */}
      {/* ============================================ */}

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">
                <span className="block">Building</span>
                <span className="block bg-gradient-to-r from-gray-900 via-[#6a77d5] to-gray-900 bg-clip-text text-transparent">
                  Digital Products
                </span>
                <span className="block">That Feel Alive.</span>
              </h1>

              <div className="relative h-[1.4em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTitleIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute left-0 text-xl md:text-2xl font-bold text-[#6a77d5] whitespace-nowrap"
                  >
                    {rotatingTitles[currentTitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
              I build scalable AI-powered web applications, premium user
              experiences, and production-ready software using modern
              technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 ">
              <MagneticButton href="/projects" variant="primary">
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                href="https://github.com/Muhammad-Saad-786"
                variant="secondary"
              >
                GitHub
              </MagneticButton>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "10+", label: "Projects Built" },
                { value: "3+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Terminal with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Floating Tech Icons Orbit */}
            <div className="relative h-[500px] lg:h-[550px]">
              <FloatingTechIcons />

              {/* Terminal positioned in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <VsCodeTerminal />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================ */}
      {/* BOTTOM GRADIENT FADE (for transition) */}
      {/* ============================================ */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

export default Hero;
export { MagneticButton };
