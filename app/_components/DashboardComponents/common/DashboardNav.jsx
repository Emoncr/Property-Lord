'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
    Home,
    FolderClock,
    Bookmark,
    MessageCircle,
    BringToFront,
    SquarePlus,
    ChevronDown,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const DashboardNav = () => {
    const currentPath = usePathname();
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const dashboardLinksVendor = [
        { id: 1, title: 'Dashboard', icon: Home, path: '/dashboard' },
        {
            id: 2,
            title: 'My posts',
            icon: BringToFront,
            path: '/dashboard/posts',
            submenu: true,
            submenuItems: [
                {
                    id: 1,
                    title: 'Create posts',
                    path: '/dashboard/posts/create',
                    icon: SquarePlus,
                },
                {
                    id: 2,
                    title: 'Draft posts',
                    path: '/dashboard/posts/draft-posts',
                    icon: FolderClock,
                },
            ],
        },
        {
            id: 3,
            title: 'Messages',
            icon: MessageCircle,
            path: '/dashboard/messages',
        },
        {
            id: 4,
            title: 'Saved Listings',
            icon: Bookmark,
            path: '/dashboard/saved-listings',
        },
    ];

    const toggleSubmenu = (id) => {
        setOpenSubmenu(openSubmenu === id ? null : id);
    };

    return (
        <div className="grid grid-cols-1 pb-5">
            {dashboardLinksVendor.map((link) => (
                <React.Fragment key={link.id}>
                    <Link
                        href={link.path}
                        className={`group mt-3 flex items-center justify-between gap-3 rounded-sm px-3 py-2 font-primary text-base font-semibold transition-all first:mt-5 hover:bg-primary hover:text-white ${
                            currentPath === link.path
                                ? 'bg-primary text-white'
                                : 'bg-transparent text-secondary-foreground'
                        }`}
                        onClick={() => link.submenu && toggleSubmenu(link.id)}
                    >
                        <span className="flex items-center justify-start gap-2">
                            <link.icon className="h-5 w-5 group-hover:animate-pulse" />
                            {link.title}
                        </span>
                        {link.submenu && (
                            <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${openSubmenu === link.id ? 'rotate-180' : ''}`}
                            />
                        )}
                        {link.title === 'Messages' && (
                            <div
                                className={`flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold group-hover:bg-white group-hover:text-primary ${currentPath.startsWith(link.path) ? 'bg-white text-primary' : 'bg-primary text-white'}`}
                            >
                                3
                            </div>
                        )}
                    </Link>
                    {link.submenu && (
                        <div
                            className={`overflow-hidden pl-3 transition-all duration-300 ease-in-out ${openSubmenu === link.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            {link.submenuItems.map((submenu) => (
                                <Link
                                    key={submenu.id}
                                    href={submenu.path}
                                    className={`group mt-2 flex items-center justify-between gap-3 rounded-sm px-3 py-2 font-primary text-base font-semibold transition-all hover:bg-primary hover:text-white ${
                                        currentPath === submenu.path
                                            ? 'bg-primary text-white'
                                            : 'bg-transparent text-secondary-foreground'
                                    }`}
                                >
                                    <span className="flex items-center justify-start gap-2">
                                        <submenu.icon className="h-5 w-5 group-hover:animate-pulse" />
                                        {submenu.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default DashboardNav;
