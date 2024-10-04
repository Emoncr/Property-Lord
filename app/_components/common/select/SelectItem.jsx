import { CommandItem } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import React from 'react';

const SelectItem = (props) =>
    props?.multiSelect ? (
        <MultiSelectItem {...props} />
    ) : (
        <SingleSelectItem {...props} />
    );
const MultiSelectItem = ({
    option,
    name,
    setSelectValue,
    multiSelectValues,
    isForm,
}) => {
    const isSelected = multiSelectValues.has(option?._id);

    return (
        <CommandItem
            value={option?.label}
            onSelect={() => {
                isSelected
                    ? multiSelectValues.delete(option._id)
                    : multiSelectValues.add(option._id);

                const values = Array.from(multiSelectValues);
                if (isForm) {
                    // check is form field
                    setSelectValue(name, values.length ? values : [], {
                        shouldTouch: true,
                        shouldValidate: true,
                        shouldDirty: true,
                    });
                } else {
                    setSelectValue(values.length ? values : []);
                }
            }}
        >
            <div
                className={cn(
                    'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                    isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'opacity-50 [&_svg]:invisible'
                )}
            >
                <Check className={cn('h-4 w-4')} />
            </div>
            <span>{option.label}</span>
        </CommandItem>
    );
};

const SingleSelectItem = ({
    option,
    name,
    setSelectValue,
    singleSelectValue,
    isForm,
    handleClose,
}) => {
    return (
        <CommandItem
            value={option?.label}
            onSelect={() => {
                if (isForm) {
                    // check is form field
                    setSelectValue(name, option?._id, {
                        shouldTouch: true,
                        shouldValidate: true,
                        shouldDirty: true,
                    });
                } else {
                    setSelectValue(option?._id);
                }
                handleClose();
            }}
        >
            <span>{option?.label}</span>
            <Check
                className={cn(
                    'ml-auto h-4 w-4',
                    option?._id === singleSelectValue
                        ? 'opacity-100'
                        : 'opacity-0'
                )}
            />
        </CommandItem>
    );
};

export default SelectItem;
