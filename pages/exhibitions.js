import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function exhibitions() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen text-[32px] -mt-[85px]">
        <div>
          <Link href="/music" className="grid h-16 rounded place-content-center gotham">
            What Music Feels Like
          </Link>

          <Link href="/homeawayfromhome" className="grid h-16 rounded place-content-center gotham">
            Home Away From Home
          </Link>

          <Link href="/socloseyetsofar" className="grid h-16 rounded place-content-center gotham">
            So Close Yet So Far
          </Link>

          <Link href="/mass" className="grid h-16 rounded place-content-center gotham">
            Mass Isolation
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default exhibitions;
