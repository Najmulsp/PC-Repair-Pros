import { LuPhoneCall } from "react-icons/lu";
import shape1 from "../../../public/assets/background/shape-4.png";
import shape2 from "../../../public/assets/background/shape-5.png";

const GetShedule = () => {
    return (
        <div
        style={{ backgroundImage: `url(/assets/background/shape-4.png)`, backgroundRepeat: "no-repeat" , }} 
        
        className='relative w-10/12 mx-auto  min-h-[520px] border-2 border-red-500 my-12 bg-blue-950'>
            <div
            style={{ backgroundImage: `url(/assets/background/shape-5.png)`, backgroundRepeat: "no-repeat" ,backgroundSize: "cover" }}
            className='absolute right-0 top-5 w-[500px] min-h-[450px]  my-12 bg-blue-950' 
            ></div>

            <h1 className="absolute text-5xl font-bold text-white left-72 text-center leading-[60px] mt-20 z-10">
            We Repair, You Relax. Click Below <br /> and Lets Fix Your Devices!
            </h1>
            <div className="flex  px-4 rounded-full  w-full lg:w-auto  justify-center space-x-3 mt-60 absolute left-72">
            <div className=" rounded-full bg-[#F15523] h-10 mt-3 p-2 flex items-center">
              <LuPhoneCall className="text-2xl  text-white" />
            </div>

            <div className="">
              <p className="leading-tight text-[#F15523] text-4xl font-bold pt-3">
              +123 456-7898 <span className="text-white text-2xl  ml-6"> OR</span>
              <button className="text-white text-xl  ml-6 btn border border-[#f2b076] border-collapse  w-52 bg-gradient-to-r from-[#f2b076] to-[#f24004] rounded-full">GET A SCHEDULE</button>
              </p> 

              
            </div>
          </div>

          </div>
    );
};

export default GetShedule;