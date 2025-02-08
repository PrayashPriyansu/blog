"use client";

import { cn } from "@/utils";

import { Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainNav() {
  const pathName = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href={"/"} className="flex items-center gap-1 mr-6">
        <Terminal size={20} />
        <span className="font-semibold">Prayash</span>
      </Link>
      <Link
        href={"/blog"}
        className={cn(
          "hidden sm:flex  items-center gap-1 mr-6 transition-all",
          pathName === "/blog"
            ? "text-foreground underline"
            : "text-foreground/60"
        )}
      >
        <span className=" ">Blog</span>
      </Link>
      <Link
        href={"/about"}
        className={cn(
          "hidden sm:flex items-center gap-1 mr-6 transition-colors",
          pathName === "/about"
            ? "text-foreground underline"
            : "text-foreground/60"
        )}
      >
        <span className="">About</span>
      </Link>
    </nav>
  );
}
export default MainNav;
