import { Badge } from '@/components/ui/badge';
import { FormControl } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, Loader, X } from 'lucide-react';

const TriggerButton = ({
    singleSelectValue,
    options,
    multiSelect,
    multiSelectValues,
    name,
    setSelectValue,
    isForm,
    isLoading,
    title,
    showMax,
}) => {
    if (multiSelect && multiSelectValues) {
        return (
            <div className="flex w-full justify-between px-3">
                <div className="flex w-full justify-between gap-4">
                    <div className="flex items-center text-sm">
                        <span className="font-normal text-muted-foreground">
                            {multiSelectValues?.size
                                ? title
                                : 'Select ' + title}
                        </span>
                        {multiSelectValues?.size > 0 && (
                            <>
                                <Separator
                                    orientation="vertical"
                                    className="mx-2 h-4"
                                />

                                <div className="flex flex-wrap items-center gap-1 py-1">
                                    {multiSelectValues?.size > showMax ? (
                                        <Badge
                                            variant="secondary"
                                            className="rounded-sm px-1 font-normal"
                                        >
                                            {multiSelectValues?.size} selected
                                        </Badge>
                                    ) : (
                                        options
                                            .filter((option) =>
                                                multiSelectValues.has(
                                                    option?._id
                                                )
                                            )
                                            .map((option) => (
                                                <div
                                                    key={option?._id}
                                                    className="g-3 flex items-center rounded-md bg-accent px-1.5"
                                                >
                                                    <Badge
                                                        variant="secondary"
                                                        className="rounded-sm px-1 font-normal"
                                                    >
                                                        {option?.label}
                                                    </Badge>
                                                    <div
                                                        className="hover:text-red-500"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            multiSelectValues.delete(
                                                                option?._id
                                                            );
                                                            const values =
                                                                Array.from(
                                                                    multiSelectValues
                                                                );
                                                            if (isForm) {
                                                                // check is form field
                                                                setSelectValue(
                                                                    name,
                                                                    values.length
                                                                        ? values
                                                                        : [],
                                                                    {
                                                                        shouldTouch: true,
                                                                        shouldValidate: true,
                                                                        shouldDirty: true,
                                                                    }
                                                                );
                                                            } else {
                                                                setSelectValue(
                                                                    values.length
                                                                        ? values
                                                                        : []
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </div>
                                                </div>
                                            ))
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-1">
                        {multiSelectValues?.size > 0 && (
                            <div
                                className="hover:text-red-500"
                                onClick={(e) => {
                                    e.preventDefault();

                                    if (isForm) {
                                        // check is form field
                                        setSelectValue(name, [], {
                                            shouldTouch: true,
                                            shouldValidate: true,
                                            shouldDirty: true,
                                        });
                                    } else {
                                        setSelectValue([]);
                                    }
                                }}
                            >
                                <X className="h-4 w-4" />
                            </div>
                        )}
                        <div className="flex items-center">
                            {isLoading ? (
                                <Loader className="h-5 w-5 animate-spin" />
                            ) : (
                                <ChevronDown className="h-5 w-5" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-full justify-between px-3">
            <div className="flex w-full justify-between gap-4">
                <span className="font-normal text-muted-foreground">
                    {singleSelectValue
                        ? options.find(
                              (option) => option._id == singleSelectValue
                          )?.label
                        : 'Select ' + title}
                </span>

                <div className="flex items-center gap-1">
                    {singleSelectValue && (
                        <div
                            className="hover:text-red-500"
                            onClick={(e) => {
                                e.preventDefault();

                                if (isForm) {
                                    // check is form field
                                    setSelectValue(name, '', {
                                        shouldTouch: true,
                                        shouldValidate: true,
                                        shouldDirty: true,
                                    });
                                } else {
                                    setSelectValue('');
                                }
                            }}
                        >
                            <X className="h-4 w-4" />
                        </div>
                    )}
                    <div>
                        {isLoading ? (
                            <Loader className="h-5 w-5 animate-spin" />
                        ) : (
                            <ChevronDown className="h-5 w-5" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const IsFormControl = ({ isForm, children }) => {
    return isForm ? <FormControl>{children}</FormControl> : children;
};

const SelectTrigger = (props) => {
    return (
        <IsFormControl isForm={props?.isForm}>
            <TriggerButton {...props} />
        </IsFormControl>
    );
};

export default SelectTrigger;
