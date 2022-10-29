import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'


const ActualSite = () => {

    return (

        <div className='bg-gray-100 w-full'>
            <div className='md:mx-auto lg:w-1/2 px-8 md:px-12 py-6 md:py-12 lg:py-24 font-noto_sans'>
                <motion.div initial={{ y: 30, opacity: 0.0 }} animate={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                <div className='w-fit my-4 md:my-8'>
                    <h3 className="text-gray-700 text-3xl md:text-4xl">ActualSite</h3>
                    <div className='h-[2px] w-full bg-green-300'></div>
                    <p className='text-xs md:text-sm'>制作実績</p>
                </div>
                </motion.div>
                <p className='hidden text-center text-gray-500 font-noto text-xl py-12'>現在制作実績はありません。</p>
                <motion.div className='pt-8' initial={{ y: 30, opacity: 0.0 }} animate={{ y:0, opacity:1.0 }}  transition={{ duration:0.8, delay:0.2 }}>
                    <Link href={"https://wealthy-store.com"}>
                        <a target="_blank">
                            <div className='relative w-full pb-6 rounded-md border shadow-md mb-12 bg-secondary overflow-hidden bg-white'>
                                <div className='relative w-full h-fit  mx-auto hover:scale-105 transform duration-700 ease-in-out'>
                                    <Image src="/images/ws1.png" layout='responsive' width={600} height={350} alt='wealthystore link' />
                                </div>
                                <p className='text-center text-sm text-gray-500 pt-6'>
                                    ※こちらはデモサイトです※
                                </p>
                            </div>
                        </a>
                    </ Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ActualSite