import { NavLink } from "react-router-dom";
import "./MenuBar.css";
import logo from "../../assets/snkrs-logo.png";
import { logoutUser } from "../../features/Auth/authSlice";
import { openPostModal } from "../../features/Home/Modal/postModalSlice";
import { useDispatch } from "react-redux";
export function MenuBar() {
	const dispatch = useDispatch();
	return (
		<aside className={`aside-container flex flex-col w-1/4 md:mr-0 md:fixed md:bottom-0 md:z-30 md:w-full `}>
			<div className='sticky top-8 flex flex-col gap-8'>
				<header className='flex items-center font-bold gap-4 text-violet-500 md:hidden'>
					<img className='h-12' src={logo} />
					<p className='text-3xl title'>SNKRSGram</p>
				</header>

				<main className='pr-4 md:pr-0 md:my-1 md:flex md:justify-around md:text-2xl md:pt-2'>
					<li>
						<NavLink to='/' className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}>
							<i className='fa-solid fa-house-chimney mr-3 md:mr-0' />
							<span className='md:hidden'>FEED</span>
						</NavLink>
					</li>

					<li>
						<NavLink to='/explore' className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}>
							<i className='fa-solid fa-compass mr-3 md:mr-0' />
							<span className='md:hidden'>EXPLORE</span>
						</NavLink>
					</li>

					<li>
						<NavLink to='/bookmark' className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}>
							<i className='fa-solid fa-bookmark mr-3 md:mr-0' />
							<span className='md:hidden'>BOOKMARKS</span>
						</NavLink>
					</li>

					<li>
						<NavLink to='/profile' className={({ isActive }) => (isActive ? "aside-option active " : "aside-option")}>
							<i className='fa-solid fa-circle-user mr-3 md:mr-0' />
							<span className='md:hidden'>PROFILE</span>
						</NavLink>
					</li>

					<li
						className='aside-option'
						onClick={() => {
							dispatch(logoutUser());
						}}>
						<i className='fa-solid fa-arrow-right-from-bracket mr-3 md:mr-0' />
						<span className='md:hidden'>LOGOUT</span>
					</li>

					<li className='md:hidden'>
						<button
							className='w-full cursor-pointer text-white bg-violet-500 font-bold rounded-2xl py-2 hover:opacity-80'
							onClick={() => dispatch(openPostModal())}>
							POST
						</button>
					</li>
				</main>
			</div>
		</aside>
	);
}
