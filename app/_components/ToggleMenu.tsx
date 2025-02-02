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
      <button className="h-1.5" onClick={handleClick}>
        <MenuIcon isOpen={isOpen} />
      </button>
      <MobileMenu onClick={handleClick} isOpen={isOpen} />
    </>
  );
}
export default ToggleMenu;
