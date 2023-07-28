import { styled } from "styled-components";
import { aboutMeTile } from "../assets/projectData";
import Tiles from "./Tiles";
import myEditedPicture from "../assets/myEditedPicture.jpg";

const About = () => {

    const gridConfig = {
		rows: 5,
		columns: 6,
		gridTemplateAreas: `" . . tile1 tile1 tile1 . "
        " tile2 tile2 tile1 tile1 tile1 ."
        " tile2 tile2 . tile3 tile3 tile3 "
        " tile2 tile2 . tile3 tile3 tile3 "
        " . . .tile3 tile3 tile3 "`,
	};

	return (
		<>
			<MainContainer>
				<TitleTextDiv>
					<Headline>About</Headline>
					<Tagline>
						Learning something new at every opportunity.
					</Tagline>
					<Tagline>
						Pushing myself outside of my comfort zone.
					</Tagline>
					<Tagline>
						<GreenSpan>Thriving.</GreenSpan>
					</Tagline>
				</TitleTextDiv>
			</MainContainer>
			<SecondMainContainer>
				<ImageTitleWrapper>
					<Headline>
						Marjolaine Feale, aspiring Web Developer
					</Headline>
					<ImageDiv>
						<Image src={myEditedPicture} />
					</ImageDiv>
				</ImageTitleWrapper>
				<Tiles gridConfig={gridConfig} tileData={aboutMeTile} />
			</SecondMainContainer>
		</>
	);
};

const GreenSpan = styled.span`
	background-color: var(--tertiary-color);
	color: var(--primary-color);
	padding: 5px 10px;
	font-weight: bold;
`;

const Image = styled.img`
	max-width: 350px;  
`;

const ImageDiv = styled.div`
	margin: 10px auto;
	border-radius: 10px;
	overflow: hidden;
	width: fit-content;
`;

const ImageTitleWrapper = styled.div`
    min-width: 40%;
`;

const MainContainer = styled.div`
	width: 100vw;
	max-width: 100%;
	margin: 0 auto;
	height: 75vh; // the logic here is that the header is 15vh so for people to KNOW that they have to scroll, I'm making it just a bit too small so next component is showing.
	/* max-height: 100%; */
	background-color: var(--secondary-color);
	display: flex;
`;
const TitleTextDiv = styled.div`
	width: 50%;
	left: 25%;
	top: 25%;
	position: relative;
`;

const Headline = styled.p`
	font-size: 70px;
	font-weight: var(--heading-font-weight);
	color: var(--tertiary-color);
	font-family: var(--heading-font-family);
`;

const Tagline = styled.p`
	font-size: 35px;
	color: var(--tertiary-color);
	font-family: var(--copy-font-family);

	position: relative;
	margin: 18px 0;
	text-align: end;
`;

const SecondMainContainer = styled(MainContainer)`
	background-color: var(--primary-color);
	height: 100vh;
`;


export default About;
