import styled from "styled-components";
import {RedColor} from "../../assets/variables";

const TitleStyled = styled.h2`
    font-family: 'Poppins', sans-serif;
    color: ${RedColor};
    font-size: 40px;
    font-weight: bold;
`;

export const Title = (props) => {
    return(
        <TitleStyled>
            {props.text}
        </TitleStyled>
    );
}

