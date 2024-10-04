import { Badge } from '@/components/ui/badge';
import React from 'react';

const SectionHeading = ({
    headingText,
    subText,
    badgeText,
    headingColor = '',
}) => {
    return (
        <div>
            <Badge variant="heading">{badgeText}</Badge>
            <h2
                className={`text-4xl font-bold sm:text-5xl ${headingColor ? `text-${headingColor}` : 'text-primary-foreground'} mb-3 mt-3 font-primary leading-tight sm:mb-6 lg:max-w-[500px]`}
            >
                {headingText}
            </h2>
            <p className="mb-8 text-base text-secondary-foreground sm:text-base lg:max-w-[520px]">
                {subText}
            </p>
        </div>
    );
};

export default SectionHeading;
