'use client';

import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BasicInformationStep from './BasicInformationStep';
import PropertyDetailsStep from './PropertyDetailsStep';
import AdditionalInformationStep from './AdditionalInformationStep';
import useFormik from '@/hooks/useFormik';
import FormikWrapper from '@/app/_components/common/Formik/FormikWrapper';
import useRequest from '@/hooks/useRequest';
import FormikAction from '@/app/_components/common/Formik/FormikAction';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { createListingSchema } from '../utils/createListingSchema';

const steps = [
    'Basic Information',
    'Property Details',
    'Additional Information',
];

export default function CreateListingForm() {
    const [currentStep, setCurrentStep] = useState(0);

    const form = useFormik({
        schema: createListingSchema,
        defaultValues: {},
    });
    const { isDirty, isSubmitting } = form.formState;

    const { handleRequest } = useRequest();

    async function onSubmit(data) {
        // data.role = "vendor"
        // try {
        //   await handleRequest({
        //     data,
        //     request: apiVendorRegister.signup,
        //     isToast: true,
        //     handleComplete: async (dataComplete) => {
        //       dataComplete.data.isEmailVerified = false;
        //       await create_token(dataComplete.data)
        //       if (dataComplete.data?.role === "vendor") return router.push(`/vendor/dashboard`);
        //       router.push("/")
        //     },
        //     actionRoute: "vendorSignup",
        //   })
        // } catch (error) {
        //   console.log(error);
        // }
    }

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <BasicInformationStep form={form} />;
            case 1:
                return <PropertyDetailsStep form={form} />;
            case 2:
                return <AdditionalInformationStep form={form} />;
            default:
                return null;
        }
    };

    return (
        <>
            <FormikWrapper form={form} onSubmit={onSubmit}>
                <Card className="mx-auto w-full">
                    <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">
                            Create Listing
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex flex-col justify-between gap-2 sm:flex-row">
                                {steps.map((step, index) => (
                                    <Button
                                        key={step}
                                        onClick={() => setCurrentStep(index)}
                                        variant={
                                            index === currentStep
                                                ? 'default'
                                                : 'outline'
                                        }
                                        className="flex-1"
                                        type="button"
                                    >
                                        {step}
                                    </Button>
                                ))}
                            </div>
                            <div className="mt-6">{renderStep()}</div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-between gap-4 sm:flex-row">
                        <Button
                            onClick={() =>
                                setCurrentStep((prev) => Math.max(prev - 1, 0))
                            }
                            disabled={currentStep === 0}
                            className="w-full sm:w-auto"
                            type="button"
                        >
                            <ChevronLeft size={18} />
                            Previous
                        </Button>
                        {currentStep < steps.length - 1 ? (
                            <Button
                                onClick={() =>
                                    setCurrentStep((prev) =>
                                        Math.min(prev + 1, steps.length - 1)
                                    )
                                }
                                className="w-full sm:w-auto"
                                type="button"
                            >
                                Next
                                <ChevronRight size={18} />
                            </Button>
                        ) : (
                            <FormikAction
                                isDirty={isDirty}
                                isSubmitting={isSubmitting}
                                className="w-full sm:w-auto"
                            >
                                {'Submit'}
                            </FormikAction>
                        )}
                    </CardFooter>
                </Card>
            </FormikWrapper>
        </>
    );
}
