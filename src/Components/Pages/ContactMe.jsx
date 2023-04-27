import { ContactForm } from "../HelperComponent/ContactForm";
import { SectionHeading } from "../styles/layout/SectionHeadings";
import { ContactFormWrapper, ContactStyledSection } from "../styles/sections/ContactMeSection";

export const Contact = () => {
    return <>
    <ContactStyledSection id="contact">
        <SectionHeading>
        <h1>Let's Connect</h1>
        <p>I cannot wait to hear from you!</p>
        </SectionHeading>
        
        {/* <div> */}
            {/* <div></div>
            <div></div> */}
            <ContactForm />
        {/* </div> */}
    </ContactStyledSection>
    </>
}

