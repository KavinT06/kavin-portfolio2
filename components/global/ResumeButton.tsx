import React from "react";

interface ResumeButtonProps {
    className?: string;
}

export default function ResumeButton({ className = "" }: ResumeButtonProps) {
    return (
        <a
            href="static\files\Kavin_T_Frontend_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-fun-pink border border-fun-pink px-6 py-2 rounded ${className}`}
        >
            Resume
        </a>
    );
}