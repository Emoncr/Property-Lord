'use client';
import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SiteLogo from './SiteLogo';
const SiteNavbar = () => {
    const navLinks = [
        // { title: "Home", id: 1, link: "/" },
        { title: 'Propertys', id: 2, link: '/propertys' },
        { title: 'About', id: 3, link: '/about' },
        { title: 'Service', id: 4, link: '/service' },
        { title: 'Contact', id: 5, link: '/contact' },
    ];

    const currentPath = usePathname();

    const [isLogin, setIsLogin] = useState(true);

    return (
        <header className="nav_container relative z-50 mx-auto flex items-center justify-between px-4 py-6">
            <div className="flex items-center">
                <SiteLogo />
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

            {/* ====== Login Buttons ===== */}
            <div className="flex items-center space-x-4">
                {isLogin ? (
                    <div>
                        <Link
                            href="/dashboard"
                            className="flex items-center justify-center gap-1 rounded bg-primary px-4 py-2 font-bold text-white transition duration-300 hover:bg-primary/80"
                        >
                            <LayoutDashboard size={20} />
                            {'Dashboard'}
                        </Link>
                    </div>
                ) : (
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
                )}
            </div>
        </header>
    );
};

export default SiteNavbar;
