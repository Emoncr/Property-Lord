'use client';
import Link from 'next/link';
import { Home, Package, ShoppingCart, ImagePlus, Split } from 'lucide-react';
import { usePathname } from 'next/navigation';

const DashboardNav = () => {
    const currentPath = usePathname();

    const dashboardLinksVendor = [
        { id: 1, title: 'Dashboard', icon: Home, path: '/vendor/dashboard' },
        { id: 2, title: 'Orders', icon: ShoppingCart, path: '/vendor/orders' },
        { id: 3, title: 'Services', icon: Package, path: '/vendor/services' },
        { id: 4, title: 'Category', icon: Split, path: '/vendor/category' },
        { id: 6, title: 'Gallery', icon: ImagePlus, path: '/vendor/gallery' },
        // { id: 6, title: "Withdraw", icon: DollarSign, path: "/vendor/withdraw" },
        // { id: 7, title: "Analytics", icon: LineChart, path: "/vendor/analytics" },
    ];

    const dashboardLinksUser = [
        { id: 1, title: 'Dashboard', icon: Home, path: '/dashboard' },
        // { id: 2, title: "Orders", icon: ShoppingCart, path: "/dashboard/orders" },
    ];

    return (
        <>
            {currentPath.startsWith('/vendor') ? (
                // Vendor Dashboard Links
                <div className="grid grid-cols-1 gap-y-2">
                    {dashboardLinksVendor.map((link) => (
                        <Link
                            key={link.id}
                            href={link.path}
                            className={`font-gilroy group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-base font-bold transition-all hover:bg-primary hover:text-white ${
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
            ) : (
                // User Dashboard Links
                <div className="grid grid-cols-1 gap-y-2">
                    {dashboardLinksUser.map((link) => (
                        <Link
                            key={link.id}
                            href={link.path}
                            className={`font-gilroy group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-base font-bold transition-all hover:bg-primary hover:text-white ${currentPath == link.path ? 'bg-primary text-white' : 'bg-transparent text-muted-foreground'} `}
                        >
                            <span className="flex items-center justify-start gap-2">
                                <link.icon className="h-4 w-4" />
                                {link.title}
                            </span>

                            {/* Orders page notification */}
                            {/* {
                                        link.title === "Orders" &&
                                        <div>
                                            <p className={`h-6 w-6 bg-primary  font-bold rounded-full flex items-center justify-center text-xs group-hover:text-primary group-hover:bg-white 
                         ${currentPath == link.path
                                                    ?
                                                    "text-primary bg-white"
                                                    :
                                                    "bg-primary text-white"
                                                } `}>
                                                3
                                            </p>
                                        </div>
                                    } */}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default DashboardNav;
