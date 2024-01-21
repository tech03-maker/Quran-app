// import React from 'react'
import "./reciters.css";
import reciterImage from "../assets/1000341846-removebg-preview.png";
import reciterImage2 from "../assets/1000341847-removebg-preview.png";
import reciterImage3 from "../assets/images (3).png";

const Reciters = () => {
  return (
    <div className="mt-5">
      <div className="container mt-5 reciters">
        <h3 className="fw-bold">
          Listen to The Qur'an by Your Preferred Reciters
        </h3>
        <a className="link" href="#">
          View all Reciters
        </a>

        <div className="row mt-3">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card mb-3">
              <img className="card-img-top" src={reciterImage} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Muhammad Jum'ah</h4>
                
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card mb-3">
              <img className="card-img-top" src={reciterImage2} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Muhammad Jum'ah</h4>
                
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card mb-3">
              <img className="card-img-top" src={reciterImage3} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Muhammad Jum'ah</h4>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card mb-3">
              <img className="card-img-top" src={reciterImage} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Muhammad Jum'ah</h4>
                
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card mb-3">
              <img className="card-img-top" src={reciterImage2} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Muhammad Jum'ah</h4>
                
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card mb-3">
              <img className="card-img-top" src={reciterImage3} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Muhammad Jum'ah</h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reciters;
