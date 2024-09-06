"use client";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { SiTimescale } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import logo from "../../../public/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },  
  {
    id: 2,
    name: "My Bookings",
    path: "/my-bookings"
  }
]

const handleLogout = async () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "You have successfully logged out",
    showConfirmButton: false,
    timer: 1500
  });
  
  await new Promise((resolve) => setTimeout(resolve, 1500));
  signOut({ redirect: true, callbackUrl: "/" });
};

const Navbar = () => {
  const { data: session } = useSession();
  const { resolvedTheme, theme, setTheme } = useTheme()
  // const router = useRouter()
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <>
      {/* first navbar */}
      <header id="myHeader" className="p-4 bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-white flex flex-col lg:gap-16 lg:flex-row justify-between ">
        <div className="container flex justify-between h-16 mx-auto">
          {/* location card 1 */}
          <div className="hidden sm:block ">
            <div className="flex justify-center space-x-3">
              <div className=" flex items-center">
                <CiLocationOn className="text-2xl transition-all delay-75 rounded-full  bg-orange-100 hover:bg-orange-500  w-10 h-10 mt-3 p-2  text-orange-500 hover:text-white" />
              </div>

              <div className="">
                <p className="leading-tight font-bold pt-3">Location:</p>

                <small>2750 Quadra Street, New York, USA</small>
              </div>
            </div>
          </div>
          {/* working hours 2 */}
          <div className="hidden sm:block md:block">
            <div className="flex justify-center space-x-3">
              <div className="  flex items-center">
                <SiTimescale className="text-2xl transition-all delay-75 rounded-full hover:bg-orange-500  bg-orange-100 w-10 h-10 mt-3 p-2 hover:text-white text-orange-500" />
              </div>

              <div className="">
                <p className="leading-tight font-bold pt-3">Working Hours:</p>

                <small>Mon - Fri: (9:30 - 5:30) PM</small>
              </div>
            </div>
          </div>
          {/* urgent support 3*/}
          <div className="flex  px-4 rounded-full bg-orange-100 w-full lg:w-auto  justify-center space-x-3">
            <div className="rounded-full bg-orange-500 h-10 mt-3 p-2 flex items-center">
              <LuPhoneCall className="text-2xl  text-white" />
            </div>

            <div className="">
              <p className="leading-tight text-orange-500 font-bold pt-3">
                Urgent Need Support?
              </p>

              <small className="text-black">+123-456-7898</small>
            </div>
          </div>
        </div>
        {/* follows us container */}

        <div className="flex justify-center  lg:w-2/5 items-center md:space-x-4">
          <div className="grid items-center grid-flow-col gap-4">
            <p className="font-bold pt-1">Follow us on:</p>
            <div className="flex items-center">
              <FaFacebookF className="text-2xl transition-all delay-75 rounded-full hover:bg-orange-500  bg-orange-100 w-10 h-10 mt-3 p-2 hover:text-white text-orange-500" />
            </div>
            <div className="flex items-center">
              <FaXTwitter className="text-2xl transition-all delay-75 rounded-full hover:bg-orange-500  bg-orange-100 w-10 h-10 mt-3 p-2 hover:text-white text-orange-500" />
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-2xl transition-all delay-75 rounded-full hover:bg-orange-500  bg-orange-100 w-10 h-10 mt-3 p-2 hover:text-white text-orange-500" />
            </div>
            <div className=" flex items-center">
              <TiSocialLinkedin className="text-xl transition-all delay-75 rounded-full hover:bg-orange-500  bg-orange-100 w-10 h-10 mt-3 p-2 hover:text-white text-orange-500" />
            </div>
          </div>
        </div>
      </header>
      {/* second navbar */}
      <div className="navbar sticky top-0 opacity-80 z-10 max-w-7xl  bg-white dark:bg-gray-700 text-gray-800 dark:text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-slate-200 dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* {navItems} */}
              {
    navLinks?.map((link) => {
      return (
        <li key={link.id} className="py-2">
          <Link href={link.path}
          className={
            isActive(link.path)
              ? 'px-2 lg:px-4 py-2 rounded-lg bg-orange-500 font-bold text-white'
              : ''
          }
          >{link.name}</Link>
        </li>
      );
    })
  }
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2 lg:text-2xl font-bold font-serif">
            <Image
              id="rotateNavIcon"
              height={30}
              width={30}
              alt="PC Repair Logo"
              src={logo}
              className="hidden lg:block"
            ></Image>
            PC <span className="text-orange-500 font-bold font-serif">Repair</span> Pros
          </Link>
        </div>
                 {/* {navItems} */}
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">
          {
    navLinks?.map((link) => {
      return (
        <li key={link.id} className="px-2">
          <Link href={link.path}
          className={
            isActive(link.path)
              ? 'px-2 lg:px-4 py-2 rounded-lg bg-orange-500 font-bold text-white'
              : ''
          }
          >{link.name}</Link>
        </li>
      );
    })
  }
         
          </ul>
        </div>
        <div className="navbar-end">
        <button
        className="text-2xl mr-6"
        onClick={() =>{
          setTheme(resolvedTheme === "light" ? "dark" : "light")
        }}
        >
          {theme === "light" ? <BsFillMoonFill /> : "🔆"}
        </button>
          {
            session?
            <button
            onClick={handleLogout}
            className="hover-effect btn border border-[#f2b076] border-collapse text-white lg:w-32 bg-gradient-to-r from-[#f2b076] to-[#f24004]">
            Logout
            </button>
            :
            <Link href={"/login"}><button className="hover-effect z-50 btn border border-[#f2b076] border-collapse text-white lg:w-32 bg-gradient-to-r from-[#f2b076] to-[#f24004]">
            Login
          </button></Link>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
