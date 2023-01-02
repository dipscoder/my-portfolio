import React from "react";
import SectionTitle from "../global/SectionTitle";

export const AboutMe = () => {
  return (
    <div className="flex flex-col text-left justify-between pt-9 relative">
      <div id="learnmore">
        <SectionTitle title="About Me" />
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="md:w-1/2 text-fun-gray">
          <p>
            As a <span className="text-fun-pink">Developer 👨‍💻</span> with over{" "}
            <span className="text-fun-pink">2 years of experience</span>, I have
            had the opportunity to work on a wide range of projects and hone my
            skills in both <span className="text-fun-pink">Frontend</span> and{" "}
            <span className="text-fun-pink">Backend</span> development. In my
            current role, I have also had the opportunity to{" "}
            <span className="text-fun-pink">Lead</span> and{" "}
            <span className="text-fun-pink">Mentor </span> a team of developers,
            which has allowed me to deepen my understanding of project
            management and team dynamics. I am a strong believer in the power of
            collaboration and open communication, and I strive to create a
            positive and inclusive work environment for my team.
          </p>
          <p className="pt-4">
            In my free time, ☕ you can find me tinkering with new programming
            languages, collaborating with other developers on open-source
            projects, or simply exploring the vast{" "}
            <span className="text-fun-pink">world of the web</span>. I am
            constantly learning and looking for new opportunities to grow as a
            developer and make an impact.
          </p>
          <p className="pt-4">
            Additionally, 🚴‍♀️ Cycling is one of my favorite hobbies, and I love
            hitting the trails on my bike or joining group rides on the
            weekends. If you are a fellow developer or cyclist, I would love to{" "}
            <span className="text-fun-pink">Connect</span> and{" "}
            <span className="text-fun-pink">Collaborate</span> on new projects
            or hit the road together.
          </p>
        </div>
        <div className="pt-10 md:w-1/2 wrappers">
          <img
            src="/static/dipeshjaiswal.jpg"
            className="rounded-3xl w-1/2 m-auto image-wrapper"
            alt="My Picture"
          />
        </div>
      </div>
    </div>
  );
};
