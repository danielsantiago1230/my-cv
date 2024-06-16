import React from 'react';
import { useInView } from 'react-intersection-observer';

interface CardProps {
    title: string;
    subtitle: string;
    date: string;
    description: string[];
}

const Card: React.FC<CardProps> = ({ title, subtitle, date, description }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={`bg-white shadow-md rounded p-6 mb-8 transform transition-transform duration-500 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                } hover:scale-105`}
        >
            <h3 className="text-2xl font-heading font-bold">{title}</h3>
            <p className="text-gray-600">{subtitle}</p>
            <p className="mt-2 text-sm">{date}</p>
            <ul className="list-disc ml-6 mt-4 space-y-2 text-sm">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
