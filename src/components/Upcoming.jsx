import { styled } from "styled-components";

const Upcoming = () => {
	return (
		<MainContainer>
			<TextDiv>
				<Call>On the way...</Call>
			</TextDiv>
		</MainContainer>
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
    position: relative;
    left: 40%;

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
	text-align: justify;

	@media screen and (max-width: 426px) {
		width: 130px;
		font-size: 24px;
		left: -150%;
	}
`;

export default Upcoming;
