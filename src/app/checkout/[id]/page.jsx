"use client";
import Image from 'next/image';
import bannerLogo from "../../../../public/assets/logo/details page logo.png";
import banner1 from "../../../../public/assets/banner/details page image1.jpg";
import { getServiceDetails } from '@/app/session/getServices';
import { useState } from 'react';

const CheckoutPage = ({params}) => {

const [service, setService] = useState({});
const loadService = async () =>{
  const details = await getServiceDetails(params.id)
  setService(details.res)
}

  
  const {title, image, description, price, _id} = service || {};

    const handleBooking = async (e) =>{
      e.preventDefault();
        const name = e.target.name.value;
        const email = e.targetemail.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;
    }

    return (
        <div className="container mx-auto pt-4 h-content">
                  {/* banner */}
      <div className="relative w-full max-h-96  dark:bg-gray-950 bg-white">
      <Image src={banner1} alt="Service Image" width={1300} height={100} className="overflow-hidden relative object-contain" />
      <div className="absolute inset-0 bg-gray-950 opacity-60"></div>{" "}
        <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-40 lg:left-[420px]">
          Proceed Checkout
        </h1>
        <p className="text-xl lg:text-2xl absolute text-white text-center pt-12 lg:pt-36 top-1 left-36 lg:left-[480px]">Please Confirm Your Order</p>
        <Image src={bannerLogo} alt="Service Image" width={330} height={30} className="absolute bottom-0 left-[35%] hidden lg:block" />
      </div>      
                            {/* form */}
        <form onSubmit={handleBooking} className="w-3/5 my-10 p-10 bg-slate-700 mx-auto grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Name</label>
					<input name="name" type="text" placeholder="Your Name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input name='email' type="email" placeholder="Your Email" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Phone</label>
					<input name="website" type="number" placeholder="Your Phone Number" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="message" className="text-sm">Message</label>
					<textarea id="message" placeholder="Your Message" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
				</div>  
        <button type='submit' className='btn col-span-full bg-gradient-to-r from-[#f2b076] to-[#f24004] '>Order Confirm</button>                 
			</form>                   
            
        </div>
    );
};

export default CheckoutPage;