import DashboardNav from './common/DashboardNav';
import ProfileBtn from './common/ProfileBtn';
import SiteLogo from '../common/SiteLogo';
import { ScrollArea } from '@/components/ui/scroll-area';

const DashboardLayout = ({ children }) => {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-background pt-1 md:block">
                <div className="flex h-full max-h-screen flex-col">
                    <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                        <SiteLogo />
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
                <main className="bg-background">
                    <ScrollArea className="h-fit w-full scroll-smooth px-0">
                        <div className="max-h-screen">
                            <div className="flex items-start justify-between border-b border-border bg-background px-4 py-4 md:justify-end lg:px-7 xl:px-16">
                                <div className="flex items-center gap-3 sm:gap-6">
                                    <ProfileBtn />
                                </div>
                            </div>
                            <div className="p-4">{children}</div>
                        </div>
                    </ScrollArea>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
