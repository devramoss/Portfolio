import styled from "styled-components";
import { whiteColor } from "../../assets/variables";
import { Description } from "../../Components/DescriptionBox";
import { Title } from "../../Components/Title";
import EmailIcon from "../../assets/images/email_icon.png";
import TelegramIcon from "../../assets/images/telegram_icon.svg";
import LinkedinIcon from "../../assets/images/linkedin_icon.svg";
import WhatsappIcon from "../../assets/images/whatsapp_icon.svg";
import GitHubIcon from "../../assets/images/github_icon.svg";
import {telegramLink, linkedinLink, whatsAppLink,gitHubLink} from "./links";

const ContactContainer = styled.section`
    color: ${whiteColor};
    padding: 20px;
`;

const ContactLink = styled.a`
    width: 50px;
    height: 50px;
    padding: 10px;
    background-color: ${whiteColor};
    border-radius: 50%;
    cursor: pointer;
`;

const ContactLinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
`;

const Icon = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContactPage = () => {
    return (
        <ContactContainer id="contato">
            <Title text="Contato" />
            <Description
                text="Caso você precise de 
                um site para a sua empresa 
                ou artes para postar em suas
                redes sociais a Ramos Soluções
                Tecnológicas pode lhe ajudar. 
                Entre em contato conosco!"
            />
            <ContactLinkContainer>
                <ContactLink href="mailto:devramoss2003@gmail.com">
                    <Icon src={EmailIcon} />
                </ContactLink>
                <ContactLink href={telegramLink} target="_blank">
                    <Icon src={TelegramIcon} />
                </ContactLink>
                <ContactLink href={linkedinLink} target="_blank">
                    <Icon src={LinkedinIcon} />
                </ContactLink>
                <ContactLink href={whatsAppLink} target="_blank">
                    <Icon src={WhatsappIcon} />
                </ContactLink>
                <ContactLink href={gitHubLink} target="_blank">
                    <Icon src={GitHubIcon} />
                </ContactLink>
            </ContactLinkContainer>
        </ContactContainer>
    );
}