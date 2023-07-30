import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Banner = () => {

    return(
        <MainContainer>
            <BrandHeading>Marjolaine Feale</BrandHeading>
            <NavBar className="nav-buttons">
                <NavButtons to={"/"} >Home</NavButtons>
                <NavButtons to={"/about"} >About</NavButtons>
                <NavButtons to={"/projects"} >Projects</NavButtons>
                <NavButtons to={"/contact"} >Contact</NavButtons>
            </NavBar>
        </MainContainer>
        
    )
};

const MainContainer = styled.div`
    margin: 0 auto;
    height: 15vh;
    width: 100vw;
    max-width: 100%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    color: var(--tertiary-color);
    padding: 0 10px;
    @media screen and (max-width: 426px){
        flex-direction: column;
        justify-content: space-around;
    }
`;

const NavBar = styled.div`
    display: flex;
`;

const BrandHeading = styled.p`
    font-size: 30px;
    font-family: var(--heading-font-family);
    font-weight: var(--heading-font-weight);
`;

const NavButtons = styled(NavLink)` 
    font-size: 20px;
    margin: 0 5px;
    font-family: var(--link-font-family);
    text-decoration: none;
    color: var(--tertiary-color);
    @media screen and (max-width: 426px){
        font-size: 16px;
    }

    &.active{
	color: var(--tertiary-color);
	text-decoration: underline;
	text-decoration-thickness: 2px;
	text-underline-offset: 10px;
}	
`;

export default Banner;