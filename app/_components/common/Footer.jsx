import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className="bg-white pt-10">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-11">
                    <div className="lg:col-span-3">
                        <div className="flex items-center">
                            <Link href={'/'}>
                                <div>
                                    <span className="font-primary text-2xl font-bold text-secondary">
                                        Property
                                    </span>
                                    <span className="font-primary text-2xl font-bold text-primary">
                                        Lord
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="mt-5 lg:mt-12">
                            <p className="font-secondary text-sm font-medium text-secondary-foreground">
                                © 2022 Lebriact | All Rights Reserved
                            </p>
                            <p className="mt-1 flex items-center justify-start gap-2 font-secondary text-sm font-medium text-secondary-foreground">
                                <Link
                                    href={'/'}
                                    className="font-secondary text-secondary-foreground transition duration-300 hover:text-primary"
                                >
                                    Terms of service
                                </Link>
                                <span>|</span>
                                <Link
                                    href={'/'}
                                    className="font-secondary text-secondary-foreground transition duration-300 hover:text-primary"
                                >
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start lg:col-span-2">
                        <div>
                            <h4 className="mb-5 font-primary text-lg font-bold text-secondary">
                                Products
                            </h4>
                            <ul className="flex flex-col items-start justify-start gap-3">
                                <li className="font-secondary text-sm font-medium text-secondary-foreground">
                                    <Link
                                        href={'/'}
                                        className="transition duration-300 hover:text-primary hover:underline"
                                    >
                                        E-ticketing
                                    </Link>
                                </li>
                                <li className="font-secondary text-sm font-medium text-secondary-foreground">
                                    <Link
                                        href={'/'}
                                        className="transition duration-300 hover:text-primary hover:underline"
                                    >
                                        Tour
                                    </Link>
                                </li>
                                <li className="font-secondary text-sm font-medium text-secondary-foreground">
                                    <Link
                                        href={'/'}
                                        className="transition duration-300 hover:text-primary hover:underline"
                                    >
                                        Concert
                                    </Link>
                                </li>
                                <li className="font-secondary text-sm font-medium text-secondary-foreground">
                                    <Link
                                        href={'/'}
                                        className="transition duration-300 hover:text-primary hover:underline"
                                    >
                                        Exibition
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start justify-start lg:col-span-2 lg:justify-end">
                        <div>
                            <h4 className="mb-5 font-primary text-lg font-bold text-secondary">
                                Contact Us
                            </h4>
                            <ul className="flex flex-col items-start justify-start gap-3">
                                <li className="font-secondary text-sm font-medium text-secondary-foreground">
                                    <Link
                                        href={'/'}
                                        className="font-secondary text-secondary-foreground transition duration-300 hover:text-primary hover:underline"
                                    >
                                        Lift Tickets
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className="font-secondary text-secondary-foreground transition duration-300 hover:text-primary hover:underline"
                                    >
                                        Season Passes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className="font-secondary text-secondary-foreground transition duration-300 hover:text-primary hover:underline"
                                    >
                                        Concert
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/'}
                                        className="font-secondary text-secondary-foreground transition duration-300 hover:text-primary hover:underline"
                                    >
                                        Vacation Packages
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-start justify-start lg:col-span-4 lg:justify-end">
                        <div>
                            <h4 className="mb-5 font-primary text-lg font-bold text-secondary">
                                Get In Touch
                            </h4>
                            <ul className="flex flex-col items-start justify-start gap-3">
                                <li className="font-secondary text-sm font-medium text-secondary-foreground">
                                    <p className="mb-2 font-secondary text-secondary">
                                        {'Email:'}
                                    </p>
                                    <Link
                                        href={
                                            'mailto:biplobemon75945@gmail.com'
                                        }
                                        className="font-secondary font-normal text-secondary-foreground transition duration-300 hover:text-primary hover:underline"
                                    >
                                        {'biplobemon75945@gmail.com'}
                                    </Link>
                                </li>
                                <li className="font-secondary text-sm font-medium text-secondary-foreground">
                                    <p className="mb-2 font-secondary text-secondary">
                                        {'Mobile:'}
                                    </p>
                                    <Link
                                        href={'tel:+8801883049802'}
                                        className="font-secondary font-normal text-secondary-foreground transition duration-300 hover:text-primary hover:underline"
                                    >
                                        {'+880 1883049802'}
                                    </Link>
                                </li>
                                <li className="font-secondary text-sm font-medium text-secondary-foreground">
                                    <p className="mb-2 font-secondary text-secondary">
                                        {'Address:'}
                                    </p>
                                    <p className="font-secondary font-normal text-secondary-foreground transition duration-300 hover:text-primary hover:underline">
                                        {'Gazipur, Dhaka, Bangladesh'}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image
                    src="/images/16903885190.png"
                    alt="footer"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-full object-cover"
                />
            </div>
        </section>
    );
};

export default Footer;
