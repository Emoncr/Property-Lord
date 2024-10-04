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
const Testimonial = () => {
    return (
        <section className="bg-background py-10 md:py-16 lg:py-32">
            <div className="container">
                <SectionHeading
                    headingText={'People say about us?'}
                    badgeText={'CUSTOMER Testimonial'}
                />
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div> */}
                <div>
                    <Carousel>
                        <CarouselContent className="gap-">
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <TestimonialCard />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <TestimonialCard />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <TestimonialCard />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <TestimonialCard />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <TestimonialCard />
                            </CarouselItem>
                        </CarouselContent>
                        {/* <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 text-primary " />
                        <CarouselNext /> */}
                        <CarouselPrevious className="absolute -left-4 md:-left-6 md:h-12 md:w-12" />
                        <CarouselNext className="absolute -right-4 md:-right-6 md:h-12 md:w-12" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
