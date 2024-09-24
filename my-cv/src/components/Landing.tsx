import React from 'react';

const Landing: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white relative overflow-hidden">

            {/* Central Animated Circle */}
            <div className="relative flex flex-col items-center justify-center w-80 h-80 md:w-96 md:h-96 bg-yellow-500 rounded-full animate-pulse p-6">

                {/* My Name section */}
                <h1
                    className="text-4xl md:text-5xl font-heading text-center animate-fadeIn"
                    style={{ animationDelay: '0ms' }}
                >
                    Santiago Quintero
                </h1>

                {/* Subtitle */}
                <p
                    className="mt-4 text-lg md:text-xl text-center animate-fadeIn"
                    style={{ animationDelay: '200ms' }}
                >
                    Full-Stack Developer
                </p>

                {/* Navigation Button */}
                <a
                    href="#cv-section"
                    className="mt-6 px-6 py-3 bg-white text-yellow-500 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 animate-fadeIn"
                    style={{ animationDelay: '400ms' }}
                    aria-label="Navigate to CV section"
                >
                    Explore My CV
                </a>
            </div>

            {/* Decorative Floating SVGs */}
            {/* Top-Left Corner: Circle */}
            <svg
                className="absolute top-5 left-5 w-12 h-12 text-yellow-500 animate-float opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 100 100"
            >
                <title>Decorative Circle</title>
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>

            {/* Top-Right Corner: Triangle */}
            <svg
                className="absolute top-5 right-5 w-12 h-12 text-yellow-500 animate-float opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 100 100"
            >
                <title>Decorative Triangle</title>
                <polygon points="50,15 80,85 20,85" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>

            {/* Bottom-Left Corner: Star */}
            <svg
                className="absolute bottom-5 left-5 w-12 h-12 text-yellow-500 animate-float opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 100 100"
            >
                <title>Decorative Star</title>
                <polygon points="50,15 61,35 85,35 66,50 75,70 50,58 25,70 34,50 15,35 39,35" />
            </svg>

            {/* Bottom-Right Corner: Hexagon */}
            <svg
                className="absolute bottom-5 right-5 w-12 h-12 text-yellow-500 animate-float opacity-70"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 100 100"
            >
                <title>Decorative Hexagon</title>
                <polygon points="50,15 80,30 80,70 50,85 20,70 20,30" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>

        </section>
    );
};

export default Landing;
