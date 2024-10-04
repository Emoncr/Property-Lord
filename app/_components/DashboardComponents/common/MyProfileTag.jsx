'use client';
import React from 'react';
import Image from 'next/image';
import useUserStore from '@/store/userStore';

const MyProfileTag = () => {
    const { user } = useUserStore((state) => state);

    return (
        <>
            {user && (
                <div className="flex items-center justify-start gap-2">
                    <div className="h-[60px] w-[60px]">
                        {user?.personalImage ? (
                            <Image
                                width={60}
                                height={60}
                                quality={100}
                                src={user?.personalImage}
                                alt="User Image"
                                className="h-[60px] w-[60px] rounded-full object-cover"
                            />
                        ) : (
                            <Image
                                width={60}
                                height={60}
                                quality={100}
                                layout="responsive"
                                src={'/images/avatar (2).png'}
                                alt="User Image"
                            />
                        )}
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-black">
                            {user?.firstName ? user?.firstName : 'User Name'}
                        </p>
                        {/* <p className='text-[#8B8B8B] font-semibold text-xs mt-1'>Joined 18 May, 2024</p> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default MyProfileTag;
