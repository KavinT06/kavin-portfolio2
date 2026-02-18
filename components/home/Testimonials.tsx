import React from "react";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";

function Testimonials() {
  return (
    <div className="flex flex-col text-center lg:text-left max-w-2xl sm:max-w-4xl md:max-w-full w-full m-auto">
      <SectionTitle title="Why people love my work!" />
      <div className="max-w-5xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {testimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-fun-pink-darker border border-fun-pink-light p-5 rounded-lg h-full flex flex-col justify-between"
            >
              {index === 0 && (
                <>
                  <img
                    className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                    src="/static/doodles/testimonials/yay.svg"
                  />
                </>
              )}
              <p className="text-base italic relative testimonialQuote">
                "{item.quote}"
              </p>
              <p className="mt-4 text-xs text-fun-gray">
                <b className="text-fun-pink font-monospace">{item.name}</b> -{" "}
                {item.job}
              </p>
              {index === 2 && (
                <img
                  className="sqD top-[-30px] right-[-15px] w-11"
                  src="/static/doodles/testimonials/squiggle2.svg"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
