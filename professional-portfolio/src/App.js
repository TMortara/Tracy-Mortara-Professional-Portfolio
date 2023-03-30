// import pages
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';


import Navbar from './Components/Navbar';
import ButtonComponent from "./Components/HelperComponent/Button"

import './App.css';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <main>
        <Container>
     <Navbar />
     {/* <AboutMe />
     <Portfolio />
     <Resume />
     <Contact /> */}
     </Container>
     </main>
    </div>
  );
}


const Container = styled.div`
height: 100vh;
background: #67BC98;
`
export default App;
