import { useState } from "react";
import { useSelector } from "react-redux";

export function Profile() {
	const { user } = useSelector((state) => state.auth);
	console.log(user);
	const [editModal, setEditModal] = useState(false);

	return (
		<div className={`profile-container w-2/4  md:w-full md:mx-4`}>
			<div className='profile-input bg-white flex items-start p-4 rounded-xl gap-4 my-8 flex-wrap'>
				<img src='https://pbs.twimg.com/profile_images/1494970975942688770/mVmFT4P__400x400.jpg' className='h-20 rounded-full' />

				<div className='grow'>
					<div className='flex justify-between mb-2'>
						<div>
							<p className='text-xl font-bold mr-2 cursor-pointer'>Chaitanya Chhikara</p>
							<p className='text-sm text-gray-400 cursor-pointer'>@ChhikaraBRUH</p>
						</div>
						<button className='px-2 py-1 rounded-md font-semibold text-gray-500 hover:bg-gray-100  ring-1 ring-gray-500 ring-inset self-start'>
							Edit Profile
						</button>
					</div>

					<p className='text-gray-500 font-semibold mb-2'>This is sample bio.</p>
					<div className='flex text-gray-500 font-semibold gap-8 mb-2 '>
						<span>12 Posts</span>
						<span>32 Followers</span>
						<span>24 Following</span>
					</div>
					<div className='text-gray-500 text-xs font-semibold'>
						<a href='https://bruh.dev' className='text-violet-600 hover:underline decoration-1' target='_blank'>
							https://bruh.dev
						</a>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-6'>
				<div className='bg-white p-4 rounded-xl flex'>
					<img src='https://pbs.twimg.com/profile_images/1494970975942688770/mVmFT4P__400x400.jpg' className='h-12 rounded-full' />
					<div className='post-container px-4 grow'>
						<div className='flex items-center justify-between mb-2'>
							<div>
								<span className='font-semibold mr-2 cursor-pointer'>Chaitanya Chhikara</span>
								<span className='text-sm text-gray-400 cursor-pointer'>@ChhikaraBRUH</span>
							</div>

							<div className='rounded-full px-3 py-0.5 bg-gray-200 cursor-pointer relative' onClick={() => setEditModal(!editModal)}>
								<i className='text-sm fa-solid fa-ellipsis-vertical opacity-60' />

								{editModal && (
									<ul className='dropdown absolute m-0 text-sm px-1 py-2 rounded-lg top-8 right-4 bg-white w-36 gap-1'>
										<li className='hover:bg-slate-200 flex items-center  px-3 py-1 rounded-lg'>
											<i className='fa-regular fa-pen-to-square mr-2 ' />
											Edit
										</li>
										<li className='hover:bg-slate-200 flex items-center px-3 py-1 rounded-lg'>
											<i className='fa-solid fa-trash mr-2' />
											Delete
										</li>
									</ul>
								)}
							</div>
						</div>

						<div>
							<p className='text-gray-500'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptas provident fugiat consequuntur cum tenetur laborum
								a ipsam quod quisquam qui et molestiae commodi placeat aliquid deserunt molestias perspiciatis reiciendis!
							</p>
						</div>

						<div className='flex my-4 gap-4'>
							<div className='cursor-pointer'>
								<i className='fa-solid fa-thumbs-up mr-1' />
								<span className='text-gray-500'>Like</span>
							</div>
							<div className='cursor-pointer'>
								<i className='fa-solid fa-bookmark mr-1' />
								<span className='text-gray-500'>Bookmark</span>
							</div>
						</div>

						<div className='profile-comment flex gap-3 my-4'>
							<i className='text-3xl fa-solid fa-circle-user cursor-pointer' />
							<div className='self-center border-solid border border-gray-400 grow flex space-between items-center rounded-md px-2 py-1'>
								<input className='grow focus:outline-none' placeholder='Write your comment' />
								<p className='text-sm text-violet-500 cursor-pointer font-semibold'>POST</p>
							</div>
						</div>

						<div className='flex gap-3 my-4'>
							<i className='text-3xl fa-solid fa-circle-user cursor-pointer' />
							<div className='bg-slate-200 rounded-2xl py-2 px-3'>
								<span className='text-sm font-semibold mr-2 cursor-pointer'>Chaitanya Chhikara</span>
								<p className='text-sm text-gray-500'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus autem quia officia soluta tempore
									architecto fugit nulla dolor.
								</p>
							</div>
						</div>

						<div className='flex gap-3 my-4'>
							<i className='text-3xl fa-solid fa-circle-user cursor-pointer' />
							<div className='bg-slate-200 rounded-2xl py-2 px-3'>
								<span className='text-sm font-semibold mr-2 cursor-pointer'>Chaitanya Chhikara</span>
								<p className='text-sm text-gray-500'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil pariatur natus autem quia officia.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
