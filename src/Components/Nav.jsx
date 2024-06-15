import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { GoArrowRight } from "react-icons/go";
import { BsTelegram } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex transition-all duration-500 items-center justify-between p-6 sticky top-0 z-50 ${scrolled ? 'm-12 top-10 rounded-full bg-white shadow-xl w-11/12 md:w-10/12 lg:w-1/2 px-12 mx-auto' : 'bg-base'}`}>
            <div className="">
                <Logo />
            </div>
            <div className="block md:hidden">
                <motion.a
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    href='https://t.me/lucknow_achieve_dream' className="item flex items-center gap-2 text-blue-600 font-black">
                    <BsTelegram size={30} className='flex-shrink-0' />
                </motion.a>
            </div>
            <div className="items hidden md:flex items-center gap-16 uppercase font-medium text-red-600">
                <div className="item">
                    <p>Home</p>
                </div>
                <div className="item">
                    <p>About Us</p>
                </div>
                <div className="item">
                    <p>services</p>
                </div>
                <motion.a
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    href='https://t.me/lucknow_achieve_dream' className="item flex items-center gap-2 text-blue-600 font-black">
                    <BsTelegram size={24} className='flex-shrink-0' />
                    <p>telegram channel</p>
                </motion.a>
            </div>
            <div className="">
                <a href='https://lucknowgames.fun/register?invite_code=B68159060004' className='bg-red-600 flex items-center gap-4 text-white rounded-full px-6 py-3 capitalize transition-all hover:ring-2 ring-offset-2 ring-offset-white ring-red-600 duration-500 hover:scale-110'>
                    <p>Register</p>
                    <GoArrowRight size={20} />
                </a>
            </div>
        </div>
    )
}

export default Nav
