/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['eventizer-dev-bucket.s3.ap-south-1.amazonaws.com',"firebasestorage.googleapis.com"],
    },
};

export default nextConfig;
