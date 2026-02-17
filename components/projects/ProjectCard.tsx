import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="project-card group" key={project.id}>
      {/* Animated rotating gradient border */}
      <div className="project-card-border" />

      {/* Ambient glow behind the card */}
      <div className="project-card-ambient-glow" />

      {/* Shimmer sweep on hover */}
      <div className="project-card-shimmer" />

      {/* Floating particles */}
      <div className="project-card-particles">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
      </div>

      {/* Card inner content */}
      <div className="project-card-inner">
        {/* Image area */}
        <a
          href={project.link || project.github}
          target="_blank"
          rel="noreferrer"
          className="project-card-image-wrapper"
        >
          <img
            className="w-full h-full object-cover"
            src={project.img}
            alt={project.title}
          />
          {/* Multi-layer gradient overlay on image */}
          <div className="project-card-image-overlay" />
          <div className="project-card-image-noise" />

          {/* Project number badge */}
          <div className="project-card-number">
            <span className="project-card-number-hash">#</span>
            {String(project.id + 1).padStart(2, "0")}
          </div>

          {/* Status dot indicator */}
          <div className="project-card-status">
            <span className="status-dot" />
            <span className="status-text">Live</span>
          </div>
        </a>

        {/* Content area */}
        <div className="project-card-content">
          {/* Title row */}
          <div className="flex items-center justify-between mb-3">
            <a
              href={project.link || project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card-title"
            >
              {project.title}
              <span className="project-card-title-arrow">→</span>
            </a>
            <div className="flex items-center gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card-link-icon"
                  title="Live Demo"
                >
                  <Image
                    src="/static/icons/external-link.svg"
                    width={14}
                    height={14}
                    alt="Link Icon"
                  />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card-link-icon"
                  title="Source Code"
                >
                  <Image
                    src="/static/icons/github.svg"
                    width={14}
                    height={14}
                    alt="Github Icon"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="project-card-desc">{project.desc}</p>

          {/* Divider line */}
          <div className="project-card-divider" />

          {/* Tags */}
          <ul className="flex flex-wrap gap-2 list-none">
            {project.tags.map((tag) => {
              return (
                <li key={tag}>
                  <Link href={`/projects/tag/${kebabCase(tag)}`}>
                    <div className="project-tag-glass">{tag}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom neon accent bar */}
        <div className="project-card-neon-bar" />
      </div>
    </div>
  );
}

export default ProjectCard;
