"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import icon1 from "../../../public/assets/logo/shape-16.png";
import { FaStar } from "react-icons/fa6";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

const Testimonial = () => {
  return (
    <div>
      <section className="bg-[#0F003E] dark:text-gray-800 flex flex-col lg:flex-row justify-center items-center">
        <div className="container max-w-6xl p-6  mx-auto ">
          <div className=" flex flex-col justify-center items-center lg:mt-8 w-full lg:col-span-3">
            <p className="flex text-orange-500 items-center mx-auto  justify-center pt-2 gap-3">
              <Image src={icon1} width={40} height={40} alt="icon" />
              TESTIMONIALS
              <Image src={icon1} width={40} height={40} alt="icon" />
            </p>
            <h1 className="text-center mx-auto w-full lg:w-6/12 text-white text-4xl font-bold">
              Success Stories: From Our Client’s Perspective
            </h1>
          </div>

          <div className="p-6 space-y-2 lg:col-span-8">
            {/* second div */}

            <section className=" dark:text-gray-800">
              {/* <div className="absolute bg-gradient-to-r from-[#ef6d27] to-[#F6F7FF] h-40 w-40 rounded-full">

              </div> */}
              <div className="container p-6 mx-auto -pb-6">
                <Swiper
                  slidesPerView={2}
                  breakpoints={{
                    // when window width is >= 320px
                    200: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper w-full"
                >
                  <SwiperSlide>
                    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                      <div className="gradientBorder border-transparent flex border rounded-lg flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-6 rounded-t-lg sm:px-8 md:px-12">
                          <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center gap-1">
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                            </div>
                            <TfiCommentsSmiley className="text-2xl text-orange-500" />
                          </div>
                          <p className="relative text-white text-lg  ">
                            I cant thank Stada enough for saving my computer!
                            Their team worked tirelessly to recover my files and fix the software glitches. Fast, efficient, and friendly service. Highly recommended!
                          </p>
                        </div>
                        <div className="pb-6">
                          <div className="flex justify-start pl-12 space-x-3">
                            <div className=" flex items-center">
                              <CiLocationOn className="text-2xl transition-all delay-75 rounded-full  bg-orange-100 hover:bg-orange-500  w-10 h-10 mt-3 p-2  text-orange-500 hover:text-white" />
                            </div>

                            <div className="text-white">
                              <p className="leading-tight font-bold pt-3">
                                Herry Ley
                              </p>
                                <small>CTO at HolaStyle</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                      <div className="gradientBorder border-transparent flex border rounded-lg flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-6 rounded-t-lg sm:px-8 md:px-12">
                          <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center gap-1">
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                            </div>
                            <TfiCommentsSmiley className="text-2xl text-orange-500" />
                          </div>
                          <p className="relative text-white text-lg  ">
                            I cant thank Stada enough for saving my computer!
                            Their team worked tirelessly to recover my files and fix the software glitches. Fast, efficient, and friendly service. Highly recommended!
                          </p>
                        </div>
                        <div className="pb-6">
                          <div className="flex justify-center space-x-3">
                            <div className=" flex items-center">
                              <CiLocationOn className="text-2xl transition-all delay-75 rounded-full  bg-orange-100 hover:bg-orange-500  w-10 h-10 mt-3 p-2  text-orange-500 hover:text-white" />
                            </div>

                            <div className="text-white">
                              <p className="leading-tight font-bold pt-3">
                                Location:
                              </p>

                              <small>2750 Quadra Street, New York, USA</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                      <div className="gradientBorder border-transparent flex border rounded-lg flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-6 rounded-t-lg sm:px-8 md:px-12">
                          <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center gap-1">
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                            </div>
                            <TfiCommentsSmiley className="text-2xl text-orange-500" />
                          </div>
                          <p className="relative text-white text-lg  ">
                            I cant thank Stada enough for saving my computer!
                            Their team worked tirelessly to recover my files and fix the software glitches. Fast, efficient, and friendly service. Highly recommended!
                          </p>
                        </div>
                        <div className="pb-6">
                          <div className="flex justify-center space-x-3">
                            <div className=" flex items-center">
                              <CiLocationOn className="text-2xl transition-all delay-75 rounded-full  bg-orange-100 hover:bg-orange-500  w-10 h-10 mt-3 p-2  text-orange-500 hover:text-white" />
                            </div>

                            <div className="text-white">
                              <p className="leading-tight font-bold pt-3">
                                Location:
                              </p>

                              <small>2750 Quadra Street, New York, USA</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                      <div className="gradientBorder border-transparent flex border rounded-lg flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-6 rounded-t-lg sm:px-8 md:px-12">
                          <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center gap-1">
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                              <FaStar className="text-xl text-orange-500" />
                            </div>
                            <TfiCommentsSmiley className="text-2xl text-orange-500" />
                          </div>
                          <p className="relative text-white text-lg  ">
                            I cant thank Stada enough for saving my computer!
                            Their team worked tirelessly to recover my files and fix the software glitches. Fast, efficient, and friendly service. Highly recommended!
                          </p>
                        </div>
                        <div className="pb-6">
                          <div className="flex justify-center space-x-3">
                            <div className=" flex items-center">
                              <CiLocationOn className="text-2xl transition-all delay-75 rounded-full  bg-orange-100 hover:bg-orange-500  w-10 h-10 mt-3 p-2  text-orange-500 hover:text-white" />
                            </div>

                            <div className="text-white">
                              <p className="leading-tight font-bold pt-3">
                                Location:
                              </p>

                              <small>2750 Quadra Street, New York, USA</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
