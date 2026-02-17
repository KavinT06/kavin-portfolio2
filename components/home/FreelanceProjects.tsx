import React from "react";
import SectionTitle from "../global/SectionTitle";
import { freelanceProjects } from "@/data/content/home";

function FreelanceProjects() {
    const displayedProjects = freelanceProjects.slice(0, 3);
    const hasMoreProjects = freelanceProjects.length > 3;

    return (
        <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
            <SectionTitle title="Freelance Projects&nbsp;" />
            <div className="max-w-5xl m-auto grid grid-cols-1 gap-6 md:grid-cols-3">
                {displayedProjects.map((project, index) => {
                    return (
                        <div
                            key={project.id}
                            className="group relative bg-gradient-to-br from-fun-pink-darker to-fun-pink-darkest border border-fun-pink-light/30 rounded-xl overflow-hidden hover:border-fun-pink hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-fun-pink/30"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-fun-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Project Image */}
                            {project.image && (
                                <div className="relative h-40 overflow-hidden bg-fun-pink-dark">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-fun-pink-darker via-transparent to-transparent" />

                                    {/* Floating badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className="px-3 py-1 text-xs font-bold bg-fun-pink text-white rounded-full shadow-lg backdrop-blur-sm">
                                            {project.duration}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="relative p-4">
                                <h3 className="text-base font-bold text-white mb-1 group-hover:text-fun-pink transition-colors truncate">
                                    {project.title}
                                </h3>

                                <p className="text-xs text-fun-pink-light font-semibold mb-2">
                                    {project.client}
                                </p>

                                <p className="text-xs text-fun-gray-light leading-relaxed line-clamp-2 mb-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack - Compact */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 text-[10px] font-mono bg-fun-pink/20 text-fun-pink border border-fun-pink/30 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-0.5 text-[10px] font-mono text-fun-gray-light">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-fun-pink/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Border glow animation */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{ boxShadow: 'inset 0 0 20px rgba(0, 199, 255, 0.2)' }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* View All Button - Only show if there are more than 3 projects */}
            {hasMoreProjects && (
                <div className="flex justify-center mt-8">
                    <a
                        href="/freelance"
                        className="group relative px-8 py-3 bg-gradient-to-r from-fun-pink to-fun-pink-light text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-fun-pink/40"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View All Projects
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-fun-pink-light to-fun-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>
            )}
        </div>
    );
}

export default FreelanceProjects;
