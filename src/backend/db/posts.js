import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius nunc nulla, ut elementum metus suscipit id. Pellentesque quis nulla eget lacus commodo consequat nec rutrum neque. Integer maximus nisi at tellus blandit cursus. Praesent maximus diam quis ipsum eleifend sagittis. Donec pharetra finibus turpis at ultricies. Nullam mauris ante, pretium ut orci vitae, imperdiet semper risus. Cras ultrices felis et elit dictum, sed vestibulum lectus sollicitudin. Praesent tempor convallis ligula, nec placerat tortor faucibus at.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "adarshbalika",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius nunc nulla, ut elementum metus suscipit id. Pellentesque quis nulla eget lacus commodo consequat nec rutrum neque. Integer maximus nisi at tellus blandit cursus. Praesent maximus diam quis ipsum eleifend sagittis. Donec pharetra finibus turpis at ultricies. Nullam mauris ante, pretium ut orci vitae, imperdiet semper risus. Cras ultrices felis et elit dictum, sed vestibulum lectus sollicitudin. Praesent tempor convallis ligula, nec placerat tortor faucibus at.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaitanya",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
