import Link from "next/link";
import { Icons } from "@/app/_components/blog/Icons";
import { siteConfig } from "@/config/site";

function SocialsBento() {
  return (
    <>
      {/* Twitter Section */}
      <Link
        href={siteConfig.Links.twitter}
        target="_blank"
        rel="noreferrer"
        className="flex aspect-square m-1.5 col-span-1 col-start-1 flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#222] to-[#000] hover:from-[#333] hover:to-[#111] p-4 rounded-lg text-white transition duration-300 hover:scale-105 -rotate-2 hover:rotate-0"
      >
        <Icons.twitter />
      </Link>

      {/* GitHub Section */}
      <Link
        href={siteConfig.Links.github}
        target="_blank"
        rel="noreferrer"
        className="flex m-1.5 flex-col aspect-square items-center justify-center gap-2 bg-gradient-to-b from-[#222] to-[#000] hover:from-[#333] hover:to-[#111] p-4 rounded-lg text-white transition duration-300 rotate-3 hover:rotate-0 hover:scale-105"
      >
        <Icons.gitHub />
      </Link>

      {/* LinkedIn Section */}
      <Link
        href={siteConfig.Links.github}
        rel="noreferrer"
        target="_blank"
        className="flex m-1.5 flex-col aspect-square items-center justify-center gap-2 bg-gradient-to-b from-[#222] to-[#000] hover:from-[#333] hover:to-[#111] p-4 rounded-lg text-white transition duration-300 hover:scale-105 rotate-2 hover:rotate-0"
      >
        <Icons.linkedIn />
      </Link>

      {/* Email Section */}
      <Link
        href="mailto:prayashpriyansu27@example.com"
        target="_blank"
        rel="noreferrer"
        className="flex m-1.5 flex-col aspect-square items-center justify-center gap-2 bg-gradient-to-b from-[#222] to-[#000] hover:from-[#333] hover:to-[#111] p-4 rounded-lg text-white transition duration-300 rotate-3 hover:rotate-0 hover:scale-105"
      >
        <Icons.mail />
      </Link>
    </>
  );
}

export default SocialsBento;
