import PageWrapper from "../Components/HelperComponent/PageWrapper";
import ButtonComponent from "../Components/HelperComponent/Button";
import HeroComponent from "../Components/HelperComponent/Hero";

const AboutMe = (props) => {
    console.log(props)
    return (<h1>About Page</h1>
        // <PageWrapper>
        //     <HeroComponent/>
        //     <ButtonComponent isBig={true}/>
        // </PageWrapper>
    )
}

export default AboutMe;