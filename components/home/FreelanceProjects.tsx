import React from "react";
import { designs } from "@/data/content/designs";
import { DesignCard } from "../designs/Designs";
import SectionTitle from "../global/SectionTitle";

function FreelanceProjects() {
    const displayedProjects = designs.slice(0, 3);
    const hasMoreProjects = designs.length > 3;

    return (
        <div id="freelance" className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto py-9 pb-14">
            <SectionTitle title="Freelance Projects&nbsp;" />
            <div className="max-w-5xl m-auto grid grid-cols-1 gap-6 md:grid-cols-3">
                {displayedProjects.map((project, index) => {
                    return (
                        <DesignCard
                            key={project.link ?? project.label ?? index}
                            item={{
                                category: project.category,
                                label: project.label,
                                description: project.description,
                                img: project.img,
                                link: project.link,
                            }}
                        />
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
