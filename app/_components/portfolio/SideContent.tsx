"use client";

import { ArrowDown, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SocialsBento from "./SocialsBento";

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function SideContent() {
  return (
    <motion.div
      className="grid row-start-1 col-start-4 md:col-start-9 grid-rows-3 col-span-3 md:col-span-4 gap-3"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.div
        className="row-span-1 flex flex-1 justify-center items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 shadow-xl border border-emerald-400"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px -12px rgba(16, 185, 129, 0.4)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full shadow-lg"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase className="text-white size-5" />
        </motion.div>
        <p className="text-white font-bold text-lg">Available for Work</p>
        <motion.div
          className="ml-2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>

      <motion.div
        className="rounded-xl items-center shadow-xl row-span-1 gap-1 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 grid grid-cols-4 border border-purple-500"
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.4)",
        }}
      >
        <SocialsBento />
      </motion.div>

      <motion.button
        className="row-span-1 group relative flex items-center justify-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl shadow-xl overflow-hidden transition-all border border-blue-500"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        <motion.span
          className="relative z-10 text-lg font-bold"
          whileHover={{ scale: 1.05 }}
        >
          Explore My Projects
        </motion.span>

        <motion.div
          className="relative z-10"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="stroke-2 group-hover:scale-110 transition-transform" />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

export default SideContent;