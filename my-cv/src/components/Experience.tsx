import React from 'react';

const Experience: React.FC = () => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">Work Experience</h2>

            <div className="bg-white shadow-md rounded p-4 mb-4">
                <h3 className="text-xl font-bold">Full Stack Developer</h3>
                <p className="text-gray-600">Mobile Flux app & Flux Web app - Alluxi</p>
                <p className="mt-2">Nov 2022 - Ongoing project</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Developed and maintained the Flux mobile app using React Native, integrating features like Google Maps for charger points and car rental stations, Stripe for payment processing, and Firebase for user login and databases.</li>
                    <li>Implemented a real-time chat feature using Twilio, along with SMS code validation.</li>
                    <li>Successfully launched the Flux web app, mirroring the mobile app's features for cross-platform consistency.</li>
                    <li>Spearheaded the development of the Flux Fleet mobile admin app for managing charger stations, vehicle data, and user support.</li>
                    <li>Collaborated with third-party company Bundee for booking system integration.</li>
                    <li>Managed HubSpot for contact information management.</li>
                    <li>Ensured seamless performance across both iOS and Android platforms.</li>
                    <li>Handled backend development using Django, overcoming significant technical challenges.</li>
                </ul>
            </div>

            <div className="bg-white shadow-md rounded p-4 mb-4">
                <h3 className="text-xl font-bold">Back End Developer</h3>
                <p className="text-gray-600">Horsebook</p>
                <p className="mt-2">July 2023 - December 2023</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Initiated the backend development using Django for Horsebook, a web application aimed at facilitating horse auctions.</li>
                    <li>Designed and implemented user models and sign-up processes, enhancing user registration and authentication.</li>
                    <li>Developed initial horse models to manage auction functionalities.</li>
                    <li>Integrated Mailhog for email confirmations related to sign-up and auction updates.</li>
                    <li>Commenced revamping the frontend interface to improve user engagement and site usability.</li>
                </ul>
            </div>

            <div className="bg-white shadow-md rounded p-4 mb-4">
                <h3 className="text-xl font-bold">Front End Developer</h3>
                <p className="text-gray-600">Garre Web Application</p>
                <p className="mt-2">May 2022 - Nov 2022</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>Developed key features for Garre, a Nuxt.js web application, including the home page, booking system, and trip management functionalities.</li>
                    <li>Implemented i18n for bilingual support (Spanish and English) enhancing user accessibility.</li>
                    <li>Integrated REST APIs for efficient booking processes and data handling.</li>
                    <li>Ensured responsive design for optimal user experience across various devices.</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
