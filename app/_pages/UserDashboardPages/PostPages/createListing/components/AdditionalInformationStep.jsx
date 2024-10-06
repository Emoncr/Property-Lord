import React from 'react';
import { Label } from '@/components/ui/label';
import CheckBoxField from '@/app/_components/common/Formik/CheckBoxField';
import UploadFile from '@/app/_components/common/UploadFile';

export default function AdditionalInformationStep({ form }) {
    const {
        register,
        formState: { errors },
    } = form;
    const amenities = [
        'Swimming Pool',
        'Gym',
        'Elevator',
        'Parking',
        '24/7 Security',
    ];

    return (
        <div className="space-y-5">
            <div>
                <Label>Amenities</Label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                    {amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-3">
                            <CheckBoxField
                                name={`${amenity}`}
                                form={form}
                                label={amenity}
                                description={`${amenity}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Uncomment and adjust the UploadFile component when it's available */}
            <div>
                <UploadFile
                    form={form}
                    fieldName="images"
                    label="Images"
                    // maxSize={5}
                    maxFiles={5}
                />
            </div>
        </div>
    );
}
