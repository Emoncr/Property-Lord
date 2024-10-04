import Link from 'next/link';

const SalesItemBox = ({ response }) => {
    return (
        <div className="grid grid-cols-1 gap-6 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-10 xl:gap-x-16">
            <div className="w-full rounded-md bg-primary p-6">
                <div className="grid grid-cols-1 gap-1">
                    <p className="text-sm font-normal text-white">
                        Total Revenue{' '}
                    </p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold text-white">
                        <strong>৳{response?.totalRevenue}</strong>
                    </p>
                    {/* <Link href={"/dashboard/vendor"} className='text-white font-normal text-xs font-gilroy hover:text-white/90 hover:underline'>View Details</Link> */}
                </div>
            </div>
            <div className="w-full rounded-md bg-primary p-6">
                <div className="grid grid-cols-1 gap-1">
                    <p className="text-sm font-normal text-white">
                        Total Orders{' '}
                    </p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold text-white">
                        <strong>{response?.totalOrders}</strong>
                    </p>
                    <Link
                        href={'/vendor/orders'}
                        className="font-gilroy mt-2 text-xs font-normal text-white hover:text-white/90 hover:underline"
                    >
                        View Details
                    </Link>
                </div>
            </div>
            <div className="w-full rounded-md bg-primary p-6">
                <div className="grid grid-cols-1 gap-1">
                    <p className="text-sm font-normal text-white">
                        Total Quotations{' '}
                    </p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold text-white">
                        <strong>{response?.totalQuotations}</strong>
                    </p>
                    <Link
                        href={'/vendor/orders'}
                        className="font-gilroy mt-2 text-xs font-normal text-white hover:text-white/90 hover:underline"
                    >
                        View Details
                    </Link>
                </div>
            </div>
            <div className="w-full rounded-md bg-primary p-6">
                <div className="grid grid-cols-1 gap-1">
                    <p className="text-sm font-normal text-white">
                        Completed Orders{' '}
                    </p>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold text-white">
                        <strong>{response?.completedOrders}</strong>
                    </p>
                    <Link
                        href={'/vendor/orders'}
                        className="font-gilroy mt-2 text-xs font-normal text-white hover:text-white/90 hover:underline"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SalesItemBox;
