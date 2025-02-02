import { Sun, Terminal } from "lucide-react";

function Header() {
  return (
    <div className="text-white h-10 w-full flex bg-header gap-1 items-center px-2 py-1">
      <div className="items-center flex">
        <Terminal size={20} />
        <span className="font-semibold">Prayash</span>
      </div>
      <div className="grow"></div>
      <div className="flex gap-3 items-center">
        <span className="text-sm ">About</span>
        <Sun className="stroke-1" />
      </div>
    </div>
  );
}
export default Header;
