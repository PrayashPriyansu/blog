"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const highlightVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

function MainContent() {
  return (
    <motion.div
      className="col-span-6 md:col-span-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900 px-8 py-16 flex flex-col text-slate-800 dark:text-slate-200 items-center justify-center rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
      whileHover={{
        scale: 1.01,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-center tracking-wide mb-6 relative">
          <span className="relative z-10">
            Building Exceptional{" "}
            <span className="relative inline-block">
              User Experiences
              <motion.div
                className="absolute bottom-0 left-0 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30 rounded-full"
                variants={highlightVariants}
                initial="hidden"
                animate="visible"
              />
            </span>
          </span>
        </h1>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl text-center max-w-3xl leading-relaxed mb-8 text-slate-600 dark:text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I'm an aspiring web developer passionate about creating meaningful,
        intuitive, and engaging user interfaces that drive real-world impact.
        With experience in frontend technologies like React and Tailwind CSS, I
        aim to solve complex problems with clean, maintainable code.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px -12px rgba(79, 70, 229, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
        
        <motion.button
          className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-900 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default MainContent;