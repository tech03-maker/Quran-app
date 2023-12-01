import React from "react";
import QuranLantern from "../assets/book-is-open-lamp-lit-lantern_1340-27882.avif";
import Hadith from "../assets/sunset-1080x675.jpg";
import HadithRemark from "../assets/kisspng-kaaba-al-masjid-an-nabawi-great-mosque-of-mecca-qu-bdexgroup-5b6fb972059353.3834564315340486260229.png";
import "./Cards.css";

const Cards: React.FC = () => {
  return (
    <div className="container mt-5">
      <h3 className="source mt-5">The Primary Source of The Shari'ah</h3>
      <div className="row mt-4">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card col-12 col-sm-12 mb-3">
                <img src={QuranLantern} className="card-image-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">The Quran</h5>
                  <p className="card-text">
                    "In the Name of Allah, the Most Gracious, the Most Merciful
                    - A Reminder of Divine Guidance and Compassion."
                  </p>
                  <a href="#">
                    <button type="button">Start Your Journey</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card col-12 col-sm-12 col-md-">
                <img src={Hadith} className="card-image-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Hadith</h5>
                  <p className="card-text">
                    "Kindness is a mark of faith, and whoever is not kind has no
                    faith" is reported in Sahih Muslim & Sahih Muslim,
                  </p>
                  <a href="#">
                    <button type="button">Start Your Journey</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="HadithRemark col-12 col-sm-12 col-md-6 col-lg-6">
          <img src={HadithRemark} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
