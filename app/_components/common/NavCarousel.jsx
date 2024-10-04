import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Link from 'next/link';

const NavCarousel = () => {
    return (
        <Carousel>
            <CarouselContent className="ml-1 flex items-center justify-start gap-3">
                <CarouselItem className="font-gilroy flex basis-1/3 cursor-pointer items-center justify-center rounded-full border border-solid p-0 text-xs font-medium duration-300 ease-in-out hover:bg-primary hover:!text-white sm:basis-1/5 sm:text-sm md:basis-1/4 lg:basis-1/5">
                    <Link
                        className="px-6 py-2"
                        href={'/products/event-decoration'}
                    >
                        Photography
                    </Link>
                </CarouselItem>

                <CarouselItem className="font-gilroy flex basis-1/3 cursor-pointer items-center justify-center rounded-full border border-solid p-0 text-xs font-medium duration-300 ease-in-out hover:bg-primary hover:!text-white sm:basis-1/5 sm:text-sm md:basis-1/4 lg:basis-1/5">
                    <Link
                        className="px-6 py-2"
                        href={'/products/event-decoration'}
                    >
                        Photography
                    </Link>
                </CarouselItem>

                <CarouselItem className="font-gilroy flex basis-1/3 cursor-pointer items-center justify-center rounded-full border border-solid p-0 text-xs font-medium duration-300 ease-in-out hover:bg-primary hover:!text-white sm:basis-1/5 sm:text-sm md:basis-1/4 lg:basis-1/5">
                    <Link
                        className="px-6 py-2"
                        href={'/products/event-decoration'}
                    >
                        Photography
                    </Link>
                </CarouselItem>

                <CarouselItem className="font-gilroy flex basis-1/3 cursor-pointer items-center justify-center rounded-full border border-solid p-0 text-xs font-medium duration-300 ease-in-out hover:bg-primary hover:!text-white sm:basis-1/5 sm:text-sm md:basis-1/4 lg:basis-1/5">
                    <Link
                        className="px-6 py-2"
                        href={'/products/event-decoration'}
                    >
                        Photography
                    </Link>
                </CarouselItem>

                <CarouselItem className="font-gilroy flex basis-1/3 cursor-pointer items-center justify-center rounded-full border border-solid p-0 text-xs font-medium duration-300 ease-in-out hover:bg-primary hover:!text-white sm:basis-1/5 sm:text-sm md:basis-1/4 lg:basis-1/5">
                    <Link
                        className="px-6 py-2"
                        href={'/products/event-decoration'}
                    >
                        Photography
                    </Link>
                </CarouselItem>

                <CarouselItem className="font-gilroy flex basis-1/3 cursor-pointer items-center justify-center rounded-full border border-solid p-0 text-xs font-medium duration-300 ease-in-out hover:bg-primary hover:!text-white sm:basis-1/5 sm:text-sm md:basis-1/4 lg:basis-1/5">
                    <Link
                        className="px-6 py-2"
                        href={'/products/event-decoration'}
                    >
                        Photography
                    </Link>
                </CarouselItem>

                <CarouselItem className="font-gilroy flex basis-1/3 cursor-pointer items-center justify-center rounded-full border border-solid p-0 text-xs font-medium duration-300 ease-in-out hover:bg-primary hover:!text-white sm:basis-1/5 sm:text-sm md:basis-1/4 lg:basis-1/5">
                    <Link
                        className="px-6 py-2"
                        href={'/products/event-decoration'}
                    >
                        Photography
                    </Link>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
};

export default NavCarousel;
