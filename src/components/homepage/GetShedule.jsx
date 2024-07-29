import { LuPhoneCall } from "react-icons/lu";
import shape1 from "../../../public/assets/background/shape-4.png";
import shape2 from "../../../public/assets/background/shape-5.png";

const GetShedule = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/background/shape-4.png)`,
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-10/12 mx-auto  min-h-[520px] border-2 border-red-500 my-12 bg-blue-950"
    >
      <div
        style={{
          backgroundImage: `url(/assets/background/shape-5.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute right-0 top-5 lg:w-[500px] min-h-[450px]  my-12 bg-blue-950"
      ></div>

      <h1 className="absolute w-4/5  mx-auto text-2xl lg:text-5xl font-bold text-white left-12 lg:left-24 text-center leading-[30px] lg:leading-[60px] mt-20 z-10">
        We Repair, You Relax. Click Below and Lets Fix Your Devices!
      </h1>
      <div className="flex justify-center items-center gap-6 flex-col  lg:flex-row   px-4 rounded-full  w-full lg:w-auto   space-x-3 mt-60 absolute lg:left-44">
        

        <div className="flex gap-2 justify-center items-center">
            <div className=" rounded-full bg-[#F15523] w-10 h-10 p-2 flex items-center">
          <LuPhoneCall className="text-2xl  text-white" />
            </div>
            <p className="leading-tight text-[#F15523] lg:text-4xl font-bold">
             +123 456-7898{" "}</p>
        </div>  
            
          
        
        <span className="text-white lg:text-2xl  ml-6"> OR</span>
        <button className="text-white text-xl  ml-6 btn border border-[#f2b076] border-collapse  w-52 bg-gradient-to-r from-[#f2b076] to-[#f24004] rounded-full">
              GET A SCHEDULE
            </button>
      </div>
    </div>
  );
};

export default GetShedule;
