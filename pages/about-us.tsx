import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

import { MetaHead } from '@components/common';
import { createBreadcrumListJsonLd } from '@components/utils';
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld';

import { motion } from 'framer-motion';
import { BreadcrumbList, Container } from '@components/ui';

const AboutUs = () => {

    const items: BreadcrumbItem[] = [
        {name: "ホーム", url: "/"},
        {name: "私たちについて", url: "/about-us"},
    ]
    return (
        <>
            <MetaHead
                title={"私たちについて"}
                description={"ECサイト制作ならbyte/バイト!EC以外でもWEBのことならぜひ一度ご相談ください。遠方のお客様も全てオンライン上で全て完結いたしますので是非ご利用下さい。直接打ち合わせも可"}
            >
            <Script id='breadcrumb' type='application/ld+json' key={`breadcrumbJSON-about-us`}  dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
            </MetaHead>
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}
                transition={{
                    duration: 0.7,
                }}
            >
                <motion.div
                            initial={{ opacity:0, y:10 }}
                            animate={{ opacity:1, y:0 }}
                            exit={{ opacity:0, y:10 }}
                            transition={{
                                delay:0.3,
                                duration: 0.7,
                            }}
                >
                    <Container>
                        <BreadcrumbList items={items}/>
                        <h3 className='lg:text-3xl text-2xl text-gray-700 font-bold text-center title-font'>私たちについて</h3>
                        <h3 className='text-gray-700 font-bold text-center title-font mb-4 uppercase'>/ about</h3>
                        <div className="w-full">
                            <div className="font-bold text-xl lg:text-3xl text-center tracking-wide max-w-4xl mx-auto">
                                <p className="pt-8 mx-8">『 <span className="text-2xl lg:text-5xl">構築</span>だけじゃない<span className="text-2xl lg:text-5xl">集客</span></p>
                                <p className="mx-8"><span className="text-2xl lg:text-5xl">内製化</span>まで徹底サポート 』</p>
                            </div>
                        </div>
                        <div className='mx-auto w-2/3  my-8 text-gray-500 mb-6 text-xs lg:text-sm max-w-xl'>
                            弊社は最新技術を利用してお客さまのビジネスにフィットしたECサイトの構築を心がけています。
                            アフターサービスも手厚く行なっており、サイト構築から集客、内製化までを一貫してサポートいたします。
                            内製化することでランニングコストの大幅な削減とお客様自身で育てていける持続可能なサイトの構築を心がけています。
                        </div>
                        <div className="max-w-3xl mx-auto my-6">
                            <div className="mx-8">
                                <p className='mt-8 text-left ml-8 text-lg lg:text-2xl  font-bold'>会社概要</p>
                                <div className="mx-8 h-0.5  bg-black rounded-full"></div>
                                <p className='mb-2 text-left ml-8 text-lg lg:text-2xl  font-bold'>Company</p>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto mt-12">
                            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
                                <h5 className="text-left w-32 inline-block lg:text-xl font-bold">会社名</h5>
                                <span className="text-left lg:text-xl w-full font-bold">byte</span>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
                                <h5 className="text-left w-32 inline-block lg:text-xl font-bold">所在地</h5>
                                <p className="text-left lg:text-xl w-full font-bold">兵庫県丹波篠山市今田町下小野原59-45</p>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
                                <h5 className="text-left w-32 inline-block lg:text-xl font-bold">アドレス</h5>
                                <p className="text-left lg:text-xl w-full overflow-hidden font-bold">suport@byte-ecommerce.com</p>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
                                <h5 className="text-left w-32 inline-block lg:text-xl font-bold">設立日</h5>
                                <p className="text-left lg:text-xl w-full font-bold">2022月2月12日</p>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
                                <h5 className="text-left w-32 inline-block lg:text-xl font-bold">代表</h5>
                                <p className="text-left lg:text-xl w-full font-bold">酒井専冴</p>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-center space-x-4 lg:space-x-8 p-2 mx-8">
                                <h5 className="text-left w-32 inline-block lg:text-xl font-bold">資本金</h5>
                                <p className="text-left lg:text-xl w-full font-bold">100万円</p>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            </motion.div>
        </>
    );
};

export default AboutUs;
