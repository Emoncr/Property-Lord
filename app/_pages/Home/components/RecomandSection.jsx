import ListingCard from '@/app/_components/common/ListingCard';
import SectionHeading from '@/app/_components/common/SectionHeading';
import React from 'react';

const RecomandSection = () => {
    const propertyListings = [
        {
            id: 1,
            title: 'Smart Home with Desert Views',
            location: 'Palm Jumeirah, Dubai',
            price: '7,500,000',
            beds: 4,
            baths: 4,
            sqft: '5,200',
            image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/1732827432086pexels-pixabay-259588.jpg?alt=media&token=e09b4fa0-4359-449f-a6e8-b69308f5654a',
            featureIcon: '/icons/feature_icon.png',
            saleIcon: '/icons/sale_icon.png',
            bookmarkIcon: '/icons/Bookmark.png',
            isFeatured: true,
            isSale: true,
            isBookmarked: false,
            listed: '1 hour ago',
            link: '/properties/modern-waterfront-villa',
        },
        {
            id: 2,
            title: 'Luxury Penthouse with City Views',
            location: 'Downtown Dubai',
            price: '12,800,000',
            beds: 5,
            baths: 6,
            sqft: '6,500',
            image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/173282707403123773.jpg?alt=media&token=681c1776-59f8-4610-8dba-4f545bdb3d74',
            featureIcon: '/icons/feature_icon.png',
            saleIcon: '/icons/sale_icon.png',
            bookmarkIcon: '/icons/Bookmark.png',
            isFeatured: true,
            isSale: false,
            isBookmarked: true,
            listed: '49 minutes ago',
            link: '/properties/luxury-penthouse',
        },
        {
            id: 3,
            title: 'Canadian Maple Residency',
            location: 'Arabian Ranches, Dubai',
            price: '4,200,000',
            beds: 3,
            baths: 3,
            sqft: '3,800',
            image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/1732827381143117.jpg?alt=media&token=e2b3f751-dbef-41f2-bf19-0c64e520ff6f',
            featureIcon: '/icons/feature_icon.png',
            saleIcon: '/icons/sale_icon.png',
            bookmarkIcon: '/icons/Bookmark.png',
            isFeatured: false,
            isSale: true,
            isBookmarked: false,
            listed: '2 days ago',
            link: '/properties/contemporary-family-home',
        },
        {
            id: 4,
            title: 'Beachfront Apartment with Marina Views',
            location: 'JBR, Dubai Marina',
            price: '5,900,000',
            beds: 2,
            baths: 2,
            sqft: '2,100',
            image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/17328271665901426.jpg?alt=media&token=7f59270a-8566-4257-a142-0b3cc756878a',
            featureIcon: '/icons/feature_icon.png',
            saleIcon: '/icons/sale_icon.png',
            bookmarkIcon: '/icons/Bookmark.png',
            isFeatured: true,
            isSale: true,
            isBookmarked: true,
            listed: '3 weeks ago',
            link: '/properties/beachfront-apartment',
        },
        {
            id: 5,
            title: 'Golf Course Villa with Private Garden',
            location: 'Emirates Hills',
            price: '15,500,000',
            beds: 6,
            baths: 7,
            sqft: '8,200',
            image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/1732828011798pexels-efrem-efre-2786187-15192734.jpg?alt=media&token=a970861f-b88d-49d8-93f6-c000501b1e9b',
            featureIcon: '/icons/feature_icon.png',
            saleIcon: '/icons/sale_icon.png',
            bookmarkIcon: '/icons/Bookmark.png',
            isFeatured: false,
            isSale: false,
            isBookmarked: false,
            listed: '4 days ago',
            link: '/properties/golf-course-villa',
        },
        {
            id: 6,
            title: 'Modern Waterfront Villa with Pool',
            location: 'Dubai Hills Estate',
            price: '6,800,000',
            beds: 4,
            baths: 5,
            sqft: '4,500',
            image: 'https://firebasestorage.googleapis.com/v0/b/property-sell-401819.appspot.com/o/1732827914126pexels-alex-staudinger-829197-1732414.jpg?alt=media&token=fba543d3-a491-4616-ae55-2e6985d3a12a',
            featureIcon: '/icons/feature_icon.png',
            saleIcon: '/icons/sale_icon.png',
            bookmarkIcon: '/icons/Bookmark.png',
            isFeatured: true,
            isSale: true,
            isBookmarked: false,
            listed: '2 months ago',
            link: '/properties/smart-home-desert',
        },
    ];

    return (
        <section className="bg-white py-10 md:py-16 lg:py-32">
            <div className="container">
                <div>
                    <SectionHeading
                        headingText={'Best recomendation'}
                        subText={
                            'Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.'
                        }
                        badgeText={'DISCOVER'}
                    />
                </div>
                <div className="mt-6">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {propertyListings.map((listing, index) => (
                            <div key={index}>
                                <ListingCard listingData={listing} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecomandSection;
