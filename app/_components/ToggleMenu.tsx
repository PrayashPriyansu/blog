"use client";
import MenuIcon from "@/app/_components/MenuIcon";
import { useState } from "react";
import MobileMenu from "@/app/_components/MobileMenu";

function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((i) => !i);
  }

  return (
    <>
      <button
        className="hover:bg-slate-200 hover:text-black rounded-lg sm:hidden transition-colors "
        onClick={handleClick}
      >
        <div className="h-1.5 pt-0.5">
          <MenuIcon isOpen={isOpen} />
        </div>
      </button>
      <MobileMenu onClick={handleClick} isOpen={isOpen} />
    </>
  );
}
export default ToggleMenu;
