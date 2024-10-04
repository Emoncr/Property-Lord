import SelectList from './SelectList';
import { useMemo } from 'react';

const Select = ({
    form,
    title,
    name,
    required,
    manualOption = [],
    loading = false,
    multiSelect = false,
    value,
    setValue,
    showMax = 3,
    zIndex = 2000,
}) => {
    const options = useMemo(() => {
        return [...manualOption];
    }, [manualOption]);

    const isLoading = loading;

    return (
        <SelectList
            {...{
                showMax,
                form,
                title,
                name,
                options,
                isLoading,
                multiSelect,
                value,
                setValue,
                required,
                zIndex,
            }}
        />
    );
};

export default Select;
