import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'


const ActualSite = () => {

    return (

        <div className='md:mx-auto lg:w-1/2 px-8 py-6 md:py-12'>
            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-center title-font'>制作実績</h3>
            </motion.div>
            <p className='hidden text-center text-gray-500 font-noto text-xl py-12'>現在制作実績はありません。</p>
            <motion.div initial={{ y: 30, opacity: 0.0 }} animate={{ y:0, opacity:1.0 }}  transition={{ duration:0.8, delay:0.2 }}>
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
    );
};

export default ActualSite