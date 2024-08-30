import Image from "next/image";
import gallery1 from "../../../public/assets/gallery/gallery-1.webp";
import gallery2 from "../../../public/assets/gallery/gallery-2.webp";
import gallery3 from "../../../public/assets/gallery/gallery-3.webp";
import gallery4 from "../../../public/assets/gallery/gallery-4.webp";
import gallery5 from "../../../public/assets/gallery/gallery-5.webp";
import gallery6 from "../../../public/assets/gallery/gallery-6.webp";
import icon1 from "../../../public/assets/logo/shape-16.png";
import { IoMdSearch } from "react-icons/io";

const Gallery = () => {
    return (
        <div className="bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
            <div className="max-w-6xl py-6 pb-12 mx-auto ">

            
            <p
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos="fade-right"
            className="flex items-center mx-auto  justify-center pt-2 gap-3">
                <Image src={icon1} width={40} height={40} alt="icon" />
                OUR GALLERY
                <Image src={icon1} width={40} height={40} alt="icon" />
              </p>
            <h1
            data-aos-duration="1000"
            data-aos-delay="1200"
            data-aos="fade-left"
            className="text-4xl mx-auto w-full lg:w-5/12 text-center font-bold py-6">Digital Delights: Journey Through Our Gallery</h1>
            
            <div className="grid grid-cols-8 gap-4 ">
                <div className="main-container col-span-8 lg:col-span-4">
                <Image
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos="fade-right"
                src={gallery1} width={700} height={700} alt="galley image1" className="image rounded-xl"/>
                    <div className="overlay">
                    <IoMdSearch className="text-4xl text-white ml-56 lg:ml-64"/>
                    </div>
                </div>
                <div
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos="fade-down"
                className="main-container col-span-8 lg:col-span-2">
                <Image src={gallery2} width={400} height={400} alt="galley image2" className="image rounded-xl"/>
                    <div className="overlay">
                    <IoMdSearch className="text-4xl text-white ml-56 lg:ml-32"/>
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-2">
                <Image
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos="fade-left"
                src={gallery3} width={400} height={400} alt="galley image3" className="image rounded-xl"/>
                    <div className="overlay">
                    <IoMdSearch className="text-4xl text-white ml-56 lg:ml-32"/>
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-2">
                <Image
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos="fade-right"
                src={gallery4} width={400} height={400} alt="galley image4" className="image rounded-xl"/>
                    <div className="overlay">
                    <IoMdSearch className="text-4xl text-white ml-56 lg:ml-32" />
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-2">
                <Image
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos="fade-up"
                src={gallery5} width={400} height={400} alt="galley image5" className="image rounded-xl"/>
                    <div className="overlay">
                    <IoMdSearch className="text-4xl text-white ml-56 lg:ml-32"/>
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-4">
                <Image
                data-aos-duration="1000"
                data-aos-delay="1400"
                data-aos="fade-left"
                src={gallery6} width={700} height={700} alt="galley image6" className="image rounded-xl"/>
                    <div className="overlay">
                    <IoMdSearch className="text-4xl text-white ml-56 lg:ml-64"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Gallery;