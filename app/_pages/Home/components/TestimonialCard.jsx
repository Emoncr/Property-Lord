// TestimonialCard.jsx
import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({ title, description, name, position, image }) => {
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
                <h4 className="line-clamp-1 font-secondary text-lg font-bold text-secondary">
                    {title}
                </h4>
                <p className="mt-2 line-clamp-4 text-sm text-secondary-foreground">
                    {description}
                </p>
            </div>
            <div className="mt-8">
                <div className="flex space-x-3">
                    <Image
                        src={image}
                        alt={name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <h4 className="truncate font-primary text-lg font-bold text-secondary">
                            {name}
                        </h4>
                        <p className="truncate text-sm text-secondary-foreground">
                            {position}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
