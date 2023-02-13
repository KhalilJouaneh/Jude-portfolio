import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function otherprojects() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen text-[32px] -mt-[85px]">
        <div>
          <div className="grid h-16 rounded place-content-center">
            Comissions
          </div>
          <div className="grid h-16 rounded place-content-center">
            Hubbles
          </div>
          <div className="grid h-16 rounded place-content-center">
            Jscribbles
          </div>
          <div className="grid h-16 rounded  place-content-center">
            Muse
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default otherprojects;
