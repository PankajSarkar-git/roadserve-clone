import React, { useState } from "react";
import "../ComponentsCss/carousel.css";
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsGooglePlay} from "react-icons/bs"




const CarouselCard = ({ item, index, counter, pre, next }) => {
  // style={{left: `${index * 100}%`, transform: `translateX(-${counter * 100}%)`}}
  return (
    <div
      className="hero-Container-box"
      style={{
        left: `${index * 100}%`,
        transform: `translateX(-${counter * 100}%)`,
      }}
    >
      <div className="box">
        <div className="left-container">
          <div className="heading">
            <h1>{item.heading}</h1>
          </div>
          <div className="pera">
            <p>{item.pra}</p>
          </div>
          <div className="primary-button">
            <a href=""><BsGooglePlay className="google-play"/>Download for Android</a>
          </div>
        </div>
        <div className="right-container">
          <div className="img">
            <img src={item.img} alt="" />
          </div>
            <div className="btn">
              <BsFillArrowLeftCircleFill onClick={pre} className="slide-btn"/>
             <BsFillArrowRightCircleFill onClick={next} className="slide-btn"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
