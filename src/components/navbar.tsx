import Link from "next/link";

const Navbar = () => (
  <nav className="flex items-center w-full h-[80px] bg-white shadow-sm fixed">
    <div className="container">
      <Link href="/">
        <a>HIIIiN</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;
