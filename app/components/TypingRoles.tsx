'use client';
import { useTypingEffect } from "@/hooks/useTypingEffect";

const roles = [
    "Software Developer",
    "Frontend Enthusiast",
    "UI/UX",
    "Web Designer",
    "Product Builder",
    "Software Engineer",
];

export default function TypingRoles() {
    const displayedText = useTypingEffect(roles);

    return (
        <p className="font-mono text-md md:text-lg lg:text-xl cs-glass-purple rounded-none border-none w-fit px-4 py-1 transition-all duration-300">
            {displayedText}<span className="animate-pulse">|</span>
        </p>
    );
}