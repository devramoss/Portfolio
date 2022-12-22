import styled from "styled-components";
import {primaryColor} from "../../assets/variables";
import {Menu} from "../Menu/Menu";
import logo from "../../assets/images/logo.png";

const StyledHeader = styled.header`
    width: 100%;
    height: 10vh;
    background: ${primaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1vw;
    margin-top: 1rem;
`;

const Logo = styled.img`
    height: 100px;
    width: 100px;
    margin-top: 1.5rem;
`;

export const Header = () => {
    return(
        <StyledHeader>
            <Logo src={logo} alt="Logo da marca"/>
            <Menu/>
        </StyledHeader>
    );
};