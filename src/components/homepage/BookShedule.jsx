import Image from "next/image";
import service1 from "../../../public/assets/about section/about-us-4.1.png";
import icon1 from "../../../public/assets/logo/shape-16.png";

const BookShedule = () => {
    return (
        <div>
            <section className=" p-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
			<div className="space-y-2 text-center py-6">
        <p className="flex text-orange-500 items-center mx-auto  justify-center pt-2 gap-3">
              <Image src={icon1} width={40} height={40} alt="icon" />
              BOOK A SCHEDULE
              <Image src={icon1} width={40} height={40} alt="icon" />
            </p>
			<p className="text-4xl mx-auto w-full lg:w-5/12 font-bold dark:text-gray-600">Schedule Expert Repairs Instantly</p>
		</div>
	<div className="container  mx-auto flex flex-col lg:flex-row items-center gap-6">
        <div>
		<Image src={service1} width={400} height={600} alt="icon" className="rounded-xl"/>
		</div>
                                    {/* form */}
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full">
					<label htmlFor="name" className="text-sm">Name</label>
					<input id="name" type="text" placeholder="Your Name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-orange-500 dark:border-gray-300 text-black dark:text-white bg-slate-200 dark:bg-slate-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Your Email" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-orange-500 dark:border-gray-300 text-black dark:text-white bg-slate-200 dark:bg-slate-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Phone</label>
					<input id="phone" type="number" placeholder="Your Phone Number" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-orange-500 dark:border-gray-300 text-black dark:text-white bg-slate-200 dark:bg-slate-700" />
				</div>
				<div className="col-span-full">
					<label htmlFor="date" className="text-sm">Booking Date</label>
					<input id="date" type="date" placeholder="m/d/y" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-orange-500 dark:border-gray-300 text-black dark:text-white bg-slate-200 dark:bg-slate-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Computer/Laptop/Tab</label>
					<input id="phone" type="number" placeholder="Select Device" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-orange-500 dark:border-gray-300 text-black dark:text-white bg-slate-200 dark:bg-slate-700" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="phone" className="text-sm">Brand</label>
					<input id="phone" type="number" placeholder="Select Brand" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-orange-500 dark:border-gray-300 text-black dark:text-white bg-slate-200 dark:bg-slate-700" />
				</div>
				<div className="col-span-full">
					<label htmlFor="phone" className="text-sm">Brand</label>
					
                    <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-md w-full focus:ring focus:ring-opacity-75 focus:dark:ring-orange-500 text-black dark:text-white bg-slate-200 dark:bg-slate-700"></textarea>
				</div>
                <button className="hover-effect btn border border-[#f2b076] border-collapse text-white w-32 bg-gradient-to-r from-[#f2b076] to-[#f24004]">
                    Book Now
                </button>
			</div>
	</div>
</section>
        </div>
    );
};

export default BookShedule;