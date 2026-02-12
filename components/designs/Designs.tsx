import React from "react";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
        {designs.map((item, index) => {
          return (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group flex flex-col h-full rounded-3xl overflow-hidden border border-fun-pink-dark hover:border-fun-pink-light transition-colors duration-300"
            >
              {/* Card Container with gradient effect */}
              <div className="relative rounded-3xl bg-gradient-to-br from-fun-pink-darker/60 to-fun-pink-darkest/40 p-6 flex-1 flex flex-col">
                {/* Header with Badge and Title */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fun-pink opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-fun-pink"></span>
                    </span>
                    <span className="text-xs font-semibold text-white bg-fun-pink/30 border border-fun-pink px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                    {item.label}
                  </h3>
                  <p className="text-sm text-fun-gray mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image Container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 flex-grow">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={item.img}
                    alt={item.label}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fun-pink-darker/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Footer with Icon */}
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-fun-pink-light flex items-center justify-center group-hover:bg-fun-pink group-hover:border-fun-pink transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-fun-pink group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Designs;
