import localFont from 'next/font/local';

const fontMain = localFont({
    src: [
        {
            path: '../public/fonts/Gilroy-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/Gilroy-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/Gilroy-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-gilroy',
});

export default fontMain;
