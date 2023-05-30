import {
  HeroIcons,
  HeroText,
  HeroTitle,
  StyledHeroSection,
} from "../styles/layout/Hero.styled";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/resume.pdf";

export const Hero = () => {
  return (
    <StyledHeroSection>
      <HeroTitle>Tracy Mortara</HeroTitle>
      <HeroText>
        <p>Full Stack Developer</p>
        <p>Ready to take on an exciting new challenge!</p>
      </HeroText>
      <HeroIcons>
        <a
          href="https://github.com/TMortara"
          target="_blank"
          rel="noreferrer"
          title="GitHub Link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tracymortara/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a href={resume} title="Click to Download my CV" download>
          <HiOutlineDocumentArrowDown />
        </a>
      </HeroIcons>
    </StyledHeroSection>
  );
};
