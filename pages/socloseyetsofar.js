import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function socloseyetsofar() {
  return (
    <>
      <Navbar />
      <p className="text-center m-auto text-[30px]">Home Away From Home</p>
      <br />

      <p className="m-auto max-w-[800px] text-left text-[18px]">
        This installation piece considers ideas of place, movement, and memory,
        fueled by my individual story of what it feels like to be away from
        home.
        <br />
        <br />
        So Close Yet So Far displays a projected screen of Facetime calls
        between me and the three members of my family. The videos portrayed were
        carefully chosen to portray the places I yearn for the most when gone.
        The city, the sand, and the sea are three of the most prevalent. Through
        intention, my work becomes fueled by the relationship between my
        individual story of migration and the memory I have of home. I
        considered place and movement together, historically and in the present
        moment by portraying technology as a platform of connection.
        <br />
        <br />
        Through the element of contrast, the piece turns into a form of
        storytelling with no words by displaying videos of myself in a different
        environment than that of my family. It transforms what is being
        displayed into a visual and melodic experience that connects the
        audience with a domestic space that I once occupied. The sounds and
        visuals are nostalgic and carry memories. An example is a call to prayer
        that is heard from the video of the cityscape in Jordan.
        <br />
        <br />
        The recreated sandy seated environment that the audience is meant to
        watch the projections from, turns into a tool to navigate the
        relationship between a domestic space for me, and a foreign one for
        others.
        <br />
        <br />
        The piece invites bigger themes of migration. Although the piece is a
        response to my personal experience of being away from home, it also
        creates a pathway to reflect on what it feels like to forcefully
        migrate. Growing up in an area where migration is prevalent pushed me to
        express what it might feel like. I would like to ask the audience what
        migration means to them. Or where do you call home? And how do you
        remember things about the past?
      </p>

      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/So close yet so far/image1.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/So close yet so far/image2.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/So close yet so far/image3.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/So close yet so far/image4.jpg"
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

export default socloseyetsofar;
