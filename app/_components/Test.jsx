'use client';
import React, { useState } from 'react';

// react icons
// import { FaDiscord } from "react-icons/fa";
// import { IoIosSearch } from "react-icons/io";
// import { TbBrandGithubFilled } from "react-icons/tb";
// import { CiMenuFries } from "react-icons/ci";

const ResponsiveNavbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            {/* large */}
            <div
                className={`${
                    toggle ? 'bg-[#3B9DF8]' : 'bg-[#f0f0f0]'
                } relative h-[40px] w-[70px] rounded-lg border border-[#e5eaf2] px-[0.209rem] py-[0.210rem] transition-colors duration-500`}
            >
                <div
                    className={`${
                        toggle
                            ? 'translate-x-[29px] rotate-[90deg]'
                            : 'translate-x-[25px] rotate-[0deg]'
                    } h-[31px] w-[31px] cursor-pointer rounded-md bg-[#fff] transition-all duration-700`}
                    style={{ boxShadow: '1px 2px 5px 2px rgb(0,0,0,0.1)' }}
                    onClick={() => setToggle(!toggle)}
                ></div>
            </div>

            {/* medium */}
            <div
                className={`${
                    toggle ? 'bg-[#3B9DF8]' : 'bg-[#f0f0f0]'
                } relative h-[38px] w-[65px] rounded-lg border border-[#e5eaf2] px-[0.230rem] py-[0.210rem] transition-colors duration-500`}
            >
                <div
                    className={`${
                        toggle
                            ? 'translate-x-[26px] rotate-[90deg]'
                            : 'translate-x-[0px] rotate-[0deg]'
                    } h-[29px] w-[29px] cursor-pointer rounded-md bg-[#fff] transition-all duration-500`}
                    style={{ boxShadow: '1px 2px 5px 2px rgb(0,0,0,0.1)' }}
                    onClick={() => setToggle(!toggle)}
                ></div>
            </div>

            {/* small */}
            <div
                className={`${
                    toggle ? 'bg-[#3B9DF8]' : 'bg-[#f0f0f0]'
                } relative h-[34px] w-[65px] rounded-lg border border-[#e5eaf2] px-[0.200rem] py-[0.138rem] transition-colors duration-500`}
            >
                <div
                    className={`${
                        toggle
                            ? 'translate-x-[28px] rotate-[90deg]'
                            : 'translate-x-[0px] rotate-[0deg]'
                    } h-[27px] w-[26px] cursor-pointer rounded-md bg-[#fff] transition-all duration-500`}
                    style={{ boxShadow: '1px 2px 5px 2px rgb(0,0,0,0.1)' }}
                    onClick={() => setToggle(!toggle)}
                ></div>
            </div>

            {/* smallest */}
            <div
                className={`${
                    toggle ? 'bg-[#3B9DF8]' : 'bg-[#f0f0f0]'
                } relative h-[30px] w-[55px] rounded-lg border border-[#e5eaf2] px-[0.200rem] py-[0.100rem] transition-colors duration-500`}
            >
                <div
                    className={`${
                        toggle
                            ? 'translate-x-[24px] rotate-[90deg]'
                            : 'translate-x-[0px] rotate-[0deg]'
                    } h-[25px] w-[23px] cursor-pointer rounded-md bg-[#fff] transition-all duration-500`}
                    style={{ boxShadow: '1px 2px 5px 2px rgb(0,0,0,0.1)' }}
                    onClick={() => setToggle(!toggle)}
                ></div>
            </div>
        </>
    );
};

export default ResponsiveNavbar;
