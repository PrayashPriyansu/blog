"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "@/app/_components/blog/Icons";
import { siteConfig } from "@/config/site";

const socialVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
};

const socialLinks = [
  {
    href: siteConfig.Links.twitter,
    icon: Icons.twitter,
    label: "Twitter",
    gradient: "from-blue-400 to-blue-600",
    hoverGradient: "from-blue-500 to-blue-700",
  },
  {
    href: siteConfig.Links.github,
    icon: Icons.gitHub,
    label: "GitHub",
    gradient: "from-gray-700 to-gray-900",
    hoverGradient: "from-gray-800 to-black",
  },
  {
    href: siteConfig.Links.github,
    icon: Icons.linkedIn,
    label: "LinkedIn",
    gradient: "from-blue-600 to-blue-800",
    hoverGradient: "from-blue-700 to-blue-900",
  },
  {
    href: "mailto:prayashpriyansu27@example.com",
    icon: Icons.mail,
    label: "Email",
    gradient: "from-red-500 to-red-700",
    hoverGradient: "from-red-600 to-red-800",
  },
];

function SocialsBento() {
  return (
    <>
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.label}
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <motion.div
              className={`flex aspect-square m-1.5 flex-col items-center justify-center gap-2 bg-gradient-to-br ${social.gradient} p-4 rounded-xl text-white transition-all duration-300 shadow-lg`}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ rotate: Math.random() * 20 - 10 }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </>
  );
}

export default SocialsBento;