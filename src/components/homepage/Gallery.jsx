import Image from "next/image";
import gallery1 from "../../../public/assets/gallery/gallery-1.webp";
import gallery2 from "../../../public/assets/gallery/gallery-2.webp";
import gallery3 from "../../../public/assets/gallery/gallery-3.webp";
import gallery4 from "../../../public/assets/gallery/gallery-4.webp";
import gallery5 from "../../../public/assets/gallery/gallery-5.webp";
import gallery6 from "../../../public/assets/gallery/gallery-6.webp";
import icon1 from "../../../public/assets/logo/shape-16.png";
import { GiStarShuriken } from "react-icons/gi";

const Gallery = () => {
    return (
        <div className="bg-gradient-to-r from-[#FEF8F7] to-[#F6F7FF]">
            <div className="max-w-6xl py-6 pb-12 mx-auto ">

            
            <p className="flex items-center mx-auto  justify-center pt-2 gap-3">
                <Image src={icon1} width={40} height={40} alt="icon" />
                OUR GALLERY
                <Image src={icon1} width={40} height={40} alt="icon" />
              </p>
            <h1 className="text-4xl mx-auto w-full lg:w-5/12 text-center font-bold py-6">Digital Delights: Journey Through Our Gallery</h1>
            
            <div className="grid grid-cols-8 gap-4 ">
                <div className="main-container col-span-8 lg:col-span-4">
                <Image src={gallery1} width={700} height={700} alt="galley image1" className="image rounded-xl"/>
                    <div className="overlay">
                    <GiStarShuriken className="text-4xl"/>
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-2">
                <Image src={gallery2} width={400} height={400} alt="galley image2" className="image rounded-xl"/>
                    <div className="overlay">
                    <GiStarShuriken className="text-4xl"/>
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-2">
                <Image src={gallery3} width={400} height={400} alt="galley image3" className="image rounded-xl"/>
                    <div className="overlay">
                    <GiStarShuriken className="text-4xl"/>
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-2">
                <Image src={gallery4} width={400} height={400} alt="galley image4" className="image rounded-xl"/>
                    <div className="overlay">
                    <GiStarShuriken className="text-4xl"/>
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-2">
                <Image src={gallery5} width={400} height={400} alt="galley image5" className="image rounded-xl"/>
                    <div className="overlay">
                    <GiStarShuriken className="text-4xl"/>
                    </div>
                </div>
                <div className="main-container col-span-8 lg:col-span-4">
                <Image src={gallery6} width={700} height={700} alt="galley image6" className="image rounded-xl"/>
                    <div className="overlay">
                    <GiStarShuriken className="text-4xl"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Gallery;