'use client';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Eye, EyeOff } from 'lucide-react';

const {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} = require('@/components/ui/form');
const { Input } = require('@/components/ui/input');

const FieldInput = ({
    name,
    form,
    placeholder,
    label,
    description,
    type = 'text',
    disabled,
    multiline,
    required = true,
    labelColor = '',
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && (
                        <FormLabel color={labelColor}>
                            {label}
                            {required && (
                                <span className="ml-0.5 text-base font-bold text-destructive">
                                    *
                                </span>
                            )}
                        </FormLabel>
                    )}
                    <FormControl>
                        {multiline ? (
                            <Textarea
                                placeholder={placeholder}
                                disabled={disabled}
                                className="resize-y"
                                {...field}
                                {...props}
                            />
                        ) : (
                            <div className="relative">
                                <Input
                                    type={
                                        type === 'password' && showPassword
                                            ? 'text'
                                            : type
                                    }
                                    placeholder={placeholder}
                                    disabled={disabled}
                                    {...field}
                                    {...props}
                                />
                                {type === 'password' && (
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <Eye className="h-5 w-5" />
                                        ) : (
                                            <EyeOff className="h-5 w-5" />
                                        )}
                                    </button>
                                )}
                            </div>
                        )}
                    </FormControl>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FieldInput;
