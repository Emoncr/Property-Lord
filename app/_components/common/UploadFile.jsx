import React from 'react';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { FileUploader } from '@/components/FileUploader';

const UploadFile = ({
    form,
    fieldName,
    label,
    maxSize,
    maxFiles,
    required = true,
}) => {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <div className="space-y-6">
                    <FormItem className="w-full">
                        <FormLabel>
                            {label}{' '}
                            {required && (
                                <span className="ml-0.5 text-base font-bold text-destructive">
                                    *
                                </span>
                            )}{' '}
                        </FormLabel>
                        <FormControl>
                            <FileUploader
                                value={field.value}
                                onValueChange={field.onChange}
                                maxFiles={maxFiles}
                                maxSize={maxSize}
                                // progresses={progresses}
                                // disabled={isUploading}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </div>
            )}
        />
    );
};

export default UploadFile;
