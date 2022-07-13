import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/snkrs-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";

export function Login() {
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		(async () => {
			if (loginForm.email !== "" && loginForm.password !== "") {
				await dispatch(loginUser(loginForm));
			}
		})();
	}, [loginForm.email, loginForm.password]);

	const loginHandler = () => {
		setLoginForm((form) => ({
			...form,
			email: "chaitanya@gmail.com",
			password: "password",
		}));
	};

	const fillFormValue = (event, fieldName) => {
		const { value } = event.target;
		setLoginForm((prev) => ({ ...prev, [fieldName]: value }));
	};

	useEffect(() => token && navigate("/"), [token]);

	return (
		<div className='w-full h-screen text-gray-800  px-4 py-6 flex flex-col justify-center sm:py-12'>
			<div className='w-2/5 py-3 sm:max-w-xl mx-auto text-center md:w-3/4'>
				<div className='mt-4 bg-white shadow-md sm:rounded-lg text-left border-t-8 rounded-2xl border-violet-600'>
					<div className='flex justify-center items-center pt-8 md:hidden gap-2'>
						<img className='h-12' src={logo} />
						<p className='text-violet-500 title text-3xl font-bold'>SNKRSGram</p>
					</div>

					<div className='px-12 py-4'>
						<span className='text-2xl flex justify-center font-semibold border-b-2 border-violet-500 pb-2'>Log In</span>

						<div className='pt-8'>
							<label className='block font-semibold'>Username or Email</label>
							<input
								type='text'
								placeholder='Username or Email'
								className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-500 rounded-md'
								value={loginForm.email}
								onChange={(e) => fillFormValue(e, "email")}
								required
							/>

							<label className='block mt-3 font-semibold'>Password</label>
							<input
								type='password'
								placeholder='Password'
								className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-violet-500 rounded-md'
								value={loginForm.password}
								onChange={(e) => fillFormValue(e, "password")}
								required
							/>

							<div>
								<button
									className='font-semibold w-full my-6 bg-violet-500 text-white py-2 px-6 rounded-lg hover:bg-violet-600'
									onClick={() => loginHandler()}>
									Guest Login
								</button>
							</div>

							<div className='text-center font-semibold'>
								<Link to='/sign-up'>
									<p className='cursor-pointer hover:underline'>Create New Account</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
