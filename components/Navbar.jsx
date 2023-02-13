import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="navbar bg-[#fdfdfd] mt-5">
        <div className="navbar-start">
          <p className="text-center text-[32px] font-bold ml-10">JUDE SAMMAN</p>
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
              className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52 "
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
        </div>
        <div className="navbar-end hidden lg:flex mr-10">
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
        {/* <div className="navbar-end"></div> */}
      </div>
    </>
  );
}

export default Navbar;
