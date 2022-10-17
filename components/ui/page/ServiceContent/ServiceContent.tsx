import React from 'react';
import Link from 'next/link'
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const serviceTextList = [
    {
        title:"高機能なECサイト構築",
        description: "ECパッケージを使うことで開発コストの大幅な削減と豊富なマーケティング機能を駆使して利益率の高い自社ECサイトを構築いたします。ビジネスの規模に応じてアプリを追加、独自に機能を開発し拡張することが可能！大手ECサイトのような高機能なサイトを構築する事ができます。"

    },
    {
        title:"ヘッドレスコマースの作成",
        description: "ECパッケージでは表現に限界があります、ヘッドレスコマースで構築することでより自由度の高いオリジナルな高速で動作するECサイトを構築することが可能です。例えば弊社のお見積もりシュミレーターなどはShopifyやBASEでは再現できません。顧客に対してより良いサービスを提供する良い選択肢になります。"

    },
    {
        title:"ホームページの作成",
        description: "最新技術を使用した高速でサクサク動き、アニメーションを多用した、レスポンシブなホームページを作成します。モダンでお客様の企業イメージに合う高品質なHPの制作を心がけています。ドメインの取得などホームページの公開、お客様の要望に合わせて高度なSEO対策を行います。"

    },
    {
        title:"運用支援サポート契約",
        description: "自社で維持できるか分からないというお客様から、売上の上げ方がわからないお客様まで、データ分析から集客方法までお客様自身で運用出来るまで徹底的にサポート致しますので安心してご依頼下さい。お客様のビジネスを全面的にサポート致します。まずはお問合せ下さい。"

    }

]

const ServiceContents = () => {

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
                <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                    <div className='pb-12 md:pb-16 lg:pb-20'>
                        <h3 className='text-lg md:text-2xl  lg:text-3xl font-bold text-center title-font mb-4'><span className='font-bold text-4xl md:text-5xl lg:text-6xl'>byte</span>の提供するサービス</h3>
                    </div>
                </motion.div>
                <div className="mt-6">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {
                            serviceTextList.map((value, index) => {
                                return (
                                    <motion.div key={index} initial={{ opacity:0, scale:0.5, x:30 }} whileInView={{opacity:1, scale:1.0, x:0 }} transition={{ duration:0.7, delay:index * 0.1 }} >
                                        <ServiceCard title={value.title} description={value.description} />
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1.0, y:0 }} transition={{ duration:0.7 }} className='text-center mx-auto py-8 md:py-12 lg:py-16 pb-6 md:pb-12'>
                <Link href={"/lp"}>
                    <a>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm md:text-lg lg:text-xl rounded-full px-12 py-3 transition-all ease-in duration-500 bg-cyan-800 text-white hover:text-cyan-800 hover:bg-white border border-white hover:border-cyan-800">
                            <span className="">
                                詳しく見る
                            </span>
                        </button>
                    </a>
                </Link>
            </motion.div>
        </>
    );
};

export default ServiceContents
