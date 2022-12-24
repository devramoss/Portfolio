import styled from "styled-components";
import {Title} from "../../Components/Title";
import {RedColor, whiteColor} from "../../assets/variables";
import ToDoList from "../../assets/images/ToDoList.png";
import CadastroVacinacao from "../../assets/images/CadastroVacinacao.png";
import ContextNaRed from "../../assets/images/ContextNaRed.png";
import ExternalLink from "../../assets/images/external_link.svg";
import { Description } from "../../Components/DescriptionBox";

const ProjectsContainer = styled.section`
    color: ${whiteColor};
    padding: 20px;
`;

const ImageProject = styled.img`
    width: 320px;
    height: 200px;
    border-radius: 10px;
`;

const ExternalLinkIcon = styled.img`
    display: inline-block;
`

const ProjectName = styled.span`
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    color: ${RedColor};
    font-weight: bold;
    margin: 15px 0;
`;

const Project = styled.div`
    margin-top: 18px;
`;

const TextBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const ProjectLink = styled.a``;

export const ProjectsPage = () => {
    return(
        <ProjectsContainer>
            <Title text="Meus projetos"/>
            <Project>
                <ImageProject src={ToDoList}/>
                <TextBox>
                    <ProjectName>
                        Let´s Do It
                    </ProjectName>
                    <ProjectLink>
                        <ExternalLinkIcon src={ExternalLink}/>
                    </ProjectLink>
                </TextBox>

                <Description text="É uma aplicação
                    web responsiva que funciona 
                    como um bloco de notas para
                    você anotar suas ideias"
                />
            </Project>
            <Project>
                <ImageProject src={CadastroVacinacao}/>
                <TextBox>
                    <ProjectName>
                        Cadastro de Idosos
                    </ProjectName>
                    <ProjectLink>
                            <ExternalLinkIcon src={ExternalLink}/>
                    </ProjectLink>
                </TextBox>
                <Description 
                    text="Formulário criado para com o 
                    intuito de auxiliar os profissionais 
                    da saúde em Cataguases no cadastro de
                    idosos para a Vacinação."
                />
            </Project>
            <Project>
                <ImageProject src={ContextNaRed}/>
                <TextBox>
                    <ProjectName>
                        ContextNaRed
                    </ProjectName>
                    <ProjectLink>
                            <ExternalLinkIcon src={ExternalLink}/>
                    </ProjectLink>
                </TextBox>
                <Description
                    text="É um site com diversos contextos
                    (alusões históricas) fácil de memorizar
                    que podem ser usados na
                    redação do ENEM."
                />
            </Project>
            
        </ProjectsContainer>
    );
}