
import banner2 from "../../../../public/assets/banner/details page image1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { getServiceDetails } from "@/app/session/getServices";

const ServiceDetails = async({params}) => {
    
    const details = await getServiceDetails(params._id)
    console.log(details)

  return (
    <div className="container mx-auto mt-10 h-content">
      <div className="relative w-full max-h-96  bg-gradient-to-r from-slate-950 to-gray-950 border">
      <Image src={banner2} alt="Service Image" width={1300} height={100} className="overflow-hidden opacity-50 object-contain" />
        <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-12 lg:pt-20 top-1 left-32 lg:left-[420px]">
          Service Details
        </h1>
        <div className="hidden lg:block">
        <div className="absolute w-2/12 bg-blue-950 p-4 bottom-0 left-[580px] text-center text-white   skew-x-[50deg]">
          <p>.......</p>
        </div>
        <div className="absolute w-2/12 bg-blue-950 p-4 bottom-0 left-[435px] text-center text-white -py-6  -skew-x-[50deg]">
        <p>.......</p>
        </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6 border">
        <div className="lg:col-span-2 col-span-1 border">
          <div className="bg-gray-900">
          {/* <Image src={details.image} alt="Service Image" width={600} height={400} className="" /> */}
            {/* <img
              className="w-full h-96 rounded-lg opacity-65   border"
              src={service.img}
              alt=""
            /> */}
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-orange-50 ">
            <div className="p-8 space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <p className="bg-blue-950 text-white p-4 flex justify-between items-center">
                Full Car Repair
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>
              <p className="bg-white p-4 flex justify-between items-center ">
                Engine Repair
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>
              <p className="bg-white p-4 flex justify-between items-center ">
                Automatic Services
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>
              <p className="bg-white p-4 flex justify-between items-center ">
                Engine Oil Change
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>
              <p className="bg-white p-4 flex justify-between items-center ">
                Battery Charge
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>

              <Link href={"#"}>
                <button className="btn mt-6 bg-gradient-to-r from-[#f2b076] to-[#f24004] w-full p-4 rounded-md text-white text-center">
                  Proceed Checkout
                </button>
              </Link>
            </div>
            

            </div>
            <div className="bg-blue-950 text-white">
                <div>
                    <h1>Download</h1>
                    <div>
                        <div>
                            <h2>Our Brochure</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceDetails;