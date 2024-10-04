import React from 'react';

const ApiLoading = () => {
    const placeholders = Array.from({ length: 8 }); // Adjust the number of placeholders as needed

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {placeholders.map((_, index) => (
                <div key={index} className="animate-pulse">
                    <div className="mb-4 h-48 rounded-lg bg-gray-300"></div>
                    <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
                    <div className="h-4 w-1/2 rounded bg-gray-300"></div>
                </div>
            ))}
        </div>
    );
};

export default ApiLoading;
