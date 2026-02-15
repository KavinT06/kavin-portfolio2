import React from "react";
import SectionTitle from "../global/SectionTitle";
import { experiences } from "@/data/content/home";

function Experience() {
    return (
        <section className="w-full">
            <div className="text-center md:text-left">
                <SectionTitle title="Experience" />
                {/* <p className="text-sm text-fun-gray max-w-2xl mx-auto md:mx-0 -mt-6">
                    Focused on clean UI systems, fast iteration, and delightful product
                    experiences.
                </p> */}
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                {experiences.map((item, index) => {
                    return (
                        <article
                            key={`${item.company}-${item.period}-${index}`}
                            className="relative rounded-2xl p-[1px] bg-gradient-to-br from-fun-pink-light/60 via-fun-pink-darker to-fun-pink-dark"
                        >
                            <div className="relative h-full rounded-2xl bg-fun-pink-darker/80 p-6 border border-fun-pink-darkest">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            {item.role}
                                        </h3>
                                        <p className="text-sm text-fun-pink font-semibold">
                                            {item.company}
                                        </p>
                                        <p className="text-xs text-fun-gray mt-1">
                                            {item.location}
                                        </p>
                                    </div>
                                    <span className="text-xs text-fun-gray border border-fun-gray-medium px-3 py-1 rounded-full">
                                        {item.period}
                                    </span>
                                </div>

                                <ul className="mt-4 space-y-3 text-sm text-justify text-fun-gray">
                                    {item.highlights.map((point, pointIndex) => {
                                        return (
                                            <li
                                                key={`${item.company}-${pointIndex}`}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-1 h-2 w-2 rounded-full bg-fun-pink" />
                                                <span>{point}</span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {item.stack.map((stackItem, stackIndex) => {
                                        return (
                                            <span
                                                key={`${item.company}-stack-${stackIndex}`}
                                                className="text-xs text-white/80 border border-fun-pink-dark px-3 py-1 rounded-full"
                                            >
                                                {stackItem}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Experience;
