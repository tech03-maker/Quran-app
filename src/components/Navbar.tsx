import "./NavbarStyle.css";
import Quran from "../assets/koran.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg align-center">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            <img className="logo" src={Quran} alt="" />
            Qur'an App
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
            <span className="navbar-toggler-icon"><FontAwesomeIcon icon="bars" /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            </ul>
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
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <li><hr className="dropdown-divider bg-white" /></li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
