import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  X,
  Play,
  Pause,
  Sparkles,
  Layers,
  Zap,
  Users,
  BarChart3,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// PROJECT DATA
// ============================================
const projectsData = [
  {
    id: "zaza-store",
    title: "ZAZA Store",
    tagline: "Premium E-Commerce Platform",
    description:
      "A full-stack marketplace with real-time inventory, Stripe payments, and AI-powered product recommendations.",
    longDescription:
      "ZAZA Store is a production-grade e-commerce platform built from the ground up. It features a sophisticated product catalog with advanced filtering, real-time inventory management, Stripe payment processing, and an AI recommendation engine that learns from user behavior to suggest relevant products.",
    category: "Full Stack",
    tech: ["React", "Next.js", "Supabase", "Tailwind CSS", "Stripe", "OpenAI"],
    features: [
      "Authentication & Authorization",
      "Real-time Inventory",
      "Stripe Payments",
      "AI Recommendations",
      "Admin Dashboard",
      "Order Tracking",
    ],
    metrics: [
      { label: "Page Speed", value: "98/100" },
      { label: "Uptime", value: "99.9%" },
      { label: "Transactions", value: "1.2k+" },
    ],
    previewColor: "from-amber-50 to-orange-50",
    accentColor: "#f59e0b",
    liveLink: "#",
    githubLink: "#",
    caseStudy: {
      overview:
        "Built a scalable e-commerce solution handling thousands of concurrent users with real-time inventory synchronization.",
      architecture:
        "Next.js frontend with ISR for product pages, Supabase for real-time database and auth, Stripe for payment processing, and OpenAI for recommendation engine.",
      challenges:
        "Real-time inventory sync across multiple sessions, preventing overselling during flash sales, and building a performant search with faceted filtering.",
      solutions:
        "Implemented optimistic UI updates with server-side validation, queue-based inventory management for flash sales, and Meilisearch for instant search with typo tolerance.",
      timeline: "4 months (Design → Deployment)",
      performance:
        "98 Lighthouse score, <2s initial load, 60fps animations, 99.9% uptime SLA",
    },
  },
  {
    id: "mentor-ai",
    title: "MentorAI",
    tagline: "AI-Powered Learning Platform",
    description:
      "An intelligent LMS with RAG-based AI study assistant, real-time quiz tracking, and personalized learning paths.",
    longDescription:
      "MentorAI revolutionizes online learning by integrating a RAG-based AI assistant that can understand and explain course materials. Students can upload PDFs, ask questions, and receive contextual answers. The platform includes comprehensive admin, instructor, and student dashboards with analytics.",
    category: "AI/ML",
    tech: [
      "MERN",
      "OpenAI",
      "Pinecone",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "RAG AI Study Assistant",
      "Role-based Dashboards",
      "Real-time Quiz System",
      "PDF Content Analysis",
      "Progress Analytics",
      "Course Management",
    ],
    metrics: [
      { label: "Active Users", value: "500+" },
      { label: "AI Accuracy", value: "94%" },
      { label: "Courses", value: "25+" },
    ],
    previewColor: "from-violet-50 to-indigo-50",
    accentColor: "#7c3aed",
    liveLink: "#",
    githubLink: "#",
    caseStudy: {
      overview:
        "Developed an AI-native learning platform that makes course materials interactive through RAG-powered conversations.",
      architecture:
        "MERN stack with Pinecone vector database for embeddings, OpenAI for RAG responses, and real-time WebSocket connections for quiz synchronization.",
      challenges:
        "Handling large PDF documents efficiently, maintaining context across long conversations, and building a fair timer-based quiz system.",
      solutions:
        "Chunked document processing with overlap, sliding window context management, and server-authoritative quiz timing with client-side prediction.",
      timeline: "6 months (Research → Production)",
      performance:
        "94% answer accuracy, <500ms response time, supports 50+ page documents",
    },
  },
  {
    id: "mlbb-dashboard",
    title: "MLBB Dashboard",
    tagline: "Gaming Analytics Platform",
    description:
      "Real-time gaming analytics dashboard with player statistics, match history, and performance visualizations.",
    longDescription:
      "A comprehensive analytics platform for Mobile Legends: Bang Bang players. Features include detailed match history, hero performance metrics, rank progression tracking, and comparative analytics against other players in the same tier.",
    category: "Data Viz",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Real-time Stats",
      "Match History",
      "Hero Analytics",
      "Rank Tracking",
      "Data Visualizations",
      "Player Comparison",
    ],
    metrics: [
      { label: "Data Points", value: "1M+" },
      { label: "API Calls", value: "50k/d" },
      { label: "Players", value: "10k+" },
    ],
    previewColor: "from-emerald-50 to-teal-50",
    accentColor: "#10b981",
    liveLink: "#",
    githubLink: "#",
    caseStudy: {
      overview:
        "Built a high-performance analytics dashboard processing millions of data points with real-time visualizations.",
      architecture:
        "React with D3.js for custom charts, Node.js microservices for data processing, PostgreSQL for structured data, Redis for caching, and Docker for containerization.",
      challenges:
        "Processing large datasets efficiently, rendering complex D3 visualizations without lag, and maintaining real-time data freshness.",
      solutions:
        "Implemented data aggregation pipelines, virtualized rendering for large datasets, and Redis caching with smart invalidation strategies.",
      timeline: "3 months (MVP → Scale)",
      performance:
        "Handles 1M+ data points, <100ms chart render time, 50k daily API calls",
    },
  },
];

// ============================================
// EXPANDED PROJECT MODAL
// ============================================
const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Lock body scroll when modal opens
  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Stop click propagation
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Fixed Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* Scrollable Modal */}
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={handleModalClick}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl overscroll-contain"
        style={{ WebkitOverflowScrolling: "touch", transform: "translateZ(0)" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-gray-100 transition-colors shadow-sm border border-gray-200/50"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header with gradient */}
        <div
          className={`relative bg-gradient-to-br ${project.previewColor} p-8 sm:p-12`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-full"
              style={{ backgroundColor: project.accentColor }}
            >
              {project.category}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
            {project.title}
          </h2>
          <p className="text-xl text-gray-600 font-medium">{project.tagline}</p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6 mt-8">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-extrabold text-gray-900">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 space-y-10">
          {/* Overview */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles
                className="w-5 h-5"
                style={{ color: project.accentColor }}
              />
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {project.caseStudy.overview}
            </p>
          </section>

          {/* Architecture & Challenges Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Layers
                  className="w-5 h-5"
                  style={{ color: project.accentColor }}
                />
                Architecture
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {project.caseStudy.architecture}
              </p>
            </section>
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Zap
                  className="w-5 h-5"
                  style={{ color: project.accentColor }}
                />
                Challenges & Solutions
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-800">Challenge:</p>
                  <p className="text-gray-600">
                    {project.caseStudy.challenges}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Solution:</p>
                  <p className="text-gray-600">{project.caseStudy.solutions}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Timeline & Performance */}
          <div className="grid sm:grid-cols-2 gap-8">
            <section className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
              <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Timeline</p>
                <p className="text-gray-600 text-sm">
                  {project.caseStudy.timeline}
                </p>
              </div>
            </section>
            <section className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
              <BarChart3 className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Performance</p>
                <p className="text-gray-600 text-sm">
                  {project.caseStudy.performance}
                </p>
              </div>
            </section>
          </div>

          {/* Features */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2
                className="w-5 h-5"
                style={{ color: project.accentColor }}
              />
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Layers
                className="w-5 h-5"
                style={{ color: project.accentColor }}
              />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold bg-gray-50 text-gray-600 rounded-lg border border-gray-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-[#6a77d5] transition-colors shadow-lg shadow-gray-900/10"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Repository
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// PROJECT CARD
// ============================================
const ProjectCard = ({ project, index, onExpand }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
      onClick={() => onExpand(project)}
    >
      <div
        className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0`}
      >
        {/* Browser Preview */}
        <div className="lg:w-[55%] relative">
          <div
            className={`relative overflow-hidden rounded-2xl border border-gray-200/60 shadow-2xl transition-all duration-500 ${
              isHovered ? "shadow-3xl -translate-y-1" : ""
            }`}
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateY(${(mousePos.x - 300) * 0.01}deg) rotateX(${(mousePos.y - 200) * -0.01}deg)`
                : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
              transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out",
            }}
          >
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50/80 backdrop-blur-sm border-b border-gray-200/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/80 rounded-md px-3 py-1 text-xs text-gray-400 font-mono text-center truncate border border-gray-200/40">
                  {project.id}.vercel.app
                </div>
              </div>
            </div>

            {/* Preview Content */}
            <div
              className={`relative bg-gradient-to-br ${project.previewColor} p-8 aspect-[16/10] flex items-center justify-center overflow-hidden`}
            >
              {/* Animated mock UI */}
              <div className="w-full max-w-md space-y-4">
                <div className="h-8 bg-white/60 rounded-lg w-3/4 animate-pulse" />
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="aspect-square bg-white/40 rounded-xl backdrop-blur-sm border border-white/60"
                    />
                  ))}
                </div>
                <div className="h-3 bg-white/40 rounded-full w-1/2" />
                <div className="h-3 bg-white/40 rounded-full w-3/4" />
              </div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${project.accentColor}15, transparent 50%)`,
                }}
              />

              {/* Hover play button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.5,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-gray-200/50">
                  <Play className="w-6 h-6 text-gray-700 fill-gray-700 ml-0.5" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Reflection on hover */}
          <div
            className="absolute -bottom-6 left-4 right-4 h-12 bg-gradient-to-b from-gray-900/5 to-transparent rounded-b-2xl blur-md transition-opacity duration-500 pointer-events-none"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </div>

        {/* Content */}
        <div
          className={`lg:w-[45%] flex flex-col justify-center ${isReversed ? "lg:pr-12" : "lg:pl-12"} pt-8 lg:pt-0`}
        >
          <div className="space-y-5">
            {/* Category Badge */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight group-hover:text-[#6a77d5] transition-colors duration-300">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-lg text-gray-500 font-medium">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold bg-gray-50 text-gray-600 rounded-lg border border-gray-200/60 hover:border-[#6a77d5]/30 hover:text-[#6a77d5] hover:bg-[#6a77d5]/5 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2">
              {project.features.slice(0, 4).map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-[#6a77d5] transition-colors duration-300 shadow-lg shadow-gray-900/10 hover:shadow-[#6a77d5]/20">
                Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 text-gray-400 hover:text-gray-700 transition-colors rounded-xl hover:bg-gray-100"
              ></a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 text-gray-400 hover:text-gray-700 transition-colors rounded-xl hover:bg-gray-100"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Metrics */}
            <div className="flex gap-6 pt-4 border-t border-gray-100">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-lg font-extrabold text-gray-900">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// MAIN PROJECTS SECTION
// ============================================
const Projects = () => {
  const sectionRef = useRef(null);
  const [expandedProject, setExpandedProject] = useState(null);

  // GSAP Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".projects-header-text",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#fafbfc] py-32 overflow-hidden"
    >
      {/* Background Layers */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#6a77d5 1px, transparent 1px), linear-gradient(90deg, #6a77d5 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at 50% 30%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, black 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#6a77d5]/3 to-purple-500/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-400/3 to-[#6a77d5]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="projects-header mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-full shadow-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#6a77d5]" />
            <span className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">
              Featured Work
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <h2 className="projects-header-text text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.05]">
              Selected
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="projects-header-text text-5xl md:text-7xl font-extrabold text-gray-400 tracking-tight leading-[1.05]">
              Projects.
            </h2>
          </div>
          <div className="overflow-hidden mt-6">
            <p className="projects-header-text text-xl text-gray-400 font-medium max-w-2xl">
              Each project is built with production-grade code, thoughtful
              architecture, and obsessive attention to detail.
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-32 lg:space-y-40">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onExpand={setExpandedProject}
            />
          ))}
        </div>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {expandedProject && (
          <ProjectModal
            project={expandedProject}
            onClose={() => setExpandedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
