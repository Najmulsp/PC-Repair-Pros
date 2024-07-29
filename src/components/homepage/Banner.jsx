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
import banner1 from "../../../public/assets/banner/laptop repair 1 .jpg";
import banner2 from "../../../public/assets/banner/laptop repair 2  .jpg";
import banner3 from "../../../public/assets/banner/laptop repair 3 .jpg";
import banner4 from "../../../public/assets/banner/laptop repair 4 .jpg";



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
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper max-h-[80vh]"
      >
        <SwiperSlide>
          {/* <div
            style={{ backgroundImage: `url(${banner1})` }} 
            className=' w-full h-full min-h-[520px]'>

          </div>
          <h1 className='text-white'>first image</h1> */}
           <Image id='foranimation' src={banner1} alt="Banner Image" width="1600" height="100" className='scale-0.5'></Image> 
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} alt="Banner Image" width="1600" height="300"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} alt="Banner Image" width="1600" height="300"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner4} alt="Banner Image" width="1600" height="300"></Image>
        </SwiperSlide>
        
      </Swiper>
        </>
    );
};

export default Banner;