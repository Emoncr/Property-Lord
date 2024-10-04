import React from 'react';
import CompleteProfileForm from './CompleteProfileForm';
import { decodedToken } from '@/lib/action';
import MyProfileTag from './MyProfileTag';

const MyProfile = async () => {
    const payload = await decodedToken();

    return (
        <div className="mt-6 lg:mt-8">
            <div>
                <MyProfileTag />
            </div>
            <div className="mt-8">
                <CompleteProfileForm vendorInfo={payload} />
            </div>
        </div>
    );
};

export default MyProfile;
