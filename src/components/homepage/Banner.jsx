"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';
// import '../path/to/styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import banner1 from "../../../public/assets/banner/laptop repair img 6  .jpg";
import banner2 from "../../../public/assets/banner/computer-repair113.webp";
import banner3 from "../../../public/assets/banner/Repair_or_replace_laptop.jpg";
import banner4 from "../../../public/assets/banner/computer-repair112.webp";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        navigation={true}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper max-h-[80vh]"
      >
        <SwiperSlide className="relative">
          <Image
            id="foranimation1"
            src={banner1}
            alt="Banner Image"
            width="1500"
            height="50"
          ></Image>
          
                      {/* Bluish overlay */}
          <div className="absolute inset-0 bg-gray-950 opacity-60"></div>{" "}
                              {/* text-container 1 */}
          <div
            id="text-content1"
            className="absolute -top-[400px] text-left   inset-0 flex flex-col justify-center "
          >
            <h1 className="text-5xl font-bold text-white w-2/5 pb-6 leading-[60px]">
              Trusted Computer Repair Experts
            </h1>
            <p className="w-2/5 text-white pb-8">
              Our skilled technicians are dedicated to restoring your devices to
              their optimal functionality, ensuring you stay connected in todays
              fast-paced digital world.
            </p>
            <button className="hover-effect text-white text-xl btn border-[#f2b076] w-52 bg-gradient-to-r border-collapse border from-[#f2b076] to-[#f24004] rounded-full">
              GET A SCHEDULE
            </button>
          </div>
         
        </SwiperSlide>

        <SwiperSlide>
          <Image
            id="foranimation2"
            class="zoom-in"
            src={banner2}
            alt="Banner Image"
            width="1600"
            height="200"
          ></Image>
                   {/* Bluish overlay */}
                   <div className="absolute inset-0 bg-gray-950 opacity-30"></div>{" "}
                              {/* text-container 2 */}
          <div
            id="text-content2"
            className="absolute -top-[400px] text-left   inset-0 flex flex-col justify-center "
          >
            <h1 className="text-5xl font-bold text-white w-2/5 pb-6 leading-[60px]">
              Where Computer Find Renewed Life
            </h1>
            <p className="w-2/5 text-white pb-8">
              Our skilled technicians are dedicated to restoring your devices to
              their optimal functionality, ensuring you stay connected in todays
              fast-paced digital world.
            </p>
            <button className="text-white text-xl  btn border border-[#f2b076] border-collapse  w-52 bg-gradient-to-r from-[#f2b076] to-[#f24004] rounded-full">
              GET A SCHEDULE
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            id="foranimation3"
            src={banner3}
            alt="Banner Image"
            width="1600"
            height="400"
          ></Image>
                   {/* Bluish overlay */}
                   <div className="absolute inset-0 bg-gray-950 opacity-60"></div>{" "}
                              {/* text-container 3 */}
          <div
            id="text-content3"
            className="absolute -top-[400px] text-left   inset-0 flex flex-col justify-center "
          >
            <h1 className="text-5xl font-bold text-white w-2/5 pb-6 leading-[60px]">
            Repairs Computer Fast & Quick Fix
            </h1>
            <p className="w-2/5 text-white pb-8">
              Our skilled technicians are dedicated to restoring your devices to
              their optimal functionality, ensuring you stay connected in todays
              fast-paced digital world.
            </p>
            <button className="text-white text-xl  btn border border-[#f2b076] border-collapse  w-52 bg-gradient-to-r from-[#f2b076] to-[#f24004] rounded-full">
              GET A SCHEDULE
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            id="foranimation4"
            src={banner4}
            alt="Banner Image"
            width="1600"
            height="300"
          ></Image>
                              {/* Bluish overlay */}
         <div className="absolute inset-0 bg-gray-950 opacity-60"></div>{" "}
                              {/* text-container 4 */}
          <div
            id="text-content4"
            className="absolute -top-[400px] text-left   inset-0 flex flex-col justify-center "
          >
            <h1 className="text-5xl font-bold text-white w-2/5 pb-6 leading-[60px]">
              Computer Repairs of Any Complexity
            </h1>
            <p className="w-2/5 text-white pb-8">
              Our skilled technicians are dedicated to restoring your devices to
              their optimal functionality, ensuring you stay connected in todays
              fast-paced digital world.
            </p>
            <button className="text-white text-xl  btn border border-[#f2b076] border-collapse  w-52 bg-gradient-to-r from-[#f2b076] to-[#f24004] rounded-full">
              GET A SCHEDULE
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
