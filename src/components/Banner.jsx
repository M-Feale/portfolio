import { Link } from "react-router-dom";
import styled from "styled-components";


const Banner = () => {

    return(
        <MainContainer>
            <BrandHeading>Marjolaine Feale</BrandHeading>
            <NavBar className="nav-buttons">
                <NavButtons>Home</NavButtons>
                <NavButtons>About</NavButtons>
                <NavButtons to={"/projects"} >Projects</NavButtons>
                <NavButtons>Contact</NavButtons>
            </NavBar>
        </MainContainer>
        
    )
};

const MainContainer = styled.div`
    height: 15vh;
    width: 100vw;
    max-width: 100%;
    background-color: #183d38; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    color: #f3b9ac;
    font-weight: bold;
    padding: 0 10px;
`;

const NavBar = styled.div`
    display: flex;
    /* margin: 0 10px 0 0; */
`;

const BrandHeading = styled.p`
    font-size: 30px;
    font-family: "Space Grotesk", sans-serif;
`;

const NavButtons = styled(Link)` // change them to button and navlinks later but now, just for the mock-up, let's makes them p tags
    font-size: 20px;
    margin: 0 5px;
    font-family: 'JetBrains Mono', monospace;
    text-decoration: none;
    color: #f3b9ac;
`;

export default Banner;