import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TestimonialCard = () => {
    return (
        <div className="border border-border bg-white p-6">
            <div>
                <Quote
                    fill="currentColor"
                    size={44}
                    className="rotate-180 text-border"
                />
            </div>
            <div className="mt-4">
                <h4 className="line-clamp-2 font-secondary text-lg font-bold text-secondary">
                    {'Lorem ipsum dolor sit amet, consectetur'}
                </h4>
                <p className="mt-2 line-clamp-4 text-sm text-secondary-foreground">
                    {
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum quos sit animi? Iste porro suscipit odio, repellendus quibusdam sequi fuga cumque, dolores repudiandae molestias cupiditate quo officiis consequatur! Et.'
                    }
                </p>
            </div>
            <div className="mt-8">
                <div className="flex space-x-3">
                    <Image
                        src="/images/testimonial_user.png"
                        alt="Testimonial"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <h4 className="truncate font-primary text-lg font-bold text-secondary">
                            {'John Doe'}
                        </h4>
                        <p className="truncate text-sm text-secondary-foreground">
                            {'CEO, ABC Company'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
