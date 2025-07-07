"use client";

import { motion } from "framer-motion";
import HelloCard from "./HelloCard";
import MainContent from "./MainContent";
import MiddleContent from "./MiddleContent";
import SideContent from "./SideContent";
import SkillsSection from "./SkillSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function Hero() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <motion.div
        className="container grid md:grid-cols-12 grid-cols-6 gap-4 mx-auto px-4 text-slate-800 dark:text-slate-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <HelloCard />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <MiddleContent />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <SideContent />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <MainContent />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <SkillsSection />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;