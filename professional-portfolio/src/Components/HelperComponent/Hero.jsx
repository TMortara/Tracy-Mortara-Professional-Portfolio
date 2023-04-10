import { HeroIcons, HeroTitle, StyledHeroSection } from "../styles/layout/Hero.styled";
import { RxDownload } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/resume.pdf"

export const Hero = () => {
    return <StyledHeroSection>
        <div>
            <HeroTitle>Tracy Mortara</HeroTitle>
            <p>Full Stack Developer</p>
            <p>Ready to take on an exciting new challenge!</p>
        </div>
        <HeroIcons>
            <a href="https://github.com/TMortara" target="_blank" rel="noreferrer" title="GitHub Link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/tracymortara/" target="_blank" rel="noreferrer" title="LinkedIn Profile"><FaLinkedin /></a>
            <a href={resume} title="Click to Download my CV" download><RxDownload /></a>
        </HeroIcons>
    </StyledHeroSection>
}