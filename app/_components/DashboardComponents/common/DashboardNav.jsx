'use client';
import Link from 'next/link';
import { Home, CircleFadingPlus, Bookmark, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

const DashboardNav = () => {
    const currentPath = usePathname();

    const dashboardLinksVendor = [
        { id: 1, title: 'Dashboard', icon: Home, path: '/dashboard' },
        { id: 2, title: 'My posts', icon: CircleFadingPlus, path: ' /posts' },
        { id: 3, title: 'Messages', icon: MessageCircle, path: '/messages' },
        {
            id: 4,
            title: 'Saved Listings',
            icon: Bookmark,
            path: ' /saved-listings',
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 gap-y-3 pb-5">
                {dashboardLinksVendor.map((link) => (
                    <Link
                        key={link.id}
                        href={link.path}
                        className={`font-gilroy group flex items-center justify-between gap-3 rounded-sm px-3 py-2 text-base font-semibold transition-all hover:bg-primary hover:text-white ${
                            currentPath.startsWith(link.path)
                                ? 'bg-primary text-white'
                                : 'bg-transparent text-muted-foreground'
                        }`}
                    >
                        <span className="flex items-center justify-start gap-2">
                            <link.icon className="h-4 w-4" />
                            {link.title}
                        </span>

                        {/* Orders page notification */}
                        {/* {link.title === "Orders" && (
                                    <div>
                                        <p className={`h-6 w-6 bg-primary font-bold rounded-full flex items-center justify-center text-xs group-hover:text-primary group-hover:bg-white 
                        ${currentPath.startsWith(link.path) ? "text-primary bg-white" : "bg-primary text-white"}`}>
                                            3
                                        </p>
                                    </div>
                                )} */}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default DashboardNav;
