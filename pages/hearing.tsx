

import React, { useState } from 'react'

import { Container, BreadcrumbList, Field, Slider, CustomButton } from '@components/ui'
import { createBreadcrumListJsonLd } from '@components/utils'
import { MetaHead } from '@components/common'
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld'
import { Link as Scroll } from "react-scroll"

type WebHearing = {
    serviceName: string,
    serviceConcept: string,
    siteScale: string,
    siteTarget: string,
    theTrade: string,
    reference: string,
    wantToPublish: string,
    budget: string,
    siteFunc: string,
    colors: string,
    designImage: string,
    topPageImage: string,
    font: string,
    canProvide: string,
    hateDesign: string,
    other: string,
    updateWork: string
}

import { motion } from 'framer-motion'

const items: BreadcrumbItem[] = [
    {name: "ホーム", url: "/"},
    {name: "WEBサイト制作 相談", url: "/hearing"}
]

type HearingItem = {
    title: string
    description: string
    placeholder: string
    stateKey: string
    value: string | boolean
}




// TODO: - 完成したらrobots - noindexを削除
const Hearing = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [isPrivacyPolicy, setPrivacyPolivy] = useState(false);
    const [isLoading, setLoading] = useState(false)
    const [ state, setState ] = useState<WebHearing>({
        serviceName: "",
        serviceConcept: "",
        siteScale: "",
        siteTarget: "",
        theTrade: "",
        reference: "",
        wantToPublish: "",
        budget: "",
        siteFunc: "",
        colors: "",
        designImage: "",
        topPageImage: "",
        font: "",
        canProvide: "",
        hateDesign: "",
        other: "",
        updateWork: ""
    })
    const stateKeys = Object.keys(state)
    const heatingItems: HearingItem[] = [
        {title: "サービス名（会社名や商品名）", description: "サービス名・企業名についてはキーワードの選定を行った上でお客様にサイト名とドメインを提案いたします。", placeholder: "ひまわり美容室", stateKey: stateKeys[0], value: state.serviceName},
        {title: "制作の目的・背景", description: "WEBサイトを通してお客様が何をしたいのかを明確にすることで、イメージとのずれを防ぎます。", placeholder: "自社製品をアピールしたい", stateKey: stateKeys[1], value: state.serviceConcept},
        {title: "サイト規模（サイトの長さ,セクション数など）", description: "どの程度の規模のサイトの作成するのかによって、構築費用が変動します。", placeholder: "4ページほど", stateKey: stateKeys[2], value: state.siteScale},
        {title: "ターゲットのイメージ", description: "サイトの利用者(ペルソナ)を想定してWEBサイトを構築するので、コンセプトとターゲットのずれを無くします。", placeholder: "近所の大学生", stateKey: stateKeys[3], value: state.siteTarget},
        {title: "競合他社サイトのURL", description: "競合サイトがある場合はこちらへURLを入力ください。最大３つまで", placeholder: "https://sammple.com", stateKey: stateKeys[4], value: state.theTrade},
        {title: "参考にしたいサイトのURL", description: "イメージに近いサイトを共有することで制作時の修正を減らし、素早く納品いたします。", placeholder: "https://sample.com", stateKey: stateKeys[5], value: state.reference},
        {title: "掲載したい内容 ", description: "お客様のビジネスに合った情報を掲載することで、集客効果が上がります。", placeholder: "店舗情報・メニュー表など", stateKey: stateKeys[6], value: state.wantToPublish},
        {title: "ご予算", description: "お客様のご予算に合ったWEBサイトを構築いたします。", placeholder: "30万円ほど", stateKey: stateKeys[7], value: state.budget},
        {title: "サイトに欲しい機能", description: "ブログ機能など外部サービスとの連携が発生する場合は別途費用が必要になります。", placeholder: "ブログ・お知らせ・決済機能など", stateKey: stateKeys[8], value: state.siteFunc},
        {title: "メインカラー,サブカラー,アクセントカラー", description: "最初にカラーを決め、デザインに統一感を持たせます。", placeholder: "グリーン・ホワイト・グレー", stateKey: stateKeys[9], value: state.colors},
        {title: "サイトのイメージ", description: "お客様の好みの雰囲気にサイトのデザインに近づけます。", placeholder: "シックで高級感のあるイメージ", stateKey: stateKeys[10], value: state.designImage},
        {title: "トップビューのイメージ", description: "トップページは顧客が一番初めに目にするのでとても重要なページになります。", placeholder: "シンプルでごちゃごちゃしてないイメージ", stateKey: stateKeys[11], value: state.topPageImage},
        {title: "サイトで使用したいフォント", description: "サイトに使用したいお好みのフォントがございましたらご記入ください。", placeholder: "ゼンマルゴシックなど", stateKey: stateKeys[12], value: state.font},
        {title: "お客様でご用意いただけるもの", description: "商品画像、バナー画像、用意できる素材がございましらご記入ください。", placeholder: "商品画像・バナー画像など", stateKey: stateKeys[13], value: state.canProvide},
        {title: "やめて欲しいWebサイトやデザイン", description: "お客様のビジネスに合わない、嫌いなデザインをご記入ください。", placeholder: "ごちゃごちゃしたデザイン", stateKey: stateKeys[14], value: state.hateDesign},
        {title: "その他ご要望がございましたらご記入ください。", description: "ここにない事、気になることなどございましたらご記入ください。", placeholder: "バナーなども作って欲しい", stateKey: stateKeys[15], value: state.other},
        {title: "更新作業（1ヶ月間は無料でサポートいたします）", description: "初月は更新費無料ですが、２ヶ月目からは更新費として10000円がかかります。", placeholder: "月に3回ほど更新してほしい", stateKey: stateKeys[16], value: state.updateWork}

    ]

    const disabled = email === '' || phoneNumber === '' || isLoading || !isPrivacyPolicy;

    const sendEmail = () => {
        setLoading(true)
        setTimeout(() => {
            alert('send email')
            setLoading(false)
        }, 5000)
    }

    const handleClick = (e: any) => {
        e.preventDefault();
        sendEmail();
    }

    console.log(JSON.stringify(state, null, 2))

    return (
        <>
            <MetaHead
                title='WEBサイト制作 相談 | マルチプラ | 丹波篠山のWEB制作会社'
                description='こちらのページではWEBサイト制作のイメージを明確化できるよう、23項目の質問に答えていただくことでマルチプラが貴社に最適なWEBサイトの提案をさせて頂きます。'
            >
                <meta name="robots" content="noindex"></meta>
                <script type='application/ld+json' dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)} />
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
                    <div className='font-noto_sans pb-6 max-w-4xl mx-auto'>
                        <h1 className='text-2xl md:text-4xl font-bold'>WEB制作お見積もり 相談</h1>
                        <p className='py-4 text-sm md:text-base  text-gray-500'>
                            WEBサイト制作をスムーズに進めるためのヒアリングシートをオンラインで簡単に行えます。まだ明確なコンセプトが決まっていないお客様でもこちらの質問に回答してコンセプトシートを作成してお問い合わせいただくと、こちらからお見積もり結果をお送りさせて頂きます。
                        </p>
                        <div className='flex justify-center'>
                            <p className='text-center text-red-400 text-sm border border-red-300 w-fit mx-autopx-3 py-1 px-3 rounded-lg'>
                                関心のない項目に関しては空欄のままお進みください。
                            </p>
                        </div>
                    </div>
                    <div className='max-w-4xl mx-auto'>
                        <Slider>
                            {
                                heatingItems.map((item, index) => {
                                    if(!heatingItems[index + 1]) return  <div key={index} className="w-full h-full bg-gradient-to-tl to-blue-300 from-sky-300 rounded-md shadow-md mt-3 px-4 md:px-8 border-2">
                                                                            <h5 className='text-lg md:text-3xl font-bold text-gray-800 py-4 md:py-8'>{item.title}</h5>
                                                                            <p className='text-xs md:text-sm text-gray-600'>{item.description}</p>
                                                                            <Field className="py-6 md:py-12 rounded-md shadow-md bg-gray-50 px-2 md:px-4 my-6" text={item.title} placeholder={item.placeholder} value={item.value} onChange={(e) => {setState({...state, [item.stateKey]: e.target.value})}} />
                                                                            <div className='flex justify-center my-6'> <Scroll smooth={true} duration={200} to='hearing-sheet'><p className='bg-green-500 px-6 py-2 text-white shadow-md rounded-md font-bold'>ヒアリングシートを確認</p></Scroll></div>
                                                                        </div>

                                    return (
                                        <div key={index} className="w-full h-full bg-gradient-to-tl to-blue-300 from-sky-300 rounded-md shadow-md mt-3 px-4 md:px-8 border-2">
                                            <h5 className='text-lg md:text-3xl font-bold text-gray-800 py-4 md:py-8'>{item.title}</h5>
                                            <p className='text-xs md:text-sm text-gray-600'>{item.description}</p>
                                            <Field className="py-6 md:py-12 rounded-md shadow-md bg-gray-50 px-2 md:px-4 my-6" text={item.title} placeholder={item.placeholder} value={item.value} onChange={(e) => {setState({...state, [item.stateKey]: e.target.value})}} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div className='h-full max-w-4xl mx-auto mb-12'>
                        <div id='hearing-sheet' className='p-3'>
                            <h3 className='font-bold text-2xl text-gray-700 mb-4 md:mb-8'>お見積もり内容</h3>
                            <div className='p-3 md:p-8 bg-white border rounded-md shadow-md'>
                                <div className='border border-gray-500'>
                                    {
                                        heatingItems.map((item, index) => {
                                            return (
                                                <div key={index} className='grid grid-cols-5 items-center bg-gray-50 border-b border-gray-500 text-sm md:text-base lg:text-lg'>
                                                    <div className='w-full h-full flex items-center justify-start bg-blue-100 py-2 px-2 col-span-2'><p>{item.title}</p></div>
                                                    <div className='w-full px-3 break-words col-span-3'><p>{item.value === "" ? "無" : item.value}</p></div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-4xl mx-auto'>
                        <h3 className='font-bold text-2xl text-gray-700 mb-4 md:mb-8'>依頼者情報</h3>
                    </div>
                    <div className='max-4xl mx-auto'>
                        <Field className='max-w-4xl mx-auto' value={name} autoComplete={"name"} onChange={(e) => { setName(e.target.value)}} fieldName={"name"} text={"お名前"} required placeholder={"山田太郎"} />
                        <Field className='max-w-4xl mx-auto' value={phoneNumber} autoComplete={"tel"} onChange={(e) => { setNumber(e.target.value) }} fieldName={"number"} required text={"電話番号"} placeholder={"*ハイフン無し*"} />
                        <Field className='max-w-4xl mx-auto' value={email} autoComplete={"email"} onChange={(e) => { setEmail(e.target.value) }} fieldName={"email"} text={"メールアドレス"} required placeholder={"email@sample.com"} />
                        <div className="flex items-center justify-center mt-4">
                            <input className="h-5 w-5 foucs:outline-none" type="checkbox" onChange={() => setPrivacyPolivy(!isPrivacyPolicy)} />
                            <p className="ml-4 text-blue-500 underline text-xs md:text-sm"><a href="/privacy-policy" target="_blank">プライバシーポリシー</a></p>
                            <p className="text-xs md:text-sm">に同意する。</p>
                        </div>
                        <div className='flex justify-center'>
                            <button disabled={disabled} onClick={(e) => { handleClick(e) }} className="mt-8 mb-3 text-lg font-bold text-gray-900 rounded-md">
                                <p className=
                                    {`px-6 py-3 rounded-md shadow-md transform duration-300 ease-in-out ${disabled ? "bg-gray-500 border-2 border-gray-200  text-gray-400" : "bg-purple-800 border-2 border-purple-900 text-white hover:-translate-y-1"}  `}>
                                    お問合せを送信
                                </p>
                            </button>
                        </div>
                        <div className="h-4 mb-6">
                            <p className={`text-red-600 text-center text-sm ${disabled && !isLoading ? "" : "hidden"} `}>入力項目をご確認下さい。</p>
                        </div>
                        {
                            isLoading ? <div className="mt-4 flex justify-center"><div className=" fixed z-50 top-48 space-x-0 animate-spin h-24 w-24 border-4 border-indigo-500 rounded-full border-t-transparent"></div></div> : ""
                        }
                    </div>
                </Container>
            </motion.div>
        </>
    )
}

export default Hearing
