import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
        Freelance Projects
        <img
          className="sqD w-12 top-12 right-80 absolute"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h1>
      <p className="text-fun-pink font-semibold">
        Real clients, real impact
      </p>
    </div>
  );
}

export default Heading;
