import { styled } from "styled-components";
import { tilesNyanCat } from "../assets/projectData";

const Tiles = () => {
	return (
		<MainContainer>
			{tilesNyanCat.map((tile) => {
                return (
                    <Tile key={tile.id} $tileGridId={tile.id} $isColorSwap={tile.isColorSwap}>
                        <TileTitle>
                            {tile.title}
                        </TileTitle>
                        {
                            tile.additionalText.map((additionalText, index) => {
                                return (
                                    <TileText key={additionalText[0] + index} $isColorSwap={tile.isColorSwap} >{additionalText}</TileText>
                                )
                            })
                        }
                    </Tile>
                )
            })}
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
	background-color: ${(props) => props.$isColorSwap ?  "var(--secondary-color)" : "var(--tertiary-color)" } ;//var(--secondary-color); //var(--tertiary-color);
	padding: 10px;
	border-radius: 5px;
`;


const TileTitle = styled.p`
	font-family: var(--heading-font-family);
	color: ${(props) => props.$isColorSwap ? "var(--secondary-color)" : "var(--tertiary-color)" }; //var(--secondary-color); //var(--tertiary-color);
	background-color:${(props) => props.$isColorSwap ? "var(--tertiary-color)" : "var(--primary-color)" }; //var(--tertiary-color); //var(--primary-color);
	font-size: 30px;
	margin: 15px 0;
`;

const TileText = styled.p`
	font-family: var(--copy-font-family);
	margin: 10px 0;
  padding-left: 20px;
	line-height: 125%;
	color: ${(props) => props.$isColorSwap ? "var(--tertiary-color)" : "var(--secondary-color)" }; //var(--tertiary-color); //var(--secondary-color);
`;

export default Tiles;
