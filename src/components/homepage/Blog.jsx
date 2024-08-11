import Image from "next/image";
import icon1 from "../../../public/assets/logo/shape-16.png";
import blog1 from "../../../public/assets/blog/blog-1.webp";
import blog2 from "../../../public/assets/blog/blog-2.webp";
import blog3 from "../../../public/assets/blog/blog-3.webp";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";

const Blog = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
        <p className="flex text-orange-500 items-center mx-auto  justify-center pt-2 gap-3">
              <Image src={icon1} width={40} height={40} alt="icon" />
              OUR BLOG
              <Image src={icon1} width={40} height={40} alt="icon" />
            </p>
			<p className="font-serif text-4xl font-bold dark:text-gray-600">The Digital Pulse: News & <br /> Updates</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			<article className="border border-orange-600 rounded-xl flex flex-col dark:bg-gray-50 dancing-up imageHover">
				<div className="w-10/12 mx-auto pt-8">
                <Image src={blog1} width={400} height={400} alt="blog1" className="roundHover"/>
				</div>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 pl-2 text-xl font-bold leading-snug">The Latest Trends in Cellphone Repairs: You Need to Know</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span className="flex gap-2 items-center"><MdOutlineDateRange className="text-2xl text-orange-500"/>August 1, 2024</span>
						<span className="flex gap-2 items-center"><BiCommentDetail className="text-2xl text-orange-500"/> No Comments</span>
					</div>
				</div>
			</article>
			<article className="border border-orange-600 rounded-xl flex flex-col  dark:bg-gray-50 dancing-up imageHover">
				
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 pl-2 text-xl font-bold leading-snug">The Latest Trends in Cellphone Repairs: You Need to Know</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span className="flex gap-2 items-center"><MdOutlineDateRange className="text-2xl text-orange-500"/>August 1, 2024</span>
						<span className="flex gap-2 items-center"><BiCommentDetail className="text-2xl text-orange-500"/> No Comments</span>
					</div>
				</div>
                <div className="w-10/12 mx-auto pb-8">
                <Image src={blog2} width={400} height={400} alt="blog1" className="roundHover2"/>
				</div>
			</article>
			<article className="border border-orange-600 rounded-xl flex flex-col dark:bg-gray-50 dancing-up imageHover">
				<div className="w-10/12 mx-auto pt-8">
                <Image src={blog3} width={400} height={400} alt="blog3" className="roundHover"/>
				</div>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 pl-2 text-xl font-bold leading-snug">The Latest Trends in Cellphone Repairs: You Need to Know</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span className="flex gap-2 items-center"><MdOutlineDateRange className="text-2xl text-orange-500"/>August 1, 2024</span>
						<span className="flex gap-2 items-center"><BiCommentDetail className="text-2xl text-orange-500"/> No Comments</span>
					</div>
				</div>
			</article>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;