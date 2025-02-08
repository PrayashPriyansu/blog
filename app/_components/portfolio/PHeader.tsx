import { cn } from "@/utils";
import Link from "next/link";

function PHeader() {
  return (
    <div className="flex justify-center items-center fixed w-full top-3">
      <nav className="flex gap-1 p-0.5 border bg-black/50 backdrop-blur dark:bg-white/50 border-black/15 rounded-full">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item ">
          Projects
        </a>
        <Link href="/blog" className="nav-item ">
          Blogs
        </Link>
        <a
          href="#"
          className={cn(
            "nav-item bg-white text-black hover:bg-white/70 hover:text-black "
          )}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
export default PHeader;
