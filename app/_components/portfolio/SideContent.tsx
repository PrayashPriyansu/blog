import { ArrowDown, Briefcase } from "lucide-react";
import SocialsBento from "./SocialsBento";

function SideContent() {
  return (
    <div className="grid row-start-1 col-start-4 md:col-start-9  grid-rows-3 col-span-3 md:col-span-4 gap-1">
      <div className="row-span-1 flex flex-1  justify-center items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 shadow-md">
        <div className="p-2 bg-white  rounded-full shadow">
          <Briefcase className="text-green-600 size-5" />
        </div>
        <p className="text-white font-medium text-lg">Available for Work</p>
      </div>

      <div className="rounded-lg items-center shadow-md row-span-1 gap-1 bg-gradient-to-br from-[#3B1D37] via-[#5A2D50] to-[#7A3C6A] grid grid-cols-4">
        <SocialsBento />
      </div>

      <button className="row-span-1 group relative flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md overflow-hidden transition-all">
        <span className="transition-transform group-hover:-rotate-6 group-hover:scale-105 text-lg font-medium">
          Explore My Projects
        </span>

        <ArrowDown className="transition stroke-3 group-hover:-translate-y-5 group-hover:rotate-6 group-hover:scale-110" />
      </button>
    </div>
  );
}
export default SideContent;
