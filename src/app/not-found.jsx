import Image from "next/image";
import errorImg from "../../public/assets/logo/error_page.png"
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center my-6">
            <h1 className="text-6xl font-extrabold text-white bg-orange-500 p-2 mb-2">404</h1>
            <h2 className="text-2xl text-black dark:text-white">Page not found</h2>
            <p className="text-xl text-black dark:text-white">Go back to <Link href={"/"}><span className="font-bold text-orange-500 py-2">HOME</span></Link></p>
            <Image src={errorImg} width={500} height={300} alt="error" ></Image>
        </div>
    );
};

export default NotFound;