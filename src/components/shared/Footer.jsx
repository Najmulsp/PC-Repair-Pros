import Image from "next/image";
import logo from "../../../public/logo-black.png";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiMonitorArrowUpFill } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#0D003B] text-neutral-content p-10">
        <nav>
          <div className=" flex items-center gap-6 justify-center">
          <Image width="30" height="30" alt="PC Repair Logo" src={logo}></Image>
          <h6 className="text-white text-2xl footer-title">PC Repair Pros</h6>
          </div>
          <p>Our skilled technicians are dedicated to restoring your <br /> devices to their optimal functionality.</p>
        </nav>
        <nav>
        <div className="flex justify-center space-x-3">
              <div className=" flex items-center">
                <CiLocationOn className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-slate-600 w-12 h-12 mt-3 p-2 hover:text-white text-rose-500" />
              </div>

              <div className="">
                <p className="leading-tight font-bold pt-3">Location:</p>

                <small>2750 Quadra Street Victoria Road, New York, USA</small>
              </div>
              </div>
        </nav>
        <nav>
            <p className="font-bold pt-1">Follow us on:</p>
        <div className="grid items-center grid-flow-col gap-4">
            <div className="flex items-center">
              <FaFacebookF className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-slate-600 w-10 h-10 mt-3 p-2 text-slate-200" />
            </div>
            <div className="flex items-center">
              <FaXTwitter className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-slate-600 w-10 h-10 mt-3 p-2 text-slate-200" />
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-2xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-slate-600 w-10 h-10 mt-3 p-2 text-slate-200" />
            </div>
            <div className=" flex items-center">
              <TiSocialLinkedin  className="text-xl transition-all delay-75 rounded-full hover:bg-rose-500  bg-slate-600 w-10 h-10 mt-3 p-2 text-slate-200" />
            </div>
          </div>
        </nav>
      </footer>
                        {/* second footer */}
      <footer className="footer bg-[#0D003B] text-base-content p-10">
        <nav>
        <div className="flex  px-4 rounded-full  w-full lg:w-auto  justify-center space-x-3">
            <div className=" rounded-full  h-10 mt-3 p-2 flex items-center">
              <FcGoogle  className="text-4xl  text-white" />
            </div>

            <div className="">
              <p className="leading-tight flex items-center gap-2 text-[#FB8E28] font-bold pt-3">
                4.6 
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              </p>

              <p className="text-white">Based on 40 reviews</p>
            </div>
          </div>
        <div className="flex  px-4 rounded-full  w-full lg:w-auto  justify-center space-x-3">
            <div className=" rounded-full bg-[#F15523] h-10 mt-3 p-2 flex items-center">
              <LuPhoneCall className="text-2xl  text-white" />
            </div>

            <div className="">
              <p className="leading-tight text-[#F15523] font-bold pt-3">
                Urgent Need Support?
              </p>

              <p className="text-white">+123-456-7898 +123 456-7899</p>
            </div>
          </div>
        
        </nav>
        <nav>
          <h6 className="footer-title text-white">Quick Links</h6>
          <a className="link link-hover text-white">Home One</a>
          <a className="link link-hover text-white">About Us</a>
          <a className="link link-hover text-white">Services</a>
          <a className="link link-hover text-white">Contact Us</a>
          <a className="link link-hover text-white">Our Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Our Services</h6>
          <a className="link link-hover text-white">Laptop Repair</a>
          <a className="link link-hover text-white">Tablets Repair</a>
          <a className="link link-hover text-white">Apple Products Repair</a>
          <a className="link link-hover text-white">Data Recovery</a>
          <a className="link link-hover text-white">Computer repair</a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe to Our Newsletter</h6>
          <fieldset className="form-control w-80">
            
            <div className="join">
              <input
                type="text"
                placeholder="Your Email Address"
                className="input rounded-l-full input-bordered join-item"
              />
              <button className="btn border border-[#f2b076] border-collapse text-white w-32 bg-gradient-to-r from-[#f2b076] to-[#f24004] rounded-full join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
                        {/* third footer */}
      <footer className="footer bg-[#4A416B] text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          
          <p>Copyright © {new Date().getFullYear()} PC Repair Pros - All right reserved by <span className="text-red-400">EnvyTheme</span></p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end justify-center items-center">
        Terms & Conditions | Privacy Policy
        <PiMonitorArrowUpFill className="text-4xl text-[#F15523]"/>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
