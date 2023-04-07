import { ContactForm } from "../HelperComponent/ContactForm"
import { SectionHeading } from "../styles/layout/SectionHeadings"
import { ContactStyledSection } from "../styles/sections/ContactMeSection"

export const Contact = () => {
    return <>
    <ContactStyledSection>
        <SectionHeading>
        <h1>Let's Connect</h1>
        </SectionHeading>
        
        <p>Looking forward to hearing from you!</p>
        

    <ContactForm />
        
    </ContactStyledSection>

    </>
}

