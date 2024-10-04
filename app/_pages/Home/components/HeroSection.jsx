import Image from 'next/image';
import SearchComponent from '@/app/_components/common/SearchComponent';
import SiteNavbar from '@/app/_components/common/SiteNavbar';
import { Badge } from '@/components/ui/badge';
const HeroSection = () => {
    return (
        <div className="relative mx-auto min-h-0 max-w-[2400px] overflow-hidden bg-background lg:min-h-[calc(100vh-80px)]">
            <SiteNavbar />
            <main className="container relative z-10 mx-auto px-4 pb-20 pt-16 lg:pb-32 lg:pt-20">
                <div>
                    <div>
                        <div>
                            <Badge variant="heading">{'REAL ESTATE'}</Badge>
                            <h1
                                className={`mb-3 mt-3 font-primary text-4xl font-bold leading-tight text-secondary sm:mb-6 sm:text-5xl md:text-6xl lg:max-w-[680px] lg:text-7xl`}
                            >
                                {"Let's hunt for your dream residence"}
                            </h1>
                            <p className="mb-8 max-w-[520px] text-base text-secondary-foreground sm:text-base">
                                {
                                    'Explore our range of beautiful properties with the addition of separate accommodation suitable for you.'
                                }
                            </p>
                        </div>
                        <div className="sm:mt-10 lg:mt-16">
                            <SearchComponent />
                        </div>
                    </div>
                </div>
            </main>
            <div className="absolute right-0 top-0 h-full w-full lg:w-1/2">
                <div className="relative h-full w-full">
                    <Image
                        src="/images/hero_image.png"
                        alt="Hero"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    />
                </div>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-foreground via-background to-transparent lg:hidden"></div>
        </div>
    );
};

export default HeroSection;
