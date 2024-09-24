import React from 'react';

interface CardProps {
    title: string;
    subtitle: string;
    date: string;
    description: string[];
}

const Card: React.FC<CardProps> = ({ title, subtitle, date, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
            <p className="text-lg text-gray-600">{subtitle}</p>
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
