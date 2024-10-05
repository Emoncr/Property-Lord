import Link from 'next/link';

const SiteLogo = () => {
    return (
        <div className="flex">
            <Link href={'/'}>
                <div>
                    <span className="font-primary text-xl font-bold text-secondary sm:text-2xl">
                        Property
                    </span>
                    <span className="font-primary text-xl font-bold text-primary sm:text-2xl">
                        Lord
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default SiteLogo;
