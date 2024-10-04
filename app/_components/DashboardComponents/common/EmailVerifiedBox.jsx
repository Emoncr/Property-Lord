import Link from 'next/link';

const EmailVerifiedBox = () => {
    return (
        <div className="mt-6 rounded-md bg-primary px-6 py-4 md:mt-0 md:px-10 md:py-7">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                <div>
                    <h2 className="text-lg font-bold text-white">
                        Please verify Your Email
                    </h2>
                </div>
                <div>
                    <Link
                        className="font-gilroy text-secoundry mt-3 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold hover:bg-white/90"
                        href={'/email-verification'}
                    >
                        Verify Email
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmailVerifiedBox;
