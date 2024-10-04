import {
    Command,
    CommandEmpty,
    CommandInput,
    CommandList,
    CommandGroup,
} from '@/components/ui/command';
import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import SelectItem from './SelectItem';
// import SelectTrigger from "./SelectTrigger";  Note: Unused import; remove if not needed
// Fixed typo in import
import { memo, useMemo } from 'react';
import SelelctResponsiveWrapper from './SelelctResponsiveWrapper';

const CheckIsFormWrapper = ({
    form,
    name,
    children,
    title,
    required = true,
}) =>
    form ? (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>
                        {title}
                        {required && (
                            <span className="ml-0.5 text-base font-bold text-destructive">
                                *
                            </span>
                        )}
                    </FormLabel>
                    {children(field)}
                    <FormMessage />
                </FormItem>
            )}
        />
    ) : (
        children(null)
    );

const SelectList = ({
    form,
    title,
    name,
    options = [],
    isLoading,
    multiSelect = false,
    value,
    setValue,
    showMax,
}) => {
    const isForm = !!form;
    const formValue = isForm ? form.getValues()?.[name] : null;
    const multiSelectValues = useMemo(
        () => (multiSelect ? new Set(formValue || value) : null),
        [multiSelect, formValue, value]
    );
    const singleSelectValue = useMemo(
        () => (!multiSelect ? formValue || value : null),
        [multiSelect, formValue, value]
    );
    const setSelectValue = form?.setValue || setValue;

    return (
        <CheckIsFormWrapper name={name} form={form} title={title}>
            {(field) => (
                <SelelctResponsiveWrapper
                    field={field}
                    trigerProps={{
                        showMax,
                        isForm,
                        title,
                        name,
                        options,
                        isLoading,
                        multiSelect,
                        multiSelectValues,
                        singleSelectValue,
                        setSelectValue,
                    }}
                >
                    {(handleClose) => (
                        <Command className="w-full rounded-none md:rounded-sm">
                            <CommandInput placeholder="Search..." />
                            <CommandList>
                                {!options.length ? (
                                    <div
                                        className="py-6 text-center text-sm"
                                        cmdk-empty=""
                                        role="presentation"
                                    >
                                        No results found.
                                    </div>
                                ) : (
                                    <>
                                        <CommandEmpty>
                                            No results found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {options.map((option) => (
                                                <SelectItem
                                                    name={name}
                                                    key={option?._id}
                                                    singleSelectValue={
                                                        singleSelectValue
                                                    }
                                                    multiSelectValues={
                                                        multiSelectValues
                                                    }
                                                    setSelectValue={
                                                        setSelectValue
                                                    }
                                                    isForm={isForm}
                                                    handleClose={handleClose}
                                                    multiSelect={multiSelect}
                                                    option={option}
                                                />
                                            ))}
                                        </CommandGroup>
                                    </>
                                )}
                            </CommandList>
                        </Command>
                    )}
                </SelelctResponsiveWrapper>
            )}
        </CheckIsFormWrapper>
    );
};

export default memo(SelectList);
