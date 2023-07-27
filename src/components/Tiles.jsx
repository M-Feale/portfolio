import { styled } from "styled-components";

const Tiles = () => {
	return (
		<MainContainer>
			<Tile1>
				<TileTitle>Purpose</TileTitle>
				<TileText>Practice and Learn Object-Oriented-Programing with a Horizontal Dodging Game</TileText>
			</Tile1>
			<Tile2>
				<TileTitle>Objectives</TileTitle>
				<TileText>Make the game end when player collides with enemy</TileText>
                <TileText>Add game functionality and progression</TileText>
                <TileText>Customize the design</TileText>
			</Tile2>
			<Tile3>
				<TileTitle>Process - Functionality</TileTitle>
				<TileText>Researched the code base to acquire a satisfactory understanding</TileText>
                <TileText>Refined collision logic for a robust X-axis and Y-axis hitbox</TileText>
                <TileText>Implemented a life and level system</TileText>
                <TileText>Added vertical movement for protagonist</TileText>
			</Tile3>
			<Tile4>
				<TileTitle>Process - Game Experience</TileTitle>
				<TileText>Enhanced gaming experience by adding player animation during collisions</TileText>
                <TileText>Added start and reset buttons for fast and easy launch</TileText>
                <TileText>Bonified game interaction with a scoreboard for lives and game over state.</TileText>
                <TileText>Updated starting position to convey new functionality</TileText>
			</Tile4>
			<Tile5>
				<TileTitle>Process - Design</TileTitle>
				<TileText>Developed several Javascript sprite animations for player character and enemies</TileText>
                <TileText>Redesigned background and gameboard for a more pleasing visual experience</TileText>
                <TileText>Finalised visual aesthetics and overall game synergy </TileText>
			</Tile5>
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
    " tile3 tile3 tile3 tile4 tile4 tile4 tile4 tile4 "
    ;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 10px 0;
`;

const Tile1 = styled.div`
    grid-area: tile1;
    background-color: var(--secondary-color);
    color: var(--tertiary-color);
    padding: 10px ;
    border-radius: 5px;
    border: 2px solid var(--tertiary-color)
`;

const Tile2 = styled.div`
    grid-area: tile2;
`;

const Tile3 = styled.div`
    grid-area: tile3;
`;

const Tile4 = styled.div`
    grid-area: tile4;
`;

const Tile5 = styled.div`
    grid-area: tile5;
`;


const TileTitle = styled.p`
    font-family: var(--heading-font-family);
    color: var(--secondary-color);
    background-color: var(--tertiary-color);
    font-size: 30px;
    margin: 15px 0;
`;

const TileText = styled.p`
    font-family: var(--copy-font-family);
    margin: 5px 0;
    line-height: 125%;
    color: var(--tertiary-color);
`;

export default Tiles;
