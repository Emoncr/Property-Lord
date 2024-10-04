import React from 'react';

const FormLoading = () => {
    return (
        <div className="animate-pulse space-y-6 p-6">
            <header className="flex items-center justify-between">
                <div className="h-4 w-24 rounded bg-gray-200"></div>
                <div className="h-8 w-28 rounded bg-gray-200"></div>
            </header>

            <div className="flex space-x-6">
                <div className="flex-1 space-y-6">
                    <section className="space-y-4">
                        <div className="h-6 w-48 rounded bg-gray-200"></div>
                        <div className="h-4 w-36 rounded bg-gray-200"></div>
                        <div className="h-10 rounded bg-gray-200"></div>
                        <div className="h-28 rounded bg-gray-200"></div>
                    </section>

                    <section className="space-y-4">
                        <div className="h-6 w-44 rounded bg-gray-200"></div>
                        <div className="h-10 rounded bg-gray-200"></div>
                    </section>
                </div>

                <div className="flex-1 space-y-6">
                    <section className="space-y-4">
                        <div className="h-6 w-40 rounded bg-gray-200"></div>
                        <div className="h-10 rounded bg-gray-200"></div>
                    </section>

                    <section className="space-y-4">
                        <div className="h-6 w-44 rounded bg-gray-200"></div>
                        <div className="h-4 w-36 rounded bg-gray-200"></div>
                        <div className="h-40 rounded bg-gray-200"></div>
                        <div className="grid grid-cols-3 gap-4">
                            {[...Array(6)].map((_, index) => (
                                <div
                                    key={index}
                                    className="h-24 rounded bg-gray-200"
                                ></div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FormLoading;
