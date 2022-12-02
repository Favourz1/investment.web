import React from 'react';
import PageLayout from '../layout';
import signUpImg from '../../assets/how-it-works/signUpImg.png';
import setUpImg from '../../assets/how-it-works/setUpImg.png';
import getImg from '../../assets/how-it-works/getImg.png';
import arrowRight from '../../assets/how-it-works/arrow-right.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
    const process = [
        {
            id: '1',
            image: signUpImg,
            headingText: 'Sign up for your free account',
            subText: 'Open a premium account for full functionality',
            subText2: 'Learn more'
        },
        {
            id: '2',
            image: setUpImg,
            headingText: 'Set up your account',
            subText: 'Create your profile and answer our short quiz on your risk appetite'
        },
        {
            id: '3',
            image: getImg,
            headingText: 'Get your custom-made recommendations',
            subText:
                'From the short quiz, we understand your interests and curate stock options that are tailored to you'
        }
    ];

    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });

    return (
        <PageLayout>
            <div className="w-full h-full">
                <div className="bg-how-mobile bg-cover bg-no-repeat text-white h-48 flex flex-col items-center justify-center md:bg-how-desktop">
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="font-HauoraBold text-2xl tracking-wide lg:text-4xl">
                            How it works
                        </h1>
                        <p className="tracking-widest lg:text-xl">Investing in 3 Easy Steps!</p>
                    </div>
                </div>

                {/* SMALLER SCREEN */}
                <div className="p-10 cursor-pointer flex flex-col gap-8 items-center lg:flex-row lg:items-start lg:justify-between">
                    {process?.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col justify-center gap-10 w-295 pt-20 relative sm:w-460 md:w-520 lg:w-210"
                                whileHover={{ scale: 1.2 }}>
                                <div className="absolute top-5 left-32 text-gray-600 sm:top-2 sm:left-48 md:left-56 lg:left-32">
                                    <p className="font-HauoraBold text-7xl sm:text-8xl">
                                        {item?.id}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-2 z-20 w-full">
                                    <img src={item?.image} className=" w-full" />
                                    <h1 className="font-HauoraBold text-sm text-center sm:text-xl">
                                        {item?.headingText}
                                    </h1>
                                    <p className="text-sm text-center sm:text-lg">
                                        {item?.subText}
                                    </p>
                                    {item?.subText2 && (
                                        <p className="text-sm text-green-500 cursor-pointer hover:text-green-600 transition ease-in-out delay-100 lg:text-base">
                                            {item?.subText2}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}

                    <div className="flex justify-center mt-6 lg:hidden">
                        <Link
                            to={'/signup'}
                            className="text-sm flex items-center gap-2 bg-green-400 py-3 px-6 rounded-md hover:bg-green-500 transition ease-in-out delay-100 lg:hidden">
                            <p className="font-HauoraBold">Get Started</p>
                            <img src={arrowRight} />
                        </Link>
                    </div>
                </div>

                {/* LARGER SCREENS */}
                <div className="hidden lg:flex lg:justify-center lg:m-10">
                    <Link
                        to={'/signup'}
                        className="text-sm flex items-center gap-2 bg-green-400 py-3 px-12 rounded-md hover:bg-green-500 transition ease-in-out delay-100">
                        <p className="font-HauoraBold">Get Started</p>
                        <img src={arrowRight} />
                    </Link>
                </div>
            </div>
        </PageLayout>
    );
};

export default Index;
