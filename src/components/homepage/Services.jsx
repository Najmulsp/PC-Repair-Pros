import Image from "next/image";
import service1 from "../../../public/assets/service/laptop repair 2  .jpg";
import { FaWrench } from "react-icons/fa6";


const Services = () => {
  const servicesData = [
    {
      "id": 1,
      "image": "https://example.com/images/data-backup-recovery.jpg",
      "title": "Data Backup & Recovery",
      "description": "Secure and reliable solutions for backing up and recovering your important data. Protect your files from accidental loss and system failures."
    },
    {
      "id": 2,
      "image": "https://example.com/images/macbook-repair.jpg",
      "title": "Macbook Repair",
      "description": "Expert repair services for all Macbook models. From hardware issues to software glitches, we ensure your Macbook runs smoothly."
    },
    {
      "id": 3,
      "image": "https://example.com/images/battery-replace.jpg",
      "title": "Battery Replace",
      "description": "Fast and efficient battery replacement services for laptops and smartphones. Extend the life of your device with a new battery."
    },
    {
      "id": 4,
      "image": "https://example.com/images/laptop-repair.jpg",
      "title": "Laptop Repair",
      "description": "Comprehensive repair services for all laptop brands and models. We fix hardware, software, and connectivity issues to keep you productive."
    },
    {
      "id": 5,
      "image": "https://example.com/images/screen-replacement.jpg",
      "title": "Screen Replacement",
      "description": "Professional screen replacement services for laptops, tablets, and smartphones. Get your screen looking brand new again."
    },
    {
      "id": 6,
      "image": "https://example.com/images/virus-protection.jpg",
      "title": "Virus Protection",
      "description": "Protect your devices from malware and viruses. We provide antivirus installation and system cleaning services to secure your data."
    }
  ]


  return (
    <div>
      <div className="max-w-xs my-card rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="min-h-52 relative">
        <Image src={service1} alt="Service Image" width="400" height="500" className="cover cardImage"></Image>
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
  );
};


export default Services;
