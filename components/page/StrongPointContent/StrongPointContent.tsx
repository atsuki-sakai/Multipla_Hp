import React from 'react';
import Image from 'next/image';
import { StrongCard } from "@components/page/StrongPointContent"
import { Marquee } from '@components/ui';
import { motion } from 'framer-motion';


const StrongPointContents = () => {

    return (
        <>
            <div className="px-8 py-12 md:py-24 bg-gray-100 font-noto_sans">
                <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-center title-font '><span className=' font-bold text-4xl md:text-5xl lg:text-6xl'>マルチプラ</span>の強み</h3>
                </motion.div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 max-w-7xl mx-auto'>
                    <motion.div  initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }}>
                        <StrongCard title={"イメージに合ったデザイン"} num={1} description={"お客様のイメージ、ブランドに合った美しく機能的で豊かな表現力のあるサイトの構築、感覚的に使える管理画面で運用にストレスを感じません。ハイクオリティでモダンなサイトの制作がコストを抑えて構築可能です。高機能なサイトで顧客体験を改善。"} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </StrongCard>
                    </motion.div>
                    <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0.2 }}>
                        <StrongCard title={"世界レベルのセキュリティー"} num={2} description={"ホスティングサービスを利用することでで自社でサーバーを持つ必要が無く大事な顧客情報、決済情報をしっかりと管理可能です。大手ECサイトと同レベルセキュリティーで情報漏洩の心配なく安心してご利用いただけいただけます。"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </StrongCard>
                    </motion.div>
                    <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0.4 }}>
                        <StrongCard title={"優れたSEO対策"} num={3} description={"弊社では構築したサイトは標準でSEO対策を行なっております。例えばサイトのメタ情報の登録、構造化データ、サイトマップの登録などを設定することでより精度の高いSEO対策を行うことができます。構築したサイトを２キーワードで1ページ表示を保証致します。例： multipla ec で１ページ目表示"} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        </StrongCard>
                    </motion.div>
                    <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0.6 }}>
                        <StrongCard title={"Shopifyの豊富な知識"} num={4} description={"Shopifを用いたサイト構築、テーマの開発などお客さまに合わせたアプリの提案、販売チャネルの追加などShopify独自のエコシステムをお客さまのビジネスに合わせた提案が可能です。Shopifyは多機能な分使いこなすまで時間はかかりますがサポートプランをご用意しておりますので安心して始められます。"} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </StrongCard>
                    </motion.div>
                    <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0.8 }}>
                        <StrongCard title={"最新技術で高速なサイトを構築"} num={5} description={"最新技術を使用して表示速度を高速にし、顧客のコンバージョン率を高めることが可能です。ロード時間の長いサイトは直帰率が高く良い商品も結果が出難いです。サーバとのデータのやり取りにはAPIを独自開発し使用することでより高速で軽量なデータのやり取りが可能です。弊社のHPのようなストレスフリーで快適な使い心地のHPにしませんか？"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </StrongCard>
                    </motion.div>
                    <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:1.0 }} >
                        <StrongCard title={"持続可能な運用体制の構築"} num={6} description={"サイト構築後と言ってもする事は多岐にわたります。お客様のビジネスのEC業務の運営体制構築までを注文から発送までの全ての工程においてお客様自身で運用できるまで徹底的にサポートさせて頂きますのでご安心ください。サポートプランのについてはお客様のニーズに合わせて柔軟位対応させて頂きますのでぜひお気軽にお問合せ下さい。"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                            </svg>
                        </StrongCard>
                    </motion.div>
                </div>
            </div >
            <Marquee variant='secondary'>
                <div className='text-white text-lg font-bold font-mono flex justify-between space-x-6 items-center bg-black'>
                    <p>NEXTJS</p>
                    <p>TYPESCRIPT</p>
                    <p>VERCEL</p>
                    <p>FIREBASE</p>
                    <p>EMAILJS</p>
                    <p>MICROCMS</p>
                    <p>CHANELLTALK</p>
                    <p>SHOPIFY</p>
                    <p>BASE</p>
                </div>
            </Marquee>
        </>
    );
};

export default StrongPointContents
