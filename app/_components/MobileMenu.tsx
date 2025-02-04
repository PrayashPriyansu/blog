import { cn } from "@/utils";
import NavLinks from "./NavLinks";

type props = {
  isOpen: boolean;
  onClick: () => void;
};

function MobileMenu({ isOpen, onClick }: props) {
  return (
    <div className="fixed top-14 right-0 w-full z-50">
      {/* Overlay (Background Blur) */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className={cn(
          "fixed inset-0  bg-black/95 backdrop:blur dark:bg-white/20 supports-[backdop-fliter]:bg-black/60 top-14 backdrop-blur-sm transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-70 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isOpen}
      ></div>

      {/* Actual Sidebar Menu */}
      <div
        className={cn(
          "absolute top-0 right-0 h-screen w-3/4  border border-border bg-background/95 backdrop:blur supports-[backdop-fliter]:bg-background/60 shadow-sm shadow-black/50 transition-transform duration-500 ease-in-out will-change-transform",

          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-expanded={isOpen}
      >
        <NavLinks onClick={onClick} />
      </div>
    </div>
  );
}

export default MobileMenu;
