import Navbar from "./components/Navbar";
import "./components/NavbarStyle.css";
import "./components/HomePage.css";
import "./components/ButtonComponent";
import "./components/Button.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import HomePage from "./components/HomePage";
import {
  faBars,
  faPhone,
  faLanguage,
  faArrowCircleDown,
  faArrowCircleRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faPhone,
  faLanguage,
  faArrowCircleDown,
  faArrowCircleRight,
  faEnvelope
);
import SectionTwo from "./components/SectionTwo";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />

      <HomePage />

      <SectionTwo />

      <Cards />
    </div>
  );
}

export default App;
