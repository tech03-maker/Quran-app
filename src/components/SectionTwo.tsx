import React from "react";
import ManPraying from "../assets/istockphoto-1370127245-612x612.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import "./SectionTwo.css";

const SectionTwo: React.FC = () => {
  return (
    <div className="container animate__animated animate__fadeInUp">
      <section className="mt-3">
        <div className="row">
          <div className="section_1 col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
            <h3>Navigate Our Page With Ease According to Your Preference</h3>
            <p>
              Click on your preferred choice below
              <FontAwesomeIcon className="arrow" icon={faArrowCircleDown} />
            </p>
            <div className="row">
              <div className="col bg-success overview">
                <a href="#">Al-Qur'an</a>
              </div>
              <div className="col overview">
                <a href="#">Hadith</a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col bg-success overview">
                <a href="#">Seerah</a>
              </div>
              <div className="col overview">
                <a href="#">Hisnul Muslim</a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col overview">
                <a href="#">Learn Arabic</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img className="w-100" src={ManPraying} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default SectionTwo;
