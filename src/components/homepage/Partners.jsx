import Image from "next/image";
import icon1 from "../../../public/assets/logo/shape-16.png";
import partner1 from "../../../public/assets/partner/partner-1.png";
import partner2 from "../../../public/assets/partner/partner-2.png";
import partner3 from "../../../public/assets/partner/partner-3.png";
import partner4 from "../../../public/assets/partner/partner-4.png";
import partner5 from "../../../public/assets/partner/partner-5.png";

const Partners = () => {
    return (
        <div>
            <section className=" bg-white dark:bg-zinc-900 text-gray-800 dark:text-white px-6 lg:px-0 ">
	<div className="container mx-auto p-4  space-y-2 text-center">
    <p
    data-aos-duration="1000"
    data-aos-delay="1000"
    data-aos="fade-right"
    className="flex text-orange-500 items-center mx-auto  justify-center pt-2 gap-3">
              <Image src={icon1} width={40} height={40} alt="icon" />
              PARTNERS
              <Image src={icon1} width={40} height={40} alt="icon" />
            </p>
		<p
        data-aos-duration="1000"
        data-aos-delay="1300"
        data-aos="fade-left"
        className="text-4xl mx-auto w-full lg:w-5/12 font-bold dark:text-gray-600">Proudly Backed By Years of  Trusted Service</p>
	</div>
	<div className="container pt-10 pb-16 mx-auto flex flex-wrap justify-around gap-4 ">
		<div className="">
        <Image
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos="fade-right"
        src={partner1} width={150} height={100} alt="partner image" />
		</div>
		<div className="">
        <Image
        data-aos-duration="1000"
        data-aos-delay="1200"
        data-aos="fade-down-right"
        src={partner2} width={150} height={100} alt="partner image" />
		</div>
		<div className="">
        <Image
        data-aos-duration="1000"
        data-aos-delay="1400"
        data-aos="zoom-in"
        src={partner3} width={150} height={100} alt="partner image" />
		</div>
		<div className="">
        <Image
        data-aos-duration="1000"
        data-aos-delay="1600"
        data-aos="fade-down-left"
        src={partner4} width={150} height={100} alt="partner image" />
		</div>
		<div className="">
        <Image
        data-aos-duration="1000"
        data-aos-delay="1800"
        data-aos="fade-left"
        src={partner5} width={150} height={100} alt="partner image" />
		</div>
		
		
	</div>
</section>
        </div>
    );
};

export default Partners;