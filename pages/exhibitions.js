import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function exhibitions() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen text-[32px] -mt-[85px]">
        <div>
          <div className="grid h-16 rounded place-content-center">
            What Music Feels Like
          </div>
          <div className="grid h-16 rounded  place-content-center">
            Home Away From Home
          </div>
          <div className="grid h-16 rounded  place-content-center">
            So Close Yet so Far
          </div>
          <div className="grid h-16 rounded  place-content-center">
            Mass Isolation
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default exhibitions;
