import React from "react";
import "./HomePage.css";
import myImage from "../assets/png-transparent-al-quran-removebg-preview.png";

const HomePage: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row mt-5">
          <div className=" hero_1 col-12 col-sm-12 col-md-6 col-lg-6">
            <h3>
              Live a Daily Routine With The Qur'an. Add On Your Daily Routine
            </h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nisi
              error saepe veritatis itaque nobis aspernatur. Ab reiciendis
              repellendus quae. Eius in consequatur aut! Sunt enim laboriosam
              est nam soluta?
            </p>
            <div className="btns d-flex w-75 row">
              <div className="col">
                <a href="#">
                  <button type="button" className="w-100">Read Qur'an</button>
                </a>
              </div>
              <div className="col">
                <a href="#">
                  <button type="button" className="btn-2 bg-transparent w-100">Explore</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img src={myImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
