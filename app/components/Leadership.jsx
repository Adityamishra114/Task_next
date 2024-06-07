import Image from "next/image";

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
              positive, collaborative work environment.
            </p>
          </div>
          <div className="col-md-6">
            <div className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    className="d-block w-full"
                    src="https://media.assettype.com/filmcompanion%2F2024-04%2Fccbe7bc1-8a06-433b-abdd-24d0dab1ee98%2FScreenshot_2024_04_25_at_17_18_52.png?w=1200&auto=format%2Ccompress&fit=max"
                    alt="First slide"
                    width={300}
                    height={300}
                  />
                  <div className="carousel-caption">
                    <h3>First slide label</h3>
                    <p>
                      Home page of Task Management system where a user can
                      manage all their tasks
                    </p>
                  </div>
                </div>
                <div className="carousel-item ">
                  <Image
                    className="d-block w-full"
                    src="https://media.assettype.com/filmcompanion%2F2024-04%2Fccbe7bc1-8a06-433b-abdd-24d0dab1ee98%2FScreenshot_2024_04_25_at_17_18_52.png?w=1200&auto=format%2Ccompress&fit=max"
                    alt="First slide"
                    width={600}
                    height={400}
                  />
                  <div className="carousel-caption">
                    <h3>First slide label</h3>
                    <p>
                      Home page of Task Management system where a user can
                      manage all their tasks
                    </p>
                  </div>
                </div>
                <div className="carousel-item ">
                  <Image
                    className="d-block w-full"
                    src="https://media.assettype.com/filmcompanion%2F2024-04%2Fccbe7bc1-8a06-433b-abdd-24d0dab1ee98%2FScreenshot_2024_04_25_at_17_18_52.png?w=1200&auto=format%2Ccompress&fit=max"
                    alt="First slide"
                    width={300}
                    height={300}
                  />
                  <div className="carousel-caption">
                    <h3>First slide label</h3>
                    <p>
                      Home page of Task Management system where a user can
                      manage all their tasks
                    </p>
                  </div>
                </div>
                <div className="carousel-item ">
                  <Image
                    className="d-block w-full"
                    src="https://media.assettype.com/filmcompanion%2F2024-04%2Fccbe7bc1-8a06-433b-abdd-24d0dab1ee98%2FScreenshot_2024_04_25_at_17_18_52.png?w=1200&auto=format%2Ccompress&fit=max"
                    alt="First slide"
                    width={300}
                    height={300}
                  />
                  <div className="carousel-caption">
                    <h3>First slide label</h3>
                    <p>
                      Home page of Task Management system where a user can
                      manage all their tasks
                    </p>
                  </div>
                </div>
                
              </div>
              <button className="carousel-control-prev" type="button">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
