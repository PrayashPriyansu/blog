import AnimatedLink from "@/app/_components/AimatedLink";

const navAnimatedLinks = [
  { content: "Home", path: "/" },
  { content: "Blog", path: "/blog" },
  { content: "About", path: "/about" },
];

type props = {
  onClick: () => void;
};
function NavAnimatedLinks({ onClick }: props) {
  return (
    <ul className="h-full w-full flex flex-col gap-4 items-center mt-10">
      {navAnimatedLinks.map((item, i) => (
        <li key={i}>
          <AnimatedLink onClick={onClick} className="text-2xl" href={item.path}>
            {item.content}
          </AnimatedLink>
        </li>
      ))}
    </ul>
  );
}
export default NavAnimatedLinks;
