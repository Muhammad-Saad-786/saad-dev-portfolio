import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowRight, Bot, BookOpen, Clock, BrainCircuit } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-bold mb-4 border border-purple-100 uppercase tracking-widest text-xs">
            Spotlight
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Featured <span className="gradient-text">Project</span>
          </h2>
        </motion.div>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          scale={1.02}
          transitionSpeed={2000}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="group relative bg-gray-50 rounded-[2rem] border border-gray-100 overflow-hidden shadow-2xl shadow-indigo-500/10 grid lg:grid-cols-2 lg:min-h-[500px]"
          >
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <BrainCircuit className="w-8 h-8 text-indigo-500" />
                AI Course Management System (LMS)
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                Full-stack platform with Admin, Student, Instructor roles.
                Integrated
                <strong className="text-gray-900 mx-1 border-b-2 border-indigo-200">
                  RAG-based AI Study Assistant
                </strong>
                allowing students to chat with their course PDFs. Features a
                robust timer-based quiz system.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["MERN", "OpenAI", "Pinecone", "Next.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-indigo-600 shadow-sm border border-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition-colors w-max"
              >
                View Case Study
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="relative bg-indigo-50/50 p-8 lg:p-12 flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-indigo-100/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl" />

              <div className="relative bg-white w-full aspect-video rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
                <div className="h-8 bg-gray-100 flex items-center px-4 gap-2 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-gray-50 flex flex-col p-6 items-center justify-center relative">
                  <Bot className="w-16 h-16 text-indigo-500 mb-4 animate-bounce" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded-full mb-3" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded-full mb-6" />
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="h-24 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                      <BookOpen className="text-gray-400" />
                    </div>
                    <div className="h-24 bg-white rounded-lg shadow-sm border flex items-center justify-center">
                      <Clock className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default FeaturedProject;
