import React from "react";
import QuranLantern from "../assets/book-is-open-lamp-lit-lantern_1340-27882.avif";
import Hadith from "../assets/sunset-1080x675.jpg";
import HadithRemark from "../assets/kisspng-kaaba-al-masjid-an-nabawi-great-mosque-of-mecca-qu-bdexgroup-5b6fb972059353.3834564315340486260229.png";
import "./Cards.css";
import Seerah from "../assets/stories-from-the-seerah-صلى-الله-عليه-وسلم-J6o3O-BKQaY-yEY7w3z9hgA.300x300.jpg";
import Hisnul from "../assets/hisnul.jpg";
import Arabic from "../assets/arabic-1024x1024.jpg";
import { Link } from "react-router-dom";

const Cards: React.FC = () => {
  return (
    <div className="container mt-5 animate__animated animate__fadeInUp">
      <h3 className="source mt-5">The Primary Source of The Shari'ah</h3>
      <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card col-12 col-sm-12 mb-3 h-100">
                <img src={QuranLantern} className="card-image-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">The Quran</h5>
                  <p className="card-text">
                    "In the Name of Allah, the Most Gracious, the Most Merciful
                    - A Reminder of Divine Guidance and Compassion."
                  </p>
                  <Link to="/quran">
                    <button type="button">Start Your Journey</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card h-100 col-12 col-sm-12 col-md-">
                <img src={Hadith} className="card-image-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Hadith</h5>
                  <p className="card-text">
                    "Kindness is a mark of faith, and whoever is not kind has no
                    faith" is reported in Sahih Bukhari & Sahih Muslim."
                  </p>
                  <a href="#">
                    <button type="button">Start Your Journey</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 HadithRemark col-12 col-sm-12 col-md-6 col-lg-6">
          <img src={HadithRemark} alt="" />
        </div>
      </div>

      <div className="container">
        <h3 className="source mt-5">Extras</h3>
        <div className="row">
          <div className="col-4 col-12 col-sm-12 col-md-4 mb-3">
            <div className="card h-100">
              <img src={Seerah} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Seerah</h5>
                <p className="card-text">
                  "The Life of the Prophet Muhammad (Peace Be Upon Him) - A
                  Guiding Light for Humanity."
                </p>
                <a href="#">
                  <button type="button">Start Your Journey</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 col-12 col-sm-12 col-md-4 mb-3">
            <div className="card h-100">
              <img src={Hisnul} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Hisnul Muslim</h5>
                <p className="card-text">
                  "Hisnul Muslim - Fortress of the Believer: A Compilation of
                  Powerful Duas for Daily Protection and Guidance."
                </p>
                <a href="#">
                  <button type="button">Start Your Journey</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 col-12 col-sm-12 col-md-4">
            <div className="card h-100">
              <img src={Arabic} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Learn Arabic</h5>
                <p className="card-text">
                  "Embark on the Journey to Learn Arabic - Unlocking the
                  Language of the Quran and Hadith."
                </p>
                <a href="#">
                  <button type="button">Start Your Journey</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
