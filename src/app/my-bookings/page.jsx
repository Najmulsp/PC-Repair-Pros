"use client";
import Image from "next/image";
import bannerLogo from "../../../public/assets/logo/details page logo.png";
import banner1 from "../../../public/assets/banner/details page image1.jpg";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import Link from "next/link";

const MyBookings = () => {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState([]);

  const loadData = async () => {
    const res = await fetch(
      `https://pc-repair-pros.vercel.app/my-bookings/api/${session?.user?.email}`
    );
    const data = await res.json();
    setBookings(data?.myBookings);
  };

  useEffect(() => {
    if (session?.user?.email) {
      loadData();
    }
  }, [session?.user?.email,]);

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(
          `https://pc-repair-pros.vercel.app/my-bookings/api/handleBooking/${id}`, 
          { method: "DELETE" }
        );
        const result = await response.json();
  
        if (result?.res?.deletedCount > 0) {
          loadData();
          Swal.fire({
            title: "Deleted!",
            text: "Your order has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the order. It may not exist.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Error deleting booking:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while deleting the order.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="container mx-auto pt-4 h-content">
      {/* banner */}
      <div className="relative w-full max-h-96 dark:bg-gray-950 bg-white">
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
        <p className="text-xl lg:text-2xl absolute text-white text-center pt-14 lg:pt-36 top-1 left-20 lg:left-[400px]">
          You Can <span className="text-red-400">Delete</span> or <span className="text-orange-500">Update</span> Your Order
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
      <div className="w-full lg:w-4/5 my-10 p-4 bg-gray-700 mx-auto">
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="text-white space-x-6">
                <th>Sl/No</th>
                <th>User Name</th>
                <th>Service</th>
                <th>Booking Date</th>
                <th>Price</th>
                <th className="pl-12">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, index) => (
                <tr key={booking._id}>
                  <th className="pl-6">{index + 1}</th>
                  <td>{session?.user?.name}</td>
                  <td>{booking.title}</td>
                  <td>{booking.date}</td>
                  <th>{booking.price} $</th>
                  <td className="flex gap-3 text-2xl">
                    <button
                      onClick={() => handleDelete(booking?._id)}
                      className="btn bg-rose-700 hover:bg-rose-800"
                    >
                      <RiDeleteBin6Fill className="text-white text-xl border-collapse" />
                    </button>

                    <Link href={`/my-bookings/update-booking/${booking?._id}`}>
                      <button className="btn bg-orange-600 hover:bg-orange-800">
                        <FaEdit className="text-white text-xl border-collapse" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;




// "use client";
// import Image from "next/image";
// import bannerLogo from "../../../public/assets/logo/details page logo.png";
// import banner1 from "../../../public/assets/banner/details page image1.jpg";
// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import Swal from "sweetalert2";
// import Link from "next/link";

// const MyBookings = () => {
//   const session = useSession();
// const [bookings, setBookings] = useState([]);

//   const loadData = async () => {
//     const res = await fetch(
//       `https://pc-repair-pros.vercel.app/my-bookings/api/${session?.data?.user?.email}`
//     );
//     const data = await res.json();
//     setBookings(data?.myBookings);
//   };

//   useEffect(() => {
//     loadData();
//   });

//   const handleDelete = async (id) => {
//     const confirmation = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });
  
//     if (confirmation.isConfirmed) {
//       try {
//         const response = await fetch(
//           `https://pc-repair-pros.vercel.app/my-bookings/api/handleBooking/${id}`, 
//           { method: "DELETE" }
//         );
//         const result = await response.json();
//         console.log(result);
  
//         if (result?.res?.deletedCount > 0) {
//           loadData();
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your order has been deleted.",
//             icon: "success",
//           });
//         } else {
//           Swal.fire({
//             title: "Error!",
//             text: "Failed to delete the order. It may not exist.",
//             icon: "error",
//           });
//         }
//       } catch (error) {
//         console.error("Error deleting booking:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "An error occurred while deleting the order.",
//           icon: "error",
//         });
//       }
//     }
//   };



//   return (
//     <div className="container mx-auto pt-4 h-content">
//       {/* banner */}
//       <div className="relative w-full max-h-96  dark:bg-gray-950 bg-white">
//         <Image

// // data-aos="zoom-in"
// // data-aos-duration="2000"
// // data-aos-delay="1000"
//           src={banner1}
//           alt="Service Image"
//           width={1300}
//           height={100}
//           className="overflow-hidden relative object-contain"
//         />
//         <div className="absolute inset-0 bg-gray-950 opacity-60"></div>{" "}
//         <h1 className="text-2xl lg:text-5xl absolute font-bold text-white text-left pt-4 lg:pt-20 top-1 left-40 lg:left-[460px]">
//           My Bookings
//         </h1>
//         <p className="text-xl lg:text-2xl absolute text-white text-center pt-14 lg:pt-36 top-1 left-20 lg:left-[400px]">
//           You Can <span className="text-red-400">Delete</span> or <span className="text-orange-500">Update</span> Your Order
//         </p>
//         <Image
//         // data-aos="zoom-in"
//         // data-aos-duration="2000"
//         // data-aos-delay="1000"
//           src={bannerLogo}
//           alt="Service Image"
//           width={330}
//           height={30}
//           className="absolute bottom-0 left-[35%] hidden lg:block"
//         />
//       </div>
//       {/* table */}
//       <div
//       // data-aos="zoom-in"
//       // data-aos-duration="2000"
//       // data-aos-delay="1200"
//       className="w-full lg:w-4/5 my-10 p-4 bg-gray-700 mx-auto ">
//         <div className="overflow-x-auto">
//           <table className="table w-full border">
//             {/* head */}
//             <thead>
//               <tr className="text-white space-x-6">
//                 <th>Sl/No</th>
//                 <th>User Name</th>
//                 <th>Service</th>
//                 <th>Booking Date</th>
//                 <th>Price</th>
//                 <th className="pl-12">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 bookings?.map((booking, index) =>
//                   <tr key={booking._id}>
//                   <th className="pl-6">{index+1}</th>
//                   <td>{session?.data?.user?.name}</td>
//                   <td>{booking.title}</td>
//                   <td>{booking.date}</td>
//                   <th>{booking.price} $</th>
//                   <td className="flex gap-3 text-2xl">
//                     <button 
//                     onClick={()=> handleDelete(booking?._id)}
//                     className="btn bg-rose-700 hover:bg-rose-800"
//                     ><RiDeleteBin6Fill className="text-white text-xl border-collapse"/></button>
                    
//                     <Link href={`/my-bookings/update-booking/${booking?._id}`}><button
//                     className="btn bg-orange-600 hover:bg-orange-800"
//                     ><FaEdit className="text-white text-xl border-collapse"/></button></Link>
//                   </td>
//                 </tr>
//                 )
//               }
              
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyBookings;
