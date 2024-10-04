import { Star } from 'lucide-react';
import Image from 'next/image';

const AboutUsImage = () => {
    return (
        <>
            {/* About Us Section Image */}
            <div className="relative">
                <Image
                    src="/images/about_images.png"
                    alt="About Us"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="rounded-sm object-cover"
                />
                <div className="absolute right-1/2 top-0 z-50 -mt-20 translate-x-[0%] rounded-md bg-background p-4 pt-0 shadow-lg sm:-translate-x-[50%]">
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 -mt-2 -translate-x-1/2">
                            <Image
                                src="/icons/Tick Square.png"
                                alt="check"
                                width={50}
                                height={50}
                                className="h-6 w-6 object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <h4 className="mt-7 text-center font-secondary text-5xl font-medium text-primary-foreground lg:text-7xl">
                            {'4.8'}
                        </h4>
                        <div className="py-2">
                            <p className="flex items-center justify-center text-[#FCD34D]">
                                <Star fill="#FCD34D" size={20} />
                                <Star fill="#FCD34D" size={20} />
                                <Star fill="#FCD34D" size={20} />
                                <Star fill="#FCD34D" size={20} />
                                <Star fill="#FCD34D" size={20} />
                            </p>
                        </div>
                        <div>
                            <p className="text-center font-secondary text-sm text-secondary-foreground">
                                Trusted on
                            </p>
                            <p className="mt-1 text-center font-secondary text-primary">
                                {'500+ Reviews'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 flex items-center justify-between gap-8 rounded-tl-sm bg-background p-4">
                    <div>
                        <h4 className="text-center font-secondary text-4xl font-bold text-primary-foreground sm:text-5xl">
                            {'250+'}
                        </h4>
                        <div>
                            <p className="font-secondary text-sm font-bold text-secondary-foreground">
                                {'Property Sale'}
                            </p>
                        </div>
                    </div>
                    <div className="h-16 w-[2px] bg-border"></div>
                    <div>
                        <h4 className="text-center font-secondary text-4xl font-bold text-primary-foreground sm:text-5xl">
                            {'550+'}
                        </h4>
                        <div>
                            <p className="font-secondary text-sm font-bold text-secondary-foreground">
                                {'ApartmenRent'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsImage;
