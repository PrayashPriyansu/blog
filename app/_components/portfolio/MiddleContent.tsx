"use client";

import { FileText, ArrowRight } from "lucide-react";

function ResumeSection() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/90 shadow-md col-span-2 md:col-span-4 rounded-lg ">
      <FileText className="text-3xl text-gray-700" />
      <h2 className="text-lg font-semibold mt-2">Resume</h2>
      <button
        onClick={() => window.open("/resume.pdf", "_blank")}
        className="flex items-center gap-1 px-4 py-2 mt-2 text-white bg-gray-800 text-sm rounded-full hover:bg-gray-700 transition"
      >
        Download PDF <ArrowRight size={16} />
      </button>
    </div>
  );
}
function SomethingSection() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/90 shadow-md col-span-2 md:col-span-4 rounded-lg ">
      <FileText className="text-3xl text-gray-700" />
      <h2 className="text-lg font-semibold mt-2">Something</h2>
      <button
        onClick={() => window.open("/resume.pdf", "_blank")}
        className="flex items-center gap-1 px-4 py-2 mt-2 text-white bg-gray-800 text-sm rounded-full hover:bg-gray-700 transition"
      >
        Do Something
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default function MiddleContent() {
  return (
    <div className="col-start-1 md:col-start-5 col-span-6 md:col-span-4 p-2 bg-bentoPink rounded-lg grid grid-cols-4 gap-2">
      <ResumeSection />
      <SomethingSection />
    </div>
  );
}
