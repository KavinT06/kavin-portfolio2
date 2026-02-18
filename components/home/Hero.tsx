import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        id="home"
        className="relative heroElem w-full pt-16 sm:pt-20 md:pt-24 pb-32 sm:pb-40 md:pb-44 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5">Hey, I'm Kavin.</p>
        <h1 className="heroTitle inline-block max-w-2xl md:max-w-4xl lg:max-w-4xl w-auto relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight sm:tracking-tighter mb-8 sm:mb-10 font-bold heroShinyBg">
          I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{" "}
          <span className="heroShiny2 text-fun-pink">designing</span> for the
          web.
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/html.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[320px] sm:w-[360px] md:w-[380px] lg:w-[400px]"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/hero/brayden.svg"
          />
          <img
            className="sqD hidden md:block bottom-[-320px] lg:bottom-[-340px] left-[-140px] lg:left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/coder.svg"
          />
          <img
            className="sqD hidden md:block left-[120px] lg:left-[160px] bottom-[-140px] lg:bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/dino.svg"
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/paintbrush.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden md:block md:top-[-120px] md:left-[90px] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-6 sm:px-9 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl rounded-full border-2 border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
