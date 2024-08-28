// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Components
// import Hero from "../components/hero/Hero";
// Styles
import "./HomePublic.scss";
// Assets
// TODO: Add assets here. Left as an example
// import vendor from "../../../assets/img/contractor.svg";

const HomePublic: React.FC = () => {
  return (
    <section>
      <div className="container">
        {/* Hero */}
        <div className="row">
          <div className="col-12 text-center">
            <h1>Home Public</h1>
          </div>
        </div>
        {/* Hero */}

        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 offset-md-4 offset-lg-4 text-center">
            <div className="row">
              <div className="col-6">
                <Link to="/users/login" className="btn btn-primary me-2 w-100">
                  Login
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to="/users/registration"
                  className="btn btn-warning ms-2 w-100"
                >
                  Registration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePublic;
