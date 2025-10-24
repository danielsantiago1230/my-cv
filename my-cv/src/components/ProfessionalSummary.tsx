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
                        `Full-stack developer with over 3 years of experience building scalable, production-ready web and mobile applications. Skilled in modern frameworks like Next.js, React, Vue, Django, Node.js, and Medusa, with a strong focus on performance, security, and user experience. Proven success leading the development of a multi-store e-commerce platform—launching multiple storefronts from a single backend—and delivering a car-rental and charging app used across Austin, Texas. Passionate about creating clean, maintainable code and collaborating on complex projects that bridge design, functionality, and business impact.`,
                    ]}
                />
            </div>
            {/* <p className="text-lg leading-relaxed">
                Full-stack developer with 2+ years of experience building scalable mobile and web applications.
                Proficient in React Native, Django, and Next.js, with a strong focus on delivering seamless cross-platform compatibility. 
                Skilled at integrating third-party APIs, optimizing performance, and solving complex technical challenges in agile environments. 
                Fluent in Spanish and English, passionate about creating efficient and user-friendly solutions.
            </p> */}
        </section>
    );
};

export default ProfessionalSummary;