import React from 'react';
import Link from 'next/link'

import { MetaHead } from '@components/common';
import { FaqDetail, BreadcrumbList, Container } from '@components/ui';
import { createBreadcrumListJsonLd } from '@components/utils';
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld';

import { motion } from 'framer-motion';


const Faq = () => {

    const items: BreadcrumbItem[] = [
        { name: "ホーム", url: "/" },
        { name: "よくある質問", url: "/faq" },
    ]

    return (
        <>
            <MetaHead
                title='よくある質問　| マルチプラ | 丹波篠山市のWEB制作会社'
                description='マルチプラ/MULTIPLAへの質問をまとめて紹介しています。お悩み・疑問が解決されない方はお気軽にお問い合わせください。'
            >
                <script id='breadcrumb' type='application/ld+json' key={`breadcrumbJSON-question`}  dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
            </MetaHead>
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}
                transition={{
                    duration: 0.7,
                }}
            >
                <Container>
                    <div>
                        <section className="text-gray-700">
                            <div className="container px-5 py-14 lg:py-24 mx-auto md:pb-32">
                                <BreadcrumbList items={items}/>
                                <motion.div
                                    initial={{ opacity:0, y:10 }}
                                    animate={{ opacity:1, y:0 }}
                                    exit={{ opacity:0, y:10 }}
                                    transition={{
                                        delay:0.3,
                                        duration: 0.7,
                                    }}
                                >
                                    <h3 className="text-center lg:text-3xl text-2xl font-bold text-gray-700">
                                        よくある質問
                                    </h3>
                                    <h3 className="text-gray-700 text-center mb-2 md:text-lg">
                                        / Question
                                    </h3>
                                    <p className="my-6 text-center text-lg text-gray-500">質問にない事でも柔軟に対応いたしますので<br/>まずはお気軽にお問い合わせ下さい。</p>
                                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx- py-12">
                                        <div className="w-full lg:w-1/2 px-4">
                                            <FaqDetail
                                                questionText={"ストア構築にどのくらいの期間が必要ですか？"}
                                                answerText={"テンプレートをご用意しているため、商品写真や商品リストといった販売に必要な情報が揃えば、最短2週間でオープンすることも可能です。サイトの規模によっても変動しますので詳しくはお問い合わせください。"}
                                            />

                                            <FaqDetail
                                                questionText={"BASEとSTORESとShopifyの違いはなんですか？"}
                                                answerText={"初期費用、月額費用、販売手数料、クレジットカード手数料、商品登録数などが違います。BASE、STORESは国内企業のサービスですが、Shopifyはカナダの企業になります。取引手数料、決済手数料、入金手数料もっとも安いのがShopifyです。豊富なアプリがあり、低コスト＆スピーディーに機能の拡張をしやすいのが特長です。"}
                                            />

                                            <FaqDetail
                                                questionText={"構築費以外にかかる費用はありますか？"}
                                                answerText={"契約時に必ずお支払いいただく費用は、構築費(一回)のみとなっております。月額料金として選択したShopifyプランに応じて毎月請求されます。その他サポートプランに契約のお客様は選択したプランに応じて月額料金が発生します。"}
                                            />
                                        </div>
                                        <div className="w-full lg:w-1/2 px-4">
                                            <FaqDetail
                                                questionText={"利用可能な決済サービスはなんですか？"}
                                                answerText={"各種クレジットカード、Shopify ペイメント、Apple Pay、Google Pay、Shop Pay、PayPal、Amazon Pay、KOMOJU、携帯キャリア決済、Paidy、GMOイプシロン、SBペイメントサービス、2Checkout、CyberSource、BitPay殆どの決済に対応しています。"}
                                            />

                                            <FaqDetail
                                                questionText={"サポートプランは解約できますか？"}
                                                answerText={"MULTIPLAのご用意するサポートプランの契約期間については、最短2ヶ月から解約可能となっています。Shopifyサポート、広告運用支援サポートに関しては最低一年からのご契約となっております。"}
                                            />

                                            <FaqDetail
                                                questionText={"SNSと連携させて販売は出来ますか？"}
                                                answerText={"ShopifyではInstagramやFacebook、Amazonと連携することができるほか、LINEなどに購入ボタンをつける機能もございます。MULTIPLAではSNS連携の実績もございますので、お気軽にご相談ください。"}
                                            />
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <div className="flex justify-center bg-white px-6 py-2 rounded-full border border-purple-800 text-purple-800 hover:scale-105 transform duration-300 ease-out w-fit mx-auto">
                                            <Link href={"/contact"}>
                                                <a className='text-center lg:text-xl'>質問する</a>
                                            </Link>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                    </div>
                </ Container>
            </motion.div>
        </>
    );
};

export default Faq;
