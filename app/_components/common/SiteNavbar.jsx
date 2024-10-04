'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const SiteNavbar = () => {
    const navLinks = [
        // { title: "Home", id: 1, link: "/" },
        { title: 'Propertys', id: 2, link: '/propertys' },
        { title: 'About', id: 3, link: '/about' },
        { title: 'Service', id: 4, link: '/service' },
        { title: 'Contact', id: 5, link: '/contact' },
    ];

    const currentPath = usePathname();

    return (
        <header className="nav_container relative z-50 mx-auto flex items-center justify-between px-4 py-6">
            <div className="flex items-center">
                <Link href={'/'}>
                    <div>
                        <span className="font-primary text-2xl font-bold text-secondary">
                            Property
                        </span>
                        <span className="font-primary text-2xl font-bold text-primary">
                            Lord
                        </span>
                    </div>
                </Link>
            </div>
            <nav className="hidden space-x-8 py-3 font-primary text-base font-medium text-muted-foreground md:flex">
                <div className="justify-center-center flex flex-col items-center">
                    <Link
                        href={'/'}
                        className={` ${currentPath === `/` ? 'text-primary' : ''}`}
                    >
                        {'Home'}
                    </Link>
                    <div className="">
                        <div className="h-1 w-1 rounded-full bg-primary"></div>
                    </div>
                </div>
                {navLinks.map((link) => (
                    <div
                        key={link.id}
                        className="justify-center-center flex flex-col items-center"
                    >
                        <Link
                            href={link.link}
                            className={`${currentPath === link.link ? 'text-primary' : ''}`}
                        >
                            {link.title}
                        </Link>
                        {currentPath === link.link && (
                            <div className="h-1 w-1 rounded-full bg-primary"></div>
                        )}
                    </div>
                ))}
            </nav>
            <div className="flex items-center space-x-4">
                <Link
                    href="/signin"
                    className="font-medium text-green-500 hover:text-green-600"
                >
                    Sign in
                </Link>
                <Link
                    href="/login"
                    className="rounded bg-primary px-4 py-2 text-white transition duration-300 hover:bg-red-600"
                >
                    Login
                </Link>
            </div>
        </header>
    );
};

export default SiteNavbar;
