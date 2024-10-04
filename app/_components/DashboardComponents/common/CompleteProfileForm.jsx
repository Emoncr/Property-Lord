'use client';
import useFormik from '@/hooks/useFormik';
import FieldInput from '@/app/_components/common/Formik/FieldInput';
import FormikWrapper from '@/app/_components/common/Formik/FormikWrapper';
import Select from '@/app/_components/common/select/Select';
import FormikAction from '@/app/_components/common/Formik/FormikAction';
import FileInput from '../../common/Formik/FileInput';
import {
    completeProfileFormSchema,
    profileFormDefaultValue,
} from '../../common/utils/completeProfileFormSchema';
import useRequest from '@/hooks/useRequest';
import vendorProfileUpdateApi from '@/app/_pages/service/eventDecoration/vendor/vendorProfile/utils/api/vendorProfileApi';
import useUserStore from '@/store/userStore';
import { useEffect } from 'react';

const CompleteProfileForm = ({ vendorInfo }) => {
    const { setUser, user } = useUserStore((state) => state);

    const form = useFormik({
        schema: completeProfileFormSchema,
        defaultValues: profileFormDefaultValue(user),
    });
    const { isDirty, isSubmitting } = form.formState;

    const { handleRequest } = useRequest();

    useEffect(() => {
        if (user && Object.keys(user).length > 0) {
            form.reset(profileFormDefaultValue(user));
        }
    }, [user]);

    async function onSubmit(data) {
        const filteredData = Object.entries(data) // Filtering data which user changed
            .filter(([key, value]) => value !== user[key])
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {});

        try {
            await handleRequest({
                data: filteredData,
                request: vendorProfileUpdateApi.update, // testing with id
                isToast: true,
                cacheKey: vendorProfileUpdateApi.cacheKey,

                handleComplete: (dataComplete) => {
                    // UPDATED USER STORE VALUE
                    const updatedUser = {
                        firstName: dataComplete.data?.firstName,
                        lastName: dataComplete.data?.lastName,
                        email: dataComplete.data?.email,
                        personalImage: dataComplete.data?.personalImage,
                        age: dataComplete.data?.age,
                        gender: dataComplete.data?.gender,
                        isProfileCompleted:
                            dataComplete.data?.isProfileCompleted,
                    };
                    setUser(updatedUser);
                    form.reset({
                        ...profileFormDefaultValue(updatedUser),
                    });
                },
                isFormData: true,
                // user.personalImage ? false : true
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FormikWrapper form={form} onSubmit={onSubmit}>
            <div className="rounded-sm border border-border px-6 py-5 pb-6">
                <div>
                    <h3 className="text-xl font-bold text-black sm:text-2xl">
                        Profile information
                    </h3>
                    <p className="mt-0.5 text-sm font-normal text-[#BABABA] sm:text-base">
                        Please provide your profile information
                    </p>
                </div>
                <div className="mt-7">
                    <div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6">
                            <FieldInput
                                form={form}
                                name={'firstName'}
                                placeholder="Frist Name"
                                label={'Frist Name'}
                            />

                            <FieldInput
                                form={form}
                                name={'lastName'}
                                placeholder="Last Name"
                                label={'Last Name'}
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-1 items-end gap-4 sm:grid-cols-2 sm:gap-x-6">
                            <Select
                                form={form}
                                title="Gender"
                                manualOption={[
                                    {
                                        _id: 'male',
                                        value: 'male',
                                        label: 'Male',
                                    },
                                    {
                                        _id: 'female',
                                        value: 'female',
                                        label: 'Female',
                                    },
                                ]}
                                name="gender"
                            />

                            <FieldInput
                                form={form}
                                name={'age'}
                                placeholder="Age"
                                label={'Age'}
                                type="number"
                            />
                        </div>

                        <div className="mt-4 grid grid-cols-1 items-end gap-4 sm:gap-x-6">
                            <FileInput
                                form={form}
                                name="personalImage"
                                label="Personal Photo"
                                item={{ _id: 'file' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-end sm:mt-10">
                <FormikAction
                    {...{
                        isDirty,
                        isSubmitting,
                    }}
                >
                    Save
                </FormikAction>
            </div>
        </FormikWrapper>
    );
};

export default CompleteProfileForm;
