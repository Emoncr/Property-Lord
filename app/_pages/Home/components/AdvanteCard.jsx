import React from 'react';
import Image from 'next/image';

const AdvanteCard = ({ title, description, imageSrc }) => {
    return (
        <div className="pl- bg-transparent p-6">
            <div className="mb-4 flex items-center">
                <Image
                    src={imageSrc}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="h-12 w-12 object-cover"
                />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-primary-foreground">
                {title}
            </h2>
            <p className="text-sm text-secondary-foreground sm:text-base">
                {description}
            </p>
        </div>
    );
};

export default AdvanteCard;
