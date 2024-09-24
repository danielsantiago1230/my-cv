import React from 'react';
import Card from './Card';

const Education: React.FC = () => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center md:text-left">Education</h2>

            <div className="space-y-6">
                <Card
                    title="Meta Back-End Developer"
                    subtitle="Coursera"
                    date="Feb 2023 - Dec 2023"
                    description={[
                        'Skills: MySQL, Django REST Framework, Python, Back-End Web Development',
                    ]}
                />

                <Card
                    title="Certificate in APIs by Meta"
                    subtitle="Coursera"
                    date="Nov 2023 - Dec 2023"
                    description={[
                        'Focus: API Development, REST architecture, Django',
                    ]}
                />

                <Card
                    title="Certificate in Django Web Framework Development"
                    subtitle="Coursera"
                    date="Aug 2023 - Oct 2023"
                    description={[
                        'Skills: Django REST Framework, Python, Django',
                    ]}
                />

                <Card
                    title="Certificate in Databases for Back-End Development"
                    subtitle="Coursera"
                    date="May 2023 - Jul 2023"
                    description={[
                        'Skills: MySQL, SQL, Database Management',
                    ]}
                />

                <Card
                    title="Certificate in Version Control"
                    subtitle="Coursera"
                    date="Apr 2023 - May 2023"
                    description={[
                        'Skills: Git, GitHub',
                    ]}
                />

                <Card
                    title="Certificate in Programming in Python"
                    subtitle="Coursera"
                    date="Mar 2023 - Apr 2023"
                    description={[
                        'Skills: Python, Data Structures, OOP, Error Handling',
                    ]}
                />

                <Card
                    title="Certificate in Back-End Development"
                    subtitle="Coursera"
                    date="Feb 2023 - Mar 2023"
                    description={[
                        'Skills: HTML5, Bootstrap, CSS3',
                    ]}
                />

                <Card
                    title="React.js Course"
                    subtitle="Centro de e-Learning UTN FRBA"
                    date="Feb 2022 - May 2022"
                    description={[
                        'Skills: React JS, Firebase, JavaScript ES6',
                    ]}
                />

                <Card
                    title="Professional Front End Developer"
                    subtitle="Centro de e-Learning UTN FRBA"
                    date="Oct 2021 - Apr 2022"
                    description={[
                        'Skills: HTML5, CSS3, JavaScript, JQuery, Bootstrap',
                    ]}
                />

                <Card
                    title="Advanced Web Developer (HTML5, JS6, CSS3)"
                    subtitle="Centro de e-Learning UTN FRBA"
                    date="Feb 2022 - Apr 2022"
                    description={[]}
                />

                <Card
                    title="Javascript Web Development"
                    subtitle="Centro de e-Learning UTN FRBA"
                    date="Dec 2021 - Feb 2022"
                    description={[]}
                />

                <Card
                    title="Bachelor of Electronic Engineering"
                    subtitle="Universidad Nacional de La Plata"
                    date="Jan 2014 - Dec 2021 (65% Completed)"
                    description={[]}
                />
            </div>
        </section>
    );
};

export default Education;
