import React from 'react';
import HeroSection from './components/HeroSection';
import RecomandSection from './components/RecomandSection';
import Advante from './components/Advante';
import AboutUs from './components/AboutUs';
import Testimonial from './components/Testimonial';
import NewsLetterSection from './components/NewsLetterSection';
import Footer from '@/app/_components/common/Footer';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <RecomandSection />
            <Advante />
            <AboutUs />
            <Testimonial />
            <NewsLetterSection />
            <Footer />
        </>
    );
};

export default HomePage;
