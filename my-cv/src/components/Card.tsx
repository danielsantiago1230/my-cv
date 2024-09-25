// src/components/Card.tsx
import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface LinkProps {
    label: string;
    url: string;
}

interface CardProps {
    title: string;
    subtitle: string;
    date: string;
    description: string[];
    links?: LinkProps[];
}

const Card: React.FC<CardProps> = ({ title, subtitle, date, description, links }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transform transition duration-300 hover:scale-105">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                {links && links.length > 0 && (
                    <div className="flex flex-wrap mt-4 md:mt-0 md:flex-nowrap space-x-0 md:space-x-4">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-yellow-500 hover:text-yellow-600 transition-colors duration-200 mb-2 md:mb-0 md:ml-0"
                                aria-label={`Link to ${link.label}`}
                            >
                                {link.label}
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <p className="text-lg text-gray-600 mt-4">{subtitle}</p>
            <span className="text-sm text-gray-500">{date}</span>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                {description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
