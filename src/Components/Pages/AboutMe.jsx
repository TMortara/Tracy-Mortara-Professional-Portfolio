import { AboutHeading, AboutMeSectionStyled, AboutTextContainer, Headshot, HeadshotBorder, HeadshotBorderTwo, HeadshotContainer, Title } from "../styles/sections/AboutMeSection"
import headshot from "../../assets/images/headshot.jpg";


export const AboutMe = () => {
    return <>
    <AboutMeSectionStyled id="aboutme">
        <HeadshotContainer>
            <Headshot src={headshot} alt="Tracy Mortara Headshot"/>
            <HeadshotBorder />
            <HeadshotBorderTwo />
        </HeadshotContainer>
        <AboutTextContainer>
            <AboutHeading>
                Hi, my name is <span>Tracy Mortara</span> !
            </AboutHeading>
            <p>
                I am a <Title>Junior Full Stack Developer</Title> looking for a new challenge where I can continue to grow my skills as a developer. 
            </p>
            <p>
                My experience managing the implementation for two K-12 products has provided me experience with cross-functional collaboration and insight into the development and maintenance of products.  This experience combined with my knowledge as a developer makes me a unique addition to your team.  In addition to my experience, I am incredibly hardworking and willing to face any challenge that comes my way.
            </p>
            
        </AboutTextContainer>
    </AboutMeSectionStyled>
    {/* <hr /> */}
    </>
}

