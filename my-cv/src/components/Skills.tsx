import React from 'react';
import Card from './Card';

const Skills: React.FC = () => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16" id="skills">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center md:text-left">Skills</h2>

            <Card
                title=""
                subtitle=""
                date=""
                description={[
                    'Core Skills: JavaScript (ES6+), TypeScript, Python, SQL, NoSQL',
                    'Frameworks:  Next.js, React, React Native, Vue.js, Nuxt.js, Django, Node.js, Medusa, Payload CMS',
                    'Tools & Platforms: Git, GitHub, Jira, AWS (S3, EC2), Firebase, Stripe, Twilio, HubSpot, SendGrid',
                    'Frontend Development: Tailwind CSS, Bootstrap, Responsive Design, Component Architecture, REST APIs, API Integration',
                    'Backend & Cloud: Authentication & Authorization (OAuth, JWT), Cloud Integrations, API Design, Performance Optimization, Unit & Integration Testing',
                    'Additional Skills: Bilingual (Spanish & English), Agile Collaboration, CI/CD Workflow Experience'
                ]}
                links={[]}
            />
        </section>
    );
};

export default Skills;