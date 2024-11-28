import { Button } from '@/components/ui/button';
import {
    Bath,
    BedDouble,
    DollarSign,
    LandPlot,
    MapPinIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ListingCard = ({ listingData }) => {
    const {
        title,
        location,
        price,
        beds,
        baths,
        sqft,
        image,
        featureIcon,
        saleIcon,
        bookmarkIcon,
        isFeatured,
        isSale,
        isBookmarked,
        listed,
        link,
    } = listingData;

    return (
        <div className="group w-full rounded-2xl bg-white p-4 shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)]">
            <div>
                <div className="relative">
                    <div className="overflow-hidden rounded-xl">
                        <Link href={link}>
                            <Image
                                src={image}
                                alt="Listing Image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="h-[250px] w-full rounded-xl object-cover duration-500 group-hover:scale-110"
                            />
                        </Link>
                    </div>
                    {isFeatured && (
                        <div className="absolute -left-[4px] top-4 min-w-[65px] max-w-[73px]">
                            <Image
                                src={featureIcon}
                                alt="Featured Property"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    )}
                    {isSale && (
                        <div
                            className={`absolute -left-[4px] min-w-[62px] max-w-[62px] ${isFeatured ? 'top-12' : 'top-4'}`}
                        >
                            <Image
                                src={saleIcon}
                                alt="Sale Property"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    )}
                    {isBookmarked && (
                        <div className="absolute right-0 top-0 min-w-[38px]">
                            <Image
                                src={bookmarkIcon}
                                alt="Bookmarked Property"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    )}
                </div>
                <div className="mt-4">
                    <div>
                        <Link href={link}>
                            <h4 className="line-clamp-1 font-primary text-lg font-bold text-secondary hover:underline group-hover:text-secondary sm:text-xl">
                                {title}
                            </h4>
                        </Link>
                        <p className="mt-2 flex items-center gap-1 truncate text-sm text-primary-foreground">
                            <MapPinIcon size={16} className="text-secondary" />
                            {location}
                        </p>
                    </div>
                    <div>
                        <p className="mt-3 flex items-center gap-1 truncate font-primary text-lg font-bold text-primary">
                            <DollarSign strokeWidth={3} size={16} />
                            {price}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-6 !gap-y-1 overflow-hidden py-1 sm:gap-12 md:gap-7 lg:gap-5 xl:gap-8">
                        <div>
                            <p className="mt-2 flex max-w-[120px] items-center gap-1 truncate text-sm text-secondary-foreground">
                                <BedDouble strokeWidth={3} size={16} />
                                {`Beds: ${beds}`}
                            </p>
                        </div>
                        <div>
                            <p className="mt-2 flex max-w-[120px] items-center gap-1 truncate text-sm text-secondary-foreground">
                                <Bath strokeWidth={3} size={16} />
                                {`Baths: ${baths}`}
                            </p>
                        </div>
                        <div>
                            <p className="mt-2 flex max-w-[120px] items-center justify-start gap-1 truncate text-sm text-secondary-foreground">
                                <LandPlot strokeWidth={3} size={16} />
                                {`Sqft:`}
                                <span className="truncate">{sqft}</span>
                            </p>
                        </div>
                    </div>
                    <div className="my-3 h-[1px] bg-border"></div>
                    <div className="flex items-center justify-between">
                        <p className="truncate text-sm text-secondary-foreground">
                            {listed}
                        </p>
                        <Button>{'View Details'}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
