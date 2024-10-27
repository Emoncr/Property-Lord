import * as yup from 'yup';
export const createListingSchema = yup.object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    price: yup
        .number()
        .positive('Price must be positive')
        .required('Price is required'),
    property_type: yup.string().required('Property type is required'),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    postal_code: yup.string().required('Postal code is required'),
    country: yup.string().required('Country is required'),
    parking_spots: yup.number().min(0, 'Parking spots must be 0 or more'),
    area: yup
        .number()
        .positive('Area must be positive')
        .required('Area is required'),
    bedrooms: yup
        .number()
        .positive('Bedrooms must be positive')
        .required('Number of bedrooms is required'),
    bathrooms: yup
        .number()
        .positive('Bathrooms must be positive')
        .required('Number of bathrooms is required'),
    floor: yup.number().min(0, 'Floor must be 0 or more'),
    total_floors: yup.number().positive('Total floors must be positive'),
    year_built: yup
        .number()
        .positive('Year built must be positive')
        .required('Year built is required'),
    heating_type: yup.string().required('Heating type is required'),
    cooling_type: yup.string().required('Cooling type is required'),
    furnishing: yup.string().required('Furnishing status is required'),
    images: yup.array().of(yup.string().url('Must be a valid URL')),
    listing_type: yup.string().required('Listing type is required'),
    availability: yup.string().required('Availability is required'),
    status: yup.string().required('Status is required'),
    amenities: yup.array().of(yup.string()),
});
