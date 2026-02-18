import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { routes } from "@/data/global";
import ResumeButton from "./ResumeButton";

function Navbar({ currentPage }) {
  const scrollOffset = -100;
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none cursor-pointer">
        <Link href="/">
          <img
            className="rounded-full transform hover:scale-110 transition-transform duration-300"
            src="/static/misc/profile.jpg"
            width="48"
            height="48"
            alt="Kavin"
          />
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          const isAnchor = item.path.startsWith("#");
          const target = isAnchor ? item.path.slice(1) : item.path;
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              {isAnchor ? (
                <ScrollLink
                  to={target}
                  spy={true}
                  smooth={true}
                  offset={scrollOffset}
                  duration={500}
                  className="cursor-pointer"
                >
                  {item.title}
                </ScrollLink>
              ) : (
                <Link href={item.path}>{item.title}</Link>
              )}
            </li>
          );
        })}
        <li className="list-none">
          <ResumeButton />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
