import Navbar from "./components/Navbar";
import "./components/NavbarStyle.css";
import "./components/HomePage.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import HomePage from "./components/HomePage";
import { faBars, faPhone, faLanguage } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faPhone, faLanguage);

function App() {
  return (
    <div>
      <Navbar />

      <HomePage />
    </div>
  );
}

export default App;
