import React from "react";
import "../ComponentsCss/AboutUs.css";
import easyLogo from "../img/AboutUsLogo/easy.png";
import likeLogo from "../img/AboutUsLogo/like.png";
import safetyLogo from "../img/AboutUsLogo/safety.png";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-container">
        <div className="text-container">
          <p className="heading">About Us</p>
          <h2 className="sub-heading">About The ROADSERVE</h2>
          <p className="pera">
            Introducing Roadserve - a premier car assistance company dedicated
            to providing top-notch services to car owners across India. Whether
            it's a flat tire, a dead battery, or a breakdown, Roadserve's team
            of experienced professionals is always ready to provide prompt and
            reliable assistance. With a commitment to customer satisfaction and
            a focus on quality service, Roadserve is the go-to destination for
            all your car assistance needs.
          </p>
        </div>
        <div className="About-box">
          <div className="item-box" id="box-1">
            <img src={easyLogo} alt="" />
            <p className="pera">Easy on Pocket.</p>
          </div>
          <div className="blank"></div>
          <div className="item-box" id="box-1">
            <img src={likeLogo} alt="" />
            <p className="pera">Easy on Pocket.</p>
          </div>
          <div className="blank"></div>
          <div className="item-box" id="box-1">
            <img src={safetyLogo} alt="" />
            <p className="pera">Easy on Pocket.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
