import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    title: "mern-estate",
    description:
      "This repository contains Real Estate app built using Mern stack.",
    cloneLink: "https://mern-estate-4kb3.onrender.com/",
    repoLink: "https://github.com/Adityamishra114/Mern-Estate.git",
    languages: [
      {
        name: "JavaScript",
        percentage: "99.5%",
        url: "https://mern-estate-4kb3.onrender.com/",
      },
      {
        name: "other",
        percentage: "0.5%",
        url: "https://mern-estate-4kb3.onrender.com/",
      },
    ],
    stars: 0,
    updatedOn: "January 17, 2024",
  },
  {
    title: "Social Media ",
    description:
      "This repository contains Social Media Mern Application with Chat.",
    cloneLink: "https://mern-social-media-2uiv.onrender.com/",
    repoLink: "https://github.com/Adityamishra114/Mern_Social_Media.git",
    languages: [
      {
        name: "JavaScript",
        percentage: "99.3%",
        url: "https://mern-social-media-2uiv.onrender.com/",
      },
      {
        name: "other",
        percentage: "0.7%",
        url: "https://mern-social-media-2uiv.onrender.com/",
      },
    ],
    stars: 0,
    updatedOn: "December 7, 2023",
  },
  {
    title: "Art Gallery App",
    description:
      "This is simple art gallery design where you can go through different section of Art work and where you can hover on card and see the art details.",
    cloneLink: "https://adityamishra114.github.io/Artify/",
    repoLink: "https://github.com/Adityamishra114/Artify.git",
    languages: [
      {
        name: "JavaScript",
        percentage: "82.0%",
        url: "https://adityamishra114.github.io/Artify/",
      },
      {
        name: "CSS",
        percentage: "14.7%",
        url: "https://adityamishra114.github.io/Artify/",
      },
      {
        name: "HTML",
        percentage: "3.3%",
        url: "https://adityamishra114.github.io/Artify/",
      },
    ],
    stars: 0,
    updatedOn: "October 5, 2023",
  },
  {
    title: "React Login page",
    description: "Login Page Layout",
    cloneLink: "https://github.com/Adityamishra114/React-Login-page.git",
    repoLink: "https://github.com/Adityamishra114/React-Login-page.git",
    languages: [
      {
        name: "JavaScript",
        percentage: "82.3%",
        url: "https://github.com/Adityamishra114/React-Login-page.git",
      },
      {
        name: "CSS",
        percentage: "7.1%",
        url: "https://github.com/Adityamishra114/React-Login-page.git",
      },
      {
        name: "HTML",
        percentage: "10.6%",
        url: "https://github.com/Adityamishra114/React-Login-page.git",
      },
    ],
    stars: 0,
    updatedOn: "October 27, 2021",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-100 py-3">
      <div className="container py-5 mx-auto">
        <h2 className="text-center font-extralight text-5xl py-8 pb-8">
          Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-5 p-5">
          {projects.map((project, index) => (
            <div key={index} className="card shadow-lg p-5 bg-white rounded">
              <div className="card-body">
                <h5 className="card-title text-xl font-bold">
                  {project.title}
                </h5>
                <p className="card-text">{project.description}</p>
                <div className="d-grid gap-2 py-3 mb-2 d-md-block">
                  {project.cloneLink && (
                    <Link
                      href={project.cloneLink}
                      passHref
                      className="bg-transparent border border-black border-1 text-slate-800 font-extralight py-2 px-4 rounded   mx-2 my-2 hover:bg-slate-600 hover:text-white"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-xl md:text-xl text-slate-400 hover:text-white"
                      />{" "}
                      Clone Project
                    </Link>
                  )}
                  {project.repoLink && (
                    <Link
                      href={project.repoLink}
                      passHref
                      className="bg-transparent border border-black border-1 text-slate-800 font-extralight py-2 px-4 rounded  mx-2 my-2 hover:bg-slate-600 hover:text-white"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-xl md:text-xl text-slate-400 hover:text-white "
                      />{" "}
                      Repo
                    </Link>
                  )}
                </div>
                <hr />
                <div className="pb-3 py-4">
                  Languages:{" "}
                  {project.languages.length > 0 ? (
                    project.languages.map((lang, idx) => (
                      <Link
                        key={idx}
                        href={lang.url}
                        passHref
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mb-2 mt-2 font-bold text-gray-700 mr-2"
                      >
                        {`${lang.name}: ${lang.percentage}`}
                      </Link>
                    ))
                  ) : (
                    <p>Languages: code yet to be deployed.</p>
                  )}
                </div>
                <p className="card-text">
                  <Link
                    href={`https://github.com/Mohd-shahid-iqbal/${project.title}/stargazers`}
                    passHref
                    className="text-dark text-decoration-none"
                  >
                    <span className="text-dark card-link mr-4">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-xl md:text-xl text-slate-800 hover:text-slate-900"
                      />{" "}
                      Stars{" "}
                      <span className="badge badge-dark">{project.stars}</span>
                    </span>
                  </Link>
                  <small className="text-muted">
                    Updated on {project.updatedOn}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
