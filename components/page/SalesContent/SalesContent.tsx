

import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import style from "./SalesContent.module.css"
import { CustomButton } from '@components/ui';
import { Chat, UpArrow } from '@components/icon';

const SalesContent = () => {
    return (
        <>
            <div className={style.root}>
                <div className='w-full mx-auto'>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1.0 }}
                        transition={{ duration:0.8 }}
                        className='max-w-lg md:max-w-6xl py-1  mx-auto text-left'
                    >
                        <div className='relative w-full h-full'>
                            <div>
                                <div className='w-fit my-4 md:my-8'>
                                    <h3 className="text-gray-700 text-3xl md:text-4xl">{`What's? Multipla`}</h3>
                                    <div className='h-[2px] w-full bg-green-300 lg:my-2'></div>
                                    <p className='text-xs md:text-sm '>マルチプラについて</p>
                                </div>
                                <h3 className='text-2xl mt-12 md:mt-20 sm:text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold text-gray-800'>
                                    WEBの力を駆使して<br/>ビジネスを次のステージへ
                                </h3>
                                <p className='text-xs md:text-sm lg:text-base text-gray-400 mt-2 md:mt-4 ml-1'>
                                    最新技術を使用し高機能なWEBサイトを構築
                                </p>
                            </div>
                            <div className='absolute top-0 right-0 -z-10 w-screen shadow-lg rounded-full h-[300px] md:h-[500px] bg-gradient-to-tl to-purple-200 from-orange-100 -translate-x-32 md:-translate-x-72 translate-y-24 md:translate-y-52'></div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 30, opacity: 0.0 }}
                        whileInView={{ y:0, opacity:1.0 }}
                        transition={{ duration:0.8 }}
                    >
                        <div
                            className='items-end justify-center max-w-7xl mx-auto'
                        >
                            <div className="md:flex md:flex-row-reverse justify-center my-12 md:my-16 lg:my-20">
                                <motion.div
                                    initial={{ x:80, opacity:0}}
                                    whileInView={{ x:0, opacity:1.0 }}
                                    transition={{ duration:0.9 }}
                                    className="mx-auto relative w-full h-full flex-1 md:ml-4"
                                >
                                    <Image className='rounded-md shadow-md' src={"/images/data-marketing.jpg"} width={1080} height={810} loading="eager" layout="responsive" alt="call-center" />
                                </motion.div>
                                <motion.div className='flex-1' initial={{ opacity:0, y:30 }} whileInView={{ opacity:1.0, y:0 }} transition={{ duration:0.8 }}>
                                    <div className='max-w-lg w-fit p-3 md:p-6 bg-white border shadow-md mt-4 md:-mt-12 rounded-md mx-auto relative'>
                                        <p className='text-green-600 font-bold text-sm md:text-base lg:text-xl'>
                                            既存ビジネスをアップグレード
                                        </p>
                                        <p className='font-bold text-xl md:text-3xl lg:text4xl py-2 md:py-3 lg:py-6'>
                                            制作・集客・収益化までを<br/>一貫してサポート致します
                                        </p>
                                        <p className="text-sm md:text-base lg:text-lg text-left text-gray-500">
                                            マルチプラは丹波篠山市を拠点にWEBの力でお客様のビジネスの課題を解決いたします。データを活用した根拠のあるマーケティング対策で自社ブランドに合ったWEBサイト構築いたします。お客様自身で運用可能な運用体制の構築を心掛け、売上目標の達成とお客様に合った運用体制の構築までを見据えて構築させて頂きます。
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="h-0.5 w-1/2 my-12 md:my-24 mx-auto bg-gray-200 rounded-full"></div>
                    <motion.div className='max-w-6xl mx-auto' initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8 }}>
                        <div className='w-fit my-4 md:my-8'>
                            <h3 className="text-gray-700 text-3xl md:text-4xl">Strengths</h3>
                            <div className='h-[2px] w-full bg-green-300'></div>
                            <p className='text-xs md:text-sm'>マルチプラの得意な事</p>
                        </div>
                    </motion.div>
                    <div className='relative w-full h-full mt-12 md:mt-20'>
                    <div className='w-fit mx-auto'>
                        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className={style.sales_container}>
                            <p>・ECサイト制作</p>
                            <p>・WEBサイト制作</p>
                            <p>・ホームページ制作</p>
                            <p>・サイト収益化支援</p>
                            <p>・ヘッドレスコマース構築</p>
                            <p>・WEB広告</p>
                            <p>・WEBマーケティング</p>
                        </motion.div>
                    </div>
                    <div className='absolute top-0 left-0 -z-10 w-screen shadow-lg rounded-full h-[300px] md:h-[500px] bg-gradient-to-tl to-gray-300 from-white translate-x-32 md:translate-x-72 -translate-y-24 md:-translate-y-52'>
                    </div>
                    </div>
                    <div className="h-0.5 w-1/2 my-12 md:my-24 mx-auto bg-gray-200 rounded-full"></div>
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} >
                        <p className="text-center mt-4 md:mt-8 text-gray-500 lg:mt-12 text-base md:text-xl lg:text-2xl pb-6 md:pb-12">上記以外のお問合せにも対応いたします。<br/>お気軽にご相談ください。</p>
                        <CustomButton href={"/contact"} text={"質問する"}>
                            <Chat className='h-8 w-8 md:h-10 md:w-10' />
                        </CustomButton>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default SalesContent
