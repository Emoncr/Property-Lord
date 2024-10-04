import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell } from 'lucide-react';
import NotificationBox from './NotificationBox';

const NotificationBtn = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                        >
                            <Bell size={24} />
                            <p className="font-gilroy absolute right-0.5 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-semibold text-white">
                                26
                            </p>
                        </Button>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="!border-none !p-0" align="end">
                    <NotificationBox />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default NotificationBtn;
