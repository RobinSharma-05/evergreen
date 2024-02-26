import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Bonded from "./components/Bonded";
import Chicago from "./components/Chicago";
import Services from "./components/Services";
import Happy from "./components/Happy";
import FooterSection from "./components/FooterSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "./components/Sliderr";
import Contact from "./components/Contact";
import Preloader from "./components/PreLoader";
import Backtotop from "./components/BackToTop";

function App() {
  return (
    <div>
      <Preloader />
      <HeroSection />
      <Bonded />
      <Chicago />
      <Services />
      <Sliderr />
      <Happy />
      <Contact />
      <FooterSection />
      <Backtotop />
    </div>
  );
}

export default App;
