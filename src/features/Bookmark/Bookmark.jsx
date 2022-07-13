import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SinglePost } from "../Home/SinglePost";

export function Bookmark() {
	const { allPosts } = useSelector((state) => state.post);
	const { user } = useSelector((state) => state.auth);

	const [bookmark, setBookmark] = useState(allPosts);

	useEffect(() => {
		setBookmark(allPosts.filter((post) => post.bookmark.some((bookmarkPost) => bookmarkPost.username === user.username) === true));
	}, [allPosts]);

	return (
		<div className='w-2/4  md:w-full md:mx-4'>
			<div className='flex flex-col gap-6'>
				{bookmark.length > 0 ? (
					bookmark.map((post) => <SinglePost key={post._id} post={post} />)
				) : (
					<p className='bg-white px-4 py-12 rounded-xl gap-4 text-center border-2 border-violet-500 font-semibold text-2xl'>
						No Bookmarks Added!
					</p>
				)}
			</div>
		</div>
	);
}
