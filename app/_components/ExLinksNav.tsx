import AnimatedLink from "@/app/_components/AimatedLink";
import { Icons } from "./Icons";
import { siteConfig } from "@/config/site";

function ExAnimatedLinksNav() {
  return (
    <nav className="hidden sm:flex gap-4 items-center">
      <AnimatedLink
        href={siteConfig.AnimatedLinks.twitter}
        className="hover:bg-slate-200 hover:text-black rounded-lg px-2 py-2 transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        <Icons.twitter className="size-4" />
        <span className="sr-only">T</span>
      </AnimatedLink>
      <AnimatedLink
        className="hover:bg-slate-200 hover:text-black rounded-lg px-2 py-2 transition-colors"
        href={siteConfig.AnimatedLinks.github}
        target="_blank"
        rel="noreferrer"
      >
        <Icons.gitHub className="size-4" />
        <span className="sr-only">Github</span>
      </AnimatedLink>
    </nav>
  );
}
export default ExAnimatedLinksNav;
