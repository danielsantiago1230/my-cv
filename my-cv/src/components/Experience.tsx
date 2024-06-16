import React from 'react';
import Card from './Card';

const Experience: React.FC = () => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl font-heading font-semibold mb-8 text-center md:text-left">Work Experience</h2>

            <Card
                title="Full Stack Developer"
                subtitle="Mobile Flux app & Flux Web app - Alluxi"
                date="Nov 2022 - Ongoing project"
                description={[
                    'Developed and maintained the Flux mobile app using React Native, integrating features like Google Maps for charger points and car rental stations, Stripe for payment processing, and Firebase for user login and databases.',
                    'Implemented a real-time chat feature using Twilio, along with SMS code validation.',
                    'Successfully launched the Flux web app, mirroring the mobile app\'s features for cross-platform consistency.',
                    'Spearheaded the development of the Flux Fleet mobile admin app for managing charger stations, vehicle data, and user support.',
                    'Collaborated with third-party company Bundee for booking system integration.',
                    'Managed HubSpot for contact information management.',
                    'Ensured seamless performance across both iOS and Android platforms.',
                    'Handled backend development using Django, overcoming significant technical challenges.',
                ]}
            />

            <Card
                title="Back End Developer"
                subtitle="Horsebook"
                date="July 2023 - December 2023"
                description={[
                    'Initiated the backend development using Django for Horsebook, a web application aimed at facilitating horse auctions.',
                    'Designed and implemented user models and sign-up processes, enhancing user registration and authentication.',
                    'Developed initial horse models to manage auction functionalities.',
                    'Integrated Mailhog for email confirmations related to sign-up and auction updates.',
                    'Commenced revamping the frontend interface to improve user engagement and site usability.',
                ]}
            />

            <Card
                title="Front End Developer"
                subtitle="Garre Web Application"
                date="May 2022 - Nov 2022"
                description={[
                    'Developed key features for Garre, a Nuxt.js web application, including the home page, booking system, and trip management functionalities.',
                    'Implemented i18n for bilingual support (Spanish and English) enhancing user accessibility.',
                    'Integrated REST APIs for efficient booking processes and data handling.',
                    'Ensured responsive design for optimal user experience across various devices.',
                ]}
            />
        </section>
    );
};

export default Experience;
