import Nav from "../components/Nav";
import Hero from "../components/HeroSection";
import About from "../components/AboutSection";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import FooterSection from '../components/FooterSection';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <FooterSection />
    </div>
  );
};

export default HomePage;
