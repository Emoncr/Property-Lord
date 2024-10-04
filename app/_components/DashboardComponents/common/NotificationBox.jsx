import React from 'react';
import Notification from './Notification';
import Link from 'next/link';

const NotificationBox = () => {
    return (
        <div className="notificationBoxShadow rounded-lg border border-solid border-border p-4 sm:p-6">
            <div>
                <h4 className="text-base font-bold">Notification</h4>
                <p className="mt-2 text-sm font-normal text-black">
                    You have 6 unread notifications
                </p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:gap-8">
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
            <div className="mt-3 flex items-center justify-end">
                <Link
                    className="font-gilroy text-sm text-primary hover:underline"
                    href={'/'}
                >
                    Show More
                </Link>
            </div>
        </div>
    );
};

export default NotificationBox;
