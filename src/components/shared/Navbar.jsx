import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { SiTimescale } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import logo from "../../../public/logo-black.png"
import Image from "next/image";



const Navbar = () => {
  return (
    <>
      {/* first navbar */}
      <header className="p-4 dark:bg-gray-100 flex flex-col lg:gap-16 lg:flex-row justify-between  dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          {/* location card 1 */}
          <div className="hidden sm:block">
            <div className="flex justify-center space-x-3">
              <div className=" flex items-center">
                <CiLocationOn className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-red-100 w-10 h-10 mt-3 p-2 hover:text-white text-rose-500" />
              </div>

              <div className="">
                <p className="leading-tight font-bold pt-3">Location:</p>

                <small>2750 Quadra Street Victoria Road, New York, USA</small>
              </div>
            </div>
          </div>
          {/* working hours 2 */}
          <div className="hidden sm:block">
            <div className="flex justify-center space-x-3">
              <div className="  flex items-center">
                <SiTimescale className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-red-100 w-10 h-10 mt-3 p-2 hover:text-white text-rose-500" />
              </div>

              <div className="">
                <p className="leading-tight font-bold pt-3">Working Hours:</p>

                <small>Mon - Fri: 9:30 AM - 5:30 PM</small>
              </div>
            </div>
          </div>
          {/* urgent support 3*/}
          <div className="flex  px-4 rounded-full bg-orange-100 w-full lg:w-auto  justify-center space-x-3">
            <div className=" rounded-full bg-rose-500 h-10 mt-3 p-2 flex items-center">
              <LuPhoneCall className="text-2xl  text-white" />
            </div>

            <div className="">
              <p className="leading-tight text-rose-500 font-bold pt-3">
                Urgent Need Support?
              </p>

              <small>+123-456-7898 +123 456-7899</small>
            </div>
          </div>
        </div>
        {/* follows us container */}

        <div className="flex justify-center  lg:w-2/5 items-center md:space-x-4">
          <div className="grid items-center grid-flow-col gap-4">
            <p className="font-bold pt-1">Follow us on:</p>
            <div className="flex items-center">
              <FaFacebookF className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-red-100 w-10 h-10 mt-3 p-2 hover:text-white text-rose-500" />
            </div>
            <div className="flex items-center">
              <FaXTwitter className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-red-100 w-10 h-10 mt-3 p-2 hover:text-white text-rose-500" />
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-red-100 w-10 h-10 mt-3 p-2 hover:text-white text-rose-500" />
            </div>
            <div className=" flex items-center">
              <TiSocialLinkedin  className="text-xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-red-100 w-10 h-10 mt-3 p-2 hover:text-white text-rose-500" />
            </div>
          </div>
        </div>
      </header>
                      {/* second navbar */}
      <div className="navbar bg-white text-black">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">
            <Image height="30" width="30" alt="PC Repair Logo" src={logo}></Image>
            PC <span className="text-red-400">Repair</span> Pros
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn border border-[#f2b076] border-collapse text-white w-32 bg-gradient-to-r from-[#f2b076] to-[#f24004] rounded-full">Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
