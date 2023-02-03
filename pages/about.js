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
      <p className="text-center font-bold text-[54px]"> Artist Biography</p>
      <div className="avatar w-screen flex">
        <div className="w-[250px] rounded-full m-auto mt-5">
          <img src="/about_portrait.jpg" />
        </div>
      </div>
      <p className="text-left max-w-[500px] m-auto mt-7">
        <b> Jude Samman</b> is an emerging artist who is currently finishing her
        Bachelor of Fine Arts (Honors) degree at Queens University. A Jordanian
        with Syrian roots, she currently works and studies in Ontario, Canada.
        Jude&apos;s practice mainly expressed through oil paintings, focus on
        understanding her unfolding relationship to the idea of home. Through
        symbolism, she includes objects that she looks at with detachment and a
        new understanding that tell stories of her memories. Figures are
        included in her work as an ongoing study of the connection between
        bodies and the earth.
      </p>
      <Footer />
    </>
  );
}

export default about;
