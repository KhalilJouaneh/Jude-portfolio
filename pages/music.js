import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function music() {
  return (
    <>
      <Navbar />
      <p className="text-center m-auto text-[30px]">What Music Feels Like</p>
      <br />

      <p className="m-auto max-w-[800px] text-left text-[15px]">
        These works are surrealist dreamscapes that evoke memories of what music
        can feel like. These objects are storytellers for my memories of the
        senses. The pomegranate is a taste of generosity, that reminds me of my
        mother and grandparents. Their seeds are a touch of sweetness sprinkled
        over traditional foods back home. The cats are the sounds of my
        neighborhood, as they roamed through alleyways, acting as my childhood
        companion. The soft sand is what makes me feel most connected physically
        and spiritually to my land. The jasmine flower smells like home. Each is
        sourced from my own archival images to create a world of my own history.
        They show my place of comfort. Each element works together to create the
        same space of refuge that music feels like for me.
        <br />
        <br />
        Surrealism has taken my artistic intentions deeper into the world of
        symbolism by taking on meaningful sensibilities, inspired by poets who
        romantically dissect the idea of home. “The 5 letters to my mother” by
        the Syrian Poet and diplomat Nizar Qabbani, tackles the nostalgia and
        yearning for his &apos;mother&apos; who symbolizes home in his writing.
        Mahmoud Darwish, a Palestinian poet, talks about the three things he
        yearns for in his poem “To My Mother”.
        <br />
        <br />I hope the audience can reflect on the relationship between bodies
        and the earth. What makes us part of the land? And what parts of the
        land make us?
      </p>

      {/* gallery from tw-elements */}

      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/What music feels like/music1.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/What music feels like/music2.jpg"
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

export default music;
