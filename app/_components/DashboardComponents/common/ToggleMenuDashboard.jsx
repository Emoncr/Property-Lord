'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import DashboardNav from './DashboardNav';

const ToggleMenuDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        className="shrink-0 !p-0 text-primary hover:bg-transparent hover:text-primary/90 focus:ring-0 md:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold"
                        >
                            <div className="max-w-[100px]">
                                <Image
                                    width={120}
                                    height={20}
                                    quality={100}
                                    src="/images/Group.png"
                                    alt="Logo Image"
                                />
                            </div>
                        </Link>
                        <div className="mt-3">
                            <DashboardNav />
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default ToggleMenuDashboard;
