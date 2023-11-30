import React from "react";
import QuranLantern from "../assets/book-is-open-lamp-lit-lantern_1340-27882.avif";

const Cards: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card col-12 col-sm-12 mb-3">
                <img src={QuranLantern} className="card-image-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card col-12 col-sm-12 col-md-">
                <img src={QuranLantern} className="card-image-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
              <div className="card col-12 col-sm-12 col-md-">
                <img src={QuranLantern} className="card-image-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card col-12 col-sm-12 col-md-">
                <img src={QuranLantern} className="card-image-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
