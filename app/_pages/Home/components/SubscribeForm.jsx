'use client';
import FieldInput from '@/app/_components/common/Formik/FieldInput';
import FormikAction from '@/app/_components/common/Formik/FormikAction';
import FormikWrapper from '@/app/_components/common/Formik/FormikWrapper';
import useFormik from '@/hooks/useFormik';
import React from 'react';

const SubscribeForm = () => {
    const form = useFormik({
        schema: {},
        defaultValues: {},
    });

    const { isDirty, isSubmitting } = form.formState;

    // const { handleRequest } = useRequest();

    // useEffect(() => {
    //     if (user && Object.keys(user).length > 0) {
    //         form.reset(profileFormDefaultValue(user));
    //     }
    // }, [user]);

    // async function onSubmit(data) {
    //     const filteredData = Object.entries(data) // Filtering data which user changed
    //         .filter(([key, value]) => value !== user[key])
    //         .reduce((obj, [key, value]) => {
    //             obj[key] = value;
    //             return obj;
    //         }, {});

    //     try {
    //         await handleRequest({
    //             data: filteredData,
    //             request: vendorProfileUpdateApi.update, // testing with id
    //             isToast: true,
    //             cacheKey: vendorProfileUpdateApi.cacheKey,

    //             handleComplete: (dataComplete) => {

    //                 // UPDATED USER STORE VALUE
    //                 const updatedUser = {
    //                     firstName: dataComplete.data?.firstName,
    //                     lastName: dataComplete.data?.lastName,
    //                     email: dataComplete.data?.email,
    //                     personalImage: dataComplete.data?.personalImage,
    //                     age: dataComplete.data?.age,
    //                     gender: dataComplete.data?.gender,
    //                     isProfileCompleted: dataComplete.data?.isProfileCompleted
    //                 }
    //                 setUser(updatedUser)
    //                 form.reset({
    //                     ...profileFormDefaultValue(updatedUser),
    //                 })

    //             },
    //             isFormData: true
    //             // user.personalImage ? false : true
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div>
            <FormikWrapper form={form}>
                <FieldInput
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    form={form}
                    className="!rounded-none border-black placeholder:text-gray-900"
                />

                <FormikAction
                    isDirty={isDirty}
                    isSubmitting={isSubmitting}
                    className="mt-1 w-full !rounded-none bg-black text-white hover:bg-black/80"
                >
                    Subscribe
                </FormikAction>
            </FormikWrapper>
        </div>
    );
};

export default SubscribeForm;
