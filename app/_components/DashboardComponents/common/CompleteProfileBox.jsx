'use client';
import useUserStore from '@/store/userStore';
import Link from 'next/link';

const CompleteProfileBox = () => {
    const { user } = useUserStore();

    return (
        <>
            {!user?.isProfileCompleted && (
                <div className="mt-5 rounded-md bg-primary px-6 py-8 md:mt-0 md:px-10 md:py-12">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <h2 className="text-lg font-bold text-white md:text-2xl lg:text-[28px]">
                                Complete Your Profile
                            </h2>
                            <p className="max-w-[288px] text-base font-normal text-[#CDCDCD] md:mt-2 md:text-lg">
                                Showing yourself publicly{`,`} you must complete
                                the profile
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center justify-end md:flex-row">
                            <div className="w-full md:w-auto">
                                {/* <p className='text-[#CDCDCD] font-normal text-base md:text-lg text-center md:text-right'>1/4</p> */}
                                <div>
                                    <Link
                                        href={'/vendor/profile'}
                                        className="font-gilroy text-secoundry mt-3 flex w-full items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold hover:bg-white/90 md:inline-flex"
                                    >
                                        Start Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CompleteProfileBox;
