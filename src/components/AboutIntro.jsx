import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Terminal, Cpu } from "lucide-react";

const AboutIntro = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white border-y border-gray-100 overflow-hidden relative"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-50" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-50 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Illustration / Lottie Replacement */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-square w-full max-w-lg mx-auto bg-gray-50 rounded-[3rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-center items-center overflow-hidden"
        >
          {/* Minimalist SVG representation of a rocket launching from code */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] z-0" />

          <div className="z-10 bg-white rounded-2xl w-full h-[60%] border border-gray-200 shadow-sm relative overflow-hidden flex flex-col p-4 mb-16">
            <div className="flex items-center gap-2 mb-4 border-b pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 font-mono text-sm text-gray-500 overflow-hidden">
              <p className="mb-2">
                <span className="text-purple-500">import</span> {"{ AI }"}{" "}
                <span className="text-purple-500">from</span> '
                <span className="text-teal-500">@saadasim/ai</span>';
              </p>
              <p className="mb-2">
                <span className="text-blue-500">const</span> app =
                initializeApp();
              </p>
              <p className="mb-2">app.launch🚀({"{ performance: true }"});</p>

              <motion.div
                animate={{ y: [0, -200] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeIn",
                  delay: 1,
                }}
                className="absolute bottom-0 left-1/2 -ml-8 flex flex-col items-center"
              >
                <div className="text-6xl text-orange-500 drop-shadow-lg">
                  🚀
                </div>
                <div className="w-4 h-20 bg-gradient-to-t from-transparent via-orange-400 to-yellow-200 mt-2 blur-sm rounded-full" />
              </motion.div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-100 rounded-full blur-[40px] z-0" />
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-100 rounded-full blur-[40px] z-0" />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-indigo-600 w-8 h-8 p-1.5 bg-indigo-50 rounded-lg border border-indigo-100" />
            <Cpu className="text-teal-600 w-8 h-8 p-1.5 bg-teal-50 rounded-lg border border-teal-100" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Building Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">
              Web Applications
            </span>
          </h2>

          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            I craft minimalist, high-performance web applications that merge
            stunning design with cutting-edge AI architecture. From frontend
            polish to robust reliable backends.
          </p>

          <ul className="space-y-4">
            {[
              "Scalable MERN architectures",
              "Generative AI & LLM tooling",
              "Seamless Animations & micro-interactions",
              "Performance optimized code",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="flex items-center gap-4 text-gray-800 font-bold text-lg"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;
