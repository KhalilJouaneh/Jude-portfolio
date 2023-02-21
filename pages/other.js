import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function otherprojects() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen text-[32px] -mt-[85px]">
        <div>
          <Link
            href="/commissions"
            className="grid h-16 rounded place-content-center gotham"
          >
            Commisions
          </Link>

          <Link
            href="/hubbles"
            className="grid h-16 rounded place-content-center gotham"
          >
            Hubbles
          </Link>

          <Link
            href="/jscribbles"
            className="grid h-16 rounded place-content-center gotham"
          >
            Jscribbles
          </Link>

          <Link
            href="/muse"
            className="grid h-16 rounded place-content-center gotham"
          >
            Muse
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default otherprojects;
