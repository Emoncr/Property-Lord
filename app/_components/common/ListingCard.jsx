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
import React from 'react';

const ListingCard = () => {
    return (
        <div className="group w-full rounded-2xl bg-white p-4 shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)]">
            <div>
                <div className="relative">
                    <div className="overflow-hidden rounded-xl">
                        <Link href={'/'}>
                            <Image
                                src="/images/Img.png"
                                alt="Listing Image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                className="rounded-xl duration-500 group-hover:scale-110"
                            />
                        </Link>
                    </div>
                    <div className="absolute -left-[4px] top-4">
                        <Image
                            src={'/icons/feature_icon.png'}
                            alt="Listing Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="absolute -left-[4px] top-12">
                        <Image
                            src={'/icons/sale_icon.png'}
                            alt="Listing Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="absolute right-0 top-0">
                        <Image
                            src={'/icons/Bookmark.png'}
                            alt="Listing Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <div>
                        <Link href={'/'}>
                            <h4 className="text-lg font-bold text-secondary hover:underline group-hover:text-secondary sm:text-xl">
                                {'Lorem ipsum dolor sit amet'}
                            </h4>
                        </Link>
                        <p className="mt-2 flex items-center gap-1 truncate text-sm text-primary-foreground">
                            <MapPinIcon size={16} className="text-secondary" />
                            {'Lorem ipsum'}
                        </p>
                    </div>
                    <div>
                        <p className="mt-3 flex items-center gap-1 truncate font-secondary text-xl font-bold text-primary">
                            <DollarSign strokeWidth={3} size={20} />
                            {'7,500'}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-6 gap-y-4 overflow-hidden py-1 sm:gap-12 md:gap-7 lg:gap-5 xl:gap-8">
                        <div>
                            <p className="mt-2 flex max-w-[120px] items-center gap-1 truncate text-sm text-secondary-foreground">
                                <BedDouble strokeWidth={3} size={16} />
                                {`Beds: ${'4'}`}
                            </p>
                        </div>
                        <div>
                            <p className="mt-2 flex max-w-[120px] items-center gap-1 truncate text-sm text-secondary-foreground">
                                <Bath strokeWidth={3} size={16} />
                                {`Baths: ${'4'}`}
                            </p>
                        </div>
                        <div>
                            <p className="mt-2 flex max-w-[120px] items-center justify-start gap-1 truncate text-sm text-secondary-foreground">
                                <LandPlot strokeWidth={3} size={16} />
                                {`Sqft:`}
                                <span className="truncate">{'1,2123212'}</span>
                            </p>
                        </div>
                    </div>
                    <div className="my-3 h-[1px] bg-border"></div>
                    <div className="flex items-center justify-between">
                        {/* <Button variant="ghost">
                            <Plus size={18} className='mr-1' />
                            {"Compare"}
                        </Button> */}
                        <p className="truncate text-sm text-secondary-foreground">
                            {'2 years ago'}
                        </p>
                        <Button>{'View Details'}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
