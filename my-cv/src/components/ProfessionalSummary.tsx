import React from 'react';
import Card from './Card';

interface ExperienceProps {
    years: number;
}

const ProfessionalSummary: React.FC<ExperienceProps> = ({ years }) => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16" id="summary">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center md:text-left">Professional Summary</h2>
            <div className="space-y-6">
                <Card
                    title=""
                    links={[]}
                    subtitle=""
                    date=""
                    description={[
                        `Full-stack developer with almost 3 years of experience designing and implementing scalable, user-focused web and mobile applications. Proficient in modern frameworks like React,React Native, Next.js, and Django, with expertise in API integration, performance optimization, and delivering seamless cross-platform solutions. Demonstrated success in building secure backend systems and dynamic frontend components and managing complex technical challenges in agile environments. Passionate about leveraging technology to enhance user experiences and drive business outcomes. Bilingual in Spanish and English, with excellent collaboration skills and a commitment to continuous learning.`,
                    ]}
                />
            </div>
        </section>
    );
};

export default ProfessionalSummary;