import React from "react";
import SectionTitle from "../global/SectionTitle";

function CTA() {
  return (
    <div id="contact" className="py-4 sm:py-6 relative w-full text-center 2xl:text-left">
      <SectionTitle title="Contact&nbsp;&nbsp;" />
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-10 sm:pt-14 pb-28 sm:pb-40">
        <div className="flex flex-col items-center lg:items-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10">
            Interested in Working Together?
          </h2>
          <a
            href="mailto:itskavin47@gmail.com"
            className="cursor-pointer font-bold whitespace-nowrap 
          mt-4 sm:mt-6 px-6 sm:px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
