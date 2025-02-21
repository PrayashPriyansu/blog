import Link from "next/link";
import { Icons } from "./Icons";
import { siteConfig } from "@/config/site";

function ExLinksNav() {
  return (
    <nav className="hidden sm:flex gap-4 items-center">
      <Link
        href={siteConfig.Links.twitter}
        className="hover:bg-slate-200 group hover:text-black rounded-lg px-2 py-2 transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        <Icons.twitter className="size-4 text-foreground group-hover:text-black" />
        <span className="sr-only">T</span>
      </Link>
      <Link
        className="hover:bg-slate-200 group hover:text-black rounded-lg px-2 py-2 transition-colors"
        href={siteConfig.Links.github}
        target="_blank"
        rel="noreferrer"
      >
        <Icons.gitHub className="size-4 text-foreground group-hover:text-black" />
        <span className="sr-only">Github</span>
      </Link>
    </nav>
  );
}
export default ExLinksNav;
