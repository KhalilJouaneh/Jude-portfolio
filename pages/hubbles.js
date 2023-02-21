import React from "react";
import Navbar from "../components/Navbar";

function hubbles() {
  const totalImages = 20;

  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    images.push(
      <div key={i}>
        <img alt="gallery" className="gallery-img" src={`/hubbles/${i}.jpg`} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section class="overflow-hidden">
      <p className="text-left font-bold text-[48px] ml-[50px] mt-10 justify-end"> Hubbles</p>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/1.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/2.jpg"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/3.jpg"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/4.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/5.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-auto  object-cover object-center"
                  src=" /hubbles/6.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/7.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/8.jpg"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/9.jpg"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/10.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/11.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-auto  object-cover object-center"
                  src=" /hubbles/12.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/13.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/14.jpg"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/15.jpg"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/16.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="gallery-img"
                  src="/hubbles/17.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-auto  object-cover object-center"
                  src=" /hubbles/18.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-auto  object-cover object-center"
                  src=" /hubbles/19.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-auto  object-cover object-center"
                  src=" /hubbles/20.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default hubbles;
