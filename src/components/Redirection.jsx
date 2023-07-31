import { useEffect } from "react";
import { styled } from "styled-components";

const Redirection = () => {
	useEffect(() => {
		window.location.href = "https://github.com/M-Feale";
	}, []);

	return (
		<MainContainer>
			<TextDiv>
				<Call>Redirecting...</Call>
			</TextDiv>
		</MainContainer>
	);
};

const MainContainer = styled.div`
	width: 100vw;
	margin: 0 auto;
	height: 85vh;
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
	text-align: start;

	@media screen and (max-width: 426px) {
		font-size: 40px;
	}
`;

export default Redirection;
