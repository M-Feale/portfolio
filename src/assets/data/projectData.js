export const aboutMeTile = [
	{
		id: "tile1",
		title: "Credentials",
		isColorSwapped: false,
		additionalText: [
			"MERN Stack in Fall 2023", "MongoDB, Express.js, React, Node.js",
		],
	},
	{
		id: "tile2",
		title: "Background",
		isColorSwapped: true,
		additionalText: [
			"With my Health Science education, I have an insasiable desire for learning and understanding every facet of my different endeavours.",
			"My academic and professional career helped me develop and hone my communication and teamwork skills.",
			"Changing career is a challenge that I faced head on with determination and drive with the goal of working in a field where my hands-on approach and my thirst for problem-solving would find a perfect match.",
		],
	},
	{
		id: "tile3",
		title: "Hobbies",
		isColorSwapped: false,
		additionalText: [
			"As an active person, I spend my summer playing softball and switch to crosscountry skiing during the winter.",
			"I also have a passion for knitting, reading and videogames.",
			"With diverse interests, I embrace every experience life has to offer with a smile and fire in my heart.",
		],
	},
];

const tilesNyanCat = [
	{
		id: "tile1",
		title: "Purpose",
		isColorSwapped: false,
		additionalText: [
			"Practice and Learn Object-Oriented-Programing with a Horizontal Dodging Game",
		],
	},
	{
		id: "tile2",
		title: "Objectives",
		isColorSwapped: true,
		additionalText: [
			"Make the game end when player collides with enemy",
			"Add game functionality and progression",
			"Customize the design",
		],
	},
	{
		id: "tile3",
		title: "Process - Functionality",
		isColorSwapped: false,
		additionalText: [
			"Researched the code base to acquire a satisfactory understanding",
			"Refined collision logic for a robust X-axis and Y-axis hitbox",
			"Implemented a life and level system",
			"Added vertical movement for protagonist",
		],
	},
	{
		id: "tile4",
		title: "Process - Game Experience",
		isColorSwapped: true,
		additionalText: [
			"Enhanced gaming experience by adding player animation during collisions",
			"Added start and reset buttons for fast and easy launch",
			"Bonified game interaction with a scoreboard for lives and game over state",
			"Updated starting position to convey new functionality",
		],
	},
	{
		id: "tile5",
		title: "Process - Design",
		isColorSwapped: false,
		additionalText: [
			"Developed several Javascript sprite animations for player character and enemies",
			"Redesigned background and gameboard for a more pleasing visual experience",
			"Finalised visual aesthetics and overall game synergy",
		],
	},
];

const tilesMyCookingManager = [
	{
		id: "tile1",
		title: "Purpose",
		isColorSwapped: true,
		additionalText: [
			"Showcase my ability to develop a Full-Stack application to be warranted a diploma in Full-Stack Web Development from Concordia University"
		]
	},
	{
		id: "tile2",
		title: "Motivation",
		isColorSwapped: false,
		additionalText: [
			"I created this project because I needed a tool to keep track of all the recipes I made in the past and allow me to save notes and other useful information about each recipe.",
			" The goal was to streamline my cooking planning all in the same application without having to juggle my browser bookmarks, opening a dozen of similar sounding recipes in different tabs and trying to remember if I had tried each specific recipe before and if I liked them."
		]
	},
	{
		id: "tile3",
		title: "Technologies - Back end",
		isColorSwapped: true,
		additionalText: [
			" Node.js, Express.js, MongoDB, grabity package, SendGrid API "
		]
	},
	{
		id: "tile4",
		title: "Technologies - Front end",
		isColorSwapped: false,
		additionalText: [
			"Vite, React.js, Auth0, react-rating package, styled-components package, react-icons package"
		]
	},
	{
		id: "tile5",
		title: "Challenges",
		isColorSwapped: true,
		additionalText: [
			"Creating a smooth and intuitive user experience in a feature-rich application",
			"Learning how to use the SendGrid API ",
			"Integrating authentication with Auth0 ",
			" Reading and updating fields in a complex data structure in MongoDB"
		]
	}
]


import gameLoop from "../images/gameLoop.gif"
import myCookingManagerGif from "../images/myCookingManagerGif.gif"

export const projectData = [
	{
		projectTitle: "My Cooking Manager",
		imageSrc: myCookingManagerGif,
		imageAlt: "Gif of a tour of an app where recipe urls are inputed and details are fetched and modified",
		tiles: tilesMyCookingManager,
	},
	{
		projectTitle: "Legend of Burger - A NyanCat to the Past",
		imageSrc: gameLoop,
		imageAlt: "Gif of a 2D dodging game with a Legend of Zelda: A Link to the Past theme",
		tiles: tilesNyanCat,
	}
];
