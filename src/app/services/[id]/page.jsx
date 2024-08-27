
import PcLogo from "../../../../public/assets/logo/logo-black.png";
import delivaryLogo from "../../../../public/assets/logo/delivary logo.png";
import bannerLogo from "../../../../public/assets/logo/details page logo.png";
import banner2 from "../../../../public/assets/banner/details page image1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { getServiceDetails } from "@/app/session/getServices";

const ServiceDetails = async({params}) => {

    const details = await getServiceDetails(params.id)
    const {title, image, description, price} = details.res


  return (
    <div className="container mx-auto mt-10 h-content">
      <div className="relative w-full max-h-96  bg-gradient-to-r from-slate-950 to-gray-950 border">
      <Image src={banner2} alt="Service Image" width={1300} height={100} className="overflow-hidden opacity-50 object-contain" />
        <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-12 lg:pt-20 top-1 left-32 lg:left-[420px]">
          Service Details
        </h1>
        
        <Image src={bannerLogo} alt="Service Image" width={330} height={30} className="absolute bottom-0 left-[35%] hidden lg:block" />
        
      </div>
      <div className="my-10 mx-6  grid grid-cols-1 lg:grid-cols-3 gap-6 border">
        <div className="lg:col-span-2 col-span-1 border">
          <div className="bg-gray-900">
          <Image src={image} alt="Service Image" width={500} height={300} className=" w-full h-[450px] opacity-50" />
            
          </div>
          <p className="text-black py-4 ml-2"><span className="font-bold">Description:</span> {description}
          Our service center is able to fix all types of problems regarding your Laptop and Notebook. Our employees are highly trained and has lots of experience fixing laptops and notebooks. We provide hardware and software support for your required laptop or notebook. There are numerous types of hardware supports that we specialize on. We able to fix any kind of power disturbances or charging problems. We also look at the internal problems like unstable BIOS laptop or notebook hanging problem, slow or crashed windows and even install windows if required. We are also able to repair the broken lid of a laptop or notebook and replace one or both of the broken hinges with either metal or plastic hinges. If there is any type of display malfunction or the display is dead, then we provide new display ribbon or plex cable for your display. 
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-2 p-10 space-y-4 rounded-xl text-black bg-gradient-to-r from-[#FEF8F7] to-[#F6F7FF] border-t-4 border-blue-950 hover:border-orange-600">
              <h2 className="text-2xl font-bold">Instant Car Services</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
            </div>
            <div className="col-span-2 p-10 space-y-4 rounded-xl text-black bg-gradient-to-r from-[#FEF8F7] to-[#F6F7FF] border-t-4 border-blue-950 hover:border-orange-600">
              <h2 className="text-2xl font-bold">24/7 Quality Service</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
            </div>
            <div className="col-span-2 p-10 space-y-4 rounded-xl text-black bg-gradient-to-r from-[#FEF8F7] to-[#F6F7FF] border-t-4 border-blue-950 hover:border-orange-600">
              <h2 className="text-2xl font-bold">Easy Customer Service</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
            </div>
            <div className="col-span-2 p-10 space-y-4 rounded-xl text-black bg-gradient-to-r from-[#FEF8F7] to-[#F6F7FF] border-t-4 border-blue-950 hover:border-orange-600">
              <h2 className="text-2xl font-bold">Quality Cost Service</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
            </div>
            
          </div>
        </div>
        <div className="col-span-1">
        <div className="bg-blue-950 mx-6 p-6 rounded-xl space-y-4  text-left text-white">
        {/* <Image src={delivaryLogo} alt="Service Image" width={50} height={30} className="mx-auto" />
            <h1>Timely Delivery</h1> */}
            <h1 className="text-2xl font-bold">Service: {title}</h1>
            <p className="xl">Price: {price} $</p>
        <Link href={"#"}>
                <button className="btn mt-6 bg-gradient-to-r from-[#f2b076] to-[#f24004] w-full p-4 rounded-md text-white text-center">
                  Proceed Checkout
                </button>
              </Link>
          </div>
          <div className="bg-gradient-to-r from-[#FEF8F7] to-[#F6F7FF]">
            <div className="p-8 space-y-4">
              <h1 className="text-2xl font-bold text-black">Services</h1>
              <p className="bg-blue-100 text-black hover:bg-blue-950 hover:text-white p-4 flex justify-between items-center">
                Full Car Repair
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>
              <p className="bg-blue-100 text-black hover:bg-blue-950 hover:text-white p-4 flex justify-between items-center ">
                Engine Repair
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>
              <p className="bg-blue-100 text-black hover:bg-blue-950 hover:text-white p-4 flex justify-between items-center ">
                Automatic Services
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>
              <p className="bg-blue-100 text-black hover:bg-blue-950 hover:text-white p-4 flex justify-between items-center ">
                Engine Oil Change
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>
              <p className="bg-blue-100 text-black hover:bg-blue-950 hover:text-white p-4 flex justify-between items-center ">
                Battery Charge
                <span>
                  <FaArrowRightLong className="text-orange-400" />
                </span>
              </p>

             
            </div>
            </div>
            <div className="bg-blue-950 mx-6 rounded-xl space-y-4 pt-6 pb-10 text-center text-white">
            <Image src={PcLogo} alt="Service Image" width={50} height={30} className="mx-auto" />
            <h2 className="text-2xl font-bold">PC Repair Pros</h2>
            <p>Need Help? We Are Here <br />
            To Help You</p>
            <div className=" relative py-6 space-y-3 bg-white rounded-xl mx-6">
              <h3 className="text-xl text-black font-bold"><span className="text-orange-600">PC Repair</span> Special</h3>
              <p className="text-black pb-2">Save up to <span className="text-orange-600">60% off</span></p>
              <div className="absolute px-6 py-2 rounded-xl text-white bg-orange-600 left-20 -bottom-5">
                  Get A Quote
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceDetails;