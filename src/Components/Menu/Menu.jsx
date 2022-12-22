import styled from "styled-components";
import {useState} from "react";
import {whiteColor} from "../../assets/variables";
import menu_icon from "../../assets/images/hamburguerMenu.svg";
import close_menu_icon from "../../assets/images/closeMenu.svg";

const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(${(props)=>props.active?10:0}px);
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
`;

const HamburguerMenuIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 1rem;
    position: relative;
    top: 5%;
    left: 42%;
`;

const MenuOptionsContainer = styled.ul`
    display: ${(props)=>props.active?"block":"none"};
    width: 100vw;
    height: 100vh;
    position: absolute;
    right: 1rem;
    text-align: center;
    margin: 18% auto;
`;

const MenuOption = styled.li`
    margin: 2rem;
`;

const MenuOptionLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: ${whiteColor};
`;

export const Menu = () =>{
    const [active, setActive] = useState(false);
    const [imageSource, setImageSource] = useState(menu_icon)
    const handleMenuOptions = () => {
        if(!active){
            setImageSource(close_menu_icon);
        }
        else{
            setImageSource(menu_icon);
        }
        setActive(!active);  
    }
    
    return(
        <StyledMenu active={active}>
            <HamburguerMenuIcon src={imageSource} onClick={handleMenuOptions}/>
            <MenuOptionsContainer active={active}>
                <MenuOption>
                    <MenuOptionLink href="#">
                        HOME
                    </MenuOptionLink>
                </MenuOption>
                <MenuOption>
                    <MenuOptionLink href="#">
                        SOBRE
                    </MenuOptionLink>
                </MenuOption>
                <MenuOption>
                    <MenuOptionLink href="#">
                        SERVIÇOS
                    </MenuOptionLink>
                </MenuOption>
                <MenuOption>
                    <MenuOptionLink href="#">
                        PORTFÓLIO
                    </MenuOptionLink>
                </MenuOption>
                <MenuOption>
                    <MenuOptionLink href="#">
                        FALE CONOSCO
                    </MenuOptionLink>
                </MenuOption>
            </MenuOptionsContainer>
        </StyledMenu>
    );
}