"use client";
import { ArrowLeftSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

function Layout({ children }: { children: ReactElement }) {
  const router = useRouter();

  return (
    <div className="px-4 sm:mx-auto w-dvw lg:w-fit  py-6">
      {/* Back Button */}
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground transition-all bg-white text-black duration-200 border border-cardBorder rounded-md shadow-sm 
        dark:bg-card dark:hover:bg-card/50 hover:scale-105  active:scale-100"
        onClick={() => router.back()}
      >
        <ArrowLeftSquare className="w-5 h-5 stroke-1 " />
        Back
      </button>
      {/* <span>Published on {new Date(date).toLocaleDateString()}</span> */}

      {/* Blog Content Wrapper */}
      <div
        className="mt-6 border border-zinc-800  text-black dark:text-zinc-200 rounded-lg p-2 sm:p-6 bg-white dark:bg-zinc-900
      text-pretty break-words whitespace-normal
      shadow-md flex flex-col gap-2"
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
