import useSWR from 'swr';

const useApi = ({
    trigger = true,
    api,
    filter = null,
    params = null,
    cacheKey,
    ...other
}) => {
    const { data, error, isLoading, mutate } = useSWR(
        trigger ? [cacheKey, filter, params] : null,
        async (...arg) => {
            if (typeof api !== 'function') {
                console.error('API is not a function:', api);
                return null;
            }
            return api({ filter, params, token: arg[1], isSwr: true });
        },
        {
            dedupingInterval: 1 * 60 * 60 * 1000,
            onError: (error) => {
                console.log(error);
            },
            ...other,
        }
    );
    return {
        data,
        isLoading,
        error,
        cacheKey,
        mutate,
    };
};

export default useApi;
