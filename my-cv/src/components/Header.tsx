import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-6 md:p-8 lg:p-10">
            <div className="container mx-auto text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Santiago Quintero</h1>
                <p className="text-sm md:text-lg lg:text-xl mt-2">Full-Stack Developer</p>
                <p className="text-xs md:text-sm lg:text-base mt-1">React Native | Django | React | Python | TypeScript | JavaScript | Vue | Nuxt | HTML | CSS | Mobile Apps | Web Apps</p>
                <div className="mt-4 space-y-1 md:space-y-0 md:space-x-4 md:flex md:items-center">
                    <p className="text-xs md:text-sm lg:text-base">Email: <a href="mailto:danielsantiago1230@gmail.com" className="underline">danielsantiago1230@gmail.com</a></p>
                    <p className="text-xs md:text-sm lg:text-base">Phone: <a href="tel:+573112385219" className="underline">+573112385219</a></p>
                    <p className="text-xs md:text-sm lg:text-base">LinkedIn: <a href="https://www.linkedin.com/in/danielsantiagoquinteroariza/" className="underline">danielsantiagoquinteroariza</a></p>
                    <p className="text-xs md:text-sm lg:text-base">GitHub: <a href="https://github.com/danielsantiago1230" className="underline">danielsantiago1230</a></p>
                </div>
            </div>
        </header>
    );
};

export default Header;
