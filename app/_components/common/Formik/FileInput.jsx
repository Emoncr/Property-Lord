/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import imageCompression from 'browser-image-compression';
import { useState } from 'react';
const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
};

const FileInput = ({ name = 'file', form, label, item }) => {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <>
                            <div
                                ref={field?.ref}
                                tabIndex={0}
                                className="flex w-full items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 focus:outline-none focus:ring-1 focus:ring-ring"
                            >
                                <div className="flex h-9 flex-grow cursor-pointer items-center">
                                    <Label
                                        className={cn(
                                            'line-clamp-2 block w-full cursor-pointer break-all font-normal text-muted-foreground',
                                            form.getValues()?.[name]
                                                ? 'text-xs'
                                                : 'text-sm'
                                        )}
                                        htmlFor={item?._id || 'file'}
                                    >
                                        {loading
                                            ? 'Compressing...'
                                            : form.getValues()?.[
                                                    name
                                                ] instanceof Blob
                                              ? form.getValues()?.[name]?.name
                                              : form.getValues()?.[name] ||
                                                'Click to select image'}
                                        <Input
                                            id={item?._id || 'file'}
                                            className="sr-only hidden"
                                            type="file"
                                            onChange={async (e) => {
                                                const imageFile = e.target.files
                                                    ? e.target.files[0]
                                                    : null;
                                                setLoading(true);
                                                try {
                                                    const compressedFile =
                                                        await imageCompression(
                                                            imageFile,
                                                            options
                                                        );
                                                    field.onChange(
                                                        compressedFile
                                                    );
                                                } catch (error) {
                                                    field.onChange(null);
                                                    toast({
                                                        variant: 'destructive',
                                                        title: 'Error',
                                                        description:
                                                            error.message,
                                                    });
                                                }
                                                setLoading(false);
                                            }}
                                        />
                                    </Label>
                                </div>
                                {!!form.getValues()?.[name] && (
                                    <Button
                                        className="p-0 hover:bg-transparent"
                                        variant="ghost"
                                        type="button"
                                        onClick={() => {
                                            form.setValue(
                                                name,
                                                null,
                                                true,
                                                true,
                                                true
                                            );
                                        }}
                                    >
                                        Reset
                                    </Button>
                                )}
                            </div>

                            {form.getValues()?.[name] && (
                                <div className="relative mt-6 flex aspect-video max-w-sm justify-center rounded-md border border-input p-2">
                                    <img
                                        src={
                                            form.getValues()?.[name] instanceof
                                            Blob
                                                ? URL.createObjectURL(
                                                      form.getValues()?.[name]
                                                  )
                                                : form.getValues()?.[name]
                                        }
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-contain"
                                    />
                                </div>
                            )}
                        </>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FileInput;
