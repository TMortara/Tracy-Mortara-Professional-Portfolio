import { AboutHeading, AboutMeSectionStyled, AboutTextContainer, Headshot, HeadshotBorder, HeadshotBorderTwo, HeadshotContainer } from "../styles/sections/AboutMeSection"

export const AboutMe = () => {
    return <>
    <AboutMeSectionStyled id="aboutme">
        <HeadshotContainer>
            <Headshot src="./images/headshot.jpg" alt="Tracy Mortara Headshot"/>
            <HeadshotBorder />
            <HeadshotBorderTwo />
        </HeadshotContainer>
        <AboutTextContainer>
            <AboutHeading>
                Hi, my name is <span>Tracy Mortara</span>
            </AboutHeading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere aliquid iusto aliquam ducimus, aspernatur maxime tempora officiis voluptatum eos iure velit veritatis nesciunt tenetur natus nihil provident. Assumenda, iure.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit facere aliquid iusto aliquam ducimus, aspernatur maxime tempora officiis voluptatum eos iure velit veritatis nesciunt tenetur natus nihil provident. Assumenda, iure.
            </p>
            
        </AboutTextContainer>
    </AboutMeSectionStyled>
    <hr />
    </>
}

