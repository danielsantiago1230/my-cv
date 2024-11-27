import React from 'react';
import Card from './Card';

interface ExperienceProps {
    years: number;
    months: number;
}

const Experience: React.FC<ExperienceProps> = ({ years, months }) => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-4xl font-heading font-bold mb-2 text-center md:text-left">Work Experience</h2>
            <h3 id="time" className="text-xl font-heading font-bold mb-8 text-center md:text-left">
                ({years} years{months > 0 ? ` & ${months} months` : ''})
            </h3>
            <div className="space-y-6">
                <Card
                    title="Full Stack Developer at Alluxi"
                    links={[
                        { label: "Flux EV Web App", url: "https://app.fluxev.city/" },
                        { label: "Flux EV App Store", url: "https://apps.apple.com/ec/app/flux-ev/id1603001875" },
                        { label: "Alluxi", url: "https://www.alluxi.com/" }
                    ]}
                    subtitle="Mobile Flux app & Flux Web app"
                    date="Nov 2022 - Dec 2024"
                    description={[
                        'Developed and maintained the Flux mobile app using React Native, integrating features like Google Maps for locating charger points and car rental stations.',
                        'Utilized Google Places API to check the availability of electric charging stations.',
                        'Implemented Stripe for secure payment processing, supporting over 100 active users during the startup phase.',
                        'Leveraged Firebase for user authentication, real-time databases, and push notifications across devices.',
                        'Integrated Twilio for SMS code validation and notifications, with a real-time chat feature that resolves support queries in under 24 hours on average.',
                        'Managed contact information and enhanced customer engagement using HubSpot CRM.',
                        'Implemented IDScan for license validation, reducing manual processing and improving data accuracy.',
                        'Integrated MeasureOne for insurance validation and document management.',
                        'Collaborated with Bundee for seamless booking system integration, enabling up to 1–2 weekly reservations during the startup phase.',
                        'Delivered cross-platform compatibility and smooth performance, maintaining a 99% uptime across iOS and Android platforms.',
                    ]}
                />

                <Card
                    title="Flux Backend Development (Django)"
                    links={[]}
                    subtitle=""
                    date="Nov 2022 - Dec 2024"
                    description={[
                        'Engineered a secure backend with Django, ensuring seamless API integrations with tools like IDScan, MeasureOne, and Stripe, supporting the app’s successful production launch.',
                        'Developed a secure one-time code generation system for managing car key vaults, ensuring 100% access control accuracy.',
                        'Built APIs for smart car connectivity using OAuth, enabling real-time updates for battery levels, geolocation, and locking/unlocking vehicles.',
                        'Integrated a GPS API service for vehicles lacking smart connectivity, enabling real-time tracking and monitoring.',
                        'Implemented robust security measures, including JWT-based authentication and role-based access controls, resulting in zero reported security incidents.',
                    ]}
                />

                <Card
                    title="Fleet Mobile App (React Native) – Admin-Only Application"
                    links={[]}
                    subtitle=""
                    date="Nov 2022 - Dec 2024"
                    description={[
                        'Developed and maintained the Fleet mobile app to manage Flux features and vehicles',
                        'Google Maps for charger points and car rental stations.',
                        'A browser-based control panel for Bundee\'s admin web portal.',
                        'A GPS API service for real-time vehicle tracking and management, improving operational oversight.',
                    ]}
                />

                <Card
                    title="Back End Developer at Alluxi"
                    links={[
                        { label: "Subasta La Silla", url: "https://www.subastalasilla.com/" },
                        { label: "Alluxi", url: "https://www.alluxi.com/" }
                    ]}
                    subtitle="Horsebook"
                    date="July 2023 - December 2023"
                    description={[
                        'Initiated the backend development using Django for Horsebook, a web application facilitating horse auctions.',
                        'Designed and implemented user models and sign-up processes, enhancing user registration and authentication.',
                        'Developed initial horse models to manage auction functionalities.',
                        'Integrated email service for confirmations related to sign-up and auction updates.',
                        'Commenced revamping the frontend interface to improve user engagement and site usability.',
                    ]}
                />

                <Card
                    title="Front End Developer at Alluxi"
                    links={[
                        { label: "Garre Web App", url: "http://garre-front-stage.s3-website-us-east-1.amazonaws.com/" },
                        { label: "Alluxi", url: "https://www.alluxi.com/" }
                    ]}
                    subtitle="Garre Web Application"
                    date="May 2022 - Nov 2022"
                    description={[
                        'Developed key features for Garre, a Nuxt.js web application, including the home page, booking system, and trip management functionalities.',
                        'Implemented i18n for bilingual support (Spanish and English), enhancing user accessibility.',
                        'Integrated REST APIs for efficient booking processes and data handling.',
                        'Ensured responsive design for optimal user experience across various devices.',
                    ]}
                />
            </div>
        </section>
    );
};

export default Experience;
