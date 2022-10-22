

import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import style from "./SalesContent.module.css"

const SalesContent = () => {
    return (
        <>
            <div className={style.root}>
                <div className='w-full mx-auto'>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1.0 }}
                        transition={{ duration:0.8 }}
                        className='max-w-lg md:max-w-4xl py-1  mx-auto text-left mt-6 md:mt-12'
                    >
                        <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-wide font-bold text-black'>
                            自社のITインフラを整えて<br/>ビジネスを次のステージへ。
                        </h3>
                        <p className='text-xs md:text-sm lg:text-base text-gray-400 font-bold'>
                            進化するWEB技術に対応した高機能サイトを構築
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 30, opacity: 0.0 }}
                        whileInView={{ y:0, opacity:1.0 }}
                        transition={{ duration:0.8 }}
                    >
                        <div
                            className='md:flex md:flex-row-reverse  items-end justify-center max-w-4xl mx-auto'
                        >
                            <div className="flex justify-center my-12 md:my-16 lg:my-20">
                                <motion.div
                                    initial={{scale:0.5, opacity:0}}
                                    whileInView={{ scale:1.0, opacity:1.0 }}
                                    transition={{ duration:0.8 }}
                                    className="mx-auto relative h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 "
                                >
                                    <Image src={"/images/step-up.png"} loading="eager" layout="fill" alt="call-center" />
                                </motion.div>
                            </div>
                            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1.0, y:0 }} transition={{ duration:0.8 }}>
                                <div className='max-w-lg md:mr-6 shadow-md bg-gray-100 w-fit p-3 md:p-6 rounded-md mx-auto relative'>
                                    <p className='text-green-600 font-bold text-xs md:text-sm lg:text-base'>
                                        2022年最新のWEB技術
                                    </p>
                                    <p className='font-bold text-lg md:text-2xl lg:text-3xl py-2 md:py-3'>
                                        集客までを見据えたサイト構築
                                    </p>
                                    <p className="text-sm md:text-base lg:text-lg text-left md:pl-4 text-gray-500 ">
                                        弊社はITの力でお客様のビジネスの課題を解決いたします。データを活用した根拠のあるマーケティング対策で自社ブランドに合ったサイト構築いたします。お客様自身で運用可能な運用体制の構築を心掛け、売上目標の達成とお客様に合った運用体制の構築までを見据えて構築させて頂きます。
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8 }}>
                        <div className="text-sm md:text-lg lg:text-xl font-bold mt-12 max-w-lg md:max-w-3xl mx-auto text-black">
                            <h3>得意とすること</h3>
                            <div className="h-0.5 w-full bg-green-600 rounded-full"></div>
                            <h3>{"One's Forte"}</h3>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} >
                        <div className="max-w-xl mx-auto text-sm md:text-base lg:text-lg mt-2  space-y-3 py-3 px-6 bg-gray-50 rounded-md shadow-md">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 lg:w-8 w-6 lg:h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-2">ECサイト構築</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 lg:w-8 w-6 lg:h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-2">ホームページ作成</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 lg:w-8 w-6 lg:h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-2">サイト収益化支援</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 lg:w-8 w-6 lg:h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-2">ヘッドレスコマース構築</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 lg:w-8 w-6 lg:h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-2">WEBマーケティング・WEB広告</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 lg:w-8 w-6 lg:h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="ml-2">WEBアプリ開発・システム開発</p>
                            </div>
                        </div>
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} >
                        <motion.div >
                            <div className="flex justify-center pt-12 md:pt-16 lg:pt-20">
                                <div className="relative h-52 w-52 md:h-72 md:w-72 lg:h-96 lg:w-96">
                                    <Image
                                        src={"/images/operater.png"}
                                        layout={"fill"}
                                        alt="call-center" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} >
                            <p className="text-center mt-4 md:mt-8 text-black lg:mt-12 text-base font-bold md:text-xl lg:text-2xl pb-6 md:pb-12">上記の以外のお問合せにも対応いたしますので<br/>お気軽にご相談ください。</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
                </div>
            </div>
        </>
    );
};

export default SalesContent
