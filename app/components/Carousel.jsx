"use client";
import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      src: "/crud.png",
      alt: "Crud ",
      width: 700,
      height: 700,
      label: "Crud Operation",
      description: " CRUD stands for Create, Read, Update, and Delete.",
    },
    {
      src: "/estate.png",
      alt: "Estate",
      width: 700,
      height: 700,
      label: "Real Estate",
      description: "User Can add and sell property",
    },
    {
      src: "/netflix.png",
      alt: "Netflix",
      width: 700,
      height: 700,
      label: "Netflix Clone",
      description: "Netflix Clone",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel slide relative">
      <div className="carousel-inner relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === activeIndex ? "active" : "hidden"
            } w-full transition-all duration-500 ease-in-out`}
          >
            <Image
              className="d-block w-full"
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
            />
            <div className="carousel-caption absolute bottom-0 left-0 text-center right-0 bg-transparent bg-opacity-50 p-4 text-white">
              <h3>{slide.label}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
        onClick={handlePrev}
      >
        <span
          className="carousel-control-prev-icon bg-black bg-opacity-50 inline-block p-2 rounded-full"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
        onClick={handleNext}
      >
        <span
          className="carousel-control-next-icon bg-black bg-opacity-50 inline-block p-2 rounded-full"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
