"use client";
import Image from "next/image";
import { FaWrench } from "react-icons/fa6";
import icon1 from "../../../public/assets/logo/shape-16.png";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Details",
  description : "Service Details Page"
}

const Services =  () => {
  const [services, setServices] = useState([]);
    useEffect(()=>{
      fetch('services/api/allServices')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(error => console.log(error))
    },[])
  
  return (
    <>
      <section id="services-section" className="py-6 sm:py-12 bg-white dark:bg-slate-900 text-gray-700 dark:text-white">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
        <p 
        data-aos-duration="3000"
        data-aos-delay="3200"
        data-aos="fade-right"
        className="flex text-orange-500 items-center mx-auto  justify-center pt-2 gap-3">
              <Image src={icon1} width={40} height={40} alt="icon" />
              OUR SERVICES
              <Image src={icon1} width={40} height={40} alt="icon" />
            </p>
			<p
      data-aos-duration="3000"
      data-aos-delay="3500"
      data-aos="fade-left"
      className="text-2xl lg:text-4xl mx-auto w-full lg:w-5/12 font-bold dark:text-gray-600">Fast and Reliable Repairs of Every Need</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
    {
      services?.map((service) =>
        <div
        data-aos="flip-left"
         key={service._id}
          className="my-card box-border max-w-xs mx-auto overflow-hidden shadow-md dark:bg-gray-700 dark:text-gray-200">
        <div className="min-h-52 relative">
        <div className="cardImage min-h-52 w-fit">
        <Image src={service.image} alt="Service Image" width="500" height="500" className="object-cover" />
        </div>
        <FaWrench className="absolute left-36 -bottom-5 text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-red-100 w-10 h-10 mt-3 p-2 hover:text-white text-rose-500"/>
        </div>
        <div className="flex text-content flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide">
            {service.title}
            </h2>
            <p className="">
            {service.description.slice(0,150)}...
            </p>
          </div>
          <Link href={`/services/${service._id}`}>
          <button
            type="button"
            className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-[#f2b076] to-[#f24004] dark:text-gray-50"
          >
            Read more
          </button></Link>
        </div>
      </div>
      )
    }

		</div>
	</div>
</section>
    </>
  );
};


export default Services;
