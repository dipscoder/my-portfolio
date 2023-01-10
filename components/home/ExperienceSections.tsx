import React, { useState } from "react";
import SectionTitle from "../global/SectionTitle";

const ExperienceData = [
  {
    id: 0,
    company: "CultureX",
    title: "Fullstack SDE",
    date: "October 2021 - Present",
    content: [
      {
        title: "Frontend:",
        description:
          "Developed a Frontend structure which includes choosing appropriate technologies and frameworks, creating a scalable and maintainable codebase, and ensuring that the user interface was intuitive and user-friendly.",
      },
      {
        title: "Backend:",
        description:
          "Developed the Backend Architecture using Sequelize ORM and maintained an extensive database, configuring servers, reducing the maintenance cost by 15%.",
      },
      {
        title: "Deployment:",
        description:
          "Reduced cost to the company by 50% by shifting client services from AWS EBS to S3 Buckets & Cloudfront.",
      },
      {
        title: "Leadership:",
        description:
          "Trained and supervised a team of 10 developers across 4 locations.",
      },
      {
        title: "Technologies:",
        description:
          "React, ExpressJS, NodeJS, Firebase, MySQL, Sequelize, TypeScript, AWS, Tailwind CSS",
      },
    ],
  },
  {
    id: 1,
    company: "Academix",
    title: "Tech Lead",
    date: "February 2021 - June 2021",
    content: [
      {
        title: "Frontend:",
        description:
          "Developed a Frontend structure which includes choosing appropriate technologies and frameworks, creating a scalable and maintainable codebase, and ensuring that the user interface was intuitive and user-friendly.",
      },
      {
        title: "Backend:",
        description:
          "Developed the Backend Architecture using Sequelize ORM and maintained an extensive database, configuring servers, reducing the maintenance cost by 15%.",
      },
      {
        title: "Deployment:",
        description:
          "Reduced cost to the company by 50% by shifting client services from AWS EBS to S3 Buckets & Cloudfront.",
      },
      {
        title: "Leadership:",
        description:
          "Trained and supervised a team of 10 developers across 4 locations.",
      },
    ],
  },
  {
    id: 2,
    company: "CodeForCause",
    title: "Fullstack SDE",
    date: "June 2021 - September 2021",
    content: [
      {
        title: "Frontend:",
        description:
          "Developed a Frontend structure which includes choosing appropriate technologies and frameworks, creating a scalable and maintainable codebase, and ensuring that the user interface was intuitive and user-friendly.",
      },
      {
        title: "Backend:",
        description:
          "Developed the Backend Architecture using Sequelize ORM and maintained an extensive database, configuring servers, reducing the maintenance cost by 15%.",
      },
    ],
  },
  {
    id: 3,
    company: "Halfcute",
    title: "Fullstack SDE",
    date: "June 2021 - September 2021",
    content: [
      {
        title: "Frontend:",
        description:
          "Developed a Frontend structure which includes choosing appropriate technologies and frameworks, creating a scalable and maintainable codebase, and ensuring that the user interface was intuitive and user-friendly.",
      },
    ],
  },
];

const ExperienceSections = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col text-left justify-between pt-6 relative">
      <div id="learnmore">
        <SectionTitle title="My Experience" />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mb-10 flex flex-row text-center text-fun-gray text-xl overflow-x-auto md:w-1/5 md:flex-col md:items-start md:text-start md:mr-10">
          {ExperienceData.map((item, index) => (
            <div
              key={index}
              className={`${
                activeStep === index
                  ? "active-tab border-fun-pink"
                  : "border-fun-gray"
              } w-full p-4 cursor-pointer border-b-2 md:border-l-2 md:border-b-0 hover:bg-[#112240] hover:text-fun-pink`}
              onClick={() => setActiveStep(index)}
            >
              {item.company}
            </div>
          ))}

          {/* <div className={`${activeStep === 0 ? 'active-tab border-fun-pink' : "border-fun-gray"} pl-4 cursor-pointer border-l-4`} onClick={() => setActiveStep(0)}>Culturex</div>
          <div className={`${activeStep === 1 ? 'active-tab border-fun-pink' : "border-fun-gray"} pl-4 cursor-pointer border-l-4`} onClick={() => setActiveStep(1)}>CodeForCause</div>
          <div className={`${activeStep === 2 ? 'active-tab border-fun-pink' : "border-fun-gray"} border-l-4 pl-4 cursor-pointer`} onClick={() => setActiveStep(2)}>Halfcute</div> */}
        </div>

        {/* content */}

        {ExperienceData.map((item, index) => (
          <div
            key={index}
            className={`${
              activeStep === index
                ? "active-content animate__animated animate__fadeIn"
                : "hidden"
            }  md:w-4/5`}
          >
            <h1 className="text-2xl">
              {item.title}{" "}
              <span className="text-fun-pink">@{item.company}</span>{" "}
            </h1>
            <p className="text-base text-fun-gray-light mt-2">{item.date}</p>
            <ul className="text-fun-gray list-inside">
              {item.content.map((content, index) => (
                <li key={index} className="flex items-start text-base mt-4">
                  <img
                    src="/static/icons/right-arrow.svg"
                    className="w-5 mt-1"
                    alt="CultureX Logo"
                  />
                  <span>
                    <span className="text-fun-pink">{content.title}</span>{" "}
                    {content.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSections;
