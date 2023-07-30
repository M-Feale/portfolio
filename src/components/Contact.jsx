import { useState } from "react";
import { styled } from "styled-components";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		interest: "",
		message: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			formData.name !== "" &&
			formData.email !== "" &&
			formData.interest !== "" &&
			formData.message !== ""
		) {
			setIsDisplayed(true);
		}
	};

	const [isDisplayed, setIsDisplayed] = useState(false);

	return (
		<>
			<MainContainer>
				<TitleTextDiv>
					<Headline>Contact</Headline>
					<Tagline>
						It's always a pleasure to meet new people.
					</Tagline>
					<GreenTagline>Let's chat!</GreenTagline>
				</TitleTextDiv>
			</MainContainer>
			<SecondMainContainer>
				<LeftDiv>
					<SecondHeadline>Stay in touch</SecondHeadline>
					{!isDisplayed && (
						<MessageOuterContainer>
							<MessageTextDiv>
								<TileText>
									Hi {formData.name} ! Nice to meet you !
								</TileText>
								<TileText>
									I'm always happy to meet a{" "}
									{formData.interest}.
								</TileText>
								<TileText>
									I will contact you shortly by email at{" "}
									{formData.email} so we can discuss your
									message.
								</TileText>
								<TileText>"{formData.message}"</TileText>
							</MessageTextDiv>
						</MessageOuterContainer>
					)}
				</LeftDiv>
				<RightDiv>
					<FormDiv>
						<TileTitle>Send me a message</TileTitle>
						<form>
							<InputDiv>
								<Label htmlFor="name">Name</Label>
								<InputField
									required
									id="name"
									type="text"
									value={formData.name}
									onChange={(e) => {
										console.log(e.target.value);
										setFormData({
											...formData,
											name: e.target.value,
										});
									}}
								/>
								<Label htmlFor="email">Email address</Label>
								<InputField
									required
									id="email"
									type="email"
									value={formData.email}
									onChange={(e) => {
										setFormData({
											...formData,
											email: e.target.value,
										});
									}}
								/>
								<Label htmlFor="interest">You are ...</Label>
								<Select
									required
									id="interest"
									value={formData.interest}
									onChange={(e) => {
										setFormData({
											...formData,
											interest: e.target.value,
										});
									}}
								>
									<Option value="fellow Web developer">
										a Web developer
									</Option>
									<Option value="recruiter">
										a Recruiter
									</Option>
									<Option value="curious person">
										Curious
									</Option>
								</Select>
								<Label htmlFor="message">Message</Label>
								<Textarea
									required
									id="message"
									type="textarea"
									value={formData.message}
									onChange={(e) => {
										setFormData({
											...formData,
											message: e.target.value,
										});
									}}
								></Textarea>
							</InputDiv>
							<ButtonDiv>
								<SubmitButton
									onClick={handleSubmit}
									type="button"
								>
									Submit
								</SubmitButton>
							</ButtonDiv>
						</form>
					</FormDiv>
					<PersonalLinksDiv>
						<TileTitle>Contact me elsewhere</TileTitle>
						<LinkDiv>
							<Mail src={mail} />
							<InlineTileText>
								marjolainefeale@gmail.com
							</InlineTileText>
						</LinkDiv>
						<LinkDiv>
							<LinkedIn src={linkedin} />
							<InlineTileText>LinkedIn</InlineTileText>
						</LinkDiv>
						<LinkDiv>
							<Github src={github} />
							<InlineTileText>GitHub</InlineTileText>
						</LinkDiv>
					</PersonalLinksDiv>
				</RightDiv>
			</SecondMainContainer>
		</>
	);
};

const MainContainer = styled.div`
	width: 100vw;
	max-width: 100%;
	margin: 0 auto;
	height: 50vh;
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
	text-align: center;
	@media screen and (max-width: 426px) {
		font-size: 24px;
		position: relative;
		left: 5%;
	}
`;

const GreenTagline = styled(Tagline)`
	background-color: var(--tertiary-color);
	color: var(--primary-color);
	padding: 5px 10px;
	font-weight: bold;
	display: inline;
	left: 80%;
	@media screen and (max-width: 426px) {
		left: 50%;
	}
`;

const SecondMainContainer = styled.div`
	display: flex;
	background-color: var(--primary-color);
	padding: 0 10px;
	@media screen and (max-width: 769px) {
		flex-direction: column;
		height: 100%;
	}
`;

const LeftDiv = styled.div`
	min-width: 40%;
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

const MessageOuterContainer = styled.div`
	margin: 10px auto;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const MessageTextDiv = styled.div`
	width: 350px;
	height: 350px;
	background-color: var(--secondary-color);
	border-radius: 5px;
	padding: 10px;
	overflow: auto;
	@media screen and (max-width: 769px) {
		min-width: 280px;
		max-height: 280px;
	}

	@media screen and (max-width: 426px) {
		min-width: 280px;
		max-height: 210px;
	}
`;

const TileText = styled.p`
	color: var(--tertiary-color);
	font-family: var(--copy-font-family);
	font-size: 20px;
	text-align: justify;
	padding: 10px 5px;
	line-height: 115%;

	@media screen and (max-width: 769px) {
		font-size: 18px;
	}
	@media screen and (max-width: 426px) {
		font-size: 16px;
	}
`;

const RightDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-template-areas:
		" tile1 tile1 tile1 tile1 ."
		" tile1 tile1 tile1 tile1 ."
		" tile1 tile1 tile1 tile1 ."
		" . tile2 tile2 tile2 tile2"
		" . tile2 tile2 tile2 tile2";
	gap: 20px;
	margin: 10px 0;
	min-width: 60%;
	align-items: flex-start;
	@media screen and (max-width: 426px) {
		flex-wrap: wrap;
		display: flex;
		flex-direction: column;
	}
`;

const FormDiv = styled.div`
	grid-area: tile1;
	position: relative;
	background-color: var(--tertiary-color);
	padding: 10px;
	border-radius: 5px;
	@media screen and (max-width: 426px) {
		width: 100%;
	}
`;

const TileTitle = styled.p`
	font-family: var(--heading-font-family);
	color: ${(props) =>
		props.$isColorSwap
			? "var(--secondary-color)"
			: "var(--tertiary-color)"}; //var(--secondary-color); //var(--tertiary-color);
	background-color: ${(props) =>
		props.$isColorSwap
			? "var(--tertiary-color)"
			: "var(--primary-color)"}; //var(--tertiary-color); //var(--primary-color);
	font-size: 30px;
	margin: 15px 0;
`;

const InputDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	column-gap: 10px;
	row-gap: 10px;
	width: 98%;
`;

const Label = styled.label`
	margin: 10px 0 10px 20px;
	font-family: var(--link-font-family);
	font-size: 18px;
	color: var(--secondary-color);
	text-align: center;
	@media screen and (max-width: 426px) {
		font-size: 16px;
		margin: 0;
	}
`;

const InputField = styled.input`
	font-family: var(--copy-font-family);
	font-size: 16px;
	line-height: 115%;
	padding-left: 5px;
	border-radius: 2px;
	border: 1px solid black;
	box-sizing: border-box;

	&:focus {
		border: 2px solid black;
		outline: none;
	}
`;

const Select = styled.select`
	font-family: var(--copy-font-family);
	font-size: 16px;
	line-height: 115%;
	border-radius: 2px;
	border: 1px solid black;
	box-sizing: border-box;
	padding: 2px 2px 5px 2px;

	&:focus {
		border: 2px solid black;
		outline: none;
	}
`;

const Option = styled.option`
	font-size: 16px;
	line-height: 115%;
	font-family: var(--copy-font-family);
	padding: 2px 2px 5px 2px;
`;

const Textarea = styled.textarea`
	font-family: var(--copy-font-family);
	font-size: 16px;
	line-height: 115%;
	border-radius: 2px;
	border: 1px solid black;
	box-sizing: border-box;
	height: 80px;
	padding-left: 5px;
	resize: none;

	&:focus {
		border: 2px solid black;
		outline: none;
	}
`;

const ButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 20px 0;
`;

const SubmitButton = styled.button`
	font-family: var(--link-font-family);
	font-size: 20px;
	padding: 10px;
	border: none;
	background-color: var(--secondary-color);
	color: var(--tertiary-color);
	border-radius: 5px;

	&:hover {
		color: var(--tertiary-color);
		background-color: var(--primary-color);
	}
	@media screen and (max-width: 769px) {
		font-size: 18px;
	}
`;

const PersonalLinksDiv = styled.div`
	grid-area: tile2;
	padding: 10px;
	border-radius: 5px;
	background-color: var(--secondary-color);
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 426px) {
		width: 100%;
	}
`;

const InlineTileText = styled(TileText)`
	margin: 10px 0;
	display: inline;
	text-align: end;
	font-family: var(--link-font-family);
`;

const LinkDiv = styled.div`
	text-align: start;
	margin: 10px 0;
`;

const Mail = styled.img`
	height: 19px;
	width: 21px;
	position: relative;
	top: 4px;
	/* left: 1px; */
`;

const Github = styled.img`
	width: 22px;
	position: relative;
	top: 3px;
`;

const LinkedIn = styled.img`
	width: 22px;
	position: relative;
	top: 4px;
`;

export default Contact;
