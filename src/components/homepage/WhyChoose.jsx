"use client";
import Image from "next/image";
import icon1 from "../../../public/assets/logo/shape-16.png";
import icon2 from "../../../public/assets/logo/shape-15.png";
import logo1 from "../../../public/assets/background/why-choose (1).webp";
import CountUp from "react-countup";
import { SiTicktick } from "react-icons/si";


const WhyChoose = () => {
  return (
    <div>
      {/* upper text container */}
      <div className="p-6 py-12 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white">
        <div className="container mx-auto">
          <div className="flex items-center lg:items-start gap-6">
            <div className="text-center lg:text-left  mx-auto lg:mx-0">
              <p
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos="fade-right"
              className="flex items-center  justify-center lg:justify-start  gap-3">
                <Image src={icon1} width={40} height={40} alt="icon" />
                WHY CHOOSE US
                <Image src={icon1} width={40} height={40} alt="icon" />
              </p>
              <h2
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos="fade-right"
              className="text-2xl lg:text-4xl lg:w-3/5 font-bold">
                Experience Seamless Repairs: Your Devices Deserve the
                Best
              </h2>
            </div>
            <div className="hidden lg:block mt-8">
              <Image
                id="rotateStar1"
                src={icon2}
                width={100}
                height={100}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
      {/* lower grid section */}
      <section className="px-5 py-10 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          {/* text div1 */}
          <div
          data-aos-duration="1000"
          data-aos-delay="1400"
          data-aos="fade-right"
          className="flex flex-col justify-between col-span-12 lg:col-span-4  py-2 space-y-8 md:space-y-16 ">
            <div className="flex flex-col space-y-8 md:space-y-12">
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-600">
                  <span className="flex items-center mb-4 space-x-2 dark:text-orange-600">
                    <SiTicktick />
                    <span className="text-xl font-bold tracking-wider uppercase pl-2">
                        Exceptional Expertise
                    </span>
                  </span>
                  
                </h3>
                <p className="pl-2">
                  Our skilled technicians bring years of experience and
                  specialized knowledge to ensure precise, reliable repairs for
                  your devices.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-600">
                  <span className="flex items-center mb-4 space-x-2 dark:text-orange-600">
                  <SiTicktick />
                    <span className="text-xl font-bold tracking-wider uppercase pl-2">
                      Customer-Centric Approach
                    </span>
                  </span>
                </h3>
                <p className="pl-2">
                  Our skilled technicians bring years of experience and
                  specialized knowledge to ensure precise, reliable repairs for
                  your devices.
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-600">
                  <span className="flex items-center mb-4 space-x-2 dark:text-orange-600">
                  <SiTicktick />
                    <span className="text-xl font-bold tracking-wider uppercase pl-2">
                      Quality Guaranteed
                    </span>
                  </span>
                </h3>
                <p className="pl-2">
                  Our skilled technicians bring years of experience and
                  specialized knowledge to ensure precise, reliable repairs for
                  your devices.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-600">
                  <span className="flex items-center mb-4 space-x-2 dark:text-orange-600">
                  <SiTicktick />
                    <span className="text-xl font-bold tracking-wider uppercase pl-2">
                      Passionate Team
                    </span>
                  </span>
                </h3>
                <p className="pl-2">
                  Our skilled technicians bring years of experience and
                  specialized knowledge to ensure precise, reliable repairs for
                  your devices.
                </p>
              </div>
            </div>
          </div>
          {/* image div 2 */}
          <div
          data-aos-duration="1000"
          data-aos-delay="1500"
          data-aos="zoom-in"
          className="relative flex  bg-center bg-no-repeat bg-cover col-span-12 lg:col-span-4  min-h-96">
            <Image
              src={logo1}
              width={400}
              height={400}
              alt="icon"
              className=" mx-auto"
            />
          </div>
          {/* batch div 3 */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-center gap-10 items-center">
            <div
            data-aos-duration="1000"
            data-aos-delay="1600"
            data-aos="fade-left"
            className=" lg:ml-20 bg-[#F6F7FF] dark:bg-[#303874] w-full lg:w-[300px] rounded-full text-center py-10 ">
              <h1 className="text-4xl font-bold text-orange-500">
              <CountUp
                    start={0}
                    end={15}
                    duration={6}
                />+
                </h1>
              <p>Years Of Experience</p>
            </div>
            <div
            data-aos-duration="1000"
            data-aos-delay="1700"
            data-aos="fade-left"
            className=" lg:ml-10 bg-[#FFF8F5] dark:bg-[#604032] w-full lg:w-[300px] rounded-full text-center py-10">
              <h1 className="text-4xl font-bold text-orange-500">
              <CountUp
                    start={0}
                    end={56303}
                    duration={6}
                />+
                </h1>
              <p>Devices Repaired</p>
            </div>
            <div
            data-aos-duration="1000"
            data-aos-delay="1800"
            data-aos="fade-left"
            className=" lg:-ml-10 bg-[#F6F7FF] dark:bg-[#313765] w-full lg:w-[300px] rounded-full text-center py-10">
              <h1 className="text-4xl font-bold text-orange-500">
              <CountUp
                    start={0}
                    end={100}
                    duration={6}
                />%
                </h1>
              <p>Satisfied customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
