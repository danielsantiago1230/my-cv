import React from 'react';
import Card from './Card';

interface ExperienceProps {
    years: number;
    months: number;
}

const Experience: React.FC<ExperienceProps> = ({ years, months }) => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16" id="experience">
            <h2 className="text-4xl font-heading font-bold mb-2 text-center md:text-left">Work Experience</h2>
            <h3 id="time" className="text-xl font-heading font-bold mb-8 text-center md:text-left">
                ({years} years{months > 0 ? ` & ${months} months` : ''})
            </h3>
            <div className="space-y-6">
                <Card
                    title="Full Stack Developer at Alluxi"
                    links={[
                        { label: "WMA Web App", url: "https://wma.virtualproshops.com/us" },
                        { label: "Alluxi", url: "https://www.alluxi.com/" }
                    ]}
                    subtitle="WMA Web App"
                    date="Dec 2024 - Present"
                    description={[
                        'Led development of a multi-store, multi-vendor e-commerce platform built with Medusa.js and Next.js 13, supporting multiple storefronts from a single backend.',
                        'Extended Medusa APIs for store-specific data segregation (customers, orders, products) and secure admin-level visibility across all stores.',
                        'Integrated UPS for dynamic shipping rates, TaxCloud for automated tax calculations across all U.S. regions, and Stripe Connect for split payments between vendors.',
                        'Implemented transactional email workflows using SendGrid and Freshdesk ticket automation for support requests.',
                        'Connected Payload CMS as a secondary validation service for customer data and store configurations.',
                        'Deployed AWS S3 for scalable media storage and optimized front-end performance with dynamic caching and CDN delivery.',
                        'Integrated Yotpo to handle rewards and loyalty points through event-based triggers (Drive Events).',
                        'Implemented reCAPTCHA to secure contact forms and reduce spam submissions.',
                        'Collaborated with the CTO to automate new store deployments on AWS, reducing setup time from hours to under 10 minutes.'
                    ]}
                />

                <Card
                    title="Full-Stack Developer at Alluxi"

                    links={[
                        { label: "Flux EV Web App", url: "https://app.fluxev.city/" },
                        { label: "Flux EV App Store", url: "https://apps.apple.com/ec/app/flux-ev/id1603001875" },
                        { label: "Alluxi", url: "https://www.alluxi.com/" }
                    ]}
                    subtitle="Flux EV Web & Mobile App"
                    date="Nov 2022 - Dec 2024"
                    description={[
                        'Developed and maintained the Flux EV platform — a web and mobile application for renting electric cars and locating charging stations in Austin, Texas.',
                        'Built the mobile app with React Native and the web app with React, integrating Google Maps and Google Places APIs for real-time location and availability tracking.',
                        'Implemented Stripe for secure payments, Firebase for authentication and notifications, and Twilio for SMS verification and real-time customer chat.',
                        'Engineered a robust Django backend with APIs for smart car connectivity, GPS tracking, and secure key access using OAuth and JWT-based authentication.',
                        'Integrated third-party services like IDScan and MeasureOne for license and insurance validation, ensuring compliance and reducing manual review time.',
                        'Created an internal fleet management app for admins to monitor vehicles in real-time, enhancing operational visibility and support response efficiency.',
                        'Delivered production-ready deployments with 99% uptime across iOS, Android, and web, supporting 100+ active users during the startup phase.'
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
