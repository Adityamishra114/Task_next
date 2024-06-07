import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-auto py-5 text-center bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extralight pb-3 mt-8 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-center mt-3 mb-3 pb-3">
          Im currently looking for full-time React Developer/Frontend Developer
          opportunities! If you know of any positions available, if you have any
          questions, or if you just want to say hi, please feel free to email me
          at,{" "}
          <Link
            className="text-blue-500 hover:underline"
            href="mailto:amishradbg1997@gmail.com"
          >
            amishradbg1997@gmail.com
          </Link>
          .
        </p>
        <p>
          <FontAwesomeIcon icon={faCodepen} /> with{" "}
          {/* <FontAwesomeIcon  className="icon" icon={faHeart} /> */}
          by{" "}
          <Link
            rel="noopener"
            href="https://adityamishra114.github.io/Task_next/"
            aria-label="My GitHub"
            className="inline-block bg-black text-white px-2 py-1 rounded"
          >
            Aditya Kumar Mishra
          </Link>{" "}
          using <FontAwesomeIcon icon={faReact} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
