'use client';
import useUserStore from '@/store/userStore';
import Link from 'next/link';
import React, { useEffect } from 'react';

const WelcomeText = ({ data, role }) => {
    const { user, setUser } = useUserStore();

    useEffect(() => {
        setUser(data);
    }, []);
    return (
        <>
            {(role === 'vendor' && (
                <div>
                    <h1 className="text-lg font-semibold text-primary md:text-[28px]">
                        Hey
                    </h1>
                    <p className="mt-2 font-normal text-black">{`Welcome back! Here is what's new while you were away.`}</p>
                </div>
            )) ||
                (role === 'user' && (
                    <div>
                        <h1 className="text-lg font-semibold text-primary md:text-[28px]">
                            Hey {`${data?.firstName},`}
                        </h1>
                        <p className="mt-2 font-semibold text-black">
                            {`Now you can just request quotation, `}
                            <Link
                                href={'/products'}
                                className="font-bold text-primary underline"
                            >
                                {'Go to service.'}
                            </Link>
                        </p>
                    </div>
                ))}
        </>
    );
};

export default WelcomeText;
