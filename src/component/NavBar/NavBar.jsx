import React from "react";
import logo from "../../assets/snkrs-logo.png";

export function NavBar() {
	return (
		<div className='hidden sticky top-0 bg-white px-3 py-1 md:block'>
			<div className='flex justify-center items-center '>
				<img className='h-12' src={logo} />
				<p className='text-violet-500 text-3xl ml-4 font-bold'>SNKRSGram</p>
			</div>
		</div>
	);
}
