import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserPost, editUserPost } from "../postSlice";
import "./Modal.css";
import { closePostModal } from "./postModalSlice";

export function Modal() {
	const dispatch = useDispatch();
	const { postModal, postInfo } = useSelector((state) => state.postModal);

	const [input, setInput] = useState("");

	useEffect(() => {
		if (postInfo && postInfo.content) {
			setInput(postInfo.content);
		}
	}, [postInfo]);

	const postHandler = () => {
		postInfo
			? dispatch(
					editUserPost({
						...postInfo,
						content: input,
					})
			  )
			: dispatch(
					addUserPost({
						content: input,
					})
			  );
		setInput("");
		dispatch(closePostModal());
	};

	const { user } = useSelector((state) => state.auth);

	return (
		<div className={`modal-container justify-center items-center fixed ${postModal ? "flex" : "hidden"}`}>
			<div className='modal-container-main flex flex-col gap-4 p-4 rounded-xl w-1/4 md:w-4/5 '>
				<div className='flex justify-between'>
					<div className='flex items-center gap-4'>
						<img src={user?.profilePic} className='h-8 rounded-full' alt={user?.userHandler} />
						<p className='font-bold text-lg text-purple-600'>{user?.firstName}</p>
					</div>
					<i
						className='text-2xl fa-solid fa-xmark cursor-pointer'
						onClick={() => {
							dispatch(closePostModal());
							setInput("");
						}}
					/>
				</div>
				<div>
					<textarea
						className='w-full h-52 py-4 px-3 rounded-lg focus:outline-none'
						placeholder="What's on your mind..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</div>

				<div className='bg-white rounded-lg px-1 py-1'>
					<button
						className={`px-4 py-1 w-full rounded-lg bg-violet-600 text-white font-bold hover:bg-violet-500  ${
							input.length < 1 && "hover:cursor-not-allowed"
						}`}
						disabled={input.length < 1 ? true : false}
						onClick={() => postHandler()}>
						Post
					</button>
				</div>
			</div>
		</div>
	);
}
