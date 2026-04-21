import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Server,
  AppWindow,
  Bot,
  Sparkles,
  Database,
  Layout,
} from "lucide-react";

const services = [
  {
    title: "Full Stack MERN",
    description:
      "End-to-end web applications with MongoDB, Express, React, and Node.js.",
    icon: Database,
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "AI Integration",
    description:
      "Integrating OpenAI APIs, LangChain, and RAG architectures for smart apps.",
    icon: Bot,
    color: "from-purple-500 to-fuchsia-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
    sparkle: true,
  },
  {
    title: "React Dev",
    description:
      "Interactive, performant, and responsive frontends using React and Next.js.",
    icon: Layout,
    color: "from-teal-500 to-emerald-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    title: "WordPress Dev",
    description: "Custom themes, plugins, and headless WordPress solutions.",
    icon: AppWindow,
    color: "from-gray-700 to-gray-900",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold mb-4 border border-emerald-100 uppercase tracking-widest text-xs">
            What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Services & Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={2500}
              >
                <div
                  className={`relative p-8 rounded-[2rem] bg-white border ${service.border} shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow overflow-hidden group min-h-[320px] flex flex-col items-start justify-between`}
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 blur-[50px] group-hover:opacity-20 transition-opacity`}
                  />

                  <div>
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bg} text-gray-900 mb-6 relative group-hover:scale-110 transition-transform duration-500`}
                    >
                      <service.icon className="w-8 h-8" />
                      {service.sparkle && (
                        <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-spin-slow" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-sm font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                    Learn More <Code className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
