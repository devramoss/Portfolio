import styled from "styled-components";
import {Title} from "../../Components/Title";
import {RedColor, whiteColor} from "../../assets/variables";
import ToDoList from "../../assets/images/ToDoList.png";
import CadastroVacinacao from "../../assets/images/CadastroVacinacao.png";
import ContextNaRed from "../../assets/images/ContextNaRed.png";
import ExternalLink from "../../assets/images/external_link.svg";
import {Description} from "../../Components/DescriptionBox";
import {contextNaRedLink, letsDoItLink, cadastroIdososLink} from "./links";

const ProjectsContainer = styled.section`
    color: ${whiteColor};
    padding: 20px;
`;

const ImageProject = styled.img`
    width: 320px;
    height: 200px;
    border: 2px solid ${RedColor};
    border-radius: 10px;
`;

const ExternalLinkIcon = styled.img`
    display: inline-block;
`

const ProjectName = styled.span`
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 25px;
    color: ${RedColor};
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
        <ProjectsContainer id="projetos">
            <Title text="Meus projetos"/>
            <Project>
                <ImageProject src={ToDoList}/>
                <TextBox>
                    <ProjectName>
                        Let´s Do It
                    </ProjectName>
                    <ProjectLink href={letsDoItLink} target="_blank">
                        <ExternalLinkIcon src={ExternalLink}/>
                    </ProjectLink>
                </TextBox>

                <Description text="É uma aplicação
                    web responsiva que funciona 
                    como um bloco de notas para
                    você anotar suas coisas."
                />
            </Project>

            <Project>
                <ImageProject src={CadastroVacinacao}/>

                <TextBox>
                    <ProjectName>
                        Cadastro de Idosos
                    </ProjectName>
                    <ProjectLink href={cadastroIdososLink} target="_blank">
                            <ExternalLinkIcon src={ExternalLink}/>
                    </ProjectLink>
                </TextBox>

                <Description 
                    text="Formulário criado com o 
                    intuito de auxiliar os profissionais 
                    da saúde em Cataguases no cadastro de
                    idosos para a vacinação de Covid."
                />
            </Project>

            <Project>
                <ImageProject src={ContextNaRed}/>
                <TextBox>
                    <ProjectName>
                        ContextNaRed
                    </ProjectName>
                    <ProjectLink href={contextNaRedLink} target="_blank">
                            <ExternalLinkIcon src={ExternalLink}/>
                    </ProjectLink>
                </TextBox>

                <Description
                    text="É um site com diversos contextos
                    (alusões históricas) fácil de memorizar
                    que podem ser usados na
                    redação do ENEM(Exame Nacional do Ensino
                    Médio)."
                />
            </Project>
            
        </ProjectsContainer>
    );
}