"use client";

import { cn } from "@/utils";

import { Terminal } from "lucide-react";
import AnimatedLink from "@/app/_components/AimatedLink";
import { usePathname } from "next/navigation";

function MainNav() {
  const pathName = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <AnimatedLink href={"/"} className="flex items-center gap-1 mr-6">
        <Terminal size={20} />
        <span className="font-semibold">Prayash</span>
      </AnimatedLink>
      <AnimatedLink
        href={"/blog"}
        className={cn(
          "hidden sm:flex  items-center gap-1 mr-6 transition-all",
          pathName === "/blog"
            ? "text-foreground underline"
            : "text-foreground/60"
        )}
      >
        <span className=" ">Blog</span>
      </AnimatedLink>
      <AnimatedLink
        href={"/about"}
        className={cn(
          "hidden sm:flex items-center gap-1 mr-6 transition-colors",
          pathName === "/about"
            ? "text-foreground underline"
            : "text-foreground/60"
        )}
      >
        <span className="">About</span>
      </AnimatedLink>
    </nav>
  );
}
export default MainNav;
