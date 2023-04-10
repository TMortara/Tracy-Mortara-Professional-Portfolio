import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterIcons, FooterText, StyledFooter } from "../styles/layout/Footer.styled";

export const Foooter = () => {
    return (
        <>
        <StyledFooter>
            <FooterIcons>
                <a href="https://github.com/TMortara" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/tracymortara/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </FooterIcons>
            <FooterText>
            <span>Tracy Mortara</span>  | &copy; 2023
            </FooterText>
        </StyledFooter>
        </>
    )
}