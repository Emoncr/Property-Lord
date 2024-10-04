'use client';
import { useState, useEffect } from 'react';
import PictureUploadPopup from '@/app/_pages/service/eventDecoration/vendor/gallery/galleryPhotos/components/PictureUploadPopup';
import { Button } from '@/components/ui/button';
import { Check, Upload } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast';
import { FormField, FormItem, FormControl } from '@/components/ui/form';
import { useSearchParams } from 'next/navigation';

const SelectImage = ({ imagesData, selectImagesInfo, onAddImage, onClose }) => {
    const { form, max, name } = selectImagesInfo;
    const [selectedImages, setSelectedImages] = useState(
        form.getValues(name || 'images') || []
    );

    const searchParams = useSearchParams();
    const folderId = searchParams.get('folder');

    const MAX_SELECTABLE_IMAGES = max;
    const { toast } = useToast();

    useEffect(() => {
        form.setValue(name, selectedImages, {
            shouldValidate: true,
            shouldDirty: true,
        });
    }, [selectedImages, form, name]);

    // HANDLE IMAGE SELECTION TOGGLE
    const toggleImageSelection = (imageLink) => {
        setSelectedImages((prev) => {
            if (prev.includes(imageLink)) {
                return prev.filter((link) => link !== imageLink);
            } else if (prev.length < MAX_SELECTABLE_IMAGES) {
                return [...prev, imageLink];
            } else {
                toast({
                    variant: 'destructive',
                    description: `You can only select up to ${MAX_SELECTABLE_IMAGES} images.`,
                    title: 'Error',
                });
                return prev;
            }
        });
    };

    // HANDLE ALL IMAGE SELECTION TOGGLE
    // const toggleAllImagesSelect = () => {
    //     setSelectedImages(prev => {
    //         if (prev.length === MAX_SELECTABLE_IMAGES || prev.length !== 0) {
    //             return [];
    //         } else {
    //             return imagesData?.images.map(item => item.imageLink).slice(0, MAX_SELECTABLE_IMAGES);
    //         }
    //     });
    // };

    return (
        <>
            {imagesData && imagesData?.images.length !== 0 && (
                <div className="mb-4 mt-4 flex justify-end">
                    <div className="relative">
                        <Button
                            disabled={selectedImages.length === 0}
                            type="button"
                            onClick={onClose}
                        >
                            Complete Selection
                        </Button>
                        {selectedImages.length > 0 && (
                            <div className="absolute -left-2 -top-2">
                                <p className="bg-header_secondary flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white">
                                    {selectedImages.length}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            <FormField
                control={form.control}
                name={name || 'images'}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <div className="mt-6">
                                {imagesData &&
                                imagesData?.images.length !== 0 ? (
                                    <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5">
                                        {imagesData?.images.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className="relative max-w-[200px]"
                                                >
                                                    <Image
                                                        width={200}
                                                        height={160}
                                                        quality={100}
                                                        src={item.imageLink}
                                                        loading="lazy"
                                                        alt="Gallery Image"
                                                        className={`h-[160px] w-[200px] cursor-pointer rounded-md border-4 ${selectedImages.includes(item.imageLink) ? 'border-primary' : 'border-transparent'} object-cover`}
                                                        placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPsqQcAAZ0BDTSBuAQAAAAASUVORK5CYII="
                                                        onClick={() =>
                                                            toggleImageSelection(
                                                                item.imageLink
                                                            )
                                                        }
                                                    />
                                                    {selectedImages.includes(
                                                        item.imageLink
                                                    ) && (
                                                        <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                                                            <Check
                                                                size={14}
                                                                strokeWidth={3}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        )}
                                        <div>
                                            <PictureUploadPopup
                                                onAddImage={onAddImage}
                                                id={folderId}
                                            >
                                                <Image
                                                    src="/images/Button.png"
                                                    width={200}
                                                    height={200}
                                                    alt="upload"
                                                    className="hover:shadow-btnShadow cursor-pointer duration-300"
                                                />
                                            </PictureUploadPopup>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex h-[70vh] flex-col items-center justify-center gap-3">
                                        <div>
                                            <PictureUploadPopup
                                                onAddImage={onAddImage}
                                                id={folderId}
                                            >
                                                <Button
                                                    variant="outline"
                                                    className="!h-[160px] w-[200px] !text-muted-foreground"
                                                >
                                                    <Upload />
                                                </Button>
                                            </PictureUploadPopup>
                                        </div>
                                        <div>
                                            <p className="text-center font-semibold">
                                                No Picture Found. Click on the
                                                button to upload.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </FormControl>
                    </FormItem>
                )}
            />
        </>
    );
};

export default SelectImage;
