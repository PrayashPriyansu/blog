"use client";

import { FileText, ArrowRight, Code } from "lucide-react";
import { easeOut, motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

function ResumeSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 col-span-2 md:col-span-4 rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-800 backdrop-blur-sm"
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.25)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mb-3"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <FileText className="text-2xl text-white" size={24} />
      </motion.div>
      <h2 className="text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-2">
        Resume
      </h2>
      <motion.button
        onClick={() => window.open("/resume.pdf", "_blank")}
        className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-emerald-600 to-teal-600 text-sm rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download PDF <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
}

function ProjectsSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 col-span-2 md:col-span-4 rounded-xl shadow-lg border border-blue-200 dark:border-blue-800 backdrop-blur-sm"
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.25)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mb-3"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Code className="text-2xl text-white" size={24} />
      </motion.div>
      <h2 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">
        Projects
      </h2>
      <motion.button
        className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 text-sm rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Projects
        <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
}

export default function MiddleContent() {
  return (
    <motion.div
      className="col-start-1 md:col-start-5 col-span-6 md:col-span-4 p-3 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl grid grid-cols-4 gap-3 shadow-xl border border-slate-200 dark:border-slate-700"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <ResumeSection />
      <ProjectsSection />
    </motion.div>
  );
}
