"use client";
import Image from 'next/image';
import bannerLogo from "../../../../../public/assets/logo/details page logo.png";
import banner1 from "../../../../../public/assets/banner/details page image1.jpg";
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

const UpdateBooking = ({params}) => {
  const {data} = useSession();

const [booking, setBooking] = useState({});

const loadBooking = async () =>{
  const bookingData = await fetch(`http://localhost:3000/my-bookings/api/handleBooking/${params.id}`);
  const data = await bookingData.json();
  console.log(data.res);
  setBooking(data.res)
}

    const handleUpdateBooking = async (e) =>{
      e.preventDefault();
        const date = e.target.date.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const message = e.target.message.value;
      const updateData = {
      date, phone, address, message
      }
      

      const res = await fetch(`http://localhost:3000/my-bookings/api/handleBooking/${params.id}`, {
        method: 'PATCH',
        body: JSON.stringify(updateData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if(res.status === 200){
        Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your order updated successfully",
				showConfirmButton: false,
				timer: 1500
			  });
      e.target.reset()
      }
}
  useEffect(()=>{
    loadBooking()
  })
      
    return (
        <div className="container mx-auto pt-4 h-content">
                  {/* banner */}
      <div className="relative w-full max-h-96  dark:bg-gray-900 bg-white">
      <Image
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="1000"
      src={banner1} alt="Service Image" width={1300} height={100} className="overflow-hidden relative object-contain" />
      <div className="absolute inset-0 bg-gray-950 opacity-60"></div>{" "}
        <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-40 lg:left-[420px]">
          Update Booking
        </h1>
        <p className="text-xl lg:text-2xl absolute text-white text-center pt-12 lg:pt-36 top-1 left-36 lg:left-[480px]">Please Confirm Your Order</p>
        <Image
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
        src={bannerLogo} alt="Service Image" width={330} height={30} className="absolute bottom-0 left-[35%] hidden lg:block" />
      </div>      
                            {/* form */}
        <form
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1200"
        onSubmit={handleUpdateBooking} className="w-3/5 my-10 p-10 bg-slate-700 mx-auto grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

				<div className="col-span-full sm:col-span-3">
					<label htmlFor="service name" className="text-sm">Service Name</label>
					<input name="service" type="text" defaultValue={booking?.title}  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="date" className="text-sm">Date</label>
					<input name="date" type="date" defaultValue={booking?.date}  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Phone</label>
					<input name="phone" type="number" defaultValue={booking?.phone} className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="address" className="text-sm">Address</label>
					<input name="address" type="text" defaultValue={booking?.address} className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="message" className="text-sm">Message</label>
					<textarea name="message" defaultValue={booking?.message} className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 text-black focus:dark:ring-orange-600 dark:border-gray-300"></textarea>
				</div>  
        <button type='submit' className='btn col-span-full bg-gradient-to-r from-[#f2b076] to-[#f24004] '>Submit Update</button>                 
			</form>                   
            
        </div>
    );
};

export default UpdateBooking;