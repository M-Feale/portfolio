import { styled } from "styled-components";

const Tiles = ({ gridConfig, tileData }) => {
	return (
		<Wrapper>
			<MainContainer $gridConfig={gridConfig}>
				{tileData.map((tile) => {
					return (
						<Tile
							key={tile.id}
							$tileGridId={tile.id}
							$isColorSwapped={tile.isColorSwapped}
						>
							<TileTitle>{tile.title}</TileTitle>
							{tile.additionalText.map(
								(additionalText, index) => {
									return (
										<TileText
											key={additionalText[0] + index}
											$isColorSwapped={tile.isColorSwapped}
										>
											{additionalText}
										</TileText>
									);
								}
							)}
						</Tile>
					);
				})}
			</MainContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

const MainContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(
		${(props) => props.$gridConfig.columns},
		minmax(65px, 1fr)
	);
	grid-template-rows: repeat(
		${(props) => props.$gridConfig.rows},
		minmax(0, 1fr)
	);
	grid-template-areas: ${(props) => props.$gridConfig.gridTemplateAreas};
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	margin: 10px 0;
	min-width: 100%;
	align-items: flex-start;
	@media screen and (max-width: 426px) {
		flex-wrap: wrap;
		display: flex;
		flex-direction: column;
	}
`;

const Tile = styled.div`
	grid-area: ${(props) => props.$tileGridId};
	background-color: ${(props) =>
		props.$isColorSwapped
			? "var(--secondary-color)"
			: "var(--tertiary-color)"}; //var(--secondary-color); //var(--tertiary-color);
	padding: 10px;
	border-radius: 5px;

	@media screen and (max-width: 426px) {
		width: 100%;
	}
`;

const TileTitle = styled.p`
	font-family: var(--heading-font-family);
	color: var(--tertiary-color);
	/* ${(props) =>
		props.$isColorSwapped
			? "var(--secondary-color)"
			: "var(--tertiary-color)"}; //var(--secondary-color); //var(--tertiary-color); */
	background-color: var(--primary-color);
	font-size: 30px;
	margin: 15px 0;
`;

const TileText = styled.p`
	font-family: var(--copy-font-family);
	margin: 15px 0;
	line-height: 125%;
	color: ${(props) =>
		props.$isColorSwapped
			? "var(--tertiary-color)"
			: "var(--secondary-color)"}; //var(--tertiary-color); //var(--secondary-color);
	text-align: justify;
`;

export default Tiles;
