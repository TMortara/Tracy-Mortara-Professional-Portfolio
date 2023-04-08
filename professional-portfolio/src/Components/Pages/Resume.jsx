import { SectionHeading } from "../styles/layout/SectionHeadings"
import { ResumeStyledSection, ResumeTextContainer } from "../styles/sections/ResumeSection"

export const Resume = () => {
    return <>
    <ResumeStyledSection id="resume">
    <SectionHeading>
        <h1>Resume</h1>
    </SectionHeading>
    <ResumeTextContainer>
        <p>If you like what you see, take a look at my resume!</p>
    </ResumeTextContainer>
    
    </ResumeStyledSection>
    <hr />
    </>
}