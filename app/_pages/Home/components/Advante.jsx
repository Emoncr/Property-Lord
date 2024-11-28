import SectionHeading from '@/app/_components/common/SectionHeading';
import React from 'react';
import AdvanteCard from './AdvanteCard';

const Advante = () => {
    const advantageInfo = [
        {
            title: 'Free Property Appraisal',
            description:
                "'Get a comprehensive market valuation of your property at no cost. Our expert team provides detailed analysis of current market trends and comparable properties to determine your home's true value.",
            imageSrc: '/icons/Heart.svg',
        },
        {
            title: 'Secure Transactions',
            description:
                'Experience peace of mind with our secure transaction process. Our team ensures all documentation, negotiations, and financial dealings are handled with the utmost security and professionalism.',
            imageSrc: '/icons/Shield Done.svg',
        },
        {
            title: 'Premium Marketing',
            description:
                'Showcase your property with our premium marketing package. From professional photography to targeted digital campaigns, we ensure maximum visibility to qualified buyers.',
            imageSrc: '/icons/Star.svg',
        },
        {
            title: 'Exclusive Listings',
            description:
                'Access our exclusive property listings before they hit the market. Our VIP clients receive priority notifications about new properties that match their specific criteria.',
            imageSrc: '/icons/Ticket Star.svg',
        },
        {
            title: 'Location Analysis',
            description:
                'Make informed decisions with our detailed location analysis. We provide insights on neighborhood development, local amenities, schools, and future growth potential.',
            imageSrc: '/icons/Location.svg',
        },
        {
            title: 'Market Insights',
            description:
                'Stay ahead with real-time market insights and trends. Our data-driven approach helps you understand price movements, market dynamics, and optimal timing for buying or selling.',
            imageSrc: '/icons/Graph.svg',
        },
    ];

    return (
        <section className="bg-background py-10 md:py-16 lg:py-32">
            <div className="container">
                <SectionHeading
                    headingText={'Giving you peace of mind'}
                    badgeText={'OUR ADVANTE'}
                />
                <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                    {advantageInfo.map((item, index) => (
                        <AdvanteCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            imageSrc={item.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advante;
