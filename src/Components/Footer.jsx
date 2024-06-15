import React from 'react'
import { BsCashCoin, BsTelegram } from 'react-icons/bs'
import Logo from './Logo'
import { CgCheck } from 'react-icons/cg'

const Footer = () => {
    return (
        <div className='bg-red-600 text-white divide-y divide-white/25 text-sm relative'>
            <img src="lotterycategory_k3.png" alt="decor" className='absolute -top-48 md:-top-36 lg:-top-48' />
            <div className="flex flex-col md:flex-row">
                <div className="grow p-6 md:p-12 justify-center capitalize flex items-center gap-4">
                    <div className="size-16 flex-shrink-0 rounded-full bg-red-500 flex items-center justify-center">
                        <BsCashCoin size={24} />
                    </div>
                    <p className='text-lg lg:text-2xl font-medium'>Looking for life-changing experiences?</p>
                </div>
                <div className="grow p-6 md:p-12 justify-center capitalize flex items-center gap-4">
                    <div className="size-16 flex-shrink-0 rounded-full bg-red-500 flex items-center justify-center">
                        <BsCashCoin size={24} />
                    </div>
                    <p className='text-lg lg:text-2xl font-medium'>Try your luck at Lucknow Games!</p>
                </div>
            </div>
            <div className="p-12 px-12 lg:px-56 grid grid-cols-12 gap-8 lg:gap-0">
                <div className="col-span-12 md:col-span-4 space-y-6 lg:space-y-4">
                    <div className="flex items-center gap-2">
                        <img src="logo.png" alt="" />
                        <p className='text-3xl font-medium'>Lucknow Games</p>
                    </div>
                    <p>Your one-stop destination for thrilling experiences and the chance to win big! We offer a diverse range of lottery and casino games, catering to every taste and preference.</p>
                    <a
                        href='https://t.me/lucknow_achieve_dream' className="item flex items-center gap-2 text-white capitalize font-black">
                        <BsTelegram size={30} className='flex-shrink-0' />
                        <p>telegram channel</p>
                    </a>
                </div>
                <div className="col-span-12 md:col-span-4 space-y-4">
                    <div className="capitalize text-2xl mb-3">
                        <p>Why Choose Us?</p>
                    </div>
                    <div className="text-white flex items-center">
                        <CgCheck size={32} className='flex-shrink-0' />
                        <p>Unbeatable Winnings: Play a variety of exciting games with the potential for life-changing rewards.</p>
                    </div>
                    <div className="text-white flex items-center">
                        <CgCheck size={32} className='flex-shrink-0' />
                        <p>Unmatched Game Variety: Discover a world of popular lottery and casino games, including slots, roulette, blackjack, and more.</p>
                    </div>
                    <div className="text-white flex items-center">
                        <CgCheck size={32} className='flex-shrink-0' />
                        <p>Secure & Fast Payouts: Enjoy your winnings seamlessly with our secure and fast payout system.</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4 space-y-4">
                    <div className="capitalize text-2xl mb-3">
                        <p>Contact Us</p>
                    </div>
                    <div className="text-white flex items-center gap-2">
                        <BsCashCoin size={24} className='flex-shrink-0' />
                        <p>Live Chat: Chat with our friendly customer support team 24/7.</p>
                    </div>
                    <div className="text-white flex items-center gap-2">
                        <BsCashCoin size={24} className='flex-shrink-0' />
                        <p>Email Support: Get in touch with our support team via email at support@lucknowgames.com</p>
                    </div>
                </div>
            </div>
            <div className="px-6 md:px-24 py-6 capitalize flex gap-2 md:gap-0 flex-col md:flex-row items-center justify-between">
                <p>Lucknow Games 2024 | All Rights Reserved</p>
                <div className="flex gap-4 capitalize">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Responsible Gaming</p>  {/* Added a new link */}
                </div>
            </div>
        </div>
    )
}

export default Footer
