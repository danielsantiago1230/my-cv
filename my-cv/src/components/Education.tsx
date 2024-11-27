import React from 'react';
import Card from './Card';

const Education: React.FC = () => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center md:text-left">Education</h2>

            <div className="space-y-6">
                <Card
                    title="Meta Back-End Developer - Coursera"
                    subtitle="Completed a comprehensive program focusing on back-end development, including:"
                    date="Feb 2023 - Dec 2023"
                    links={[
                        { label: 'View Certificate', url: 'https://www.coursera.org/account/accomplishments/specialization/X5MRR8WSJBXQ' },
                    ]}
                    description={[
                        'API Development and REST architecture using Django.',
                        'Building scalable systems with Django REST Framework.',
                        'Database Management with MySQL and SQL.',
                        'Version Control using Git and GitHub.',
                        'Programming in Python, with emphasis on data structures, OOP, and error handling.',
                        'Front-end basics with HTML5, Bootstrap, and CSS3 for back-end integration.',
                    ]}
                />

                <Card
                    title="Certificate in React.js"
                    subtitle="Centro de e-Learning UTN FRBA"
                    date="Feb 2022 - May 2022"
                    description={[
                        'Skills: React.js, Firebase, JavaScript ES6',
                    ]}
                />

                <Card
                    title="Professional Front-End Developer Certification"
                    subtitle="Centro de e-Learning UTN FRBA"
                    date="Oct 2021 - Apr 2022"
                    description={[
                        'Skills: HTML5, CSS3, JavaScript, JQuery, Bootstrap',
                    ]}
                />

                <Card
                    title="Advanced Web Developer Certification"
                    subtitle="Centro de e-Learning UTN FRBA"
                    date="Feb 2022 - Apr 2022"
                    description={[
                        'Skills: HTML5, CSS3, JavaScript, JQuery, Bootstrap',
                    ]}
                />

                <Card
                    title="JavaScript Web Development Certification"
                    subtitle="Centro de e-Learning UTN FRBA"
                    date="Dec 2021 - Feb 2022"
                    description={[
                        'Skills: JavaScript, JQuery',
                    ]}
                />

                <Card
                    title="Bachelor of Electronic Engineering"
                    subtitle="Universidad Nacional de La Plata"
                    date="Jan 2014 - Dec 2021 (65% Completed)"
                    description={[
                        'Skills: C, Software Abstraction, Embedded Systems, Innovative Thinking, Problem-Solving',
                    ]}
                />
            </div>
        </section>
    );
};

export default Education;
