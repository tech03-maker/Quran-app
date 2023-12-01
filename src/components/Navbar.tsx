import "./NavbarStyle.css";
import Quran from "../assets/IMG-20231130-WA0041.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSelector from "./LanguageSelector";

function Navbar() {
  return (
    <div>
      <div className="above">
        <div className="container text-white p-3 justify-center">
          <div className="row">
            {/* <span className="col-lg-6 col-md-6 col-sm-12">
              <FontAwesomeIcon icon="phone" />
              +234 000 000 0000
            </span> */}
            <span className="col-lg-12 col-md-12 col-sm-12">
              <LanguageSelector />
            </span>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg align-center">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            <img className="logo" src={Quran} alt="" />
            Muslim Handbook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon icon="bars" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" role="search">
              <li className="nav-item ">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Qur'an
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Hadith
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Arabic Learning
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Hadith
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Extras
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Prayer Times
                    </a>
                    <li>
                      <hr className="dropdown-divider bg-white" />
                    </li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Adhkar
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider bg-white" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Qiblah
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <a href="#">
              <button className="donate" type="submit">
                Donate
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
