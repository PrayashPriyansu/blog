import MainNav from "@/app/_components/blog/MainNav";
import ThemeToggle from "@/app/_components/blog/ThemeToggle";
import ToggleMenu from "@/app/_components/blog/ToggleMenu";
import ExLinksNav from "./ExLinksNav";

function Header() {
  return (
    <header className="sticky z-50 min-w-dvw top-0 border-b border-border h-14 w-full   flex bg-background/95 backdrop:blur supports-[backdop-fliter]:bg-background/60 gap-4 items-center px-8 py-1">
      <MainNav />
      <div className="grow"></div>
      <div className="flex gap-4 items-center">
        <ExLinksNav />
      </div>
      <ThemeToggle />
      <ToggleMenu />
    </header>
  );
}
export default Header;
