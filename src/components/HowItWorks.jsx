import React from "react";
import "../ComponentsCss/howItWorks.css";
import { AiFillCar,AiFillCreditCard } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <div className="work-component">
      <div className="work-container">
        <div className="container-head">
          <p className="heading">How it works</p>
          <p className="sub-heading">How to get started with roadserve</p>
          <p className="sub-heading-2">
            Roadserve Provides 24x7 Roadside Assistance Accross PAN India
          </p>
        </div>
      </div>
      <div className="empty"></div>
      <div className="work-container-body">
        <div className="box-container">
          <div className="item box1">
            <div className="box-icon">
              <span className="badge">1</span>
              <AiFillCar className="icon"/>
            </div>
            <p className="box-titel">Get Subscribed to a Plan</p>
            <p className="box-description">
              Choose a Subscription plan that suits you the best
            </p>
          </div>
          <div className="item box2">
            <div className="box-icon">
              <span className="badge">2</span>
              <AiFillCreditCard className="icon"/>
            </div>
            <p className="box-titel">Get Subscribed to a Plan</p>
            <p className="box-description">
              Choose a Subscription plan that suits you the best
            </p>
          </div>
          <div className="item box3">
            <div className="box-icon">
              <span className="badge">3</span>
              <FaLocationDot className="icon"/>
            </div>
            <p className="box-titel">Get Subscribed to a Plan</p>
            <p className="box-description">
              Choose a Subscription plan that suits you the best
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
