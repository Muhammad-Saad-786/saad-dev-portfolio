import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Briefcase, Crown, Rocket } from "lucide-react";

const events = [
  {
    date: "2025 - Present",
    title: "Founder, Saad Asim Dev Studio",
    desc: "Building AI-powered SaaS products. Leading full-stack MERN deployments and integrating OpenAI / RAG solutions.",
    icon: Rocket,
    color: "bg-indigo-500",
  },
  {
    date: "2024 - 2025",
    title: "Frontend Developer at Xeven Solutions",
    desc: "Worked at Xeven Solutions, specializing in React development and AI integrations, contributing to innovative projects and enhancing user experiences.",
    icon: Crown,
    color: "bg-purple-500",
  },
  {
    date: "2023 - Now",
    title: "Full Stack Developer & AI Freelancer",
    desc: "Developing custom solutions tailored to clients, specializing in AI automations and robust frontend architectures.",
    icon: Briefcase,
    color: "bg-teal-500",
  },
];

const JourneyTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="journey"
      className="py-24 bg-white relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold mb-4 border border-blue-100 uppercase tracking-widest text-xs">
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Professional <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          {/* Main Line Background */}
          <div className="absolute left-[38px] md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-gray-100 rounded-full" />

          {/* Animated Connecting Progress Line */}
          <motion.div
            style={{ scaleY: pathProgress }}
            className="absolute left-[38px] md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-teal-400 origin-top rounded-full z-10"
          />

          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`relative flex items-center justify-between mb-16 md:mb-24 w-full ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
              >
                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-[45%]" />

                {/* Center Icon Setup */}
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 md:-ml-5 rounded-full border-4 border-white bg-white shadow-lg z-20 flex items-center justify-center">
                  <div
                    className={`w-full h-full rounded-full ${event.color} flex items-center justify-center p-2`}
                  >
                    <event.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full pl-16 md:pl-0 md:w-[45%]">
                  <div
                    className={`bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow tilt-wrapper relative group`}
                  >
                    {/* Glowing effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl z-0 pointer-events-none" />

                    <div className="relative z-10">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-500 mb-4 shadow-sm group-hover:text-indigo-600 transition-colors">
                        {event.date}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
