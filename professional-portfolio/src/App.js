// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { GlobalStyles } from './Components/styles/Global.styled';
import { ThemeProvider } from "styled-components";

// Import Pages
// import AboutMe from './Pages/AboutMe';
// import Projects from './Pages/Projects';
// import Resume from './Pages/Resume';
// import Contact from './Pages/ContactMe';

// // Import Components
// // import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer';
// import ButtonComponent from "./Components/HelperComponent/Button";


// // import PageWrapper from "./Components/HelperComponent/PageWrapper";

// import HeroComponent from './Components/HelperComponent/Hero';

import { NavBar } from "./Components/Navbar/NavBar";
import { Hero } from './Components/HelperComponent/Hero';
import { Container } from './Components/styles/layout/Container.styled';
import { AboutMe } from './Components/Pages/AboutMe';
import { Projects } from './Components/Pages/Projects';
import { Contact } from './Components/Pages/ContactMe';
import { Resume } from './Components/Pages/Resume';
// import { Hero } from './Components/HelperComponent/Hero';


// function Layout (props){
//   return <><GlobalStyles />
//     <NavBar />
//     <Outlet />

//     {/* <HeroComponent /> */}
//     <Footer />
//   </>
// }

const App = () => {
  
  const theme = {
    colors: {
      white: "rgba(240, 240, 242)",
      darkGold: "rgba(191, 126, 4)",
      gold: "rgba(191,144,4)",
      darkGreen: "rgba(38, 38, 37)",
      green: "rgba(63, 78, 79)",
      salmon: "rgba(242, 152, 99)",
      mauve: "rgba(141,89,90)",
      lightPink: "rgba(242,195,167)"
    },
    mobile: "768px",
    transition: "all 400ms ease-in-out"
  }

  return (
    <>
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <Container>
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
      </Container>

    {/* <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='aboutme' index element={<AboutMe />}/>
        <Route path='portfolio' element={<Projects />}/>
        <Route path='resume' element={<Resume />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='*' element={<h1>Route does not current exist</h1>}/>
        </Route>
     </Routes>
     </BrowserRouter> */}
     </ThemeProvider>
     </>
  );
}

export default App;
