import React from 'react';
// Import Icons
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import EmailIcon from './icons/EmailIcon';
import { copyToClipboard } from '../utils/clipboard';
import { toast } from 'react-toastify';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white p-4 lg:p-8">
            <div className="container mx-auto flex flex-col items-center md:items-start">
                <h2 className="text-xl md:text-2xl font-heading font-bold tracking-tight text-brand-primary">
                    Santiago Quintero
                </h2>
                <p className="text-base md:text-lg mt-1 text-white">
                    Full-Stack Developer
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
                    {/* Email Button */}
                    <button
                        onClick={async () => {
                            const success = await copyToClipboard('danielsantiago1230@gmail.com');
                            if (success) {
                                toast.success('Email copied to clipboard!');
                            } else {
                                toast.error('Failed to copy email');
                            }
                        }}
                        className="hover:text-brand-primary transition-colors flex items-center"
                        aria-label="Copy email to clipboard"
                    >
                        <EmailIcon className="w-5 h-5 text-brand-primary mr-2" />
                        <span>danielsantiago1230@gmail.com</span>
                    </button>

                    {/* LinkedIn Link */}
                    <a
                        href="https://www.linkedin.com/in/danielsantiagoquinteroariza/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-accent transition-colors flex items-center"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon className="w-5 h-5 mr-2" />
                        <span>LinkedIn</span>
                    </a>

                    {/* GitHub Link */}
                    <a
                        href="https://github.com/danielsantiago1230"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-accent transition-colors flex items-center"
                        aria-label="GitHub"
                    >
                        <GitHubIcon className="w-5 h-5 mr-2" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;