import React from 'react';
import Link from 'next/link'

import { MetaHead } from '@components/common';
import { createBreadcrumListJsonLd } from '@components/utils';
import { BreadcrumbList, Container, CustomButton } from '@components/ui';
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld';

import { motion } from 'framer-motion';

const Agreement = () => {

    const items: BreadcrumbItem[] = [
        { name: "ホーム", url: "/" },
        { name: "ご契約の流れ", url: "/agreement" }
    ]

    return (
        <>
            <MetaHead
                title={"ご契約の流れ | マルチプラ | 丹波篠山市のWEB制作会社"}
                description={"マルチプラ/Multiplaへの制作依頼の大まかな流れを簡単にご案内。制作の打ち合わせは完全オンラインで制作。お時間が少ないお客様でも無理なく利用できます。"}
            >
                <script type='application/ld+json' dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
            </MetaHead>
            <Container>
                <BreadcrumbList items={items}/>
                <h1 className='sm:text-3xl text-2xl font-bold text-center title-font pb-2'>ご契約の流れ</h1>
                <motion.div
                    initial={{ opacity:0, y:10 }}
                    animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:10 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.7,
                    }}
                >
                    <div className="in-range:">
                        <div className="max-w-6xl mx-auto">
                            <div className="h-fit py-6">
                                <div className='pb-12'>
                                    <h5 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mt-12">制作依頼から納品まで</h5>
                                    <div className="relative flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                        <h4 className='mb-6 ml-3 text-center mt-6 font-bold text-green-500 text-xl md:text-2xl lg:text-3xl'>全てオンライン上で完結</h4>
                                    </div>
                                    <div className='mt-6'>
                                        <p className='text-center text-sm md:text-base  text-gray-600'>制作の打ち合わせはオンラインまたは、お近くでしたら<br/>直接でも選択いただけます！</p>
                                        <p className='text-center text-sm md:text-base  text-gray-600 mb-4'>お時間が少ないお客様でも無理なく利用できます!</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
                                    <div className='h-full space-y-4 bg-gray-50 p-3 rounded-md shadow-md shadow-gray-300 max-w-sm mx-auto'>
                                        <div className="flex items-center space-x-4">
                                            <div className='flex justify-start w-fit px-2.5 bg-green-500 rounded-full shadow-md'>
                                                <span className='text-lg md:text-xl font-bold text-white'>1</span>
                                            </div>
                                            <div>
                                                <p className='text-xs md:text-sm text-center font-bold'><span className='text-2xl'>1</span>営業日以内に<span className='text-lg'>即日返信</span></p>
                                            </div>
                                        </div>
                                        <div className='h-[1px] w-auto mx-4 bg-gray-300'></div>
                                        <div className='grid grid-cols-1 gap-2 mx-2 justify-center'>
                                            <div className="flex items-start space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                <p className='font-bold text-gray-800 text-lg md:text-xl'>お問合せ<span className='text-sm ml-1 text-green-500'>無料</span></p>
                                            </div>
                                            <span className='text-xs md:text-sm text-gray-600 text-left'>ECサイト構築の場合は<Link href="/plan-calc" passHref><a className='underline text-blue-500'>お見積りシュミレーター</a></Link>からご希望のプランを選択し、その他に関しては<Link href={"/contact"}><a className='underline text-blue-500'>問い合わせページ</a></Link>よりお問い合わせ下さい。<a href='https://lin.ee/KDk1uI3' className='underline text-blue-500'>LINE</a>でのお問い合せもございますのでお気軽にお問合せください。</span>
                                        </div>
                                    </div>
                                    <div className='h-full space-y-4 bg-gray-50 p-3 rounded-md shadow-md shadow-gray-300 max-w-sm mx-auto'>
                                        <div className="flex items-center space-x-4">
                                            <div className='flex justify-start w-fit px-2 bg-green-500 rounded-full shadow-md'>
                                                <span className='text-lg md:text-xl font-bold text-white'>2</span>
                                            </div>
                                            <div>
                                                <p className='text-xs md:text-sm text-center font-bold'>最短<span className='text-2xl'>2</span>日で<span className='text-lg'>ご提案</span></p>
                                            </div>
                                        </div>
                                        <div className='h-[1px] w-auto mx-4 bg-gray-300'></div>
                                        <div className='grid grid-cols-1 gap-2 mx-2 justify-center'>
                                            <div className="flex items-start space-x-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                <div>
                                                    <p className='font-bold text-gray-800 md:text-lg'>ご提案・ヒアリング<span className='text-sm ml-1 text-green-500'>無料</span></p>
                                                </div>
                                            </div>
                                            <span className='text-xs md:text-sm text-left text-gray-600'>ご要望をお伺いし、貴社にビジネスに最適なサイトをご提案致します。素材の準備も依頼したい場合は承っておりますのでお気軽にお申し付けください。</span>
                                        </div>
                                    </div>
                                    <div className='h-full space-y-4 bg-gray-50 p-3 rounded-md shadow-md shadow-gray-300 max-w-sm mx-auto'>
                                        <div className="flex items-center space-x-4">
                                            <div className='flex justify-start w-fit px-2 bg-green-500 rounded-full shadow-md'>
                                                <span className='text-lg md:text-cl font-bold text-white'>3</span>
                                            </div>
                                            <div>
                                                <p className='text-xs text-center font-bold md:text-sm'>最短<span className='text-2xl'>5</span>日で<span className='text-lg'>ご提案</span></p>
                                            </div>
                                        </div>
                                        <div className='h-[1px] w-auto mx-4 bg-gray-300'></div>
                                        <div className='grid grid-cols-1 gap-2 mx-2 justify-center'>
                                            <div className="flex items-start space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                                <p className='font-bold text-gray-800 md:text-lg'>素材準備・デザイン作成</p>
                                            </div>
                                            <span className='text-xs md:text-sm text-left text-gray-600'>商品画像、商品説明文、サイトを構成する素材、フォント、色味具体的に決めていきます。ご準備いただきサイトの構成を決定します。</span>
                                        </div>
                                    </div>
                                    <div className='h-full space-y-4 bg-gray-50 p-3 rounded-md shadow-md shadow-gray-300 max-w-sm mx-auto'>
                                        <div className="flex items-center space-x-4">
                                            <div className='flex justify-start w-fit px-2 bg-green-500 rounded-full shadow-md'>
                                                <span className='text-lg md:text-xl font-bold text-white'>4</span>
                                            </div>
                                            <p className='text-xs md:text-sm text-center font-bold'>最短<span className='text-2xl'>7</span>日で<span className='text-ld'>構築</span></p>
                                        </div>
                                        <div className='h-[1px] w-auto mx-4 bg-gray-300'></div>
                                        <div className='grid grid-cols-1 gap-2 mx-2 justify-center'>
                                            <div className="flex items-start space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                </svg>
                                                <p className='font-bold text-gray-800 md:text-lg'>サイト構築</p>
                                            </div>
                                            <span className='text-xs md:text-sm text-left text-gray-600'>お客様のイメージ、要望を元にサイトを構築していきます。その際リアルタイムで進捗状況を確認することが可能ですのでよりイメージに近づける事がことが可能です。</span>
                                        </div>
                                    </div>
                                    <div className='h-full space-y-4 bg-gray-50 p-3 rounded-md shadow-md shadow-gray-300 max-w-sm mx-auto'>
                                        <div className="flex items-center space-x-4">
                                            <div className='flex justify-start w-fit px-2 bg-green-500 rounded-full shadow-md'>
                                                <span className='text-lg md:text-xl font-bold text-white'>5</span>
                                            </div>
                                            <p className='text-xs md:text-sm text-center font-bold '>最短<span className='text-2xl'>14</span>日で<span className='text-lg'>完成</span></p>
                                        </div>
                                        <div className='h-[1px] w-auto mx-4 bg-gray-300'></div>
                                        <div className='grid grid-cols-1 gap-2 mx-2 justify-center'>
                                            <div className="flex items-start space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                                <p className='font-bold text-gray-800 md:text-lg'>完成・納品</p>
                                            </div>
                                            <span className='text-xs md:text-sm text-left text-gray-600'>完成したサイトのデザイン、各種機能のテスト、テスト決済、テスト注文などテストした上で最後にお客様に確認して頂きますのでバグを事前に防ぎます。必要書類については別途お送りいたします。</span>
                                        </div>
                                    </div>
                                    <div className='h-full space-y-4 bg-gray-50 p-3 rounded-md shadow-md shadow-gray-300 max-w-sm mx-auto'>
                                        <div className="flex items-center space-x-4">
                                            <div className='flex justify-start w-fit px-2 bg-green-500 rounded-full shadow-md'>
                                                <span className='text-lg md:text-xl font-bold text-white'>6</span>
                                            </div>
                                            <p className='text-xs md:text-sm text-center font-bold'>売上目標達成まで</p>
                                        </div>
                                        <div className='h-[1px] w-auto mx-4 bg-gray-300'></div>
                                        <div className='grid grid-cols-1 gap-2 mx-2 justify-center'>
                                            <div className="flex items-start space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                                </svg>
                                                <p className='font-bold text-gray-800 md:text-lg'>広告運用・データ解析</p>
                                            </div>
                                            <span className='text-xs md:text-sm text-left text-gray-600'>構築後思うように成果が出ないなどお悩みがありましたら、構築後サポートプランを契約して頂くことも可能ですので安心してご利用いただけます。</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className=''>
                    <div className='mx-auto max-w-2xl  rounded-md shadow-md bg-gradient-to-tr to-green-500 from-lime-400 p-5'>
                        <div className='md:flex items-center'>
                            <div className='w-full'>
                                <p className='text-white font-bold text-left text-lg md:text-xl'>契約時に必要な物</p>
                                <ul className='text-white text-left list-disc ml-8 text-sm md:text-base font-bold'>
                                    <li>メールアドレス</li>
                                    <li>パスワード</li>
                                    <li>クレジットカード</li>
                                </ul>
                            </div>
                            <div className='mt-3 w-full'>
                                <p className='text-gray-500 rounded-md text-xs md:text-sm w-full text-left bg-white p-3'>
                                    クレジットカードはShopifyの登録時に必要となります。その他サイト構築に必要な商品データ、商品画像、商品説明、バナーなどをご準備いただきます。マルチプラではShopifyアカウントの登録も行なっていますので、ご自分で登録できない方でも安心です。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomButton href={"/contact"} text={"無料で相談する"} />
            </Container>
        </>
    );
};

export default Agreement;