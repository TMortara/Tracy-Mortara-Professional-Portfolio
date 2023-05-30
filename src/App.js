import { GlobalStyles } from "./Components/styles/Global.styled";
import { ThemeProvider } from "styled-components";

import { NavBar } from "./Components/Navbar/NavBar";
import { Hero } from "./Components/HelperComponent/Hero";
import { Container } from "./Components/styles/layout/Container.styled";
import { AboutMe } from "./Components/Pages/AboutMe";
import { Projects } from "./Components/Pages/Projects";
import { Contact } from "./Components/Pages/ContactMe";
import { Foooter } from "./Components/HelperComponent/Footer";

const App = () => {
  const theme = {
    colors: {
      white: "rgba(240, 240, 242)",
      darkGold: "rgba(191, 126, 4)",
      gold: "rgb(191,144,4)",
      darKGreen: "rgb(44, 54, 57)",
      green: "rgba(63, 78, 79)",
      salmon: "rgba(242, 152, 99)",
      mauve: "rgba(141,89,90)",
      beige: "rgb(216, 188, 171)",
      cream: "rgb(220, 215, 201)",
    },
    mobile: "768px",
    transition: "all 400ms ease-in-out",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <Hero />
        <Container>
          <AboutMe />
          <Projects />
          <Contact />
          <Foooter />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
