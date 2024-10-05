import ListingCard from '@/app/_components/common/ListingCard';
import React from 'react';

const UserPost = () => {
    const posts = Array(10).fill({});
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 min-[950px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {posts.map((post, index) => (
                <div key={index}>
                    <ListingCard />
                </div>
            ))}
        </div>
    );
};

export default UserPost;
