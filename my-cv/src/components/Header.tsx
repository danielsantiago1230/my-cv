import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-4xl font-bold">Santiago Quintero</h1>
            <p className="text-sm md:text-base">Full-Stack Developer</p>
            <p className="text-xs md:text-sm">React Native | Django | React | Python | TypeScript | JavaScript | Vue | Nuxt | HTML | CSS | Mobile Apps | Web Apps</p>
            <div className="mt-4">
                <p className="text-xs md:text-sm">Email: danielsantiago1230@gmail.com</p>
                <p className="text-xs md:text-sm">Phone: +573112385219</p>
                <a href="https://www.linkedin.com/in/danielsantiagoquinteroariza/"><p className="text-xs md:text-sm">LinkedIn: danielsantiagoquinteroariza</p></a>
                <a href="https://github.com/danielsantiago1230"><p className="text-xs md:text-sm">GitHub: danielsantiago1230</p></a>
            </div>
        </header>
    );
};

export default Header;
