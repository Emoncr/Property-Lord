import SectionHeading from '@/app/_components/common/SectionHeading';
import React from 'react';
import TestimonialCard from './TestimonialCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

export const testimonials = [
    {
        title: 'Exceptional Service and Results',
        description:
            'Working with this real estate team was a game-changer. Their market knowledge and dedication helped us sell our home above asking price in just two weeks. The whole process was smooth and professional.',
        name: 'Sarah Johnson',
        position: 'Home Seller',
        image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/1732828949620giorgio-encinas-n34dhlh0spw-unsplash.jpg?alt=media&token=1774bd3c-a5ee-42fe-af42-6e63d8b32c33',
    },
    {
        title: 'Made Our Dream Home a Reality',
        description:
            'As first-time homebuyers, we were nervous about the process. The team guided us through every step, explaining everything clearly and finding us the perfect home within our budget. Could not be happier!',
        name: 'Michael Chen',
        position: 'Home Buyer',
        image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/1732828904948alexander-hipp-iEEBWgY_6lA-unsplash%20(1).jpg?alt=media&token=7684afdd-010c-4260-be55-5f94a8d8438b',
    },
    {
        title: 'Professional and Knowledgeable Team',
        description:
            'Their expertise in the local market is unmatched. They provided valuable insights that helped us make informed decisions. The property valuation was spot-on, and their negotiation skills are excellent.',
        name: 'Emma Rodriguez',
        position: 'Property Investor',
        image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/1732828857454alex-suprun-ZHvM3XIOHoE-unsplash.jpg?alt=media&token=8d31cb8d-20f8-4664-bd14-102285f499e0',
    },
    {
        title: 'Outstanding Property Management',
        description:
            'Managing our rental properties has never been easier. Their attention to detail and proactive approach to maintenance and tenant relations has maximized our returns while minimizing our stress.',
        name: 'David Thompson',
        position: 'Property Owner',
        image: '/images/testimonial_user.png',
    },
    {
        title: 'Exceeded All Expectations',
        description:
            'From the initial consultation to the final sale, every interaction was professional and efficient. Their marketing strategy brought in multiple offers, and their guidance through the negotiation process was invaluable.',
        name: 'Lisa Anderson',
        position: 'Real Estate Developer',
        image: '/images/testimonial_user.png',
    },
];

const Testimonial = () => {
    return (
        <section className="bg-background py-10 md:py-16 lg:py-32">
            <div className="container">
                <SectionHeading
                    headingText={'People say about us?'}
                    badgeText={'CUSTOMER Testimonial'}
                />
                <div>
                    <Carousel>
                        <CarouselContent className="gap-">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <TestimonialCard {...testimonial} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-4 md:-left-6 md:h-12 md:w-12" />
                        <CarouselNext className="absolute -right-4 md:-right-6 md:h-12 md:w-12" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
