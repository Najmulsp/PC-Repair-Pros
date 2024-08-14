"use client";
import Image from "next/image";
import registerLogo from "../../../public/assets/logo/register logo.png"
import Link from "next/link";

const Register = () => {

    const handleRegister = async (e) =>{
        e.preventDefault();
       
        const  name = e.target.name.value;
        const  email = e.target.email.value;
        const  password = e.target.password.value;
        const newUser={name, email, password}
        console.log(newUser)
		const res = await fetch("/register/api", {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-Type": "application/json"
			}
		  });
    }
	
	// console.log(res);
	// if(res.status === 200){
	// 	e.target.reset()
	// }


    return (
        <div>
                          {/* Register section */}
            <section
			style={{
				backgroundImage: `url('/assets/background/bg image.webp')`,
				backgroundRepeat: "no-repeat", backgroundSize: "cover",
			  }}
			className=" dark:text-gray-800">
	<div className="container flex flex-col justify-center items-center ite p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Image src={registerLogo} height={500} width={500} alt="Register logo" className=""/>
		</div>

		<div className="w-full max-w-md mr-6 p-8 mb-10 space-y-3 rounded-xl border border-orange-500 text-white">
	<h1 className="text-2xl font-bold text-center">Register</h1>
    <p className="text-sm text-center">Register to access your account</p>
	<form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block ">Name</label>
			<input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border rounded-md border-orange-300  bg-transparent focus:border-orange-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="User Email" className="block ">Email</label>
			<input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border rounded-md border-orange-300 bg-transparent focus:border-orange-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block ">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md border-orange-300 bg-transparent focus:border-orange-600" />
			
		</div>
		<button type="submit" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-r from-[#f2b076] to-[#f24004] dark:text-gray-50">Register</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm ">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6">Already have an account?
		<Link rel="noopener noreferrer" href="/login" className="underline font-bold"> Login</Link>
	</p>
</div>
	</div>
</section>
        </div>
    );
};

export default Register;