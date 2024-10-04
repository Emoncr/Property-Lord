import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React from 'react';
import SubscribeForm from './SubscribeForm';

const NewsLetterSection = () => {
    return (
        <section className="bg-white py-10 md:py-16 lg:py-32">
            <div className="container">
                <div className="relative grid h-[500px] grid-cols-1 overflow-hidden rounded-lg shadow-xl md:grid-cols-2">
                    <div className="col-span-1 hidden bg-background pr-4 md:block lg:pr-8"></div>
                    <div className="absolute -bottom-8 -left-7 overflow-hidden">
                        <Image
                            src="/images/building.webp"
                            alt="Real Estate Building"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-auto object-cover md:w-[55%] lg:w-[48%]"
                        />
                    </div>
                    <div className="z-50 col-span-1 flex flex-col justify-center bg-primary px-4 py-10 lg:px-8">
                        <div>
                            <div>
                                <Badge variant="heading">{'NEWSLETTER'}</Badge>
                                <h2
                                    className={`mb-3 mt-3 font-primary text-4xl font-bold capitalize leading-tight text-white sm:mb-6 sm:text-5xl lg:max-w-[500px]`}
                                >
                                    Subscribe to our newsletter
                                </h2>
                                <p className="mb-8 text-base text-white sm:text-base lg:max-w-[520px]">
                                    {
                                        "Subscribe to our newsletter to stay up-to-date with our latest news and promotions. We won't send you any spam.Subscribe to our newsletter to stay up-to-date "
                                    }
                                </p>
                            </div>
                        </div>
                        <div>
                            <SubscribeForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetterSection;
