import styled from "styled-components";

const DescriptionBox = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin-top: 1rem;
    line-height: 1.2rem;
`;

export const Description = (props) => {
    return(
        <DescriptionBox>
            {props.text}
        </DescriptionBox>
    );
}