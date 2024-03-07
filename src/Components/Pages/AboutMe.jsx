import {
  AboutHeading,
  AboutMeSectionStyled,
  AboutTextContainer,
  Headshot,
  HeadshotBorder,
  HeadshotBorderTwo,
  HeadshotContainer,
  Title,
} from "../styles/sections/AboutMeSection";
import headshot from "../../assets/images/headshot.jpg";

export const AboutMe = () => {
  return (
    <>
      <AboutMeSectionStyled id="aboutme">
        <HeadshotContainer>
          <Headshot src={headshot} alt="Tracy Mortara Headshot" />
          <HeadshotBorder />
          <HeadshotBorderTwo />
        </HeadshotContainer>
        <AboutTextContainer>
          <AboutHeading>
            Hi, my name is <span>Tracy Mortara</span> !
          </AboutHeading>
          <p>
            I am a <Title>Junior Front-End Developer</Title> looking for a new
            challenge where I can grow as a Developer.
          </p>
          <p>
            Current part-time Front-End Developer with experience in management
            and cross-functional collaboration to maintain and scale two Ed
            Tech products.
          </p>
        </AboutTextContainer>
      </AboutMeSectionStyled>
    </>
  );
};
