import { styled } from "styled-components";
import { Call } from "./Home";
import { Answer } from "./Home";

const Projects = () => {
	return (
		<>
			<MainContainer>
                <TitleTextDiv>
                    <Call>Project page</Call>
                    <Answer>Learning something new at every opportunity.</Answer>
                    <Answer>Pushing myself outside of my comfort zone.</Answer>
                    <Answer>Thriving.</Answer>
                </TitleTextDiv>
			</MainContainer>
			<SecondMainContainer>
                <Call>Legend of Burger - A NyanCat to the Past</Call>
                {/* <Answer>A </Answer>
                {/* <ul>My Process:</ul>
                <li></li> */}
            </SecondMainContainer>
		</>
	);
};

const MainContainer = styled.div`
	width: 100vw;
    max-width: 100%;
	margin: 0 auto;
	height: 65vh; // the logic here is that the header is 15vh so to make the page 100vh,
	//I need to substract the two. 

	background-color: #232424;
	display: flex;
`;

const SecondMainContainer = styled(MainContainer)`
    background-color: #183d38;
    height: 100vh;
`;

const TitleTextDiv = styled.div`
    width: 50%;
    left: 25%;
    position: relative;
`;


export default Projects;
