import { styled } from "styled-components";

const Home = () => {
	return (
		<>
			<MainContainer>
				<TextDiv>
					<Call>Making strides in the Web Dev world</Call>
					<Answer>One project at a time</Answer>
					<Connection>Let's connect!</Connection>
				</TextDiv>
			</MainContainer>
		</>
	);
};

const MainContainer = styled.div`
	width: 100vw;
	margin: 0 auto;
	height: 85vh; // the logic here is that the header is 15vh so to make the page 100vh,
	//I need to substract the two. I might need to change it IF I change my component
	//structure. Calling Banner inside every Component or not...

	background-color: var(--secondary-color);
	//color choices: almost black in the same hue as green #2d3332; #232424;
	// almost black but in pink hue #4d4847 #272524

	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;
// colors!
// color:  #183d38 ; // dark green
// color: #f3b9ac; // good pale pink

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
`;

export const Call = styled.p`
	font-size: 70px;
	font-weight: var(--heading-font-weight);
	color: var(--tertiary-color);
	font-family: var(--heading-font-family);
	/* font-family: 'JetBrains Mono', monospace; */
	/* font-family: 'Archivo', sans-serif; */
	/* font-family: 'Archivo Black', sans-serif;  */
	/* font-family: 'Syne', sans-serif;  */
`;

export const Answer = styled.p`
	font-size: 35px;
	color: var(--tertiary-color);
	font-family: var(--copy-font-family);
	left: 90%;
	width: 200px;
	position: relative;
	top: 20px;
`;

const Connection = styled.p`
	font-size: 3cap;
	left: 90%;
	width: 200px;
	position: relative;
	top: 20px;
	color: var(--tertiary-color);
	font-family: var(--link-font-family);
`;

// const KikiSleepy = styled.div`
//   color: #41c1a1;
//   color: #adb2a0;
//   color: #eed0bd;
//   color: #cc4b2e;
//   color: #1e1312;
//   color: #e1e9cb;
//   color: #3c8565;
//   color: #f3b9ac;       // chosen pink
//   color: #973324;
//   color: #183d38;      //chosen green
// `;

// const Totoro = styled.div`
//   color: #876c57;
//   color: #473535;
//   color: #ede3d5;
//   color: #82c1ed;
//   color: #f38524;
//   color: #fafa5e;
//   color: #fefc8d;
//   color: #5096eb;
//   color: #fefec2;
//   color: #567442;
// `;

// const WindRises = styled.div`
//   color: #f0c4a7;
//   color: #f3d5ba;
//   color: #cfacb3;
//   color: #f8e5ab;
//   color: #16a13a;
//   color: #ece3d4;
//   color: #19aa41;
//   color: #007db3;
//   color: #008fbb;
//   color: #0096c3;
// `;

// const HowlsMovingCastle = styled.div`
//   color: #665d60;
//   color: #b8b2a4;
//   color: #ffc3ab;
//   color: #030715;
//   color: #0d122f;
//   color: #2b5297;
//   color: #d5ba9c;
//   color: #fef898;
//   color: #feb954;
//   color: #b95821;
// `;

// const PrincessMononoke = styled.div`
//   color: #171916;
//   color: #473535;
//   color: #a79297;
//   color: #6a5157;
//   color: #8898b1;
//   color: #efefef;
//   color: #4c5119;
//   color: #eebd9f;
//   color: #de7d6a;
//   color: #bc3d36;
// `;

// const SpiritedAway = styled.div`
//   color: #58a557;
//   color: #2d9b8e;
//   color: #00295d;
//   color: #000000;
//   color: #ece3d4;
//   color: #73787b;
//   color: #6d3a1d;
//   color: #92272d;
//   color: #b93d47;
//   color: #e06168;
// `;

export default Home;
