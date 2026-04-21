import React from "react";
import { motion } from "framer-motion";
import { Code, Database, BrainCircuit, Cloud, Box } from "lucide-react";

const techStack = [
  { name: "React.js", icon: Code, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: Box, color: "text-black" },
  { name: "Tailwind CSS", icon: Code, color: "text-[#38B2AC]" },
  { name: "Node.js", icon: Code, color: "text-[#339933]" },
  { name: "Express", icon: Database, color: "text-black" },
  { name: "MongoDB", icon: Database, color: "text-[#47A248]" },
  { name: "OpenAI API", icon: BrainCircuit, color: "text-[#412991]" },
  { name: "Pinecone", icon: Cloud, color: "text-blue-500" },
  { name: "GSAP", icon: Code, color: "text-green-500" },
  { name: "Framer Motion", icon: Box, color: "text-purple-500" },
  { name: "Vercel", icon: Cloud, color: "text-black" },
];

const Row = ({ reverse = false }) => {
  const content = (
    <div
      className={`flex shrink-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} gap-8 py-4`}
    >
      {techStack.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all border border-transparent hover:border-indigo-100 will-change-transform cursor-pointer group"
          >
            <Icon
              className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`}
            />
            <span className="font-bold text-gray-800 tracking-tight whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="flex w-full overflow-hidden hover:[&>div]:animation-play-state-paused group">
      {content}
      {content}
      {content}
    </div>
  );
};

const Marquee = () => {
  return (
    <section
      id="stack"
      className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            My Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
              Toolbox
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Building performance-driven full-stack & AI applications.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6 relative max-w-[100vw]">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <Row />
        <Row reverse />
      </div>
    </section>
  );
};

export default Marquee;
