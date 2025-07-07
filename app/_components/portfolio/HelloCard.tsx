"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import animationData from "@/public/animations/Animation - 1738998049750.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

function HelloCard() {
  return (
    <motion.div
      className="col-span-3 md:col-span-4 col-start-1 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl gap-4 flex flex-col items-center justify-center text-center shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Lottie animationData={animationData} className="size-40" />
      </motion.div>
      
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="space-y-2"
      >
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Hello,
        </motion.div>
        <motion.div
          className="text-xl font-semibold text-slate-700 dark:text-slate-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Prayash Priyansu
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HelloCard;