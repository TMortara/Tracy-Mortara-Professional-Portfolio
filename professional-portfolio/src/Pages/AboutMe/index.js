import PageWrapper from "../../Components/HelperComponent/PageWrapper";
import ButtonComponent from "../../Components/HelperComponent/Button";
import HeroComponent from "./Components/Hero";

const AboutMe = (props) => {
    console.log(props)
    return (
        <PageWrapper>
            <HeroComponent/>
            <ButtonComponent isBig={true}/>
        </PageWrapper>
    )
}

export default AboutMe;