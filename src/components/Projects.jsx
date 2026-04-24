import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Nexus AI",
    category: "AI/ML",
    description:
      "Full-stack LMS with integrated RAG-based AI Study Assistant. Real-time quiz tracking and personalized paths.",
    tech: ["MERN", "OpenAI", "LLM", "RAG"],
    featured: true,
    imageColor: "bg-indigo-900/40",
    liveLink: "#",
    githubLink:
      "https://github.com/Muhammad-Saad-786/Enterprise-Project-SaaS.git",
  },
  {
    id: 2,
    title: "AI Image Generator",
    category: "AI/ML",
    description:
      "React frontend with Express backend integrating OpenAI's Hugging Face API for dynamic image generation based on user prompts.",
    tech: ["React", "Express", "OpenAI"],
    featured: true,
    imageColor: "bg-emerald-900/40",
    liveLink: "#",
    githubLink: "https://github.com/Muhammad-Saad-786/Ai-Image-Gen.git",
  },
  {
    id: 3,
    title: "React Portfolio",
    category: "Frontend",
    description:
      "Modern portfolio site built with React, featuring real-time contact form powered by Socket.io and MongoDB for message storage.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    featured: false,
    imageColor: "bg-amber-900/40",
    liveLink: "#",
    githubLink: "https://github.com/Muhammad-Saad-786/saad-dev-portfolio.git",
  },
  {
    id: 4,
    title: "Natours Learning Web App",
    category: "MERN",
    description:
      "Natours is MERN stack web app for learning purposes. It features user authentication, tour booking, and an admin dashboard for managing tours and users.",
    tech: ["Express", "MongoDB", "Node.js"],
    featured: false,
    imageColor: "bg-fuchsia-900/40",
    liveLink: "#",
    githubLink:
      "https://github.com/Muhammad-Saad-786/Natours-Learning-Stage-MERN-.git",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  const featured = projectsData.filter((p) => p.featured);
  const regular = projectsData.filter((p) => !p.featured);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Text Reveal Animation
      gsap.fromTo(
        ".reveal-text",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".header-trigger",
            start: "top 80%",
          },
        },
      );

      // 2. Horizontal Scroll for Featured Projects
      const panels = gsap.utils.toArray(".horizontal-panel");
      if (panels.length > 0) {
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            start: "top top",
            end: () => "+=" + window.innerWidth * panels.length,
          },
        });
      }

      // 3. List Item Stagger Fade-up
      gsap.fromTo(
        ".list-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".list-container",
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
      className="relative bg-[#050505] text-white overflow-hidden py-24 min-h-screen font-sans selection:bg-indigo-500/30"
      id="projects"
    >
      {/* Background Grid Noise/Grain Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 header-trigger mb-24">
        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-indigo-400 mb-6 overflow-hidden">
          <span className="block reveal-text">Selected Works</span>
        </h2>
        <h3 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter uppercase overflow-hidden">
          <span className="block reveal-text">Forging digital</span>
        </h3>
        <h3 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter uppercase overflow-hidden text-neutral-500">
          <span className="block reveal-text">experiences.</span>
        </h3>
      </div>

      {/* HORIZONTAL PINNED SECTION (Featured) */}
      <div
        ref={horizontalRef}
        className="relative h-screen flex flex-nowrap overflow-hidden bg-[#0a0a0c]"
      >
        {featured.map((project, i) => (
          <div
            key={project.id}
            className="horizontal-panel w-screen h-full flex-shrink-0 flex items-center justify-center p-6 lg:p-24 relative group"
          >
            <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl gap-12 lg:gap-24">
              {/* Image / Visual block */}
              <div className="w-full lg:w-3/5 h-[40vh] lg:h-[60vh] relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 transition-transform duration-700 group-hover:scale-[1.02]">
                <div
                  className={`absolute inset-0 ${project.imageColor} transition-transform duration-1000 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                <h1 className="absolute bottom-8 left-8 text-6xl md:text-8xl font-black text-white/10 uppercase tracking-tighter mix-blend-overlay">
                  0{i + 1}
                </h1>
              </div>

              {/* Content block */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-8 z-10">
                <div>
                  <div className="text-xs font-mono tracking-widest text-indigo-400 mb-4">
                    {project.category}
                  </div>
                  <h4 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
                    {project.title}
                  </h4>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-1.5 text-xs font-mono border border-white/10 rounded-full text-neutral-300 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 group/btn"
                    target="_blank"
                  >
                    <span className="text-sm font-semibold uppercase tracking-wider group-hover/btn:text-indigo-400 transition-colors">
                      GitHub
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:text-indigo-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARCHIVE / REGULAR PROJECTS LIST */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 list-container">
        <h4 className="text-2xl font-bold mb-12 uppercase tracking-tight text-neutral-400">
          More Projects
        </h4>

        <div className="flex flex-col border-t border-white/10">
          {regular.map((project) => (
            <div
              key={project.id}
              className="list-item group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors gap-6 px-4 -mx-4 cursor-pointer"
            >
              <div className="flex-1">
                <h5 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h5>
                <p className="text-neutral-500 mt-2 max-w-xl">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-4 flex-wrap md:justify-end flex-1">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="teyt-xs font-mono text-neutral-500">
                    {t}
                  </span>
                ))}
              </div>

              <div className="hidden md:flex items-center justify-end w-12 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <a
                  href={project.githubLink}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  target="_blank"
                >
                  <ArrowUpRight className="w-6 h-6 text-indigo-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
