'use client';

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@mantine/hooks';
import { useCallback, useState } from 'react';
import SelectTrigger from './SelectTrigger';

const SelelctResponsiveWrapper = ({ children, field, trigerProps }) => {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);
    const triggerClass =
        'w-full flex items-center justify-between whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-background/20 hover:text-accent-foreground h-10 focus:outline-none focus:ring-1 focus:ring-ring ';
    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger
                    disabled={trigerProps.isLoading}
                    className={cn(triggerClass)}
                    ref={field?.ref}
                >
                    <SelectTrigger {...trigerProps} />
                </PopoverTrigger>
                <PopoverContent
                    className="w-[var(--radix-popover-trigger-width)] min-w-[var(--radix-popover-trigger-width)] p-0"
                    align="start"
                >
                    {children(handleClose)}
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger
                disabled={trigerProps.isLoading}
                className={cn(triggerClass)}
                ref={field?.ref}
            >
                <SelectTrigger {...trigerProps} />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mt-4 border-t">{children(handleClose)}</div>
            </DrawerContent>
        </Drawer>
    );
};

export default SelelctResponsiveWrapper;
