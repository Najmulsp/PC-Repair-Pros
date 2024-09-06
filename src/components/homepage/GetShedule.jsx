import { LuPhoneCall } from "react-icons/lu";
import bgImg from "../../../public/assets/background/GetAShedule.png";
import shape1 from "../../../public/assets/logo/sun logo .png";
import shape2 from "../../../public/assets/logo/shape-7.png";

import { FcQuestions } from "react-icons/fc";
import Image from "next/image";


const GetShedule = () => {
  return (
    <div className="relative -mt-6 bg-white dark:bg-zinc-800 py-10" >
        
        <Image  className="rounded-xl mx-auto" src={bgImg} width={1150} height={400} alt="bg image" />
        
      <Image id="rotateStar2" className="absolute right-0 lg:right-24 top-10 lg:top-12 text-6xl text-orange-100 hover:text-orange-400" src={shape1} width={120} height={80} alt="icon" />
      <Image id="rotateStar1"  className="absolute left-2 lg:left-24 bottom-10 lg:bottom-12 text-7xl text-blue-100 hover:text-blue-400" src={shape2} width={120} height={80} alt="icon"/> 
      

      <h1
      data-aos-duration="1000"
      data-aos-delay="1000"
      data-aos="fade-right"
      className="absolute w-4/5 top-16 lg:top-28  mx-auto text-xl lg:text-4xl font-bold text-white left-12 lg:left-28 text-center leading-[30px] lg:leading-[60px] mt-0 ">
        We Repair, You Relax. Click Below and Lets Fix Your Devices!
      </h1>
      <div
      data-aos-duration="1000"
      data-aos-delay="1200"
      data-aos="fade-left"
      className="flex justify-center items-center gap-4 lg:gap-6 flex-col lg:flex-row  px-4  w-full lg:w-auto space-x-1 lg:space-x-3 top-36 lg:top-64 absolute lg:left-72">
        <div className="flex  gap-2 justify-center items-center">
            <div className=" rounded-full bg-[#F15523] w-10 h-10 p-2 flex items-center">
          <LuPhoneCall className="text-2xl  text-white" />
            </div>
            <p className="leading-tight lg:pt-2 text-[#F15523] lg:text-4xl font-bold">
             +123 456-7898{" "}</p>
        </div>  
        <span className="text-white lg:text-2xl ml-6 hidden lg:block"> OR</span>
        <button className="hover-effect hidden lg:block text-white lg:text-xl ml-6 btn border border-[#f2b076] border-collapse  lg:w-52 bg-gradient-to-r from-[#f2b076] to-[#f24004] rounded-full">
              GET A SCHEDULE
            </button>
      </div>

      <div
      data-aos-duration="1000"
      data-aos-delay="1300"
      data-aos="fade-right"
      className="absolute hidden lg:block bottom-28 lg:bottom-56 left-16 lg:left-[420px] space-x-3">
        <div className="flex justify-center items-center gap-6">
              <div className="flex items-center">
              <FcQuestions className="text-2xl transition-all delay-75 rounded-full hover:bg-orange-600  bg-red-100 w-12 h-12 mt-3 p-2 hover:text-white text-blue-800" />
              </div>

              <div className=" w-3/5 lg:w-full">
                <p className="leading-tight text-white font-bold pt-3">Request free consultation
                </p>

                <small className="text-white ">Get answers and advice from people you want it from.</small>
              </div>
              </div>
            </div>
    </div>
  );
};

export default GetShedule;
