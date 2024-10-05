'use client';

import { Button } from '@/components/ui/button';
import { delete_token } from '@/lib/action';
import { SWRConfig } from 'swr';

function Providers({ token, children }) {
    function myMiddleware(swr) {
        return (key, fetcher, config) => {
            const extendedFetcher = (...args) => {
                return fetcher(...args, token);
            };
            return swr(key, extendedFetcher, config);
        };
    }

    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                shouldRetryOnError: false,
                use: [myMiddleware],
            }}
        >
            {children}
        </SWRConfig>
    );
}

export default Providers;