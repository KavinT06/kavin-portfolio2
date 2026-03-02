import React from "react";
import { skills } from "@/data/content/home";
import SectionTitle from "../global/SectionTitle";

function Skills() {
  return (
    <div id="skills" className="py-8 sm:py-10 pt-10 sm:pt-14">
      <div className="text-center xl:text-left pb-4 pt-1 sm:pb-5">
        <SectionTitle title="Skills&nbsp;" />
      </div>
      <div className="flex flex-col xl:flex-row justify-between relative">
        <h2 className="relative text-2xl sm:text-3xl w-full text-center xl:text-left font-bold xl:max-w-xl mb-8 xl:mr-10 xl:mb-0 xl:w-max mr-0 ">
          I got the experience.
          <br />
          Here is my toolbelt for success.
          <img
            className="sqD top-[-90px] left-[-50px] lg:top-[120px] lg:left-[-35px] z-[-10]"
            src="/static/doodles/skills/laptop.svg"
          />
          <img
            className="sqD hidden lg:block top-[105px] right-0"
            src="/static/doodles/skills/coding.svg"
          />
          <img
            className="sqD hidden lg:block top-[170px] right-[50px]"
            src="/static/doodles/skills/youtube.svg"
          />
          <img
            className="sqD top-[-15px] right-[-15px]"
            src="/static/doodles/skills/fillStar.svg"
          />
        </h2>
        <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-6 gap-y-8 sm:gap-8 md:gap-10 lg:gap-x-8 lg:gap-y-10 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 items-center place-content-center">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-10 mx-auto flex items-center flex-col justify-center"
              >
                <img src={item.icon} style={item.style} />
                <p className="text-[11px] sm:text-xs text-fun-gray font-bold mt-2 sm:mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
