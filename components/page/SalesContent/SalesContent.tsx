

import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import style from "./SalesContent.module.css"
import { Marquee } from '@components/ui';

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
                        <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide font-bold text-gray-800'>
                            自社のITインフラを整えて<br/>ビジネスを次のステージへ
                        </h3>
                        <p className='text-sm md:text-sm lg:text-base text-gray-400 mt-2 md:mt-4 ml-1'>
                            最新技術を使用し高機能なWEBサイトを構築
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
                                    initial={{ y:20, opacity:0}}
                                    whileInView={{ y:0, opacity:1.0 }}
                                    transition={{ duration:0.9 }}
                                    className="mx-auto relative w-full h-full "
                                >
                                    <Image className='rounded-md shadow-md' src={"/images/data-marketing.jpg"} width={1080} height={810} loading="eager" layout="responsive" alt="call-center" />
                                </motion.div>
                            </div>
                            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1.0, y:0 }} transition={{ duration:0.8 }}>
                                <div className='max-w-lg md:mr-6  w-fit p-3 md:p-6 rounded-md mx-auto relative'>
                                    <p className='text-green-600 font-bold text-sm lg:text-base'>
                                        マルチプラで既存ビジネスをアップグレード
                                    </p>
                                    <p className='font-bold text-xl md:text-2xl lg:text-3xl py-2 md:py-3'>
                                        制作・集客・収益化までを<br/>一貫してサポート致します
                                    </p>
                                    <p className="text-sm md:text-base  text-left text-gray-500">
                                        マルチプラは丹波篠山市を拠点にITの力でお客様のビジネスの課題を解決いたします。データを活用した根拠のあるマーケティング対策で自社ブランドに合ったWEBサイト構築いたします。お客様自身で運用可能な運用体制の構築を心掛け、売上目標の達成とお客様に合った運用体制の構築までを見据えて構築させて頂きます。
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="h-0.5 w-1/2 my-12 md:my-24 mx-auto bg-gray-200 rounded-full"></div>
                    <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8 }}>
                        <p className='text-2xl md:text-3xl max-w-7xl mx-auto'><span className='text-4xl md:text-5xl font-bold'>マルチプラ</span><br/>の得意とすること</p>
                    </motion.div>
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} >
                        <div className={style.sales_container}>
                                <p>ECサイト制作</p>
                                <p>WEBサイト制作</p>
                                <p>ホームページ制作</p>
                                <p>サイト収益化支援</p>
                                <p>ヘッドレスコマース構築</p>
                                <p>WEB広告</p>
                                <p>WEBマーケティング</p>
                        </div>
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} >
                    <div className="h-0.5 w-1/2 my-12 md:my-24 mx-auto bg-gray-200 rounded-full"></div>
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }} >
                        <p className="text-center mt-4 md:mt-8 text-gray-500 lg:mt-12 text-base md:text-xl lg:text-2xl pb-6 md:pb-12">上記の以外のお問合せにも対応いたしますので<br/>お気軽にご相談ください。</p>
                    </motion.div>
                    </motion.div>
                </motion.div>
                </div>
            </div>
        </>
    );
};

export default SalesContent
