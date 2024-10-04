'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageViewerSlider = ({ images = [], index = 0, isSldier = false }) => {
    const [api, setApi] = useState();
    const [currentIndex, setCurrentIndex] = useState(index);

    useEffect(() => {
        if (!api) {
            return;
        }

        // Set the current index immediately without animation
        api.scrollTo(index, { immediate: true });
        setCurrentIndex(index);
    }, [api, index]);

    return (
        <div className="mx-auto w-full">
            <Carousel
                setApi={setApi}
                opts={{
                    startIndex: currentIndex,
                    loop: false,
                    duration: 0,
                }}
            >
                <CarouselContent>
                    {images.map((img, i) => (
                        <CarouselItem key={i}>
                            <div className="h-screen overflow-hidden rounded-md border-0 bg-primary-foreground shadow-none">
                                <div className="relative flex h-screen w-full items-center justify-center">
                                    <Image
                                        fill={true}
                                        src={isSldier ? img : img.imageLink}
                                        alt="Gallery Image"
                                        className="rounded-md object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 md:left-6 md:h-12 md:w-12" />
                <CarouselNext className="right-4 md:right-6 md:h-12 md:w-12" />
            </Carousel>
        </div>
    );
};

export default ImageViewerSlider;
