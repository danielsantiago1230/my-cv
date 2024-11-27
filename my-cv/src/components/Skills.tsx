import React from 'react';
import Card from './Card';

const Skills: React.FC = () => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center md:text-left">Skills</h2>

            <Card
                title=""
                subtitle=""
                date=""
                description={[
                    'Core Skills: JavaScript, TypeScript, Python, SQL, NoSQL',
                    'Frameworks: React, React Native, Django, Nuxt.js, Next.js, Vue.js',
                    'Tools & Platforms: Git, GitHub, Firebase, Stripe, Twilio, HubSpot',
                    'Frontend Development: TailwindCSS, Bootstrap, Responsive Design, REST APIs',
                    'Additional Skills: Authentication and Authorization (OAuth, JWT), Cloud Integrations, Unit and Integration Testing, Bilingual (Spanish and English)'
                ]}
                links={[]}
            />
        </section>
    );
};

export default Skills;