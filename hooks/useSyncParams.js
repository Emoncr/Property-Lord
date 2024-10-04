import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

const createQueryString = (params, searchParams) => {
    const newSearchParams = new URLSearchParams(searchParams?.toString());

    for (const [key, value] of Object.entries(params)) {
        if (!value || (key === 'page' && value === 1)) {
            newSearchParams.delete(key);
        } else {
            newSearchParams.set(key, String(value));
        }
    }

    return newSearchParams.toString();
};

function useSyncParams() {
    const router = useRouter();
    const pathnameSyncParams = usePathname();
    const searchParamsSyncParams = useSearchParams();

    const memoizedCreateQueryString = useMemo(() => createQueryString, []);

    const routerSyncParams = useCallback(
        (data, pathname = null) => {
            router.push(
                `${pathname || pathnameSyncParams}?${memoizedCreateQueryString(
                    { ...data },
                    searchParamsSyncParams
                )}`,
                {
                    scroll: false,
                }
            );
        },
        [
            memoizedCreateQueryString,
            pathnameSyncParams,
            router,
            searchParamsSyncParams,
        ]
    );

    return {
        router,
        searchParamsSyncParams,
        routerSyncParams,
    };
}

export default useSyncParams;
