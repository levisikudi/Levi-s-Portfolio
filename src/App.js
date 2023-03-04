import './App.css';
import About from './components/about';
import Contact from './components/contact_form';
import Footer from './components/footer';
import HeroSection from './components/hero_section';
import Navbar from './components/navbar';
import Projects from './components/projects_section';
import Skills from './components/skills_section';

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
      
        
    
      
