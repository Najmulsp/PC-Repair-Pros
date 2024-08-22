import Image from "next/image";
import service1 from "../../../public/assets/service/laptop repair 2  .jpg";
import { FaWrench } from "react-icons/fa6";
import icon1 from "../../../public/assets/logo/shape-16.png";

const Services = () => {
  const servicesData = [
    {
      "id": 1,
      "image": "https://i.ibb.co/D9pbtsn/1697899484267.png",
      "title": "Data Backup & Recovery",
      "description": "Secure and reliable solutions for backing up and recovering your important data. Protect your files from accidental loss and system failures."
    },
    {
      "id": 2,
      "image": "https://i.ibb.co/p1p65Yy/1706505826619.jpg",
      "title": "Macbook Repair",
      "description": "Expert repair services for all Macbook models. From hardware issues to software glitches, we ensure your Macbook runs smoothly."
    },
    {
      "id": 3,
      "image": "https://i.ibb.co/ZMykztm/laptop-repair-3.jpg",
      "title": "Battery Replace",
      "description": "Fast and efficient battery replacement services for laptops and smartphones. Extend the life of your device with a new battery."
    },
    {
      "id": 4,
      "image": "https://i.ibb.co/QrY4cRp/laptop.webp",
      "title": "Laptop Repair",
      "description": "Comprehensive repair services for all laptop brands and models. We fix hardware, software, and connectivity issues to keep you productive."
    },
    {
      "id": 5,
      "image": "https://i.ibb.co/bFCHDYF/laptop-screen-repairing-250x250.webp",
      "title": "Screen Replacement",
      "description": "Professional screen replacement services for laptops, tablets, and smartphones. Get your screen looking brand new again."
    },
    {
      "id": 6,
      "image": "https://i.ibb.co/fxx8vSx/computer-virus-protection.webp",
      "title": "Virus Protection",
      "description": "Protect your devices from malware and viruses. We provide antivirus installation and system cleaning services to secure your data."
    }
  ]


  return (
    <div className="">
      
      <section className="py-6 sm:py-12 bg-gradient-to-r from-[#FEF8F7] to-[#F6F7FF] dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
        <p className="flex text-orange-500 items-center mx-auto  justify-center pt-2 gap-3">
              <Image src={icon1} width={40} height={40} alt="icon" />
              OUR SERVICES
              <Image src={icon1} width={40} height={40} alt="icon" />
            </p>
			<p className=" text-4xl mx-auto w-full lg:w-5/12 font-bold dark:text-gray-600">Fast and Reliable Repairs of Every Need</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
    <div className="my-card max-w-xs border overflow-hidden shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="min-h-52 relative">
        <div className="cardImage w-fit">
        <Image src={service1} alt="Service Image" width="350" height="400" ></Image>
        </div>
        <FaWrench className="absolute left-36 -bottom-5 text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-red-100 w-10 h-10 mt-3 p-2 hover:text-white text-rose-500"/>
        </div>
        <div className="flex text-content flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide">
            Data Backup & Recovery
            </h2>
            <p className="">
            We working hard to build a reputation of customer satisfaction through technical excellence and friendly staff
            </p>
          </div>
          <button
            type="button"
            className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-[#f2b076] to-[#f24004] dark:text-gray-50"
          >
            Read more
          </button>
        </div>
      </div>
			
			
		</div>
	</div>
</section>
    </div>
  );
};


export default Services;
