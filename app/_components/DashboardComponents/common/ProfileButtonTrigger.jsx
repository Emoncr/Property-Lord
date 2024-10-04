'use client';
import { Button } from '@/components/ui/button';
import useUserStore from '@/store/userStore';
import { ChevronDown, CircleUser } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import vendorProfilesDataApi from '@/app/_pages/service/eventDecoration/vendor/utils/profileDataApi';

const ProfileButtonTrigger = ({ role }) => {
    const { user, setUser } = useUserStore((state) => state);
    const [isMounted, setIsMounted] = useState(false);

    // For resolving hydration error
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Fetching user data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await vendorProfilesDataApi.list({});

                // Setting user data in store Temporary
                setUser({
                    firstName: response.data?.firstName,
                    lastName: response.data?.lastName,
                    email: response.data?.email,
                    personalImage: response.data?.personalImage,
                    description: response.data?.description,
                    age: response.data?.age,
                    fullAddress: response.data?.fullAddress,
                    companyName: response.data?.companyName,
                    logo: response.data?.logo,
                    coverPhoto: response.data?.coverPhoto,
                    vendorType: response.data?.vendorType,
                    area: response.data?.area,
                    tradeLicenseNumber: response.data?.tradeLicenseNumber,
                    mobile: response.data?.mobile,
                    gender: response.data?.gender,
                    dateOfBirth: response.data?.dateOfBirth,
                    gender: response.data?.gender,
                    isProfileCompleted: response.data?.isProfileCompleted,
                });
            } catch (error) {
                console.error('Error fetching folder data:', error);
            }
        };
        if (role === 'vendor') {
            fetchData();
        }
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <DropdownMenuTrigger>
            {role === 'vendor' ? (
                <div className="flex cursor-pointer items-center justify-end gap-1">
                    <>
                        {user?.personalImage ? (
                            <Image
                                width={36}
                                height={36}
                                src={user?.personalImage}
                                alt={user?.firstName}
                                className="h-9 w-9 rounded-full object-cover"
                                quality={100}
                                priority={true}
                            />
                        ) : (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full !p-0"
                            >
                                <CircleUser />
                                <span className="sr-only">
                                    Toggle Profile menu
                                </span>
                            </Button>
                        )}
                    </>
                    <p className="flex items-center justify-center gap-1 font-bold text-black">
                        {user?.firstName ? user?.firstName : 'Profile'}
                        <ChevronDown />
                    </p>
                </div>
            ) : (
                <div className="flex cursor-pointer items-center justify-end gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full !p-0"
                    >
                        <CircleUser />
                        <span className="sr-only">Toggle Profile menu</span>
                    </Button>
                    <p className="flex items-center justify-center gap-1 font-bold text-black">
                        Profile <ChevronDown />
                    </p>
                </div>
            )}
        </DropdownMenuTrigger>
    );
};

export default ProfileButtonTrigger;
