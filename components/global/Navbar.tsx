import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none cursor-pointer">
        <Link href="/">
          <img
            className="rounded-full transform hover:scale-110 transition-transform duration-300"
            src="/static/misc/profile.jpg"
            width="50"
            height="50"
            alt="Kavin"
          />
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
        <li className="list-none">
          <a
            href="/static/files/Kavin_T_Frontend_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fun-pink border border-fun-pink px-6 py-2 rounded"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
