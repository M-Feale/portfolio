import { styled } from "styled-components";

const Tiles = ({ tileData }) => {
	return (
		<Wrapper>
			<MainContainer>
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
											$isColorSwapped={
												tile.isColorSwapped
											}
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
	min-width: 50%;
`;

const MainContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	width: 100%;
`;

const Tile = styled.div`
	flex: 1;
	margin: 10px 0;

	background-color: ${(props) =>
		props.$isColorSwapped
			? "var(--secondary-color)"
			: "var(--tertiary-color)"};
	padding: 10px;
	border-radius: 5px;

	@media screen and (max-width: 426px) {
		width: 100%;
	}
`;

const TileTitle = styled.p`
	font-family: var(--heading-font-family);
	color: var(--tertiary-color);
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
			: "var(--secondary-color)"};
	text-align: justify;
`;

export default Tiles;
