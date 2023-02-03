import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function mass() {
  return (
    <>
    <Navbar />
    <p className="text-center m-auto text-[30px]">Mass Isolation</p>
    <br />

    <section class="overflow-hidden text-gray-700 ">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/Mass isolation/image1.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/Mass isolation/image2.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/Mass isolation/image3.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/Mass isolation/image4.jpg"
              />
            </div>
          </div>
          
        </div>
        {/* <p className="text-right">Next </p> */}
      </div>
    </section>
    <Footer />
  </>
  )
}

export default mass