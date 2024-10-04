import Image from 'next/image';
import Link from 'next/link';
import DashboardNav from './common/DashboardNav';
import ProfileBtn from './common/ProfileBtn';
import ToggleMenuDashboard from './common/ToggleMenuDashboard';

const DashboardLayout = ({ children }) => {
    return (
        <div className="custom_class grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b border-border px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/"
                            className="flex w-full items-center gap-2 font-semibold"
                        >
                            <div>
                                <Image
                                    width={120}
                                    height={20}
                                    layout="responsive"
                                    src="/images/Group.png"
                                    alt="Logo Image"
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="flex-1">
                        {/* ========= Dashboard Navigation =========== */}
                        <nav className="grid items-start gap-2 px-2 text-sm font-medium lg:px-4">
                            <DashboardNav />
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="mb-2 flex items-start justify-between px-4 py-6 md:justify-end lg:px-7 xl:px-16">
                    <ToggleMenuDashboard />
                    <div className="flex items-center gap-3 sm:gap-6">
                        {/* <NotificationBtn /> */}
                        <ProfileBtn />
                    </div>
                </header>
                <main className="px-4 pb-10 lg:px-3 xl:px-12">
                    {/* <ScrollArea className="h-fit w-full scroll-smooth px-4">
                        <div className="max-h-[calc(100vh-140px)]">
                            {children}
                        </div>
                    </ScrollArea> */}

                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
