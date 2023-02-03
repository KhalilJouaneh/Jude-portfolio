import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function homeawayfromhome() {
  return (
    <>
      <Navbar />
      <p className="text-center m-auto text-[30px]">Home Away From Home</p>
      <br />

      <p className="m-auto max-w-[800px] text-left text-[18px]">
        Home is a combination of senses, a combination of smells, colors,
        sounds, tastes, and feelings, which are all depicted in my series of two
        oil paintings titled “Home Away from Home”. These works grew out of the
        need to return mentally to my home after physically leaving it for the
        first time. It was an opportunity for me to reconsider the definition of
        home as a physical place, rather seeing it through food, art, and
        objects that carry memories of home instead. I hoped however, with
        intention, to look at these objects with detachment and a new
        understanding. Through these pieces I explore my unfolding relationship
        to my roots, and the way it plays with my identity, by understanding why
        I find such comfort in these objects in the first place. What things do
        you find home in? What items would you pack if you had to leave home?
      </p>

      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/Home away from home/portrait_1.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/Home away from home/portrait_2.jpg"
                />
              </div>
            </div>
          </div>
          {/* <p className="text-right">Next </p> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default homeawayfromhome;
