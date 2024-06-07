import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src="/1627828268152.jpg" alt="First slide" className="w-full" />
        <div className="carousel-caption">
          <h3>First slide label</h3>
          <p>
            Home page of Task Management system where a user can manage all
            their tasks
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
