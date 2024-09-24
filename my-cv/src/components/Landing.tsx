import React from 'react';

const Landing: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white relative">

            {/* Animated Name */}
            <h1 className="text-5xl md:text-7xl font-heading animate-fadeIn text-center">
                Santiago Quintero
            </h1>
            <p className="mt-4 text-lg md:text-2xl animate-fadeIn animation-delay-200">
                Full-Stack Developer
            </p>

            {/* Decorative Floating SVGs */}
            {/* Abstract Circle */}
            <svg
                className="absolute top-10 left-10 w-12 h-12 text-pink-500 animate-float opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 100 100"
            >
                <title>Decorative Circle</title>
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>

            {/* Abstract Triangle */}
            <svg
                className="absolute bottom-10 right-10 w-12 h-12 text-blue-500 animate-float opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 100 100"
            >
                <title>Decorative Triangle</title>
                <polygon points="50,15 80,85 20,85" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>

            {/* Additional Decorative SVG: Star */}
            <svg
                className="absolute top-1/2 left-10 w-8 h-8 text-purple-500 animate-float opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 100 100"
            >
                <title>Decorative Star</title>
                <polygon points="50,15 61,35 85,35 66,50 75,70 50,58 25,70 34,50 15,35 39,35" />
            </svg>

            {/* Navigation Button */}
            <a
                href="#cv-section"
                className="mt-8 px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 animate-fadeIn animation-delay-400"
            >
                Let's Go to the CV
            </a>
        </section>
    );
};

export default Landing;
