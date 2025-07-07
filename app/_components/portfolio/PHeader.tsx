"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Projects" },
  { href: "/blog", label: "Blogs" },
  { href: "#", label: "Contact" },
];

function PHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="z-50 fixed top-4 w-full flex justify-center items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.nav
        className={`flex justify-center items-center gap-1 border border-white/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled ? "shadow-xl scale-95" : "shadow-lg"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            {item.href === "/blog" ? (
              <Link href={item.href} className="nav-item-enhanced">
                {item.label}
              </Link>
            ) : (
              <a href={item.href} className="nav-item-enhanced">
                {item.label}
              </a>
            )}
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
}

export default PHeader;