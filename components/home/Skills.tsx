import React from "react";
import { skillGroups } from "@/data/content/home";
import SectionTitle from "../global/SectionTitle";

function Skills() {
  return (
    <div id="skills" className="flex flex-col justify-between pt-6 relative">
      <SectionTitle title="Technical Skills" />
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm uppercase tracking-widest text-fun-gray-medium font-bold mb-6 text-center md:text-left">
              {group.label}
            </h3>
            <div className="relative max-w-full grid gap-x-8 gap-y-8 grid-cols-4 sm:grid-cols-6 md:grid-cols-12 items-start">
              {group.items.map((item, index) => (
                <div
                  title={item.title}
                  key={index}
                  className="w-10 mx-auto flex items-center flex-col justify-center"
                >
                  <img src={item.icon} style={item.style} alt={item.title} />
                  <p className="text-xs text-fun-gray font-bold mt-3 opacity-80 text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
