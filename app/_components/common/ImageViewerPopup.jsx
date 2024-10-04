'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import ImageViewerSlider from './ImageViewerSlider';

const ImageViewerPopup = ({ children, images, selectedIndex, isSldier }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog
            className="w-full !bg-black !p-0"
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="h-screen w-full !max-w-full overflow-hidden !p-0">
                <div>
                    <ImageViewerSlider
                        isSldier={isSldier}
                        images={images}
                        index={selectedIndex}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ImageViewerPopup;
