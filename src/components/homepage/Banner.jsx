"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
// import '../path/to/styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import Image from 'next/image';
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
        effect={'fade'}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper max-h-[80vh]"
      >
        <SwiperSlide>
           <Image id='foranimation1' src={banner1} alt="Banner Image" width="1500" height="50" className='border'></Image> 
           <div className='bg-blue-950 h-full w-full'>

           </div>
        </SwiperSlide>

        <SwiperSlide>
          <Image id='foranimation2' class="zoom-in" src={banner2} alt="Banner Image" width="1600" height="200"></Image>
        </SwiperSlide>

        <SwiperSlide>
          <Image id='foranimation3' src={banner3} alt="Banner Image" width="1600" height="400"></Image>
        </SwiperSlide>

        <SwiperSlide>
          <Image id='foranimation4' src={banner4} alt="Banner Image" width="1600" height="300"></Image>
        </SwiperSlide>
        
      </Swiper>
        </>
    );
};

export default Banner;