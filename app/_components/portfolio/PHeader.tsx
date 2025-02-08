import Link from "next/link";

function PHeader() {
  return (
    <div className="z-50 fixed top-3 w-full flex justify-center items-center">
      <nav className="flex justify-center items-center gap-2 border border-gray-300 bg-white/90 backdrop-blur-md shadow-lg rounded-full">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <Link href="/blog" className="nav-item">
          Blogs
        </Link>
        <a href="#" className="nav-item ">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default PHeader;
