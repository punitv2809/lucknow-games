import React from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import Nav from '../Components/Nav'
import Card from '../Components/Card'
import { BsCash, BsTrophy } from 'react-icons/bs'
import { BiCoin, BiLock, BiMoney, BiRupee } from 'react-icons/bi'
import { MdMoney } from 'react-icons/md'
import { CgCheck } from 'react-icons/cg'
import SliderCard from '../Components/SliderCard'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion';
import Promotions from './Promotions'

const Home = () => {
    return (
        <div className="">
            <Nav />
            <motion.div className='bg-red-600 text-white capitalize mx-6 md:mx-12 my-3 md:my-6 p-12 rounded-[45px] relative overflow-hidden w-auto'>
                <div className="flex flex-col gap-8 pl-0 lg:pl-64 py-24">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-7xl text-left font-bold z-20">
                        <h1>Lucknow Games</h1>
                        <h1>Where Excitement</h1>
                        <h1>Meets Big Wins</h1>
                    </motion.div>
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="z-50">
                        <a href='https://lucknowgames.fun/register?invite_code=B68159060004' className='z-50 transition-all duration-500 hover:bg-white hover:text-red-500 hover:border-white inline-flex gap-2 items-center border rounded-full p-3 px-6 capitalize'>
                            <p>Register</p>
                            <GoArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
                {/* decorators */}
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="z-10 size-96 bg-red-400 absolute rounded-full -bottom-20 right-[6rem] md:-right-[10rem] lg:right-[36rem]">
                    <img src="tower.svg" alt="decor-1" className='absolute hidden lg:block -top-16 w-10/12 -right-20' />
                </motion.div>
                {/* <img src="tower.svg" alt="decor-1" className='z-10 absolute -rotate-12 -left-64 top-0 w-[50%] opacity-50' /> */}
                <img src="hero.png" alt="" className='absolute hidden lg:block top-0 right-0 w-3/12' />
            </motion.div>
            <div className="grid grid-cols-12 p-12 gap-4">
                <Card
                    icon={<BsCash size={24} />}
                    heading="Win Big with Lucknow Games"
                    content="Try your luck at our exciting lottery and casino games and you could be the next big winner!"
                />
                <Card
                    icon={<BiCoin size={24} />}
                    heading="Enjoy a Wide Variety of Games"
                    content="Choose from a variety of popular lottery and casino games, including slots, roulette, blackjack, and more."
                />
                <Card
                    icon={<BiLock size={24} />}
                    heading="Get Safe and Secure Payouts"
                    content="We offer fast and secure payouts to all our winners, so you can enjoy your winnings with confidence."
                />
            </div>
            <div className="grid grid-cols-12 p-12 space-y-12 md:space-y-0 gap-0 md:gap-16 lg:gap-0">
                <div className="col-span-12 md:col-span-12 lg:col-span-6 flex items-center justify-center gap-8">
                    <div className="group flex flex-col gap-8 items-center">
                        <div className="transition-all duration-500 group-hover:scale-110 bg-stone-200 bg-no-repeat bg-cover p-16 md:p-32 rounded-xl relative grow"
                            style={
                                {
                                    backgroundImage: "url('13.png')"
                                }
                            }
                        >
                            <div className="absolute transition-all group-hover:top-3 group-hover:-left-3 border border-red-600/50 w-full h-full rounded-xl top-4 left-4"></div>
                        </div>
                        <div className="rounded-full text-red-600 size-12 md:size-52 hover:rotate-45 transition-all relative border-2 border-red-600/50 flex items-center justify-center">
                            <BiCoin size={64} className='rotate-6' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="cursor-pointer hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 capitalize bg-red-600 text-white rounded-xl">
                            <div className="text-4xl md:text-5xl font-bold py-6 md:py-12">
                                <p>25</p>
                            </div>
                            <div className="">
                                <p>years of</p>
                                <p>experience</p>
                            </div>
                        </div>
                        <div className="cursor-pointer hover:scale-105 transition-all duration-500 bg-stone-200 p-24 md:p-32 rounded-xl relative h-full bg-top"
                            style={
                                {
                                    backgroundImage: "url('17.png')"
                                }
                            }
                        >
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-6 flex flex-col gap-8 relative">
                    {/* decor */}
                    <img src="https://in.piccdn123.com/static/_template_/red/img/home/lotterycategory_k3.png" alt="" className='absolute top-28 md:top-0 right-0 w-[40%] md:w-[20%]' />

                    <div className="flex items-center uppercase gap-2 font-medium">
                        <BsCash size={24} />
                        <p>Why Choose Lucknow Games?</p>
                    </div>
                    <div className="capitalize text-5xl font-bold flex flex-col gap-2 leading-tight">
                        <p>Unleash Your Winning Spirit at <span className='font-black text-red-600'>Lucknow Games</span></p>
                    </div>
                    <div className="">
                        <p>Lucknow Games is your one-stop destination for thrilling <span className='text-rose-600'>experiences</span> and the chance to <span className='text-rose-600 font-medium'>win big!</span> We offer a diverse range of lottery and casino games, catering to every taste and preference.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="card capitalize flex flex-col items-start justify-start gap-4">
                            <div className="flex gap-2 items-center">
                                <div className="size-16 flex-shrink-0 flex items-center justify-center text-white bg-red-600 rounded-full">
                                    <MdMoney size={20} />
                                </div>
                                <p className="text-xl font-bold text-red-700 grow">Unbeatable Winnings</p>
                            </div>
                            <div className="text-sm flex flex-col gap-3">
                                <div className="flex items-center text-black/75">
                                    <CgCheck size={42} className="text-red-600 flex-shrink-0" />
                                    <p>Play a variety of exciting games with the potential for life-changing rewards.</p>
                                </div>
                                <div className="flex items-center text-black/75">
                                    <CgCheck size={42} className="text-red-600 flex-shrink-0" />
                                    <p>Secure and fast payouts to ensure you enjoy your winnings seamlessly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card capitalize flex flex-col items-start justify-start gap-4">
                            <div className="flex gap-2 items-center">
                                <div className="size-16 flex-shrink-0 flex items-center justify-center text-white bg-red-600 rounded-full">
                                    <BsTrophy size={20} />  </div>
                                <p className="text-xl font-bold text-red-700 grow">Unmatched Game Variety</p>
                            </div>
                            <div className="text-sm flex flex-col gap-3">
                                <div className="flex items-center text-black/75">
                                    <CgCheck size={42} className="text-red-600 flex-shrink-0" />
                                    <p>Discover a world of popular lottery and casino games, including slots, roulette, blackjack, and more.</p>
                                </div>
                                <div className="flex items-center text-black/75">
                                    <CgCheck size={42} className="text-red-600 flex-shrink-0" />
                                    <p>Constantly evolving game selection to keep your experience fresh and exciting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Promotions />
            <div className="testimonials bg-red-600 text-white m-4 md:m-8 lg:m-12 p-4 md:p-8 lg:p-12 rounded-3xl relative">
                <div className="p-4 md:p-8 lg:p-12 flex flex-col md:flex-row">
                    <div className="flex-grow flex flex-col gap-2 mb-4 md:mb-0">
                        <div className="flex items-center uppercase font-medium text-white/75">
                            <BiMoney size={32} />
                            <p className="ml-2">our world</p>
                        </div>
                        <div className="capitalize text-2xl md:text-4xl lg:text-5xl font-bold flex flex-col gap-1">
                            <p>making memories around</p>
                            <p>world unforgettable</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-end gap-4 z-50">
                        <div className="w-10 h-10 md:w-12 md:h-12 cursor-pointer transition-all duration-500 hover:bg-white hover:text-red-700 hover:border-white hover:scale-125 border rounded-full flex items-center justify-center">
                            <GoArrowLeft size={20} />
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 cursor-pointer transition-all duration-500 hover:bg-white hover:text-red-700 hover:border-white hover:scale-125 border rounded-full flex items-center justify-center">
                            <GoArrowRight size={20} />
                        </div>
                    </div>
                </div>
                <div className="slider w-full overflow-auto px-4 md:px-8 lg:px-12 flex gap-4 lg:gap-8 snap-x">
                    <SliderCard content='Lucknow Games has been a fantastic platform for me to try my luck at various lottery and casino games. I won a significant amount that allowed me to finally [mention a specific goal achieved, e.g., fulfill a lifelong dream vacation, help my family financially, etc.]. The platform is user-friendly, secure, and offers a great selection of games. I highly recommend Lucknow Games to anyone seeking an exciting and potentially life-changing experience!' />
                    <SliderCard content="Lucknow Games is my go-to platform for lottery fun! They offer a convenient and exciting way to play my favorite games. The bonus offers are a great bonus, giving me extra chances to win. I've had some satisfying wins so far, and the withdrawal process is always smooth and fast. Lucknow Games provides a top-notch gaming experience!" active={true} />
                    <SliderCard content="I've always been a fan of casino games, and Lucknow Games offers a fantastic selection with a user-friendly interface. The live dealer games are particularly exciting, making me feel like I'm playing in a real casino! The customer service team is also very helpful and responsive. I highly recommend Lucknow Games for anyone looking for a thrilling and enjoyable online gaming experience." />
                    <SliderCard content="The variety of slot games at Lucknow Games is incredible! I love that they offer classic slots alongside new and innovative themes. The bonus rounds and jackpots are also very exciting. I've had a lot of fun exploring the different slots and trying my luck. Lucknow Games is definitely my favorite platform for online slots!" />
                    <SliderCard content="Lucknow Games is a blast! Easy to use, great selection of games, and exciting wins. I highly recommend it!" />
                    <SliderCard content="I had a question about a specific game, and the customer service team at Lucknow Games was fantastic. They were very helpful, patient, and answered my question clearly. It's great to know that there's a reliable support team available if needed. Overall, Lucknow Games offers a top-notch gaming experience with excellent customer service." />
                </div>
            </div>
            <div className="bg-white m-6 md:m-12 p-6 pb-24 mt-12 ld:mt-6 rounded-3xl capitalize bg-center md:bg-bottom"
                style={{ backgroundImage: "url('card-decor.svg')" }}
            >
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 font-medium text-red-800">
                        <BsCash size={18} />
                        <p>Winners Circle</p>
                    </div>
                    <div className="text-center text-2xl md:text-5xl font-bold space-y-2 text-red-700">
                        <p>Celebrating Big Wins</p>
                        <p>at Lucknow Games</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 md:gap-8 px-4 md:px-12 lg:px-24 py-6 md:py-8 lg:py-12">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="hover:-translate-y-3 transition-all duration-500 relative bg-white shadow-xl shadow-stone-300/25 space-y-4 border p-6 md:p-8 lg:p-12 rounded-xl">
                            <p className="text-red-600 text-5xl md:text-6xl lg:text-7xl font-black">01</p>
                            <p className="text-lg md:text-xl font-bold">Akash Kumar (Lucknow)</p>
                            <div className="flex items-center font-bold">
                                <BiRupee size={22} />
                                <p>3,72,349</p>
                            </div>
                            <img src="coin-1.png" alt="coin" className="absolute right-10 md:right-16 lg:right-20 bottom-6 md:bottom-8 lg:bottom-10" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 relative">
                        <div className="hover:-translate-y-3 transition-all duration-500 bg-white shadow-xl shadow-stone-300/25 space-y-4 border p-6 md:p-8 lg:p-12 rounded-xl relative md:absolute w-full mt-0 md:mt-16 lg:mt-12">
                            <p className="text-red-600 text-5xl md:text-6xl lg:text-7xl font-black">02</p>
                            <p className="text-lg md:text-xl font-bold">Priya Sharma (Kanpur)</p>
                            <div className="flex items-center font-bold">
                                <BiRupee size={22} />
                                <p>2,56,810</p>
                            </div>
                            <img src="coin-1.png" alt="coin" className="absolute -rotate-12 right-10 md:right-16 lg:right-20 bottom-6 md:bottom-8 lg:bottom-10" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="hover:-translate-y-3 transition-all duration-500 relative bg-white shadow-xl shadow-stone-300/25 space-y-4 border p-6 md:p-8 lg:p-12 rounded-xl">
                            <p className="text-red-600 text-5xl md:text-6xl lg:text-7xl font-black">03</p>
                            <p className="text-lg md:text-xl font-bold">Rahul Singh (Varanasi)</p>
                            <div className="flex items-center font-bold">
                                <BiRupee size={22} />
                                <p>1,56,578</p>        </div>
                            <img src="coin-1.png" alt="coin" className="absolute -rotate-45 right-10 md:right-16 lg:right-20 bottom-6 md:bottom-8 lg:bottom-10" />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <a href="https://lucknowgames.fun/register?invite_code=B68159060004" className="inline-flex gap-4 items-center px-4 py-2 font-medium text-center text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                        Play Now & Be a Winner!
                        <svg className="-ml-2 mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
            <img src="footer-decor.svg" alt="" className='w-full' />
            <Footer />
        </div>
    )
}

export default Home
