import { styled } from "styled-components";

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
		isColorSwapped: true,
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
		isColorSwapped: false,
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

// isColorSwapped={tile.isColorSwapped}

const Tiles = () => {
	return (
		<MainContainer>
			{tilesNyanCat.map((tile) => {
                return (
                    <Tile key={tile.id} $tileGridId={tile.id} >
                        <TileTitle>
                            {tile.title}
                        </TileTitle>
                        {
                            tile.additionalText.map((additionalText, index) => {
                                return (
                                    <TileText key={additionalText[0] + index} >{additionalText}</TileText>
                                )
                            })
                        }
                    </Tile>
                )
            })}
			{/* <Tile1>
				<TileTitle1>Purpose</TileTitle1>
				<TileText1>
					Practice and Learn Object-Oriented-Programing with a
					Horizontal Dodging Game
				</TileText1>
			</Tile1>
			<Tile2>
				<TileTitle2>Objectives</TileTitle2>
				<TileText2>
					Make the game end when player collides with enemy
				</TileText2>
				<TileText2>Add game functionality and progression</TileText2>
				<TileText2>Customize the design</TileText2>
			</Tile2>
			<Tile3>
				<TileTitle3>Process - Functionality</TileTitle3>
				<TileText3>
					Researched the code base to acquire a satisfactory
					understanding
				</TileText3>
				<TileText3>
					Refined collision logic for a robust X-axis and Y-axis
					hitbox
				</TileText3>
				<TileText3>Implemented a life and level system</TileText3>
				<TileText3>Added vertical movement for protagonist</TileText3>
			</Tile3>
			<Tile4>
				<TileTitle4>Process - Game Experience</TileTitle4>
				<TileText4>
					Enhanced gaming experience by adding player animation during
					collisions
				</TileText4>
				<TileText4>
					Added start and reset buttons for fast and easy launch
				</TileText4>
				<TileText4>
					Bonified game interaction with a scoreboard for lives and
					game over state.
				</TileText4>
				<TileText4>
					Updated starting position to convey new functionality
				</TileText4>
			</Tile4>
			<Tile5>
				<TileTitle>Process - Design</TileTitle>
				<TileText>
					Developed several Javascript sprite animations for player
					character and enemies
				</TileText>
				<TileText>
					Redesigned background and gameboard for a more pleasing
					visual experience
				</TileText>
				<TileText>
					Finalised visual aesthetics and overall game synergy
				</TileText>
			</Tile5> */}
		</MainContainer>
	);
};

const MainContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(8, minmax(0, 1fr));
	grid-template-rows: repeat(5, minmax(0, 1fr));
	grid-template-areas:
		" tile1 tile1 tile2 tile2 tile2 tile5 tile5 tile5 "
		" tile1 tile1 tile2 tile2 tile2 tile5 tile5 tile5 "
		" tile3 tile3 tile3 . . tile5 tile5 tile5 "
		" tile3 tile3 tile3 tile4 tile4 tile4 tile4 tile4 "
		" tile3 tile3 tile3 tile4 tile4 tile4 tile4 tile4 ";
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	margin: 10px 0;
`;

const Tile = styled.div`
	grid-area: ${(props) => props.$tileGridId};
	background-color: var(--secondary-color); //${(props) => props.isColorSwapped ?  "var(--secondary-color)" : "var(--tertiary-color)" } ;//var(--secondary-color); //var(--tertiary-color);
	padding: 10px;
	border-radius: 5px;
`;


const TileTitle = styled.p`
	font-family: var(--heading-font-family);
	color: var(--secondary-color); //${(props) => props.isColorSwapped ? "var(--secondary-color)" : "var(--tertiary-color)" }; //var(--secondary-color); //var(--tertiary-color);
	background-color: var(--tertiary-color); //${(props) => props.isColorSwapped ? "var(--tertiary-color)" : "var(--primary-color)" }; //var(--tertiary-color); //var(--primary-color);
	font-size: 30px;
	margin: 15px 0;
`;

const TileText = styled.p`
	font-family: var(--copy-font-family);
	margin: 10px 0;
  padding-left: 20px;
	line-height: 125%;
	color: var(--tertiary-color); //var(--secondary-color);
`;


// const Tile4 = styled.div`
// 	grid-area: tile4;
//     border: 2px solid var(--tertiary-color);
//     padding: 10px;
// 	border-radius: 5px;
//     background-color: var(--secondary-color);
// `;

// const TileTitle4 = styled.p`
// 	font-family: var(--heading-font-family);
// 	/* color: ${(props) => (props.color ? `blue` : `red`)}; */
// 	color: var(--primary-color);
// 	background-color: var(--tertiary-color);
// 	font-size: 30px;
// 	margin: 15px 0;
// `;

// const TileText4 = styled.p`
// 	font-family: var(--copy-font-family);
// 	margin: 5px 0;
// 	line-height: 125%;
// 	color: var(--tertiary-color);
// `;

// const Tile5 = styled.div`
// 	grid-area: tile5;
//     border: 2px solid var(--tertiary-color);
//     padding: 10px;
// 	border-radius: 5px;
// `;



// const TileTitle1 = styled.p`
// 	font-family: var(--heading-font-family);
// 	/* color: ${(props) => (props.color ? `blue` : `red`)}; */
// 	color: var(--secondary-color);
// 	background-color: var(--tertiary-color);
// 	font-size: 30px;
// 	margin: 15px 0;
// `;

// const TileText1 = styled.p`
// 	font-family: var(--copy-font-family);
// 	margin: 5px 0;
// 	line-height: 125%;
// 	color: var(--tertiary-color);
// `;

// const Tile2 = styled.div`
// 	grid-area: tile2;
// 	background-color: var(--tertiary-color);
// 	padding: 10px;
// 	border-radius: 5px;
// 	border: 2px solid var(--secondary-color);
// `;

// const TileTitle2 = styled.p`
// 	font-family: var(--heading-font-family);
// 	/* color: ${(props) => (props.color ? `blue` : `red`)}; */
// 	color: var(--tertiary-color);
// 	background-color: var(--secondary-color);
// 	font-size: 30px;
// 	margin: 15px 0;
// `;

// const TileText2 = styled.p`
// 	font-family: var(--copy-font-family);
// 	margin: 5px 0;
// 	line-height: 125%;
// 	color: var(--primary-color);
// `;

// const Tile3 = styled.div`
// 	grid-area: tile3;
// 	padding: 10px;
// 	border-radius: 5px;
// 	border: 2px solid var(--secondary-color);
//     background-color: var(--tertiary-color);
// `;

// const TileTitle3 = styled.p`
// 	font-family: var(--heading-font-family);
// 	/* color: ${(props) => (props.color ? `blue` : `red`)}; */
// 	color: var(--tertiary-color);
// 	background-color: var(--primary-color);
// 	font-size: 30px;
// 	margin: 15px 0;
// `;

// const TileText3 = styled.p`
// 	font-family: var(--copy-font-family);
// 	margin: 5px 0;
// 	line-height: 125%;
// 	color: var(--secondary-color);
// `;

export default Tiles;
