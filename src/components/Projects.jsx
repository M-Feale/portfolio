import { styled } from "styled-components";
import { Call } from "./Home";
import Tiles from "./Tiles";

const Projects = () => {
	return (
		<>
			<MainContainer>
				<TitleTextDiv>
					<Headline>Projects</Headline>
					<Tagline>
						Learning something new at every opportunity.
					</Tagline>
					<Tagline>Pushing myself outside of my comfort zone.</Tagline>
					<Tagline>Thriving.</Tagline>
				</TitleTextDiv>
			</MainContainer>
			<SecondMainContainer>
				<Call>Legend of Burger - A NyanCat to the Past</Call>
				<Tiles />
			</SecondMainContainer>
		</>
	);
};

const MainContainer = styled.div`
	width: 100vw;
	max-width: 100%;
	margin: 0 auto;
	height: 75vh; // the logic here is that the header is 15vh so to make the page 100vh,
	//I need to substract the two.

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

const Tagline= styled.p`
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



export default Projects;
