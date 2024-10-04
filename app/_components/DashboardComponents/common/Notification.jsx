import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Notification = () => {
    return (
        <Link href={'/'}>
            <div className="group grid grid-cols-1 items-center gap-1 gap-y-2 sm:grid-cols-12 sm:gap-2">
                <div className="flex items-center justify-start gap-1 sm:col-span-8 sm:gap-2">
                    <div>
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full"
                            src={'/images/Avatar (1).png'}
                            alt="Notification"
                        />
                    </div>
                    <div>
                        <h6 className="text-xs font-bold transition-all group-hover:text-primary group-hover:underline sm:text-sm">
                            Eventizer launch a new service
                        </h6>
                        <p className="text-xs font-normal sm:text-sm">
                            olivia.martin@email.com
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-end sm:col-span-4">
                    <p className="text-xs font-normal sm:text-sm">2 hrs ago</p>
                </div>
            </div>
        </Link>
    );
};

export default Notification;
