import Navbar from "./components/Navbar";
import "./components/NavbarStyle.css";
import "./components/HomePage.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import HomePage from "./components/HomePage";
import { faBars, faPhone, faLanguage, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faPhone, faLanguage, faArrowCircleDown);
import SectionTwo from "./components/SectionTwo"

function App() {
  return (
    <div>
      <Navbar />

      <HomePage />

      <SectionTwo />
    </div>
  );
}

export default App;
