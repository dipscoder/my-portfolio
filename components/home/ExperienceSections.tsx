import React, { useState } from "react";
import SectionTitle from "../global/SectionTitle";

const ExperienceData = [
  {
    id: 0,
    company: "CultureX",
    title: "Senior Software Engineer & Engineering Lead",
    date: "October 2021 – Present",
    description: "Influencer Marketing SaaS Platform · Ahmedabad, India",
    points: [
      "Led full multi-tenant SaaS transformation — consolidated 20 single-tenant MySQL databases into a unified architecture with tenant isolation, centralized authentication, and shared resource model. Migrated all existing clients, then onboarded 120+ more on the unified platform.",
      "Built event-driven systems: async influencer collection via SQS + Firebase RTDB handling 1000+ concurrent requests, deep analysis engine processing 2+ years of historical data for 150+ enterprise clients, and automated reporting analyzing 100K+ media daily.",
      "Set up and reviewed observability stack (OpenTelemetry, Loki, Grafana, Tempo, Prometheus on AWS spot instances) for production monitoring across SaaS server, analytics server, creator service, and worker server.",
      "Led team of 8–9 engineers. Established CI/CD pipelines reducing deployment time by 60%. Conducted 300+ code reviews. Produces monthly tech reports covering developer performance and infrastructure cost analysis.",
    ],
  },
  {
    id: 1,
    company: "Academix",
    title: "Full-Stack Developer",
    date: "February 2022 – June 2022",
    description: "EdTech Platform · Contract",
    points: [
      "Built online learning platform with React.js/Node.js. Implemented mentor-matching algorithm with 80% accuracy using multi-layer filters. Migrated backend from raw SQL to Sequelize ORM.",
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
      <SectionTitle title="Experience" />

      <div className="flex flex-col md:flex-row">
        <div className="w-full mb-8 flex flex-row text-center text-fun-gray text-base overflow-x-auto md:w-1/5 md:flex-col md:items-start md:text-start md:mr-10">
          {ExperienceData.map((item, index) => (
            <div
              key={index}
              className={`${
                activeStep === index
                  ? "active-tab border-fun-pink text-fun-pink"
                  : "border-fun-gray-darker text-fun-gray"
              } w-full p-4 cursor-pointer border-b-2 md:border-l-2 md:border-b-0 hover:bg-[#112240] hover:text-fun-pink transition-colors whitespace-nowrap md:whitespace-normal`}
              onClick={() => setActiveStep(index)}
            >
              {item.company}
            </div>
          ))}
        </div>

        {/* content */}
        {ExperienceData.map((item, index) => (
          <div
            key={index}
            className={`${
              activeStep === index
                ? "active-content animate-fadeIn"
                : "hidden"
            } md:w-4/5`}
          >
            <h3 className="text-xl font-bold">
              {item.title}{" "}
              <span className="text-fun-pink">@{item.company}</span>
            </h3>
            <p className="text-sm text-fun-gray-medium mt-1">{item.date}</p>
            <p className="text-sm text-fun-gray mt-1 mb-4">{item.description}</p>
            <ul className="space-y-3">
              {item.points.map((point, pIndex) => (
                <li key={pIndex} className="flex items-start text-fun-gray text-sm leading-relaxed">
                  <span className="text-fun-pink mr-3 mt-1 flex-shrink-0">▸</span>
                  <span>{point}</span>
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
