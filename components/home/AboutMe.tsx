import React from "react";
import SectionTitle from "../global/SectionTitle";

export const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col text-left justify-between pt-9 relative">
      <div id="learnmore">
        <SectionTitle title="About Me" />
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-10">
        <div className="w-100 md:w-3/5 text-fun-gray space-y-4">
          <p className="text-lg leading-relaxed">
            I'm a <span className="text-fun-pink">Senior Software Engineer & Engineering Lead</span> at
            CultureX — an influencer marketing SaaS platform serving{" "}
            <span className="text-white font-medium">150+ enterprise clients</span> including
            Mahindra, Nestle, and Decathlon. I've been here since nearly the beginning,
            progressing from backend intern to senior engineer and team lead over 4+ years.
          </p>
          <p className="text-lg leading-relaxed pt-2">
            Most of my work sits at the intersection of{" "}
            <span className="text-fun-pink">distributed systems</span>,{" "}
            <span className="text-fun-pink">performance optimization</span>, and{" "}
            <span className="text-fun-pink">cloud architecture on AWS</span>.
            I led the transformation from 20 separate single-tenant deployments into a
            unified multi-tenant SaaS platform, re-architected a MongoDB schema across
            8M+ documents with zero downtime, and brought AWS infrastructure costs down significantly.
            These days I lead a team of 8–9 engineers, run code reviews, and keep shipping.
          </p>
          <p className="text-lg leading-relaxed pt-2">
            Outside of work, I'm usually on my bike 🚴‍♀️ — cycling is how I reset.
            I care about building things that work well for real users, writing code that
            other engineers can maintain, and solving problems that are genuinely hard.
            Long-term, I'm aiming for the Staff/Principal Engineer track at strong engineering
            cultures.
          </p>
        </div>
        <div className="pt-10 md:w-2/5 relative z-10 flex items-center justify-center">
          <div className="absolute top-10 left-32 w-60 h-60 bg-fun-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-10 right-28 w-60 h-60 bg-fun-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-16 left-40 w-60 h-60 bg-fun-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="w-full relative flex justify-center">
            <img
              src="/static/about/coding.webp"
              className="rounded-3xl w-3/4 m-auto animate-fadeIn relative z-10"
              alt="My Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
