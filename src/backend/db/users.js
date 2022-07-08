import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "adarshbalika@gmail.com",
		userHandler: "adarshbalika",
		password: "password",
		bio: "This is a sample bio.",
		link: "https://adarshbalika.netlify.app",
		profilePic: "https://pbs.twimg.com/profile_images/1525696264364507136/HsQgVOfP_400x400.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Chaitanya",
		lastName: "Chhikara",
		username: "chaitanya@gmail.com",
		userHandler: "chaitanya",
		password: "password",
		bio: "Learning web dev right now.",
		link: "https://bruh.dev",
		profilePic: "https://pbs.twimg.com/profile_images/1494970975942688770/mVmFT4P__400x400.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
