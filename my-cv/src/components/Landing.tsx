import React from 'react';

const Landing: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-brand-dark to-brand-accent-dark text-white relative overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-primary rounded-full animate-particle-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 space-y-8">
                {/* Subtle Name Animation */}
                <h1 className="text-5xl md:text-7xl font-heading text-center relative animate-soft-glitch">
                    <span className="block text-brand-primary animate-fade-in-up">
                        Santiago
                        <span className="absolute inset-0 text-brand-accent opacity-0 animate-glitch-overlay">Santiago</span>
                    </span>
                    <span className="block mt-2 text-brand-accent animate-fade-in-up">
                        Quintero
                    </span>
                </h1>

                {/* Animated Subtitle with Wave Effect */}
                <p className="text-xl md:text-2xl font-semibold text-center animate-wave">
                    <span>Full-Stack Developer</span>
                </p>

                {/* Interactive CV Button */}
                <div className="flex justify-center animate-button-entrance">
                    <a
                        href="#cv-section"
                        className="
                            relative px-8 py-4 bg-brand-primary text-white font-bold rounded-full
                            transform transition-all duration-300 hover:scale-105 hover:bg-brand-primary-dark
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-brand-accent/30 before:to-transparent
                            before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
                            shadow-2xl shadow-brand-accent/50 hover:shadow-brand-accent/70"
                        aria-label="Explore my CV"
                    >
                        <span className="relative z-10">Explore My Journey</span>
                        <div className="absolute inset-0 rounded-full border-2 border-brand-accent/30 animate-button-shine" />
                    </a>
                </div>
            </div>

            {/* Animated Tech Stack Icons Floating Around */}
            <div className="absolute inset-0 pointer-events-none">
                {['🚀', '💻', '📱', '🌐'].map((icon, i) => (
                    <div
                        key={i}
                        className="absolute text-2xl opacity-70 animate-tech-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    >
                        {icon}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Landing;
