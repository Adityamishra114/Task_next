import Image from "next/image";
import Carousel from "./Carousel";

const Leadership = () => {
  return (
    <div id="leadership" className="py-3 m-0 bg-white">
      <div className="container py-5 mx-auto px-8">
        <h2 className="text-5xl font-extralight pb-5 mt-5 mb-6 text-center">
          Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="col-md-6">
            <p className="text-lg sm:text-md font-extralight">
              As a Full Stack Developer, I am eager to build impactful web
              applications. Proficient in React, HTML5, CSS3, Node.js, MongoDB,
              Express.js I am dedicated to merging design and functionality for
              user-friendly solutions. Excited about collaborative learning and
              bringing a fresh perspective to innovative projects.I am also
              passionate about mentoring and training other developers to help
              them develop their skills and achieve their goals. With my ability
              to solve complex technical problems and think creatively, I am
              always up-to-date with the latest developments in React and
              related technologies, and am able to innovate and inspire a
              positive, collaborative work environment. I am also passionate
              about mentoring and training other developers to help them develop
              their skills and achieve their goals. With my ability to solve
              complex technical problems and think creatively, I am always
              up-to-date with the latest developments in React and related
              technologies, and am able to innovate and inspire a positive,
              collaborative work environment.
            </p>
          </div>
          <div className="col-md-6">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
