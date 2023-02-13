import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

function about() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Jude Samman's artist biography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <p className="text-left font-bold text-[48px] ml-[75px] mt-10 justify-end"> BIOGRAPHY</p>

      <div className="avatar w-screen flex">
        <p className="text-left max-w-[500px] mr-auto ml-[75px] mt-7 leading-[40px] text-[20px]	 ">
          <b> Jude Samman</b> is an emerging artist who is currently finishing
          her Bachelor of Fine Arts (Honors) degree at Queens University. A
          Jordanian with Syrian roots, she currently works and studies in
          Ontario, Canada. Jude&apos;s practice mainly expressed through oil
          paintings, focus on understanding her unfolding relationship to the
          idea of home. Through symbolism, she includes objects that she looks
          at with detachment and a new understanding that tell stories of her
          memories. Figures are included in her work as an ongoing study of the
          connection between bodies and the earth.
        </p>
        <div className="max-w-[500px] ml-auto mr-[60px] mt-7 ">
          <img src="/about_portrait.jpg" className="about-page-img" />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default about;
