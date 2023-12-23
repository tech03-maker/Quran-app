import "./components/ButtonComponent";
import { library } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./components/Navbar";
import "./components/firebase";
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

import { Routes, Route } from "react-router-dom";
import QuranPage from "./components/QuranPage";
import { HomePage } from "./components/HomePage";
import QuranDetails from "./components/QuranDetails";

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quran" element={<QuranPage />} />
        <Route path="/surah/:id" Component={QuranDetails} />
        {/* <Route path="/" element={<Cards />} /> */}
      </Routes>
    </div>
  );
}

export default App;
