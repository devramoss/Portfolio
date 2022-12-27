import styled from "styled-components";
import {RedColor, whiteColor} from "../../assets/variables";
import {Title} from "../../Components/Title";
import {Description} from "../../Components/DescriptionBox";
import Emilly from "../../assets/images/Emilly.jpeg";

const AboutContainer = styled.section`
    font-family: 'Poppins', sans-serif;
    color: ${whiteColor};
    padding: 20px;
`;

const SubTitle = styled.h3`
    font-size: 19px;
    margin-top: 1.8rem;
`;

const Image = styled.img`
    border: 1.5px solid ${RedColor};
    border-radius: 50%;
    width: 256px;
    height: 256px;
    margin-left: 12.5%;
    margin-right: 12.5%;
`;

export const AboutPage = () => {
    return(
        <AboutContainer id="sobre">
            <Image src={Emilly}/>
            <Title text="Olá, meu nome é Emilly Ramos!"/>
            <SubTitle>
                Sou desenvolvedora Front-end 👩‍💻
            </SubTitle>
            <Description 
                text="Estou cursando
                Engenharia de Computação no 
                Centro Federal de Educação
                Tecnológica de Minas Gerais 
                em Leopoldina."
            />
            <Description
                text="Atualmente minha especialidade é em JavaScript,
                entretanto, na faculdade já implementei
                algumas coisas em C, C++ e Java."
            />
        </AboutContainer>
    );
}