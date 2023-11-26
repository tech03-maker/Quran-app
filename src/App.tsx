// import { Navbar } from "./components/Navbar"
import Navbar from "./components/Navbar";
import "./components/NavbarStyle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faLanguage } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faPhone, faLanguage);

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
