import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ServicePage from './pages/ServicePage';
import ContactMe from './components/Contactme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Education from './components/Education';
import ProjectPage from './pages/ProjectPage';
import DakTech from './pages/PortfolioPage/DakTech';
import EasyFarm from './pages/PortfolioPage/EasyFarm';
import SpoonFlow from './pages/PortfolioPage/SpoonFlow';
import Birdseed from './pages/PortfolioPage/Birdseed';
import FarmWebsite from './pages/PortfolioPage/FarmWebsite';
import Wynot from './pages/PortfolioPage/Wynot';
import CoffeeCafe from './pages/PortfolioPage/CoffeeCafe';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          {/* <Route index  element={<Home />} /> */}

          <Route exact path="/" element={<Home />} />
          <Route  path="/service" element={<ServicePage />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/works" element={<Education />} />
          <Route  path="/project" element={<ProjectPage />} />
          <Route  path="/project/daktech" element={<DakTech />} />
          <Route  path="/project/easyfarm" element={<EasyFarm />} />
          <Route  path="/project/spoonflow" element={<SpoonFlow />} />
          <Route  path="/project/birdseed" element={<Birdseed />} />
          <Route  path="/project/farm_accounting" element={<FarmWebsite />} />
          <Route  path="/project/wynot_saloon" element={<Wynot />} />
          <Route  path="/project/coffee_cafe_app" element={<CoffeeCafe />} />

      </Routes>
        <ContactMe/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
