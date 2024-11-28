import Image from 'next/image';
import Link from 'next/link';

const SiteLogo = () => {
    return (
        <div className="flex">
            <Link href={'/'}>
                <div>
                    <Image
                        src={'/Logo/logo.png'}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="object-cover"
                    />
                </div>
            </Link>
        </div>
    );
};

export default SiteLogo;
