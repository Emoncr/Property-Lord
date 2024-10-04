'use client';

import useFormik from '@/hooks/useFormik';
import FieldInput from '@/app/_components/common/Formik/FieldInput';
import FormikWrapper from '../../common/Formik/FormikWrapper';
import FormikAction from '../../common/Formik/FormikAction';
import {
    changePasswordFormDefaultValue,
    changePasswordFormSchema,
} from '../../common/utils/changePasswordFormSchema';

const ChangePasswordForm = () => {
    const form = useFormik({
        schema: changePasswordFormSchema,
        defaultValues: changePasswordFormDefaultValue,
    });

    const { isDirty, isSubmitting, isValid } = form.formState;

    async function onSubmit(data) {
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <FormikWrapper form={form} onSubmit={onSubmit}>
                <div className="rounded-sm border border-border px-6 py-5 pb-6">
                    <div>
                        <h3 className="text-xl font-bold text-black sm:text-2xl">
                            Change Password
                        </h3>
                    </div>
                    <div className="mt-7">
                        <div className="grid grid-cols-1 gap-4 sm:gap-x-6">
                            <FieldInput
                                form={form}
                                name={'password'}
                                placeholder="Enter your present password"
                                label={'Enter Your Password'}
                                type="password"
                            />
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-x-10 lg:gap-x-20">
                            <FieldInput
                                form={form}
                                name={'newPassword'}
                                placeholder="New Password"
                                label={'New Password'}
                                type="password"
                            />

                            <FieldInput
                                form={form}
                                name={'confirmPassword'}
                                placeholder="Confirm Password"
                                label={'Confirm Password'}
                                type="password"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-center justify-end sm:mt-10">
                    <FormikAction
                        {...{
                            isDirty,
                            isSubmitting,
                            isValid,
                        }}
                    >
                        Save
                    </FormikAction>
                </div>
            </FormikWrapper>
        </>
    );
};

export default ChangePasswordForm;
