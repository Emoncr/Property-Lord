'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';
import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

// Dynamically import Jodit to avoid SSR issues
const JoditEditor = dynamic(() => import('jodit-react'), {
    ssr: false,
});

const TextInputField = ({ name, form, label }) => {
    return (
        <div>
            <FormField
                control={form.control}
                name={name || 'content'}
                render={({ field }) => (
                    <FormItem>
                        {label && <FormLabel>{label}</FormLabel>}{' '}
                        {/* Add this line */}
                        <Controller
                            name={name || 'content'}
                            control={form.control}
                            render={({ field }) => (
                                <JoditEditor
                                    value={field.value}
                                    config={{
                                        readonly: false,
                                        height: 400,
                                    }}
                                    onBlur={field.onChange}
                                />
                            )}
                        />
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default TextInputField;
