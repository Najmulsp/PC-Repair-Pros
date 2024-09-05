"use client";
import Image from "next/image";
import loginLogo from "../../../public/assets/logo/login logo.png";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import SocialLogin from "@/components/shared/SocialLogin";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Suspense, useState } from "react";
import loading from "../loading";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const router = useRouter();
	const searchParams = useSearchParams();
	const path = searchParams.get('redirect');


const handleLogin = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (res?.ok) {
    setIsLoggedIn(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully logged in",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      router.push(path ? path : "/");
      setIsLoggedIn(false);
    });
  }
};

	
    // const handleLogin = async (e) =>{
    //     e.preventDefault();
	// 	const email = e.target.email.value;
	// 	const password = e.target.password.value;
	// 	console.log(email, password)
	// 	const res = await signIn("credentials", {
	// 		email,
	// 		password,
	// 		redirect : true,
	// 		callbackUrl : path? path : '/'
	// 	});

	// 	if(res.status === 200){
	// 		Swal.fire({
	// 			position: "top-end",
	// 			icon: "success",
	// 			title: "You have successfully logged in",
	// 			showConfirmButton: false,
	// 			timer: 1500
	// 		  });
	// 		  router.push('/');
	// 		console.log(res)
	// 	}
    // };


    return (
		<Suspense fallback={loading}>
        <div>
                             {/* login section */}
            <section
			style={{
				backgroundImage: `url('/assets/background/bg image.webp')`,
				backgroundRepeat: "no-repeat", backgroundSize: "cover",
			  }}
			className=" dark:text-gray-800"
			>

	<div className="container flex flex-col justify-center items-center ite p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Image src={loginLogo} height={600} width={600} alt="login logo" />
		</div>

		<div className="w-full max-w-md mr-6 p-8 space-y-3 border border-orange-500 rounded-xl  text-white">
	<h1 className="text-2xl font-bold text-center">Login</h1>
    <p className="text-sm text-center ">Login to access your account</p>
	<form onSubmit={handleLogin}  className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="user email" className="block ">Email</label>
			<input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-md border-orange-300 bg-transparent focus:border-orange-600" />
		</div>
		<div className="relative space-y-1 text-sm">
			<label htmlFor="password" className="block ">Password</label>
			<input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md border-orange-300 bg-transparent  focus:border-gray-600" />
			<span
                className="text-2xl absolute top-8 right-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOutline></IoEyeOutline>
                ) : (
                  <IoEyeOffOutline />
                )}
              </span>
		</div>
		<button type="submit" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-[#f2b076] to-[#f24004] dark:text-gray-50">Login</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm ">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<SocialLogin></SocialLogin>
	<p className="text-xs text-center sm:px-6 ">Do not have an account?
		<Link rel="noopener noreferrer" href="/register" className="font-bold underline "> Register</Link>
	</p>
</div>
	</div>
</section>
        </div>
		</Suspense>
    );
};

export default Login;