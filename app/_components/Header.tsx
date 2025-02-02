import MainNav from "@/app/_components/MainNav";
import ExLinksNav from "@/app/_components/ExLinksNav";
import ThemeToggle from "@/app/_components/ThemeToggle";
import ToggleMenu from "@/app/_components/ToggleMenu";

function Header() {
  return (
    <header className="sticky overflow-x-clip top-0 border-b border-border h-14 w-full max-w-screen-2xl  flex bg-background/95 backdrop:blur supports-[backdop-fliter]:bg-background/60 gap-4 items-center px-8 py-1">
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
