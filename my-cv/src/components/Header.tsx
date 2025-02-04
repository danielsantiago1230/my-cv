import React from 'react';
import { Link } from 'react-scroll';
// Import Icons
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import { copyToClipboard } from '../utils/clipboard';
import { toast } from 'react-toastify';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-brand-dark shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-3 md:py-5 px-4 md:px-8">
                {/* Right-aligned Navigation */}
                <nav className="w-full md:w-auto mb-2 md:mb-0 order-1 ">
                    <ul className="flex justify-center md:justify-start space-x-3 md:space-x-8 overflow-x-auto overflow-y-hidden text-sm md:text-base">
                        {['Summary', 'Skills', 'Experience', 'Education'].map((item) => (
                            <li key={item} className="flex-shrink-0">
                                <Link
                                    to={item.toLowerCase()}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="text-white hover:text-brand-primary cursor-pointer font-medium px-2 py-1 md:px-3 md:py-2 rounded-md hover:bg-brand-accent-dark transition-colors"
                                    activeClass="text-brand-primary font-bold bg-brand-accent-dark"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right-aligned Contact & Social Icons */}
                <div className="flex space-x-4 md:space-x-6 order-2">
                    {/* Socials */}
                    <a
                        href="https://www.linkedin.com/in/danielsantiagoquinteroariza/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-primary hover:text-brand-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a
                        href="https://github.com/danielsantiago1230"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-primary hover:text-brand-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <GitHubIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </a>

                    {/* Contacts */}
                    <button
                        onClick={async () => {
                            const success = await copyToClipboard('danielsantiago1230@gmail.com');
                            if (success) {
                                toast.success('Email copied to clipboard!');
                            } else {
                                toast.error('Failed to copy email');
                            }
                        }}
                        className="text-brand-primary hover:text-brand-accent transition-colors"
                        aria-label="Copy email to clipboard"
                    >
                        <EmailIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <a
                        href="tel:+573137758974"
                        className="text-brand-primary hover:text-brand-accent transition-colors"
                        aria-label="Phone"
                    >
                        <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
