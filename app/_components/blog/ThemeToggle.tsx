"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(
    function () {
      if (isDarkMode) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    },
    [isDarkMode]
  );

  return (
    <button
      onClick={() => setIsDarkMode((i) => !i)}
      className="hover:bg-slate-200 text-foreground relative hover:text-black rounded-lg px-2 py-2 transition-colors duration-100"
    >
      <Sun
        className=" scale-100 dark:scale-0 rotate-0 dark:-rotate-90"
        size={20}
      />
      <Moon
        className="m-auto inset-0  absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0"
        size={20}
      />
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
export default ThemeToggle;
