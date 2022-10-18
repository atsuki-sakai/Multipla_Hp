
import React from 'react';
import Script from 'next/script';

import { PlanCard } from '@components/ui';
import { MetaHead } from '@components/common';
import { createBreadcrumListJsonLd } from '@components/utils';
import { BreadcrumbList, Container } from "@components/ui"
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld';


import { motion } from 'framer-motion';

const Plan = () => {
    const items: BreadcrumbItem[] = [
        { name: "ホーム", url: "/" },
        { name: "ご契約プランについて", url: "/plan" }
    ]
    return (
        <>
            <MetaHead
                title='ご契約プランについて'
            >
            <Script id='breadcrumb' type='application/ld+json' key={`breadcrumbJSON-plan`}  dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
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
                    <BreadcrumbList items={items}/>
                    <h3 className='text-2xl md:text-4xl text-center title-font font-bold mb-8'>ご契約プランについて</h3>
                    <motion.div
                        initial={{ opacity:0, y:10 }}
                        animate={{ opacity:1, y:0 }}
                        exit={{ opacity:0, y:10 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.7,
                        }}
                    >
                        {/* byte hp system Plan */}
                        <div className='mt-12 mb-6'>
                            <h3 className='lg:text-3xl text-xl  font-bold  text-center title-font  mb-4'><span className='font-bold text-5xl'>byte</span>Webサイト製作費用</h3>
                            <p className='text-gray-600 text-sm lg:text-base'>byteのWEBサイト制作費の墓に別途維持費が必要</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-8 xl:mx-auto">
                            {/* Basic Plan*/}
                            <PlanCard
                                isShopifyPlan={true}
                                planText={"HP・特設サイト"}
                                hideShopifyLogo={true}
                                priceText={"30"}
                                planDescription={"事業を立ち上げたがまだホームページが無い方にオススメです。高機能で滑らかなアニメーションを利用し、完成度の高いサイトの制作をお約束します。"}
                                functionsList={[
                                    "メール問い合わせ",
                                    "問い合わせ自動返信",
                                    "ドメイン取得・設定",
                                    "Lineお問合せ",
                                    "FacebookPixel・GoogleAnalyticsの設定",
                                    "ブログ投稿",
                                    "サイトマップの登録"
                                ]}
                            />
                            {/* Standard Plan*/}
                            <PlanCard
                                isShopifyPlan={true}
                                planText={"WEBアプリ"}
                                hideShopifyLogo={true}
                                priceText={"30"}
                                planDescription={"弊社の自動お見積りシステムの様にお客様に対して個別で個別で料金を計算するなどのシステムの開発。例えばあるコスメメーカーでは年齢や肌の色、好みを入力するとその人に合ったコスメをおすすめしてくれます。気になる点がございましたらお気軽にお問合せください。"}
                                functionsList={[
                                    "要相談"
                                ]}
                            />
                            {/* Standard Plan*/}
                            <PlanCard
                                isShopifyPlan={true}
                                planText={"LP制作・広告出稿"}
                                hideShopifyLogo={true}
                                priceText={"20"}
                                planDescription={"費用の中には、Facebook広告を出稿する際のLPの制作と広告セット3種の制作費を含めた料金となっています。ですのでこちらのプランと別途Facebookへ支払う広告費用のみで広告の出稿が可能です。すでに商品を販売されている方におすすめです。"}
                                functionsList={[
                                    "要相談"
                                ]}
                            />
                        </div>
                        {/* Byte EC Plan */}
                        <div className='mt-24 mb-6'>
                            <h3 className='lg:text-3xl text-xl text-center title-font font-bold  mb-4'><span className='text-black font-bold text-6xl '>byte</span>ECサイト構築</h3>
                            <p className='text-gray-600 text-sm lg:text-base'>弊社のECサイト構築に対してお支払い頂く費用です</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-8 xl:mx-auto">
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
                                    "商品の情報の登録",
                                    "追跡番号とURLの入力",
                                    "メルマガ機能",
                                    "自動返信メール設定",
                                ]}
                            />

                            {/* Custom Plan */}
                            <PlanCard
                                planText={"Custom"}
                                priceText={"100"}
                                addPlanText={"Normal"}
                                planDescription={"4~12週間で納品いたします。プロのUI/UXデザイナーによるバナーの作成、サイトデザインと機能のご提案をさせて頂きます。"}
                                functionsList={[
                                    "オリジナルテーマの作成",
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
                                priceText={"200"}
                                addPlanText={"Custom"}
                                planDescription={"お客様のブランドの世界観を忠実に再現いたします。バックエンドにShopifyを利用し、フロントエンドは最新のnextjsを利用することで制限なく、高速で動作するECサイトを構築します。独自の機能の開発および、完全オリジナルデザインのネットショップを再現できます。"}
                                functionsList={[
                                    "ヘッドレスコマースで作成",
                                    "全ページオリジナルデザインで作成",
                                    "機能の追加(機能数無制限)",
                                    "ページ数無制限",
                                ]}
                            />
                        </div>
                        {/* Shopify Plan */}
                        <div className='mt-12 mb-6'>
                            <h3 className='lg:text-3xl text-xl  font-bold  text-center title-font  mb-4'><span className='text-green-500 font-bold text-5xl'>Shopify</span>の月額料金</h3>
                            <p className='text-gray-600 text-sm lg:text-base'>Shopifyの利用に対してお支払い頂く費用です</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-8 xl:mx-auto">
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
                                priceText={"79"}
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
                        {/* Byte Suport Plan */}
                        <div className='mt-24 mb-12'>
                            <h3 className='lg:text-3xl text-xl text-center title-font font-bold  mb-4'><span className='text-black font-bold text-6xl '>byte</span>のサポートサービス</h3>
                            <p className='text-gray-600 text-sm lg:text-base'> 弊社の月額サポートに対してお支払い頂く費用です</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-8 xl:mx-auto">
                            <PlanCard
                                planText={"WEBサポート"}
                                priceText={"1"}
                                isShopifyPlan={true}
                                hideShopifyLogo={true}
                                planDescription={"サイトの制作後の軽度の更新作業から、バグへの対応などサイトの管理・保守作業を承ります。サイトのトラブルは全て弊社が対応させて頂きます。"}
                                functionsList={[
                                    "バグの修復(4時間/月)",
                                    "サイト改善点の提案",
                                    "運営業務にまつわる相談",
                                    "小規模のサイトデザインの変更",
                                    "サイトのSEO対策"
                                ]}
                            />
                            {/* Custom Plan */}
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
                            <div>
                                <PlanCard
                                    planText={"広告運用サポート"}
                                    priceText={"6"}
                                    isShopifyPlan={true}
                                    hideShopifyLogo={true}
                                    addPlanText={"ECサポート"}
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
                                <p className='text-red-500 text-xs md:text-sm  mt-4'>*広告運用サポートプランは*<br/>*別途広告費の15%を頂きます*</p>
                            </div>
                        </div>
                    </motion.div>
                    <div className="mb-12"></div>
                </Container>
            </motion.div>
        </>
    );
};

export default Plan;
