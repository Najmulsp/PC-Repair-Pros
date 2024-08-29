"use client";
import Image from "next/image";
import bannerLogo from "../../../public/assets/logo/details page logo.png";
import banner1 from "../../../public/assets/banner/details page image1.jpg";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const MyBookings = () => {
  const session = useSession();
const [bookings, setBookings] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await res.json();
    setBookings(data?.myBookings);
  };

  useEffect(() => {
    loadData();
  }, [session]);

    const handleDelete = (id) =>{

    }





  return (
    <div className="container mx-auto pt-4 h-content">
      {/* banner */}
      <div className="relative w-full max-h-96  dark:bg-gray-950 bg-white">
        <Image
          src={banner1}
          alt="Service Image"
          width={1300}
          height={100}
          className="overflow-hidden relative object-contain"
        />
        <div className="absolute inset-0 bg-gray-950 opacity-60"></div>{" "}
        <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-40 lg:left-[460px]">
          My Bookings
        </h1>
        <p className="text-xl lg:text-2xl absolute text-white text-center pt-12 lg:pt-36 top-1 left-36 lg:left-[400px]">
          You Can Delete or Update Your Order
        </p>
        <Image
          src={bannerLogo}
          alt="Service Image"
          width={330}
          height={30}
          className="absolute bottom-0 left-[35%] hidden lg:block"
        />
      </div>
      {/* table */}
      <div className="w-3/5 my-10 p-4 bg-gray-700 mx-auto ">
        <div className="">
          <table className="table w-full border">
            {/* head */}
            <thead>
              <tr className="text-white space-x-6">
                <th>Sl/No</th>
                <th>User Name</th>
                <th>Service</th>
                <th>Booking Date</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                bookings?.map((booking, index) =>
                  <tr key={booking._id}>
                  <th>{index+1}</th>
                  <td>{session?.data?.user?.name}</td>
                  <td>{booking.title}</td>
                  <td>{booking.date}</td>
                  <th>{booking.price} $</th>
                  <td className="flex gap-3 text-2xl">
                    <button onClick={()=> handleDelete(booking?._id)}><RiDeleteBin6Fill className="text-red-700"/></button>
                    <button><FaEdit className="text-orange-500"/></button>
                  </td>
                </tr>
                )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
