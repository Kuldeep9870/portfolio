
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio'
import Experience from './components/Experience';
import Contact from './components/Contact';
import Contactme from './components/Contactme';

function App() {
  return (
    <div className="App  flex flex-col">
    <NavBar />
    <Home/> 
    <SocialLinks />
    <About />
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Contactme/>
    </div>
  );
}

export default App;
