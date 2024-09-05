"use client";
import Image from 'next/image';
import bannerLogo from "../../../../public/assets/logo/details page logo.png";
import banner1 from "../../../../public/assets/banner/details page image1.jpg";
import { getServiceDetails } from '@/app/session/getServices';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

const CheckoutPage = ({params}) => {
  const {data} = useSession();

const [service, setService] = useState({});
useEffect(() => {
  const loadService = async () => {
    const details = await getServiceDetails(params.id);
    setService(details.res);
  };
  
  loadService();
}, [params.id]);
// const loadService = async () =>{
//   const details = await getServiceDetails(params.id)
//   setService(details.res)
// }


// useEffect(()=>{
//   loadService()
// }, [loadService])
const {title, image, description, price, _id} = service || {};

    const handleBooking = async (e) =>{
      e.preventDefault();
        const name = data?.user?.name;
        const email = data?.user?.email;
        const price = e.target.price.value;
        const date = e.target.date.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const message = e.target.message.value;
      const newBookings = {
      ...service, name, email, price, date, phone, address, message
      }
      // console.log(newBookings)

      const res = await fetch('https://pc-repair-pros.vercel.app/checkout/api/new-booking', {
        method: 'POST',
        body: JSON.stringify(newBookings),
        headers: {
          "Content-Type": "application/json"
        }
      })
      Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Service booked successfully",
				showConfirmButton: false,
				timer: 1500
			  });
      e.target.reset()
    }
      
    return (
        <div className="container mx-auto pt-4 h-content">
                  {/* banner */}
      <div className="relative w-full max-h-96  dark:bg-gray-950 bg-white">
      <Image
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="1000"
      src={banner1} alt="Service Image" width={1300} height={100} className="overflow-hidden relative object-contain" />
      <div className="absolute inset-0 bg-gray-950 opacity-60"></div>{" "}
        <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-40 lg:left-[420px]">
          Proceed Checkout
        </h1>
        <p className="text-xl lg:text-2xl absolute text-white text-center pt-12 lg:pt-36 top-1 left-36 lg:left-[480px]">Please <span className='text-orange-400'>Confirm</span> Your Order</p>
        <Image
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
        src={bannerLogo} alt="Service Image" width={330} height={30} className="absolute bottom-0 left-[35%] hidden lg:block" />
      </div>      
                            {/* form */}
        <form onSubmit={handleBooking} className="w-3/5 my-10 p-10 bg-slate-700 mx-auto grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Name</label>
					<input name="name" type="text" defaultValue={data?.user?.name} className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input name='email' type="email" defaultValue={data?.user?.email} className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="price" className="text-sm">Price at $</label>
					<input name="price" readOnly type="number" defaultValue={price} className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="date" className="text-sm">Date</label>
					<input name="date" type="date" defaultValue={new Date().getDate()}  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Phone</label>
					<input name="phone" type="number" placeholder="Your Phone Number" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="address" className="text-sm">Address</label>
					<input name="address" type="text" placeholder="Your Location" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="message" className="text-sm">Message</label>
					<textarea name="message" placeholder="Your Message" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300"></textarea>
				</div>  
        <button type='submit' className='btn col-span-full bg-gradient-to-r from-[#f2b076] to-[#f24004] text-white'>Order Confirm</button>                 
			</form>                   
            
        </div>
    );
};

export default CheckoutPage;