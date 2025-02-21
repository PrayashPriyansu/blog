import { cn } from "@/utils";

type props = {
  isOpen: boolean;
};

export default function MenuIcon({ isOpen }: props) {
  return (
    <div className="flex  flex-col justify-center gap-1 relative items-center">
      <div
        className={cn(
          "h-0.5 w-5 rounded-md transition-all scale-100 absolute bg-black/80 dark:bg-slate-200",
          isOpen ? "-rotate-45" : "rotate-0 top-[6px]"
        )}
      ></div>
      <div
        className={cn(
          "h-0.5 w-5 rounded-md scale-100 transition-all dark:bg-slate-200 bg-black/80",
          isOpen ? "opacity-0 -translate-x-10 " : "opacity-100 translate-x-0"
        )}
      ></div>
      <div
        className={cn(
          "h-0.5 w-5  rounded-md scale-100 transition-all absolute bg-black/80 dark:bg-slate-200",
          isOpen ? "rotate-45 " : "rotate-0 -top-[6px]"
        )}
      ></div>
    </div>
  );
}
