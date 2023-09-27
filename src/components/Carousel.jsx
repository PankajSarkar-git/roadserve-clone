import React, { useEffect, useState } from "react";
import img1 from "../img/carousel/img1.png";
import img2 from "../img/carousel/img2.png";
import img3 from "../img/carousel/img3.png";
import CarouselCard from "../components/CarouselCard";
import "../ComponentsCss/carousel.css"

const Carousel = () => {
  const [counter, setCounter] = useState(0);
  const pre = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(2);
    }
  };
  const next = () => {
    if (counter < 2) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 3000);
    return () => clearInterval(interval);
  }, [counter]);

  const carouselItem = [
    {
      heading: "PLANNING A LONG ROADTRIP WITH FRIENDS OR FAMILY?",
      pra: "With Roadserve, you’re never required to worry about car breakdown related problems. Our mechanics are always there for you in case of a breakdown or an emergency",
      img: img2,
    },
    {
      heading: "Facing a hustle on the road with your car?",
      pra: "Roadserve is a leading company providing reliable car assistance services throughout India. With a team of highly skilled professionals and a 24/7 helpline.",
      img: img3,
    },
    {
      heading: "Roadserve is the way",
      pra: "Roadserve gives you the confidence to ride to anywhere in PAN India without ever being worried about a flat tyre or battery issue or any kind of breakdowns that may happen in a roadtrip",
      img: img1,
    },
  ];

  // style={{transform: `translateX(${counter * 100}%)`}}
  return (
    <div className="carousel-contaer">
    <div className="carousel"> 
      <div className="main">
        {carouselItem.map((item, index) => {
          return (
            <CarouselCard item={item} key={index} index={index} counter={counter} pre={pre} next={next} />
          );
        })}
      
      </div>
    </div>
    </div>
  );
};

export default Carousel;
