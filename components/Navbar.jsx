import Link from "next/link";

function Navbar() {
  return (
    <>
      <p className="text-center text-xl font-bold">Jude Samman</p>
      <div className="navbar bg-[#fdfdfd]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/exhibitions">Exhibitions</Link>
              </li>
              <li>
                <Link href="/other">Other projects</Link>
              </li>
              <li>
                <Link
                  href="https://wallzy.com/artists/jude-al-samman?fbclid=PAAabZNy4nsGuonwhRWui9ivQ4txazFdWD-XWnDpH5hiByfJ_xjL8FPwLV-Qc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">Carbovalent</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/exhibitions">Exhibitions</Link>
            </li>
            <li>
              <Link href="/other">Other projects</Link>
            </li>
            <li>
              <Link
                href="https://www.wallzy.com/artists/jude-al-samman?fbclid=PAAabZNy4nsGuonwhRWui9ivQ4txazFdWD-XWnDpH5hiByfJ_xjL8FPwLV-Qc"
                target="_blank"
                rel="noreferrer"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}

export default Navbar;
