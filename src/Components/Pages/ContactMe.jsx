import { ContactForm } from "../HelperComponent/ContactForm";
import { SectionHeading } from "../styles/layout/SectionHeadings";
import { ContactStyledSection } from "../styles/sections/ContactMeSection";

export const Contact = () => {
  return (
    <>
      <ContactStyledSection id="contact">
        <SectionHeading>
          <h1>Contact Me</h1>
          <p>Let's discuss how I can help you meet your goals!</p>
        </SectionHeading>

        <ContactForm />
      </ContactStyledSection>
    </>
  );
};
