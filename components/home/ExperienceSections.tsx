import React, { useState } from "react";
import SectionTitle from "../global/SectionTitle";

const ExperienceData = [
  {
    id: 0,
    company: "CultureX",
    title: "Software Developer",
    date: "October 2021 - Present",
    content: [
      {
        title: "Frontend",
        points: [
          "UI/UX Overhaul: Collaborated with the design team to radically improve user experience across multiple products. Optimized React code to cut down on unnecessary re-renders, resulting in a 30% uplift in user engagement.",
        ],
      },
      {
        title: "Backend",
        points: [
          "API Optimization: Engineered high-performing APIs that reduced response times by 90% and optimized upload times for large datasets by 98%.",
          // "Scalable Architecture: Transformed complex business requirements into a scalable architecture, fast-tracking the fulfillment of various business needs.",
          "Key Projects: Developed pivotal tools such as the Campaign Proposal Tool (helping marketing agencies generate AI-driven proposals), Global Storage System (maintaining a global repository of creator datasets), and Global Search (enabling insights retrieval from a 100M+ creator database).",
        ],
      },
      {
        title: "Deployment & DevOps",
        points: [
          "DevOps Leadership: Directed and managed the entire DevOps process, from deployment to architecture setup. Successfully reduced the company's AWS costs by 50-60% through various practices and tools.",
          "CI/CD Mastery: Orchestrated the entire Continuous Integration and Continuous Deployment (CI/CD) process using GitHub Actions and AWS, slashing deployment time by 50%.",
        ],
      },
      {
        title: "Leadership & Team Management",
        points: [
          "HR Sprint: Led an aggressive recruitment sprint that added 10 top-tier developers to the team in just 15 days.",
          "Mentorship: Managed and mentored a diverse team of up to 8 developers, ensuring timely delivery of features and fixes with a 98% approval rate on pull requests. Reviewed over 100+ PRs.",
        ],
      },
      {
        title: "Tech Stack",
        points: [
          "React, ExpressJS, NodeJS, MySQL, Sequelize, Mongodb, Mongoose, JavaScript, TypeScript, Firebase, AWS, Tailwind CSS.",
        ],
      },
    ],
  },
  {
    id: 1,
    company: "Academix",
    title: "Fullstack Developer",
    date: "February 2021 - June 2021",
    content: [
      {
        title: "Frontend",
        points: [
          "Developed a Frontend structure which includes choosing appropriate technologies and frameworks, creating a scalable and maintainable codebase, and ensuring that the user interface was intuitive and user-friendly.",
        ],
      },
      {
        title: "Backend",
        points: [
          "Developed the Backend Architecture using Sequelize ORM and maintained an extensive database, configuring servers, reducing the maintenance cost by 15%.",
        ],
      },
      {
        title: "Deployment",
        points: [
          "Reduced cost to the company by 50% by shifting client services from AWS EBS to S3 Buckets & Cloudfront.",
        ],
      },
      {
        title: "Leadership",
        points: [
          "Trained and supervised a team of 10 developers across 4 locations.",
        ],
      },
      {
        title: "Tech Stack",
        points: [
          "React, ExpressJS, NodeJS, MySQL, Sequelize, JavaScript, Firebase, AWS.",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "CodeForCause",
    title: "Fullstack Intern",
    date: "June 2021 - September 2021",
    content: [
      {
        title: "Frontend",
        points: [
          "Developed a Frontend structure which includes choosing appropriate technologies and frameworks, creating a scalable and maintainable codebase, and ensuring that the user interface was intuitive and user-friendly.",
        ],
      },
      {
        title: "Backend",
        points: [
          "Developed the Backend Architecture using Sequelize ORM and maintained an extensive database, configuring servers, reducing the maintenance cost by 15%.",
        ],
      },
      {
        title: "Tech Stack",
        points: ["React, JavaScript, HTML, CSS, Firebase, and Material-UI."],
      },
    ],
  },
  {
    id: 3,
    company: "Halfcute",
    title: "Frontend Intern",
    date: "June 2021 - September 2021",
    content: [
      {
        title: "Frontend",
        points: [
          "Developed a Frontend structure which includes choosing appropriate technologies and frameworks, creating a scalable and maintainable codebase, and ensuring that the user interface was intuitive and user-friendly.",
        ],
      },
      {
        title: "Tech Stack",
        points: ["VueJs, HTML, CSS, Javascript, Starpi & Bitbucket."],
      },
    ],
  },
];

const ExperienceSections = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div
      id="experience"
      className="flex flex-col text-left justify-between pt-6 relative"
    >
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
                <div key={index} className="text-base mt-4">
                  <h2 className="text-fun-pink">{content.title}</h2>
                  <ul>
                    {content.points.map((point, index) => (
                      <li key={index} className="flex items-start mt-2">
                        <img
                          src="/static/icons/right-arrow.svg"
                          className="w-5 mt-1"
                          alt="CultureX Logo"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSections;
