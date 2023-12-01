import React from "react";
import "./HomePage.css";
import myImage from "../assets/png-transparent-al-quran-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const HomePage: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row mt-5">
          <div className=" hero_1 col-12 col-sm-12 col-md-6 col-lg-6">
            <h3>
              Live a Daily Routine With The Muslim's Handbook. Add On Your
              Daily Routine
            </h3>
            <p className="mt-3">
              <blockquote>
                "Indeed, your Lord is Allah,who created the heavens and te earth
                in six days and then established Himself above the Throne,
                arranging the matter(of His creation). There is no intercessor
                except after His permission.That is Allah, your Lord, so worship
                Him, Then will you not remember?(Qur'an 10 : Verse 3)"
              </blockquote>
            </p>
              <p>Let The Journey Begin...</p>
            <div className="btns d-flex w-75 row">
              <div className="col">
                <a href="#">
                  <button type="button" className="w-100">
                    Bismillahi-Rahmaani-Raheem
                    <FontAwesomeIcon
                      className="arrow_icon"
                      icon={faArrowCircleRight}
                    />
                  </button>
                </a>
              </div>
              {/* <div className="col">
                <a href="#">
                  <button type="button" className="btn-2 bg-transparent w-100">
                    Explore
                  </button>
                </a>
              </div> */}
            </div>
          </div>

          <div className="mt-2 col-12 col-sm-12 col-md-6 col-lg-6">
            <img className="hero-img" src={myImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
