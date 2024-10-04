import SectionHeading from '@/app/_components/common/SectionHeading';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import AboutUsImage from './AboutUsImage';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
    return (
        <section className="bg-white py-10 !pt-36 sm:!pt-40 md:py-16 md:!pt-32 lg:py-32 lg:!pt-44">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-y-10 md:gap-x-10 min-[950px]:grid-cols-2 xl:gap-16">
                    <div>
                        <AboutUsImage />
                    </div>
                    <div>
                        <SectionHeading
                            headingText={'How much is your property worth now?'}
                            subText={
                                'We have built our reputation as true local area experts. We have gained more knowledge about buyer interests, our neighborhood and the market than any other brand because we live locally and work for local people.'
                            }
                            badgeText={'About Us'}
                        />
                        <div className="mt-4">
                            <Button size="xl">
                                Learn More
                                <ChevronRight className="ml-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
