import { Poppins, Space_Grotesk } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-space-grotesk',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${spaceGrotesk.variable} ${poppins.variable} antialiased`}
            >
                <NextTopLoader
                    color="#e74d3c"
                    height={4}
                    showOnPageLoad
                    zIndex={1000}
                    speed={1}
                    showSpinner={false}
                />
                <main className="">{children}</main>
            </body>
        </html>
    );
}
