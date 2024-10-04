import React from 'react';

const NoDataFound = ({ msg }) => {
    return (
        <div>
            <p className="text-center font-bold">
                {msg ? msg : 'No Data Found!'}
            </p>
        </div>
    );
};

export default NoDataFound;
