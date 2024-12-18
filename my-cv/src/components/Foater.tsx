import React from 'react';
// Import Icons
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-4 lg:p-8">
            <div className="container mx-auto flex flex-col items-center md:items-start">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight">
                    Santiago Quintero
                </h2>
                <p className="text-base md:text-lg mt-1">Full-Stack Developer</p>
                <div className="mt-6 flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm md:text-base">
                    {/* Email Link */}
                    <a
                        href="mailto:danielsantiago1230@gmail.com"
                        className="hover:underline flex items-center"
                        aria-label="Email"
                    >
                        <EmailIcon className="w-5 h-5 text-yellow-500"/>
                        <span className="ml-2">danielsantiago1230@gmail.com</span>
                    </a>

                    {/* Phone Link */}
                    <a
                        href="tel:+573137758974"
                        className="hover:underline flex items-center"
                        aria-label="Phone"
                    >
                        <PhoneIcon className="w-5 h-5 text-green-500"/>
                        <span className="ml-2">+573137758974</span>
                    </a>

                    {/* LinkedIn Link */}
                    <a
                        href="https://www.linkedin.com/in/danielsantiagoquinteroariza/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon className="w-5 h-5" />
                        <span className="ml-2">LinkedIn</span>
                    </a>

                    {/* GitHub Link */}
                    <a
                        href="https://github.com/danielsantiago1230"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <GitHubIcon className="w-5 h-5" />
                        <span className="ml-2">GitHub</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;