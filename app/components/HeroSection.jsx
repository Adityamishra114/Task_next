"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const phrases = ["Passionate about changing the world with technology."];

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex === phrases[0].length) {
        clearInterval(interval);
        return;
      }

      currentText += phrases[0][currentIndex];
      setText(currentText);
      currentIndex++;
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="home"
      className=" py-3 min-h-screen flex items-center justify-center bg-transparent text-white gradient-bg"
    >
      <div className="container py-5 text-center hero-content  sm:-mt-18">
        <h1 className="text-5xl md:text-7xl mt-12  font-bold ">
          Aditya Kumar Mishra
        </h1>
        <div className="text-xl font-thin text-center mt-4">{text}</div>
        <div className="flex justify-center space-x-4 mt-10 mb-10">
          <Link
            href="https://github.com/Adityamishra114"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My github"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl md:text-5xl text-white hover:text-black"
            />
          </Link>
          <Link
            href="https://github.com/Adityamishra114"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My facebook"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-4xl md:text-5xl text-white hover:text-black"
            />
          </Link>
          <Link
            href="https://github.com/Adityamishra114"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My instagram"
          >
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="text-4xl md:text-5xl text-white hover:text-black"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aditya-kumar-mishra-a4a75613b/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-4xl md:text-5xl text-white hover:text-black"
            />
          </Link>
        </div>
        <button
          className="bg-transparent hover:bg-white text-white-300 text-lg font-semibold hover:text-slate-700 py-2 px-4 border border-white-500 hover:border-transparent rounded"
          href="#aboutme"
          role="button"
          aria-label="Learn more about me"
        >
          More about me
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
