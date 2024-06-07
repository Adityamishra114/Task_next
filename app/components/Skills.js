import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("hard-skills");

  return (
    <div className="container w-full mx-auto py-5" id="skills">
      <div className="py-5 w-full md:px-12 px-6 container ">
        <h2 className="text-5xl font-extralight mb-8 pb-5 text-center">
          Skills
        </h2>
        <ul
          className="flex w-full justify-around text-center mx-auto md:px-14 px-6 py-4 "
          role="tablist"
        >
          <li
            className=" justify-center text-xs md:text-lg font-extralight  text-center items-center w-1/2  "
            role="presentation"
          >
            <button
              type="button"
              id="skills-tabs-tab-hard-skills"
              role="tab"
              data-rr-ui-event-key="hard-skills"
              aria-controls="skills-tabs-tabpane-hard-skills"
              aria-selected={activeTab === "hard-skills"}
              className={`px-4 py-2 border border-slate-100 justify-center p-3  text-center items-center w-full ${
                activeTab === "hard-skills"
                  ? "border-b-0 border-slate-100 text-blue-800"
                  : "border-t-0 border-l-0 border-r-0 border-slate-100"
              } focus:outline-none`}
              onClick={() => setActiveTab("hard-skills")}
            >
              Technical Skills
            </button>
          </li>
          <li
            className=" justify-center text-xs md:text-lg font-extralight text-center items-center w-1/2 "
            role="presentation"
          >
            <button
              type="button"
              id="skills-tabs-tab-soft-skills"
              role="tab"
              data-rr-ui-event-key="soft-skills"
              aria-controls="skills-tabs-tabpane-soft-skills"
              aria-selected={activeTab === "soft-skills"}
              className={`px-4 py-2 border border-slate-100 justify-center p-3  text-center items-center w-full ${
                activeTab === "soft-skills"
                  ? "border-b-0 border-slate-100  text-blue-800"
                  : "border-t-0 border-l-0 border-r-0 border-slate-100"
              } focus:outline-none`}
              onClick={() => setActiveTab("soft-skills")}
            >
              Soft Skills
            </button>
          </li>
        </ul>
        <div className=" mx-auto w-full md:px-12 px-6 py-4 mt-4 ">
          <div
            role="tabpanel"
            aria-labelledby="skills-tabs-tab-hard-skills"
            className={`tab-pane ${
              activeTab === "hard-skills" ? "block" : "hidden"
            }`}
          >
            <div className="pt-2 flex flex-wrap">
              <SkillItem skill="React" level="80" />
              <SkillItem skill="JavaScript" level="80" />
              <SkillItem skill="Node Js" level="65" />
              <SkillItem skill="HTML/CSS" level="55" />
              <SkillItem skill="github" level="80" />
              <SkillItem skill="Mongodb" level="65" />
            </div>
          </div>
          <div
            role="tabpanel"
            aria-labelledby="skills-tabs-tab-soft-skills"
            className={`tab-pane ${
              activeTab === "soft-skills" ? "block" : "hidden"
            }`}
          >
            <div className="pt-3 px-1 flex flex-wrap">
              <SkillItem skill="Goal-Oriented" level="80" />
              <SkillItem skill="Collaboration" level="90" />
              <SkillItem skill="Positivity" level="75" />
              <SkillItem skill="Adaptability" level="85" />
              <SkillItem skill="Problem Solving" level="75" />
              <SkillItem skill="Empathy" level="90" />
              <SkillItem skill="Organization" level="70" />
              <SkillItem skill="Creativity" level="90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ skill, level }) => (
  <div className="w-full md:w-1/2 p-2">
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <div className="progress-bar-animation progress h-4 bg-gray-200 rounded">
        <div
          role="progressbar"
          className="progress-bar bg-blue-600 h-4 rounded transition-all duration-500 ease-in-out"
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  </div>
);

export default Skills;
