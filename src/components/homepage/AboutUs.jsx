import Image from "next/image";
import icon1 from "../../../public/assets/logo/shape-16.png";
import img1 from "../../../public/assets/about section/about-us-1.webp";
import img2 from "../../../public/assets/about section/about-us-2.webp";
import img3 from "../../../public/assets/about section/about-us-3.webp";
import img4 from "../../../public/assets/about section/about-us-4.webp";
import { GiAutoRepair } from "react-icons/gi";
import { ImStopwatch } from "react-icons/im";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";


const AboutUs = () => {
    return (
        <>
            <section id="about-section" className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
	<div className="container flex  gap-6 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div
		data-aos-duration="500"
		data-aos-delay="1000"
		data-aos="fade-right"
		className="grid grid-cols-2 box-border border-red-600 items-center justify-center ">
			
			<Image src={img1} alt="" width="400" height="400" className="rounded-r-full"></Image>
			<Image src={img2} alt="" width="400" height="400" className="rounded-l-full"></Image>
			<Image src={img3} alt="" width="400" height="400" className="rounded-r-full"></Image>
			<Image src={img4} alt="" width="400" height="400" className="rounded-l-full"></Image>
		</div>
					{/* text-container */}
		<div
		data-aos-duration="500"
		data-aos-delay="1200"
		data-aos="fade-left"
		className="flex lg:w-3/5 border-green-600 flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
		<p className="flex lg:ml-24 pb-2 text-orange-500 text-center items-center mx-auto  justify-start pt-2 gap-3">
              <Image src={icon1} width={40} height={40} alt="icon" />
              ABOUT US
              <Image src={icon1} width={40} height={40} alt="icon" />
            </p>
			<h1 className="text-2xl lg:text-4xl font-bold leading-none ">Empowering Your Devices: <span className="bg-gradient-to-r from-[#f2b076] to-[#f24004] bg-clip-text text-transparent">Crafting Solutions</span>
				 
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Welcome to PC Repair Pros, where technology meets expertise. With a passion for problem-solving and a dedication to exceptional service
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="grid grid-cols-2 gap-6 mb-10">
				<p className="flex font-bold items-center gap-2">
				<FaScrewdriverWrench className="text-4xl lg:text-3xl  text-orange-600 bg-orange-100 hover:text-white hover:bg-orange-600 w-16 h-16 p-2 rounded-lg"/>Expert Technicians
				</p>
				<p className="flex font-bold items-center gap-2">
				<GiAutoRepair className="text-4xl lg:text-3xl text-blue-700 bg-blue-100 hover:text-white hover:bg-blue-800 w-16 h-16 p-2 rounded-lg"/>Quality Repairs
				</p>
				<p className="flex font-bold items-center gap-2">
				<ImStopwatch className="text-4xl lg:text-3xl text-blue-700 bg-blue-100 hover:text-white hover:bg-blue-800 w-16 h-16 p-2 rounded-lg"/>Quick Turnaround
				</p>
				<p className="flex font-bold items-center gap-2">
				<FaPeopleCarry className="text-5xl lg:text-3xl text-orange-600  bg-orange-100 hover:text-white hover:bg-orange-600 w-16 h-16 p-2 rounded-lg"/>Expert Technicians
				</p>
			</div>
			<div>
				<p>Our mission is to provide reliable, efficient, and affordable repair services, ensuring that your devices are restored to optimal functionality. We understand the vital role technology plays in your daily life, and we are committed to keeping you connected.</p>
			</div>
		</div>
	</div>
</section>
        </>
    );
};

export default AboutUs;