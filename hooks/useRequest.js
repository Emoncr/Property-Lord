import catchError from '@/lib/catchError';
import { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { useToast } from './use-toast';

const useRequest = () => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const { data: authToken } = useSWR('token', (...args) => args[1]);

    const handleRequest = async ({
        isDelete = false,
        data,
        id,
        cacheKey = null,
        request,
        handleComplete,
        isToast = true,
        isFormData = false,
        actionRoute = null,
        handleCustomError,
        isCustomError = false,
    }) => {
        if (isFormData) {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                if (Array.isArray(data[key])) {
                    data[key].forEach((item) => {
                        formData.append(key, item);
                    });
                } else {
                    formData.append(key, data[key]);
                }
            });
            data = formData;
        }
        setIsLoading(true);
        try {
            const result = await request({
                data: data,
                token: authToken,
            });
            if (result?.success) {
                if (cacheKey) {
                    await mutate(
                        (key) => Array.isArray(key) && key[0] === cacheKey,
                        (response) => {
                            if (id && isDelete) {
                                // For Delete
                                return {
                                    ...response,
                                    data: response?.data.filter(
                                        (curr) => curr._id !== id
                                    ),
                                };
                            } else if (id) {
                                // For Update
                                return {
                                    ...response,
                                    data: response?.data.map((curr) =>
                                        curr?._id === id
                                            ? { ...curr, ...result.data }
                                            : curr
                                    ),
                                };
                            } else {
                                // For Create

                                return {
                                    ...response,
                                    data: [result.data, ...response.data],
                                };
                            }
                        },
                        false
                    );
                }
                handleComplete(result);
                if (isToast) {
                    toast({
                        variant: 'success',
                        title: 'Success',
                        description: result.message,
                        duration: 3000,
                    });
                }
                return result;
            }
        } catch (error) {
            if (isCustomError) {
                handleCustomError(error);
            } else {
                catchError(error, toast, actionRoute);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { handleRequest, isLoading };
};

export default useRequest;
