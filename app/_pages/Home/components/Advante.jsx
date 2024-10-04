import SectionHeading from '@/app/_components/common/SectionHeading';
import React from 'react';
import AdvanteCard from './AdvanteCard';

const Advante = () => {
    const advanteInfo = [
        {
            title: 'Value Pricing',
            description:
                'Unsure about the right price for your property? Our team can help with a complimentary market analysis. Contact us today to schedule your free property valuation.',
            imageSrc: '/icons/Heart.svg',
        },
        {
            title: 'Value Pricing',
            description:
                'Unsure about the right price for your property? Our team can help with a complimentary market analysis. Contact us today to schedule your free property valuation.',
            imageSrc: '/icons/Shield Done.svg',
        },
        {
            title: 'Value Pricing',
            description:
                'Unsure about the right price for your property? Our team can help with a complimentary market analysis. Contact us today to schedule your free property valuation.',
            imageSrc: '/icons/Star.svg',
        },
        {
            title: 'Value Pricing',
            description:
                'Unsure about the right price for your property? Our team can help with a complimentary market analysis. Contact us today to schedule your free property valuation.',
            imageSrc: '/icons/Ticket Star.svg',
        },
        {
            title: 'Value Pricing',
            description:
                'Unsure about the right price for your property? Our team can help with a complimentary market analysis. Contact us today to schedule your free property valuation.',
            imageSrc: '/icons/Location.svg',
        },
        {
            title: 'Value Pricing',
            description:
                'Unsure about the right price for your property? Our team can help with a complimentary market analysis. Contact us today to schedule your free property valuation.',
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
                    {advanteInfo.map((item, index) => (
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
