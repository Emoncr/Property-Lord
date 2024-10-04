import ListingCard from '@/app/_components/common/ListingCard';
import SectionHeading from '@/app/_components/common/SectionHeading';
import React from 'react';

const RecomandSection = () => {
    return (
        <section className="bg-white py-10 md:py-16 lg:py-32">
            <div className="container">
                <div>
                    <SectionHeading
                        headingText={'Best recomendation'}
                        subText={
                            'Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.'
                        }
                        badgeText={'DISCOVER'}
                    />
                </div>
                <div className="mt-6">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                        <ListingCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecomandSection;
