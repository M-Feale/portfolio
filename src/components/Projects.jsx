import { styled } from "styled-components";

import Tiles from "./Tiles";
import { projectData } from "../assets/data/projectData";

const Projects = () => {
	return (
		<>
			<MainContainer>
				<TitleTextDiv>
					<Headline>Projects</Headline>
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
			{projectData.map((project) => {
				return (
					<SecondMainContainer key={project.projectTitle}>
						<ImageTitleWrapper>
							<SecondHeadline>
								{project.projectTitle}
							</SecondHeadline>
							<ImageDiv>
								<Image
									src={project.imageSrc}
									alt={project.imageAlt}
								/>
							</ImageDiv>
						</ImageTitleWrapper>
						<Tiles tileData={project.tiles} />
					</SecondMainContainer>
				);
			})}
		</>
	);
};

const MainContainer = styled.div`
	width: 100vw;
	max-width: 100%;
	margin: 0 auto;
	height: 75vh; // the logic here is that the header is 15vh so for people to KNOW that they have to scroll, I'm making it just a bit too small so next component is showing.
	background-color: var(--secondary-color);
	position: relative;
	padding: 0 10px;
`;

const TitleTextDiv = styled.div`
	width: 50%;
	left: 25%;
	top: 25%;
	position: absolute;

	@media screen and (max-width: 426px) {
		top: 18%;
	}
`;

const Headline = styled.p`
	font-size: 70px;
	font-weight: var(--heading-font-weight);
	color: var(--tertiary-color);
	font-family: var(--heading-font-family);

	@media screen and (max-width: 426px) {
		font-size: 40px;
		position: relative;
		left: -5%;
	}
`;

const Tagline = styled.p`
	font-size: 35px;
	color: var(--tertiary-color);
	font-family: var(--copy-font-family);
	position: relative;
	margin: 18px 0;
	text-align: end;

	@media screen and (max-width: 426px) {
		font-size: 24px;
		position: relative;
		left: 5%;
	}
`;

const GreenSpan = styled.span`
	background-color: var(--tertiary-color);
	color: var(--primary-color);
	padding: 5px 10px;
	font-weight: bold;
`;

const SecondMainContainer = styled.div`
	display: flex;
	background-color: var(--primary-color);
	padding: 0 10px;
	margin: 20px 0 40px;

	@media screen and (max-width: 769px) {
		flex-direction: column;
		height: 100%;
	}
`;

const ImageTitleWrapper = styled.div`
	min-width: 50%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 769px) {
		flex-direction: row;
	}
	@media screen and (max-width: 426px) {
		flex-direction: column;
	}
`;

const SecondHeadline = styled.p`
	font-size: 70px;
	font-weight: var(--heading-font-weight);
	color: var(--tertiary-color);
	font-family: var(--heading-font-family);

	@media screen and (max-width: 769px) {
		font-size: 50px;
		max-width: 60%;
	}
	@media screen and (max-width: 426px) {
		font-size: 28px;
		max-width: 100%;
		text-align: center;
	}
`;

const ImageDiv = styled.div`
	margin: 10px auto;
	border-radius: 10px;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Image = styled.img`
	min-width: 300px;
	flex: 1 1 0;
	/* width: 350px; */
	max-width: 85%;
	border-radius: 5px;

	@media screen and (max-width: 769px) {
		max-width: 50%;
		min-width: 200px;
	}
	@media screen and (max-width: 426px) {
		min-width: 120px;
	}
`;

export default Projects;
