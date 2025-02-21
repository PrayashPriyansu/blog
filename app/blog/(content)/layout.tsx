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
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-200 border border-gray-300 rounded-md shadow-sm 
        hover:bg-gray-200 hover:border-gray-400 active:scale-95"
        onClick={() => router.back()}
      >
        <ArrowLeftSquare className="w-5 h-5 stroke-1 text-gray-600" />
        Back
      </button>

      {/* Blog Content Wrapper */}
      <div className="mt-6 border border-gray-300  rounded-lg p-2 sm:p-6 bg-white shadow-md">
        {children}
      </div>
    </div>
  );
}

export default Layout;
