import Nav from "../components/Nav";
import Hero from "../components/HeroSection";
import About from "../components/AboutSection";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Contact />
      <Gallery />
    </div>
  );
};

export default HomePage;
