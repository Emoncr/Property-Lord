import React from 'react';
import FieldInput from '@/app/_components/common/Formik/FieldInput';
import Select from '@/app/_components/common/select/Select';

export default function BasicInformationStep({ form }) {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <div>
                    <FieldInput
                        name="title"
                        label="Title"
                        placeholder="Enter a catchy title for your property listing"
                        type="text"
                        form={form}
                    />
                </div>
                <div>
                    <FieldInput
                        name="description"
                        label="Description"
                        placeholder="Describe your property's unique features and amenities"
                        type="textarea"
                        form={form}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <FieldInput
                        name="country"
                        label="Country"
                        placeholder="Select the country of your property"
                        type="text"
                        form={form}
                    />
                </div>
                <div>
                    <FieldInput
                        name="price"
                        label="Price"
                        placeholder="Enter the price (e.g., 250000)"
                        type="text"
                        form={form}
                    />
                </div>
                <div>
                    <FieldInput
                        name="address"
                        label="Address"
                        placeholder="Enter the full street address"
                        type="text"
                        form={form}
                    />
                </div>
                <div>
                    <Select
                        form={form}
                        title="City"
                        placeholder="Select the city of your property"
                        manualOption={[
                            {
                                _id: 'eventDecoration',
                                value: 'enentDecoration',
                                label: 'Event Decoration',
                            },
                            {
                                _id: 'photography',
                                value: 'photography',
                                label: 'Photography',
                            },
                        ]}
                        name="city"
                        searchbar={true}
                    />
                </div>
                <div>
                    <Select
                        form={form}
                        title="State"
                        placeholder="Select the state or province"
                        manualOption={[
                            {
                                _id: 'eventDecoration',
                                value: 'enentDecoration',
                                label: 'Event Decoration',
                            },
                            {
                                _id: 'photography',
                                value: 'photography',
                                label: 'Photography',
                            },
                        ]}
                        name="state"
                    />
                </div>
                <div>
                    <FieldInput
                        name="postal_code"
                        label="Postal Code"
                        placeholder="Enter the postal or ZIP code"
                        type="text"
                        form={form}
                    />
                </div>
            </div>
        </div>
    );
}
