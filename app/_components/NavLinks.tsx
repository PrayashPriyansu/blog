import Link from "next/link";

const navlinks = [
  { content: "Home", path: "/" },
  { content: "Blog", path: "/blog" },
  { content: "About", path: "/about" },
];

type props = {
  onClick: () => void;
};
function NavLinks({ onClick }: props) {
  return (
    <ul className="h-full w-full flex flex-col gap-4 items-center mt-10">
      {navlinks.map((item, i) => (
        <li key={i}>
          <Link onClick={onClick} href={item.path}>
            {item.content}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default NavLinks;
