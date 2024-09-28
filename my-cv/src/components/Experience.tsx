import React from 'react';
import Card from './Card';

const Experience: React.FC = () => {
    return (
        <section className="my-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center md:text-left">Work Experience</h2>

            <div className="space-y-6">
                <Card
                    title="Full Stack Developer - Alluxi"
                    links={[
                        { label: "Flux EV Web App", url: "https://app.fluxev.city/" },
                        { label: "Flux EV App Store", url: "https://apps.apple.com/ec/app/flux-ev/id1603001875" },
                        { label: "Alluxi", url: "https://www.alluxi.com/" }
                    ]}
                    subtitle="Mobile Flux app & Flux Web app"
                    date="Nov 2022 - Present"
                    description={[
                        'Developed and maintained the Flux mobile app using React Native, integrating features like Google Maps for charger points and car rental stations, Stripe for payment processing, and Firebase for user authentication and databases.',
                        'Implemented a real-time chat feature using Twilio, along with SMS code validation.',
                        "Successfully launched the Flux web app, mirroring the mobile app's features for cross-platform consistency.",
                        'Spearheaded the development of the Flux Fleet mobile admin app for managing charger stations, vehicle data, and user support.',
                        'Integrated OAuth-based smart car connectivity in the backend using Django, creating APIs to retrieve battery levels, lock/unlock vehicles, and access geolocation data, utilized by the fleet admin app.',
                        'Implemented a secure access system in the backend to generate one-time codes for opening vaults containing car keys, consumed by the fleet admin app.',
                        'Integrated a driver\'s license validation system in both the Flux app and web app to ensure driver eligibility.',
                        'Developed an insurance management integration, allowing users to upload and manage insurance documents within the app.',
                        'Collaborated with third-party company Bundee for booking system integration.',
                        'Managed HubSpot for contact information management.',
                        'Ensured seamless performance across both iOS and Android platforms.',
                        'Handled backend development using Django, overcoming significant technical challenges.',
                    ]}
                />

                <Card
                    title="Back End Developer - Alluxi"
                    links={[
                        { label: "Subasta La Silla", url: "https://www.subastalasilla.com/" },
                        { label: "Alluxi", url: "https://www.alluxi.com/" }
                    ]}
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
                    title="Front End Developer - Alluxi"
                    links={[
                        { label: "Garre Web App", url: "http://garre-front-stage.s3-website-us-east-1.amazonaws.com/" },
                        { label: "Alluxi", url: "https://www.alluxi.com/" }
                    ]}
                    subtitle="Garre Web Application"
                    date="May 2022 - Nov 2022"
                    description={[
                        'Developed key features for Garre, a Nuxt.js web application, including the home page, booking system, and trip management functionalities.',
                        'Implemented i18n for bilingual support (Spanish and English) enhancing user accessibility.',
                        'Integrated REST APIs for efficient booking processes and data handling.',
                        'Ensured responsive design for optimal user experience across various devices.',
                    ]}
                />
            </div>
        </section>
    );
};

export default Experience;
