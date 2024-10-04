import { getToken } from '@/lib/action';

const base_url =
    process.env.NODE_ENV === 'development'
        ? 'https://myeventizer.com/api/v1'
        : 'https://myeventizer.com/api/v1';

const fetchApi = ({ endpoint, path, method = 'GET' }) => {
    return async ({
        filter,
        params,
        token,
        headers,
        cache = null,
        nextHeaders = {},
        isSwr,
    }) => {
        const url = new URL(`${base_url}${endpoint + path}`);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, value);
            });
        }
        try {
            const server_token = await getToken();
            const response = await fetch(url, {
                credentials: 'include',
                method,
                ...(cache && { cache }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token || server_token}`,
                    ...headers,
                },
                next: nextHeaders,
                ...(method === 'POST' && { body: JSON.stringify(filter) }),
            });

            if (!response.ok) {
                await appError(response);
            }

            const data = await response.json();

            return data.success ? data : {};
        } catch (error) {
            console.log(error);
            if (isSwr) throw error;
        }
    };
};

const reqApi =
    ({ endpoint, path, method, params }) =>
    async ({ data, token = '' }) => {
        const url = new URL(`${base_url}${endpoint + path}`);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, value);
            });
        }
        return await handleRequest({ method, url, data, token });
    };

export { reqApi, fetchApi };

async function handleRequest({ url, data, token, method }) {
    const isFormData = data instanceof FormData;

    const response = await fetch(url, {
        credentials: 'include',
        method,
        headers: {
            ...(!isFormData && { 'Content-Type': 'application/json' }),
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        ...((method === 'PATCH' || method === 'POST') && {
            body: isFormData ? data : JSON.stringify(data),
        }),
    });
    if (!response.ok) {
        await appError(response);
    }

    return await response.json();
}

async function appError(response) {
    const errorBody = await response.json();
    const error = new Error(
        errorBody.message || 'An error occurred while fetching the data.'
    );
    error.status = response.status;
    error.statusCode = errorBody.statusCode;
    error.info = errorBody;
    throw error;
}
