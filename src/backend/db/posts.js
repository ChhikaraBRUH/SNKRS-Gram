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
			"We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "adarshbalika@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "guest1@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaitanya@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "guest2@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "chaitanya@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"The Earth is the only world known so far to harbor life. There is nowhere else, at least in the near future, to which our species could migrate. Visit, yes. Settle, not yet. Like it or not, for the moment the Earth is where we make our stand.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "guest3@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "guest4@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we've ever known.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "guest5@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		content:
			"Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every superstar, every supreme leader, every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "guest1@gmail.com",
		bookmark: [],
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
