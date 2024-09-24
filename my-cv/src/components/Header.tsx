import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 md:p-8 lg:p-12">
            <div className="container mx-auto flex flex-col items-center md:items-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    Santiago Quintero
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mt-2">Full-Stack Developer</p>
                <p className="text-sm md:text-base lg:text-lg mt-1">
                    React Native | Django | React | Python | TypeScript | JavaScript | Vue | Nuxt | HTML | CSS | Mobile Apps | Web Apps
                </p>
                <div className="mt-6 flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm md:text-base">
                    <a href="mailto:danielsantiago1230@gmail.com" className="hover:underline">
                        📧 danielsantiago1230@gmail.com
                    </a>
                    <a href="tel:+573112385219" className="hover:underline">
                        📞 +573112385219
                    </a>
                    <a href="https://www.linkedin.com/in/danielsantiagoquinteroariza/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        LinkedIn
                    </a>
                    <a href="https://github.com/danielsantiago1230" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
