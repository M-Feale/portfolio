import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Home = () => {
	return (
		<>
			<MainContainer>
				<TextDiv>
					<Call>Making strides in the web development world...</Call>
					<Answer>One project at a time</Answer>
					<Connection to="/contact">
						Let's connect <LeftSpan>--{">"}</LeftSpan>
					</Connection>
				</TextDiv>
			</MainContainer>
		</>
	);
};



const MainContainer = styled.div`
	width: 100vw;
	margin: 0 auto;
	height: 85vh; // the logic here is that the header is 15vh so to make the page 100vh, I need to substract the two.
	background-color: var(--secondary-color);
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const TextDiv = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 200px;
	padding: 0 50px;
	background-color: var(--primary-color);
	margin: 0 auto;

  @media screen and (max-width: 426px) {
		width: 130px;
	}
`;

const Call = styled.p`
	font-size: 70px;
	font-weight: var(--heading-font-weight);
	color: var(--tertiary-color);
	font-family: var(--heading-font-family);
	text-align: end;

	@media screen and (max-width: 426px) {
		font-size: 40px;
	}
`;

export const Answer = styled.p`
	font-size: 35px;
	color: var(--tertiary-color);
	font-family: var(--copy-font-family);
	left: -60%;
	width: 200px;
	position: relative;
	text-align: start;

  @media screen and (max-width: 426px) {
		width: 130px;
    font-size: 24px;
    left: -150%;
	}
`;

const Connection = styled(Link)`
	font-size: 16px;
	left: 90%;
	width: 200px;
	position: relative;
	top: -20px;
	color: var(--secondary-color);
	background-color: var(--tertiary-color);
	font-family: var(--link-font-family);
	padding: 5px;
	text-align: center;
	text-decoration: none;

  @media screen and (max-width: 426px) {
		width: 155px;
    font-size: 12px;
    left: 250%;
	}
`;

const LeftSpan = styled.span`
	text-align: end;
	position: relative;
	left: 8%;
`;

export default Home;
