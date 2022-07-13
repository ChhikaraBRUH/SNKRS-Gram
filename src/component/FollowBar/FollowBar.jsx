import React from "react";

export function FollowBar() {
	return (
		<div className='follow-container flex flex-col w-1/4 p-4 bg-white rounded-2xl h-max sticky top-8 gap-4 md:hidden'>
			<p className='font-semibold'>Explore new people</p>

			<div className='flex items-star border-solid border-t-2 border-gray-300 pt-4 gap-1'>
				<img src='https://pbs.twimg.com/profile_images/1494970975942688770/mVmFT4P__400x400.jpg' className='h-8 rounded-full self-center' />
				<div className='flex grow justify-between gap-1'>
					<div>
						<p className='font-semibold cursor-pointer'>Chaitanya Chhikara</p>
						<p className='text-xs text-gray-400 '>@ChhikaraBRUH</p>
					</div>
					<div className='items-center'>
						<button className='font-semibold cursor-pointer text-white bg-violet-600 p-1 rounded-2xl hover:opacity-80'>Follow</button>
					</div>
				</div>
			</div>

			<div className='flex items-star border-solid border-t-2 border-gray-300 pt-4 gap-1'>
				<img src='https://pbs.twimg.com/profile_images/1494970975942688770/mVmFT4P__400x400.jpg' className='h-8 rounded-full self-center' />
				<div className='flex grow justify-between gap-1'>
					<div>
						<p className='font-semibold cursor-pointer'>Chaitanya Chhikara</p>
						<p className='text-xs text-gray-400'>@ChhikaraBRUH</p>
					</div>
					<div className='items-center'>
						<button className='font-semibold  cursor-pointer text-white bg-violet-600 p-1 rounded-2xl hover:opacity-80'>Follow</button>
					</div>
				</div>
			</div>
		</div>
	);
}
