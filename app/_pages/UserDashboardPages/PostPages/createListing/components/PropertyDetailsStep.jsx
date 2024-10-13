import React from 'react';
import FieldInput from '@/app/_components/common/Formik/FieldInput';
import Select from '@/app/_components/common/select/Select';

export default function PropertyDetailsStep({ form }) {
    return (
        <div className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                    <Select
                        form={form}
                        title="Listing Type"
                        manualOption={[
                            {
                                _id: 'forSale',
                                value: 'forSale',
                                label: 'For Sale',
                            },
                            {
                                _id: 'forRent',
                                value: 'forRent',
                                label: 'For Rent',
                            },
                        ]}
                        name="listing_type"
                    />
                </div>
                <div>
                    <Select
                        form={form}
                        title="Property Type"
                        manualOption={[
                            {
                                _id: 'apartment',
                                value: 'apartment',
                                label: 'Apartment',
                            },
                            { _id: 'house', value: 'house', label: 'House' },
                            { _id: 'condo', value: 'condo', label: 'Condo' },
                        ]}
                        name="property_type"
                    />
                </div>
                <div>
                    <FieldInput
                        name="parking_spots"
                        label="Parking Spots"
                        placeholder="Number of parking spots"
                        type="number"
                        form={form}
                    />
                </div>
                <div>
                    <FieldInput
                        name="area"
                        label="Area (sq ft)"
                        placeholder="Area in square feet"
                        type="number"
                        form={form}
                    />
                </div>
                <div>
                    <FieldInput
                        name="bedrooms"
                        label="Bedrooms"
                        placeholder="Number of bedrooms"
                        type="number"
                        form={form}
                    />
                </div>
                <div>
                    <FieldInput
                        name="bathrooms"
                        label="Bathrooms"
                        placeholder="Number of bathrooms"
                        type="number"
                        form={form}
                    />
                </div>
                <div>
                    <FieldInput
                        name="year_built"
                        label="Year Built"
                        placeholder="Year the property was built"
                        type="number"
                        form={form}
                    />
                </div>
                <div>
                    <Select
                        form={form}
                        title="Furnishing"
                        manualOption={[
                            {
                                _id: 'fullyFurnished',
                                value: 'fullyFurnished',
                                label: 'Fully Furnished',
                            },
                            {
                                _id: 'notFurnished',
                                value: 'notFurnished',
                                label: 'Not Furnished',
                            },
                            {
                                _id: 'semiFurnished',
                                value: 'semiFurnished',
                                label: 'Semi Furnished',
                            },
                        ]}
                        name="furnishing"
                    />
                </div>
            </div>
        </div>
    );
}
