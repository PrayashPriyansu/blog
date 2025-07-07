"use client";

import { Monitor, Code, Terminal, Database, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Icons } from "../blog/Icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function SkillsTabs() {
  const skillsData = [
    {
      category: "Frontend",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient:
        "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      skills: [
        {
          name: "React",
          icon: <Monitor className="text-blue-600 dark:text-blue-400" />,
          level: 90,
        },
        {
          name: "JavaScript",
          icon: <Code className="text-yellow-500" />,
          level: 85,
        },
        {
          name: "HTML/CSS",
          icon: <Palette className="text-orange-500" />,
          level: 95,
        },
        {
          name: "Tailwind",
          icon: <Zap className="text-teal-500" />,
          level: 88,
        },
      ],
    },
    {
      category: "Backend",
      gradient: "from-green-500 to-emerald-500",
      bgGradient:
        "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      skills: [
        {
          name: "Node.js",
          icon: <Terminal className="text-green-600 dark:text-green-400" />,
          level: 80,
        },
        {
          name: "MongoDB",
          icon: <Database className="text-green-500" />,
          level: 75,
        },
        {
          name: "Express",
          icon: <Code className="text-gray-700 dark:text-gray-300" />,
          level: 82,
        },
      ],
    },
    {
      category: "Tools",
      gradient: "from-purple-500 to-pink-500",
      bgGradient:
        "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      skills: [
        {
          name: "Git",
          icon: <Icons.gitHub className="text-gray-800 dark:text-gray-200" />,
          level: 85,
        },
        {
          name: "Docker",
          icon: <Terminal className="text-blue-500" />,
          level: 70,
        },
      ],
    },
  ];

  return (
    <motion.div
      className="py-6 col-span-6 md:col-span-12 grid grid-cols-12 gap-4 rounded-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skillsData.map((categoryData, index) => (
        <motion.div
          key={index}
          className={`col-span-12 md:col-span-4 bg-gradient-to-br ${categoryData.bgGradient} rounded-xl p-6 shadow-xl border ${categoryData.borderColor} backdrop-blur-sm`}
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className={`w-4 h-4 rounded-full bg-gradient-to-r ${categoryData.gradient}`}
            />
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">
              {categoryData.category}
            </h3>
          </motion.div>

          <motion.ul className="space-y-4" variants={containerVariants}>
            {categoryData.skills.map((skill, skillIndex) => (
              <motion.li
                key={skillIndex}
                className="group"
                variants={skillVariants}
              >
                <div className="flex items-center gap-4 mb-2">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 flex-1">
                    {skill.name}
                  </h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${categoryData.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1 + skillIndex * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SkillsTabs;
