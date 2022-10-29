import React, { useState } from 'react';

import { createBreadcrumListJsonLd } from '@components/utils';
import type { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld';
import { BreadcrumbList, Container } from '@components/ui';

import { Field, CustomSelect } from '@components/ui';
import { init, send } from "@emailjs/browser"
import { MetaHead } from '@components/common';
import { motion } from 'framer-motion';
const Contact = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");
    const [isPrivacyPolicy, setPrivacyPolivy] = useState(false);
    const [isLoading, setLoading] = useState(false)

    const contactType_list = [
        "ECサイト新規構築",
        "ヘッドレスコマース構築",
        "サポートサービス契約",
        "ホームページ制作",
        "その他"
    ];

    const moneyType_list = [
        "10万円以下",
        "30万円以下",
        "50万円以下",
        "100万円以下",
        "まだ決まっていない",
        "相談して決めたい"
    ];
    const deliveryDateType_list = [
        "1ヶ月以内",
        "２ヶ月以内",
        "3ヶ月以内",
        "半年以内",
        "まだ決まっていない",
        "相談して決めたい"
    ];

    const getSelectValue = (id: string) => {
        const select = document.getElementById(id) as HTMLSelectElement
        return select.value
    };

    const sendmail = () => {
        setLoading(true)
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        if (publicKey !== undefined && serviceID !== undefined && templateID !== undefined) {
            init(publicKey);
            const templete_params = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                url: url,
                body: body,
                contactType: getSelectValue("contact-type"),
                budgetType: getSelectValue("money-type"),
                deliveryDateTypeType: getSelectValue("deliverydatetype-list")
            }
            send(serviceID, templateID, templete_params).then(() => {
                resetState()
                window.location.href = "/sended"
            }).catch((e) => {
                resetState()
                window.location.href = "/contact-error"
            }).finally(() => {
                setLoading(false)
            })
        }
    }

    const handleClick = (e: any) => {
        e.preventDefault();
        sendmail();
    }

    const resetState = () => {
        setName('')
        setEmail('')
        setNumber('')
        setUrl('')
        setBody('')
    }

    const items: BreadcrumbItem[] = [
        {name: "ホーム", url: "/"},
        {name: "お問い合せ", url: "/contact"}
    ]

    const disabled =
        name === '' || email === '' || phoneNumber === '' || isLoading || !isPrivacyPolicy;

    return (
        <>
            <MetaHead
                title='お問い合わせ | マルチプラ | 丹波篠山市のWEB制作会社'
                description="マルチプラ/Multiplaへのお問い合わせはこちらからどうぞ。WEBサイト・ECサイトの制作をはじめWEB広告・印刷物の制作まで行なっております。是非お気軽にご相談ください。"
            >
                <script type='application/ld+json' dangerouslySetInnerHTML={createBreadcrumListJsonLd(items)}/>
            </MetaHead>
            <Container>
                <BreadcrumbList items={items}/>
                <motion.div
                        initial={{ opacity:0, y:10 }}
                        animate={{ opacity:1, y:0 }}
                        exit={{ opacity:0, y:10 }}
                        transition={{
                            delay:0.3,
                            duration: 0.7,
                        }}
                        className="text-center"
                >

                    <h1 className='text-xl md:text-3xl font-bold text-center title-font'>お問い合わせ</h1>
                    <h2 className='text-sm md:text-lg mb-4 uppercase'> / Contact</h2>
                    <div>
                        <div className='max-w-lg mx-auto'>
                            <p className='text-gray-500 pt-2 text-sm md:text-lg'>お問い合わせにつきましては、以下の窓口よりお受けしております。
                                なお、お問い合わせ内容によっては、回答にお時間がかかる場合があります。</p>
                        </div>
                        <p className="my-3 text-xl text-gray-800 font-bold pt-8">マルチプラへのご依頼、疑問など何でもお気軽にご質問下さい。</p>
                        <div className='max-w-2xl mx-auto'>
                                <a target="_blank" href="https://lin.ee/CPF8FeZ" rel='noreferrer'>
                                    <div className='flex justify-center items-center my-12 px-2 border py-3 rounded-md shadow-md space-x-2 bg-green-500'>
                                        <p className='grow w-64 text-white tracking-wide text-sm md:text-base lg:text-xl'><span className='text-white text-2xl md:text-3xl lg:text-4xl font-bold'>Line</span>でお問い合わせ</p>
                                    </div>
                                </a>
                            <div className="mt-6 max-w-6xl mx-auto">
                                <form className=''>
                                    <CustomSelect id="contact-type" name="message-type" label="お問合せ内容" options={contactType_list} />
                                    <CustomSelect defaultText='ご予算を選択して下さい' id="money-type" name="money-type" label="ご予算" options={moneyType_list} />
                                    <CustomSelect defaultText='ご希望納期を選択して下さい' id="deliverydatetype-list" name="deliverydatetype-list" label="ご希望納期" options={deliveryDateType_list} />
                                    <Field value={name} autoComplete={"name"} onChange={(e) => { setName(e.target.value) }} fieldName={"name"} text={"お名前"} required placeholder={"山田太郎"} />
                                    <Field value={url} autoComplete={"url"} onChange={(e) => { setUrl(e.target.value) }} fieldName={"url"} text={"サイトURL"} placeholder={"https://sample.com"} />
                                    <Field value={phoneNumber} autoComplete={"tel"} onChange={(e) => { setNumber(e.target.value) }} fieldName={"number"} required text={"電話番号"} placeholder={"*ハイフン無し*"} />
                                    <Field value={email} autoComplete={"email"} onChange={(e) => { setEmail(e.target.value) }} fieldName={"email"} text={"メールアドレス"} required placeholder={"email@sample.com"} />
                                    <div className="text-left">
                                        <label htmlFor="description" className="ml-2 text-sm text-gray-700">お問合せ内容</label>
                                        <textarea value={body} onChange={(e) => { setBody(e.target.value) }} id="description" cols={30} rows={10} placeholder="お問合せ内容をご入力ください" className="w-full font-serif p-2 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                                    </div>
                                    <div className="flex items-center justify-center mt-4">
                                        <input className="h-5 w-5 foucs:outline-none" type="checkbox" onChange={() => setPrivacyPolivy(!isPrivacyPolicy)} />
                                        <p className="ml-4 text-blue-500 underline text-xs md:text-sm"><a href="/privacy-policy" target="_blank">プライバシーポリシー</a></p>
                                        <p className="text-xs md:text-sm">に同意する。</p>
                                    </div>
                                    <p className="text-xs h-4 text-red-500 mt-1">{isPrivacyPolicy ? "" : "必ずお読み下さい。"}</p>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </>
    );

};

export default Contact
