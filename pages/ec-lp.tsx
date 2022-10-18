import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { MetaHead } from '@components/common'
import { PlanCard } from '@components/ui'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";


const ECLP = () => {

    return (
        <>
        <MetaHead
            title={'ECサイトのお悩み解決！byte/バイト'}
        />
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}
                transition={{
                    duration: 0.7,
                }}
            >
               <div className="bg-gray-100 relative">
                <div >
                    {/* MAIN  */}
                    <div className="relative">
                        {/* FIXED BANNER */}
                        <div className="fixed w-fit z-20 bottom-0 md:top-0 right-0">
                            <Link href={"/plan-calc"} passHref>
                                <a>
                                    <div className='text-center lg:animate-pulse bg-gradient-to-tr to-lime-400 from-green-400 pb-0.5 pt-2 lg:py-2 px-6 lg:px-12 rounded-tl-md md:rounded-bl-md md:rounded-tl-none  shadow-md  hover:scale-105 transform duration-200 ease-in-out cursor-pointer'>
                                        <div className="flex justify-center">
                                            <p className='text-white text-xl lg:text-3xl font-bold'>無料お見積り</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                            </svg>
                                        </div>
                                        <p className="text-sm lg:text-base  font-bold text-white mb-1">全てオンライン上で完結します。</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* LP TOP */}
                        <div className="relative h-[600px] lg:h-[900px] w-full overflow-hidden">
                            <Image src={"/images/lp_b.jpg"} loading="eager" priority={true} layout="fill" objectFit='cover' alt='bg-image' />
                            <div className="absolute z-10 inset-0">
                                <div className="p-2 bg-purple-600 bg-opacity-60 rounded-md w-fit flex justify-start items-center space-x-2 mx-8 my-2">
                                    <div className="relative w-[70px] h-[25px]">
                                        <Image className="w-full h-full" src={"/images/byte-logo.png"} layout="fill" loading='eager' objectFit="cover" alt="Byte Logo" />
                                    </div>
                                    <p className='text-xl'>×</p>
                                    <div className="relative w-[84px] h-[30px] p-2">
                                        <Image src={"/images/shopify_logo.png"} layout="fill" objectFit='cover' alt='Logo' />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:pt-24 lg:pt-36">
                                    <div className='mx-8'>
                                        <div className="max-w-md lg:max-w-none lg:mx-12 mx-auto">
                                            <div className='text-start text-[26px] lg:text-[35px] h-fit w-full font-bold mt-12 md:mt-0'>
                                                <h2 className='text-2xl font-extrabold uppercase md:text-3xl lg:text-5xl xl:7xl'>EC事業を本格化</h2>
                                                <h2 className='text-xl font-extrabold uppercase md:text-3xl lg:text-5xl xl:7xl'>データを活用した運用へ</h2>
                                                <div className='text-[12px] md:text-[20px] lg:text-[28px] text-gray-600 mt-1'>
                                                    <p>売れるECサイト作るならbyte</p>
                                                    <p>EC運用まで徹底サポート！</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-4 md:mr-8">
                                        <div className='mx-auto sm:max-w-md md:max-w-none  '>
                                            <div className="relative h-[300px] md:h-[450px] lg:h-[600px] w-full">
                                                <Image src={"/images/lp_b_top2.png"} loading="eager" layout="fill" objectFit='cover' alt='bg-image' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 悩みに訴求→解決 */}
                        <div className='bg-gradient-to-tr from-blue-100 to-purple-50'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className="mx-8 sm:mx-24 md:mx-12 pt-8 md:pt-14">
                                    <p className='text-center font-bold text-xl md:text-2xl lg:text-4xl mb-4'>こんなお悩みありませんか？</p>
                                    <div className="relative h-[200px] w-[200px] lg:h-[350px] lg:w-[350px] mx-auto my-4">
                                        <Image src={"/images/problem.png"} layout="fill" alt='bg-image' />
                                    </div>
                                    <div className="flex justify-center py-4 lg:py-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-10 lg:w-10  text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                    <div className="md:mx-8">
                                        <div className="max-w-5xl mx-auto">
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                                <details className='mb-4'>
                                                    <summary className="bg-white text-gray-700 text-left text-sm md:text-base xl:text-lg font-bold  sm:text-left shadow-md border rounded-md py-3 px-6">
                                                        ネットショップを開設したけど、思うように集客が出来ず売上が上がらない。
                                                    </summary>
                                                    <div className='my-3'>
                                                        <div className='bg-white rounded-lg p-5 shadow-sm'>
                                                            <span className='text-gray-600 text-left text-sm md:text-base xl:text-lg tracking-wide'>
                                                                <p className='text-green-500 font-bold'>解決</p>
                                                                <p className='p-2 bg-gray-100 rounded-md'>Shopifyを用いることで様々な外部サービスと連携、自社データを溜め顧客に合った施策が打てる、高機能なECサイトの構築致します。お客様のビジネスの規模に合わせて最適なサイトと運用体制を提案させて頂きますので初めてのお客様でも安心してお問合せ下さい。</p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </details>
                                                <details className='mb-4'>
                                                    <summary className="bg-white text-gray-700 text-sm md:text-base xl:text-lg  sm:text-left font-bold shadow-md border rounded-md py-3 px-6">
                                                        既存事業の売り上げに限界を感じている。事業を今より拡大したい。
                                                    </summary>
                                                    <div className='my-3'>
                                                        <div className='bg-white rounded-lg p-4 shadow-sm'>
                                                            <span className='text-gray-600 text-left text-sm md:text-base xl:text-lg tracking-wide'>
                                                                <p className='text-green-500 font-bold'>解決</p>
                                                                <p className='p-2 bg-gray-100 rounded-md'>
                                                                    実店舗だけでは、直接来店できる範囲にいるお客様しかターゲットになりませんがネットショップでは、インターネットが繋がる全ての人がターゲットになり今より市場を拡大する事ができます。
                                                                    カゴ落ち対策、SEO対策、メルマガ、ブログ投稿など...豊富なマーケティング機能を駆使して事業を拡大できます。
                                                                </p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </details>
                                                <details className='mb-4'>
                                                    <summary className="bg-white text-gray-700 text-sm md:text-base xl:text-lg  sm:text-left font-bold shadow-md border rounded-md py-3 px-6">
                                                        ECサイトの制作が初めてで何をどの様にすれば良いのかよく分からない。
                                                    </summary>
                                                    <div className='my-3'>
                                                        <div className='bg-white rounded-lg p-4 shadow-sm'>
                                                            <span className='text-gray-600 text-left text-sm md:text-base xl:text-lg tracking-wide'>
                                                                <p className='text-green-500 font-bold'>解決</p>
                                                                <p className='p-2 bg-gray-100 rounded-md'>
                                                                    初めてのお客様でも安心してご利用頂ける様に弊社では無料相談Lineをご用意しておりますので、構築時のご不明な点など無料で相談受付しています。
                                                                </p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </details>
                                                <details className='mb-4'>
                                                    <summary className="bg-white text-gray-700 text-sm md:text-base xl:text-lg  sm:text-left font-bold shadow-md border rounded-md py-3 px-6">
                                                        社内にIT人材が居ないため、構築後にECサイトを維持・改修していけるのか不安がある。
                                                    </summary>
                                                    <div className='my-3'>
                                                        <div className='bg-white rounded-lg p-4 shadow-sm'>
                                                            <span className='text-gray-600 text-left text-sm md:text-base xl:text-lg tracking-wide'>
                                                                <p className='text-green-500 font-bold'>解決</p>
                                                                <p className='p-2 bg-gray-100 rounded-md'>
                                                                    Shopifyの分かりやすい管理画面と、無料相談Lineでお客様自身が運用できるまで徹底的にサポートさせて頂きますのご安心ください！お客様のニーズ合わせて2種のサポートプランをご用意していますのでご自身のご要望に合わせてお選びください。
                                                                </p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </details>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* お問合せボタン */}
                        <div className='bg-gradient-to-tl from-purple-50 to-blue-100'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='text-center font-bold pt-8 pb-6'>
                                    <div className='flex justify-center'>
                                        <Link href={"/contact"} passHref>
                                            <a>
                                                <button>
                                                    <div className='bg-gradient-to-tr to-blue-500 from-blue-700 rounded-full shadow-md border-2 border-white transform duration-300 ease-in-out  hover:scale-105'>
                                                        <p className='text-white  px-8 py-4 font-bold text-2xl md:text-3xl lg:text-4xl fonoot-bold'>無料で相談してみる</p>
                                                    </div>
                                                </button>
                                            </a>
                                        </Link>
                                    </div>
                                    <p className='text-gray-600 mt-4 md:text-lg lg:text-xl'>構築後も徹底サポート</p>
                                    <p className='text-gray-600 text-sm md:text-base lg:text-lg'>初めてのネットショップ構築でも成功に導きます！</p>
                                </div>
                            </motion.div>
                        </div>
                        {/* なぜbyteなのか？*/}
                        <div className='bg-gradient-to-tr from-blue-100 to-purple-50'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='mx-12 md:mx-24 py-12 '>
                                    <div className='max-w-3xl mx-auto'>
                                        <div className='flex justify-around items-center sm:mx-12 md:mx-0'>
                                            <div className='w-full'>
                                                <div className='flex items-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-10 lg:w-10  text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <p className='ml-1 text-sm text-gray-500 font-thin md:text-lg lg:text-3xl'>why Byte</p>
                                                </div>
                                                <p className='text-xl md:text-2xl lg:text-4xl font-bold'>byteが<br/>選ばれる理由</p>
                                            </div>
                                            <div className='w-full'>
                                                <div className="flex justify-center">
                                                    <div className=" relative h-32 w-32 md:w-48 md:h-48 lg:h-72 lg:w-72">
                                                        <Image src={"/images/kaiketsu.png"} loading="eager" priority={true} layout="fill" alt="call-center" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            keyboard={{
                                                enabled: true,
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Keyboard, Pagination, Navigation]}
                                            className="mySwiper"
                                        >
                                            <div className="shadow-lg shadow-gray-500">
                                                <SwiperSlide>
                                                    <div className="h-[270px] md:h-[350px] lg:h-[400px] px-8 md:px-16 lg:px-24 py-4 rounded-md bg-white mt-4">
                                                        <p className='text-base md:text-3xl lg:text-4xl font-bold'>豊富なマーケテイング機能</p>
                                                        <div className="w-24 md:w-32 lg:w-44 h-0.5 my-1 bg-purple-500"></div>
                                                        <p className='mt-2 text-sm md:text-2xl lg:text-3xl text-gray-500 md:py-4'>最近のECサイトはただ商品を販売するサイトから、顧客をファン化を促ししリピート率を改善したり、カートイン後に購入を促すメールを送信したりするなど、サイトの方からアクションを起こす事が多いので豊富な施策が打てるECサイトの方が強みがあります。</p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="h-[270px] md:h-[350px] lg:h-[400px] px-8 md:px-16 lg:px-24 py-4 rounded-md bg-white mt-4">
                                                        <p className='text-base md:text-3xl lg:text-4xl font-bold'>本格的なSEO対策</p>
                                                        <div className="w-24 md:w-32 lg:w-44 h-0.5 my-1 bg-purple-500"></div>
                                                        <p className='mt-2 text-sm md:text-2xl lg:text-3xl text-gray-500  md:py-4'>Shopifyを用いることで基本的なSEO対策が可能な上、弊社で、サイトの構造化データ、サイトマップなどShopify標準でない、SEO対策も必要に応じて設定することで精度の高いSEO対策も行うことが可能。自然流入での顧客の集客が見込めます。</p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="h-[270px] md:h-[350px] lg:h-[400px] px-8 md:px-16 lg:px-24 py-4 rounded-md bg-white mt-4">
                                                        <p className='text-base md:text-3xl lg:text-4xl font-bold'>データを活用し根拠ある施策</p>
                                                        <div className="w-24 md:w-32 lg:w-44 h-0.5 my-1 bg-purple-500"></div>
                                                        <p className='mt-2 text-sm md:text-2xl lg:text-3xl text-gray-500  md:py-4'>ECサイトを運用しているのに顧客データを集めていないのは勿体無いと言えるでしょう。顧客データは宝であり、多くのヒントと改善点を得られるので、ECサイト運用と顧客データ管理はセットになって来ています。闇雲な施策から、データを活用した根拠のある施策へ！</p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="h-[270px] md:h-[350px] lg:h-[400px] px-8 md:px-16 lg:px-24 py-4 rounded-md bg-white mt-4">
                                                        <p className='text-base md:text-3xl lg:text-4xl font-bold'>世界レベルのセキュリティー</p>
                                                        <div className="w-24 md:w-32 lg:w-44 h-0.5 my-1 bg-purple-500"></div>
                                                        <p className='mt-2 text-sm md:text-2xl lg:text-3xl text-gray-500  md:py-4'>顧客情報漏洩のリスクはとても大きいです。ですがShopifyのサーバーを使う事で自社でサーバーを持つ必要が無く大事な顧客情報、決済情報をしっかりと管理可能です。大手ECサイトと同レベルセキュリティーで情報漏洩の心配なく安心してご利用頂けます。</p>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="h-[270px] md:h-[350px] lg:h-[400px] px-8 md:px-16 lg:px-24 py-4 rounded-md bg-white mt-4">
                                                        <p className='text-base md:text-3xl lg:text-4xl font-bold'>快適なUI/UX</p>
                                                        <div className="w-24 md:w-32 lg:w-44 h-0.5 my-1 bg-purple-500"></div>
                                                        <p className='mt-2 text-sm md:text-2xl lg:text-3xl text-gray-500 md:py-4'>Byteの制作するサイトはレスポンシブ対応で快適な使い心地を提供しお客様のビジネスチャンスを逃しません。サイトのデザイン変更なども承っております。サイトに訪れたユーザーに快適な購入体験を。サイトを作ってもレイアウト崩れなどを起こしていれば効果は出ません。</p>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                        <div>
                                            <div className="flex justify-center items-center mt-12 md:mt-24 lg:mt-36">
                                                <h3 className="text-center text-gray-600 font-bold text-lg md:text-2xl lg:text-3xl">下記の事業者の方にオススメです！</h3>
                                            </div>
                                            <div className="flex justify-center my-6 md:my-12 lg:my-18">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <div className="bg-gradient-to-tr to-green-400 from-lime-400 shadow-md rounded-md px-5 py-2 text-white">
                                                <p className='text-center font-bold text-sm md:text-lg lg:text-xl '>食品販売/予約サイト/単品リピート商品/アパレル販売/化粧品販売/BtoB・BtoC、ECサイト構築/レンタルサービスなど</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* なぜShopifyなのか？ */}
                        <div className='bg-gradient-to-tl from-purple-50 to-blue-100'>
                        <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                            <div className="mx-8 sm:mx-24 md:mx-12 py-12 lg:py-24">
                                <div className='max-w-4xl mx-auto'>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                        <p className='ml-1 text-sm text-gray-500 font-thin md:text-lg lg:text-3xl'>why Shopify</p>
                                    </div>
                                    <p className='ml-1 text-start text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-8 lg:mb-12'>なぜShopifyなのか</p>
                                    <div className='space-y-4 md:space-y-8'>
                                        <div className='bg-white rounded-md shadow-md  mb-4 p-6'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:space-x-5'>
                                                <div className="flex justify-center items-center mr-4">
                                                    <div className='relative h-20 md:h-28 w-full'>
                                                        <Image className='rounded-lg' src={"/images/shopify_logo.png"} layout="fill" loading='eager' objectFit='fill' alt='shopify logo' />
                                                    </div>
                                                </div>
                                                <div className='mt-4 p-4 bg-gray-100 rounded-md shadow-md'>
                                                    <h4 className='font-bold text-xl md:text-2xl  '>Shopifyを利用するメリット</h4>
                                                    <p className='px-2 text-sm md:text-base  text-gray-600 pt-2'>
                                                        Shopifyとは世界シェアNo.1のECサイト構築プラットフォームです。shopifyの魅力はその高いカスタマイズ性です。例えば、豊富な外部サービス、連携可能なアプリの豊富さ、使いやすい管理画面、APIによるシステム連携で業務効率化、越境ECへの対応、高度なセキュリティーなど多岐にわたります。低い予算感で高機能なストアを構築するという面ではNo.1のプラットフォームです。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-white  rounded-md shadow-md  mb-4 p-6'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-02 md:space-x-5'>
                                                <div className="flex justify-center items-center  md:order-last">
                                                    <div className='relative h-64 md:h-80 w-full'>
                                                        <Image className='rounded-lg' src={"/images/marketing.png"} loading="eager" layout="fill" alt='shopify logo' />
                                                    </div>
                                                </div>
                                                <div className='mt-4 p-4 rounded-md shadow-md bg-gray-100'>
                                                    <h6 className='font-bold  text-xl md:text-2xl  '>マーケティング機能の豊富さ</h6>
                                                    <p className='px-2 text-sm md:text-base text-gray-600 pt-2'>
                                                        サイトは作っただけでは十分なアクセスを得ることはことは難しいですが、Shopifyで作ったサイトなら構築後の豊富なマーケティング機能で顧客へ最適なマーケティング施策を行う事ができ、リピート率を改善します。具体的にはカゴ落ちメール、SNS連携、ブログ投稿、クーポン配布、他にもさまざまな媒体への広告出稿、今まで別々に管理していた管理システムをShopifyで一本化！業務の効率化、改善を図れます。複雑なマーケティング機能もシンプルな管理画面で直感的で使いやすいです。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-white rounded-md shadow-md  mb-4 p-6'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:space-x-5'>
                                                <div className="flex justify-center items-center  md:order-last">
                                                    <div className='relative h-64 md:h-80 w-full'>
                                                        <Image className='rounded-lg' src={"/images/channel.png"} loading="eager" layout="fill" alt='shopify logo' />
                                                    </div>
                                                </div>
                                                <div className='mt-4 p-4 bg-gray-100 rounded-md shadow-md'>
                                                    <h6 className='font-bold  text-xl md:text-2xl  '>豊富な販売チャンネル</h6>
                                                    <p className='px-2 text-sm md:text-base  text-gray-600 pt-2'>
                                                        Shopifyを利用すれば、Amazonや楽天などのモール型オンラインストアやInstagramやFacebookといったSNS上での販売も手軽におくなうことが出来る上、管理画面上で一元管理できるので非常に便利です。Shopifyに登録した商品データを元に他のチャネルにも出品されるため、商品登録や在庫数を手作業で調整する必要がなく面倒な商品登録をせずに始められます。販売チャネルを増やすことで商品認知の機会を増やし新規顧客獲得に期待できます、このようにShopifyを利用することで非常に多くの恩恵が得られるため乗り換えるメリットも大きいです。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-white rounded-md shadow-md  mb-4 p-6'>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 md:space-x-5'>
                                                <div className="flex justify-center items-center">
                                                    <div className='relative h-64 md:h-80 w-full'>
                                                        <Image className='rounded-lg' src={"/images/global.png"} loading="eager" layout="fill" alt='shopify logo' />
                                                    </div>
                                                </div>
                                                <div className='mt-4 p-4 bg-gray-100 rounded-md shadow-md'>
                                                    <h6 className='font-bold  text-xl md:text-2xl  '>越境ECへの対応</h6>
                                                    <p className='px-2 text-sm md:text-base text-gray-600 pt-2'>
                                                        越境ECは国内のEC事業者が海外の顧客向けに販売することを指します。日本のECサイトは基本的に日本語と日本円で表示し日本国内のみ販売を行いますが、越境ECは、外国語と海外通貨に対応し海外の顧客に販売します。国内で運営しながら海外市場に進出することができ、新たな販路開拓に期待できます。実店舗で海外へ出店するのに比べて、非常に小さなコストやリスクで販路を広げられるため注目されています。越境EC市場規模は年々拡大しており、2027年には約504兆円規模に拡大すると予測されています。Shopifyで越境ECに挑戦してみませんか？
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        </div>
                        {/* 制作までの流れ */}
                        <div className='bg-gradient-to-tr from-blue-100 to-purple-50'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='max-w-5xl mx-auto'>
                                    <div className='sm:mx-24 md:mx-12'>
                                    <div className="mx-8">
                                        <div className="max-w-6xl mx-auto">
                                            <div className="h-fit py-6">
                                                <div className='mb-12'>
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
                                                    <div className='h-full space-y-4 bg-white p-3 rounded-md shadow-inner shadow-gray-300 max-w-sm mx-auto'>
                                                        <div className="flex items-center space-x-4">
                                                            <div className='flex justify-start w-fit px-2.5 bg-green-600 rounded-full shadow-md'>
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
                                                                <p className='font-bold text-gray-800 text-xl md:text-2xl'>お問合せ<span className='text-sm ml-1 text-green-500'>無料</span></p>
                                                            </div>
                                                            <span className='text-xs md:text-sm text-gray-600 text-left'>ECサイト構築の場合は<Link href="/plan-calc" passHref><a className='underline text-blue-500'>お見積りシュミレーター</a></Link>からご希望のプランを選択し、その他に関しては<Link href={"/contact"}><a className='underline text-blue-500'>問い合わせページ</a></Link>よりお問い合わせ下さい。<a href='https://lin.ee/KDk1uI3' className='underline text-blue-500'>LINE</a>でのお問い合せもございますのでお気軽にお問合せください。</span>
                                                        </div>
                                                    </div>
                                                    <div className='h-full space-y-4 bg-white p-3 rounded-md shadow-inner shadow-gray-300 max-w-sm mx-auto'>
                                                        <div className="flex items-center space-x-4">
                                                            <div className='flex justify-start w-fit px-2 bg-green-600 rounded-full shadow-md'>
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
                                                    <div className='h-full space-y-4 bg-white p-3 rounded-md shadow-inner shadow-gray-300 max-w-sm mx-auto'>
                                                        <div className="flex items-center space-x-4">
                                                            <div className='flex justify-start w-fit px-2 bg-green-600 rounded-full shadow-md'>
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
                                                    <div className='h-full space-y-4 bg-white p-3 rounded-md shadow-inner shadow-gray-300 max-w-sm mx-auto'>
                                                        <div className="flex items-center space-x-4">
                                                            <div className='flex justify-start w-fit px-2 bg-green-600 rounded-full shadow-md'>
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
                                                    <div className='h-full space-y-4 bg-white p-3 rounded-md shadow-inner shadow-gray-300 max-w-sm mx-auto'>
                                                        <div className="flex items-center space-x-4">
                                                            <div className='flex justify-start w-fit px-2 bg-green-600 rounded-full shadow-md'>
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
                                                    <div className='h-full space-y-4 bg-white p-3 rounded-md shadow-inner shadow-gray-300 max-w-sm mx-auto'>
                                                        <div className="flex items-center space-x-4">
                                                            <div className='flex justify-start w-fit px-2 bg-green-600 rounded-full shadow-md'>
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
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* お問合せボタン */}
                        <div className='bg-gradient-to-tl from-purple-50 to-blue-100'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='text-center font-bold pt-12 pb-6'>
                                    <div className='flex justify-center'>
                                        <Link href={"/contact"} passHref>
                                            <a>
                                                <button>
                                                    <div className='bg-gradient-to-tr to-blue-500 from-blue-700 rounded-full shadow-md border-2 border-white transform duration-300 ease-in-out  hover:scale-105'>
                                                        <p className='text-white  px-8 py-4 font-bold text-2xl md:text-3xl lg:text-4xl fonoot-bold'>無料で相談してみる</p>
                                                    </div>
                                                </button>
                                            </a>
                                        </Link>
                                    </div>
                                    <p className='text-gray-600 mt-4 md:text-lg lg:text-xl'>構築後も徹底サポート</p>
                                    <p className='text-gray-600 text-sm md:text-base lg:text-lg'>初めてのネットショップ構築でも成功に導きます</p>
                                </div>
                            </motion.div>
                        </div>
                        {/* 制作費用 */}
                        <div className='bg-gradient-to-tr from-blue-100 to-purple-50'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='mx-8 sm:mx-24 md:mx-12'>
                                    <div className='pt-24 pb-12'>
                                        <div className='flex justify-around items-center max-w-5xl mx-auto'>
                                            <div className='w-full'>
                                                <h3 className='lg:text-3xl text-xl text-center title-font font-bold  mb-4'><span className='text-gray-800 font-bold text-5xl'>byte</span></h3>
                                                <p className='lg:text-3xl text-xl text-center title-font font-bold  mb-4'>構築費用</p>
                                                <p className='text-center text-gray-600 text-sm lg:text-xl'> 弊社のサイト構築に対してお支払い頂く費用</p>
                                            </div>
                                            <div className='w-full'>
                                                <div className="flex justify-center">
                                                    <div className=" relative h-32 w-32 md:w-56 md:h-56 lg:h-72 lg:w-72">
                                                        <Image src={"/images/koutiku.png"} loading="eager" priority={true} layout="fill" objectFit={"cover"} alt="call-center" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl xl:mx-auto">
                                        {/* Normal Plan */}
                                        <PlanCard
                                            planText={"Normal"}
                                            priceText={"30"}
                                            planDescription={"2週間〜4週間で納品いたします。すぐにショップを開設したい。出来るだけ早く構築してほしいなど急なニーズに対応したします。"}
                                            functionsList={[
                                                "カートシステム",
                                                "お知らせ、ブログ機能",
                                                "納品書の発行",
                                                "送料設定(都道府県別、離島別/~円以上送料無料)",
                                                "商品の一括登録",
                                                "追跡番号とURLの入力",
                                                "各種分析ツールの設定(GoogleAnalytics)",
                                                "自動返信メール設定",
                                            ]}
                                        />

                                        {/* Custom Plan */}
                                        <PlanCard
                                            planText={"Custom"}
                                            priceText={"110"}
                                            addPlanText={"Normal"}
                                            planDescription={"4~8週間で納品いたします。プロのUI/UXデザイナーによるバナーの作成、サイトデザインと機能のご提案をさせて頂きます。"}
                                            functionsList={[
                                                "デザインのカスタマイズ",
                                                "独自ドメイン取得・設定",
                                                "画像の加工",
                                                "オリジナルページの作成",
                                                "メルマガ機能",
                                                "Lineお問い合わせ機能",
                                                "SNSアカウントとの連携"
                                            ]}
                                        />
                                        {/* Custom Plan */}
                                        <PlanCard
                                            planText={"Advanced"}
                                            priceText={"300"}
                                            addPlanText={"Custom"}
                                            planDescription={"お客様のブランドの世界観を忠実に再現いたします。独自の機能の開発および、完全オリジナルデザインのネットショップを構築いたします"}
                                            functionsList={[
                                                "全ページオリジナルデザインで作成",
                                                "機能の追加(機能数無制限)",
                                                "ページ数無制限",
                                                "独自のアプリの開発"
                                            ]}
                                        />
                                    </div>
                                    <div className='text-center pt-4 max-w-md mx-auto pb-12'>
                                        <p className='text-left text-2xl font-bold md:text-3xl lg:text-4xl'>最短<span className='text-green-500 text-5xl md:text-6xl lg:text-7xl'>2</span>週間から</p>
                                        <p className='text-right text-2xl font-bold md:text-3xl lg:text-4xl'>最安<span className='text-green-500 text-5xl md:text-6xl lg:text-7xl'>30</span>万円から</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* Byteのサポートプラン */}
                        <div className='bg-gradient-to-tl from-purple-50 to-blue-100'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='mx-8 sm:mx-24 md:mx-12'>
                                    <div className='pt-24 pb-6'>
                                        <h3 className='lg:text-3xl text-xl text-center title-font font-bold  mb-4'><span className='text-gray-800 font-bold text-5xl'>byte</span>のサポートサービス</h3>
                                        <p className='text-gray-600 text-sm lg:text-xl text-center'> 弊社の月額サポートに対してお支払い頂く費用です。必要に応じて加入できます。</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className=" relative h-48 w-48 md:w-62 md:h-62 lg:h-80 lg:w-80">
                                            <Image src={"/images/keiyaku.png"} loading="eager" priority={true} layout="fill" objectFit={"cover"} alt="call-center" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 max-w-7xl xl:mx-auto">
                                        {/* Subscription Plan */}
                                        <PlanCard
                                            planText={"ECサポート"}
                                            priceText={"4"}
                                            isShopifyPlan={true}
                                            hideShopifyLogo={true}
                                            planDescription={"Shopifyの使い方が分からない、そんな悩みをお持ちのお客様にオススメです。ショップ開設後、Shopify・ECサイトに詳しいエンジニアがお客様の質問に対応いたします。Shopifyコンソールの使い方などについての質問にお答えし、お客様のビジネスに応じてアプリの提案などを行います。"}
                                            functionsList={[
                                                "Shopifyの質問受付",
                                                "アプリ選定代行",
                                                "改善点の提案",
                                                "運営業務にまつわる相談",
                                                "小規模のサイトデザインの変更",
                                                "サイトのSEO対策"
                                            ]}
                                        />
                                        {/* Custom Plan */}
                                        <PlanCard
                                            planText={"広告運用サポート"}
                                            priceText={"7"}
                                            isShopifyPlan={true}
                                            hideShopifyLogo={true}
                                            addPlanText={"Shopifyサポート"}
                                            planDescription={"集客やデータの見方が分からない、そんな悩みをお持ちのお客様にオススメです。ショップ開設後、お客様のビジネスを一緒に拡大します。お客様のECサイトのSEO対策、販売戦略、販促活動。毎月打ち合わせを行い改善点の提案し売り上げUPを徹底的にサポート致します。ECサイトのWebマーケティングを任せたいと言う方におすすめです。"}
                                            functionsList={[
                                                "毎月一度の分析レポート",
                                                "マーケティング戦略の立案",
                                                "キーワード提案・最適化",
                                                "広告出稿場所の選定・計画",
                                                "データ解析・データ利用",
                                                "ターゲット選定・分析",
                                            ]}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* Shopifyの料金プラン */}
                        <div className='bg-gradient-to-tr from-blue-100 to-purple-50'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='mx-8 md:mx-12'>
                                    <div className='pt-24 pb-12'>
                                        <h3 className='lg:text-3xl text-xl  font-bold  text-center title-font  mb-4'><span className='text-green-500 font-bold text-5xl'>Shopify</span>の月額料金</h3>
                                        <p className='text-center text-gray-600 text-sm lg:text-lg'>Shopifyの利用に対してお支払い頂く費用です</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl xl:mx-auto">
                                        {/* Basic Plan*/}
                                        <PlanCard
                                            isShopifyPlan={true}
                                            planText={"Basic"}
                                            priceText={"25"}
                                            planDescription={"ECサイトに初めて挑戦する方、少人数でストアの管理、運営を行なっていく方におすすめのプランです。"}
                                            functionsList={[
                                                "オンラインストア機能",
                                                "顧客管理機能",
                                                "注文管理機能",
                                                "商品/在庫管理機能",
                                                "ストア分析機能",
                                                "メール配信機能",
                                                "クーポンコード発行機能",
                                                "ブログ機能",
                                                "ギフトカード機能",
                                                "多通貨機能"
                                            ]}
                                        />
                                        {/* Standard Plan*/}
                                        <PlanCard
                                            isShopifyPlan={true}
                                            planText={"Standard"}
                                            priceText={"69"}
                                            addPlanText={"Basic"}
                                            planDescription={"複数人でECサイトの管理、運営を行いたい方や、マーケティング視点でデータを活用していきたい方、特定の国への越境ECなどにおすすめのプランです。"}
                                            functionsList={[
                                                "プロフェッショナルレポート",
                                                "為替レート設定機能",
                                                "多言語設定(最大２言語)",
                                                "海外ドメインの使用"
                                            ]}
                                        />
                                        {/* Premium Plan */}
                                        <PlanCard
                                            isShopifyPlan={true}
                                            planText={"Premium"}
                                            priceText={"299"}
                                            addPlanText={"Standard"}
                                            planDescription={"ECサイトの運営に慣れている方、ECCサイトの売り上げが多く安価な取引手数料の恩恵が受けられる方におすすめのプランです。"}
                                            functionsList={[
                                                "カスタムレポートビルダー",
                                                "外部サービスの計算済み配送料の表示機能",
                                                "多言語設定(最大５言語)"
                                            ]}
                                        />
                                        {/* Shopify Plus */}
                                        <PlanCard
                                            isShopifyPlan={true}
                                            planText={"ShopifyPlus"}
                                            priceText={"2000"}
                                            addPlanText={"Premium"}
                                            planDescription={"商品取引量の多い大規模なEC業者、より柔軟な拡張機能や運営業務の改善を行いたい方向けのプランです。"}
                                            functionsList={[
                                                "手厚いサポート体制",
                                                "拡張機能によるEC業務の自動化/効率化/配送料の表示機能",
                                                "ランニングコストの削減",
                                                "強固なサーバーの負荷分散とサイトスピード",
                                                "その他ShopifyPlus専用機能"
                                            ]}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* よくある質問 */}
                        <div className='bg-gradient-to-tl from-purple-50 to-blue-100'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='mx-8 md:mx-12 pt-8 md:pt-14 lg:pt-20'>
                                    <div className="max-w-5xl mx-auto">
                                        <section className="text-gray-700">
                                            <h3 className="text-center lg:text-3xl text-2xl font-bold">
                                                よくある質問
                                            </h3>
                                            <h3 className="text-gray-700 text-center mb-2">
                                                / Question
                                            </h3>
                                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                            <details className='mb-4'>
                                                <summary className="bg-white text-gray-700 text-left text-sm md:text-base xl:text-lg font-bold  sm:text-left shadow-md border rounded-md py-3 px-6">
                                                    サポートプランのみ契約可能はですか？
                                                </summary>
                                                <div className='my-3'>
                                                    <div className='bg-white rounded-lg p-5 shadow-sm'>
                                                        <span className='text-gray-600 text-left text-sm md:text-base xl:text-lg tracking-wide'>
                                                            <p className='text-green-500 font-bold'>Answer</p>
                                                            <p className='p-2 bg-gray-100 rounded-md'>
                                                                サポートプランのみの契約も承っております。Byteのご用意するサポートプランの契約期間については、最短2ヶ月から解約可能となっています。Shopifyサポート、広告運用支援サポートに関しては最低一年からのご契約となっております。
                                                            </p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </details>
                                            <details className='mb-4'>
                                                <summary className="bg-white text-gray-700 text-left text-sm md:text-base xl:text-lg font-bold  sm:text-left shadow-md border rounded-md py-3 px-6">
                                                    構築費以外にかかる費用はありますか？
                                                </summary>
                                                <div className='my-3'>
                                                    <div className='bg-white rounded-lg p-5 shadow-sm'>
                                                        <span className='text-gray-600 text-left text-sm md:text-base xl:text-lg tracking-wide'>
                                                            <p className='text-green-500 font-bold'>Answer</p>
                                                            <p className='p-2 bg-gray-100 rounded-md'>
                                                            契約時に必ずお支払いいただく費用は、構築費(一回)のみとなっております。月額料金として選択したShopifyプランに応じて毎月請求されます。その他サポートプランに契約のお客様は選択したプランに応じて月額料金が発生します。
                                                            </p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </details>
                                            <details className='mb-4'>
                                                <summary className="bg-white text-gray-700 text-left text-sm md:text-base xl:text-lg font-bold  sm:text-left shadow-md border rounded-md py-3 px-6">
                                                    商品注文から発送までの流れが知りたい？
                                                </summary>
                                                <div className='my-3'>
                                                    <div className='bg-white rounded-lg p-5 shadow-sm'>
                                                        <span className='text-gray-600 text-left text-sm md:text-base xl:text-lg tracking-wide'>
                                                            <p className='text-green-500 font-bold'>Answer</p>
                                                            <p className='p-2 bg-gray-100 rounded-md'>
                                                                まず注文が入るとメールが届き、管理画面に新規注文が表示されていますので、配達伝票を作成して商品を梱包した上、指定配送業者へ出荷または集荷でお客様にお送りします。疑問点につきましてはお気軽にお問合せ下さい。
                                                            </p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </details>
                                            <details className='mb-4'>
                                                <summary className="bg-white text-gray-700 text-left text-sm md:text-base xl:text-lg font-bold  sm:text-left shadow-md border rounded-md py-3 px-6">
                                                契約時に必要なものはありますか？
                                                </summary>
                                                <div className='my-3'>
                                                    <div className='bg-white rounded-lg p-5 shadow-sm'>
                                                        <span className='text-gray-600 text-left text-sm md:text-base xl:text-lg tracking-wide'>
                                                            <p className='text-green-500 font-bold'>Answer</p>
                                                            <p className='p-2 bg-gray-100 rounded-md'>
                                                            契約時に必要な物としまして、メールアドレス、パスワード、クレジットカードがShopifyの登録時に必要となります。その他サイト構築に必要な商品データ、商品画像、商品説明、バナーなどをご準備いただきます。
                                                            </p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </details>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* お問合せボタン */}
                        <div className='bg-gradient-to-tr from-blue-100 to-purple-50 pb-12'>
                            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                                <div className='text-center font-bold pt-12 pb-6'>
                                    <div className='flex justify-center'>
                                        <Link href={"/contact"} passHref>
                                            <a>
                                                <button>
                                                    <div className='bg-gradient-to-tr to-blue-500 from-blue-700 rounded-full shadow-md border-2 border-white transform duration-300 ease-in-out  hover:scale-105'>
                                                        <p className='text-white  px-8 py-4 font-bold text-2xl md:text-3xl lg:text-4xl fonoot-bold'>無料で相談してみる</p>
                                                    </div>
                                                </button>
                                            </a>
                                        </Link>
                                    </div>
                                    <p className='text-gray-600 mt-4 md:text-lg lg:text-xl'>構築後も徹底サポート</p>
                                    <p className='text-gray-600 text-sm md:text-base lg:text-lg'>初めてのネットショップ構築でも成功に導きます</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div >
            </div >
            </motion.div>
        </>
    )
}

export default ECLP