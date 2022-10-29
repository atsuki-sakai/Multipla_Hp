import React, { useState, useEffect } from 'react'
import { Field, CheckBox, LPSectionHeader, Container, BreadcrumbList } from '@components/ui'
import { init, send } from "@emailjs/browser"
import Router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import LpSectionHeader from '@components/ui/LPSectionHeader/LPSectionHeader'
import { BreadcrumbItem } from '@components/utils/createBreadcrumbList-json-ld'

// TODO: - Popupの画像を変える

const RateCalculation = () => {

    const [isPrivacyPolicy, setPrivacyPolivy] = useState(false);
    const [isLoading, setLoading] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setNumber] = useState("");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");
    const [campaign, setCampaign] = useState(false);
    const [options, setOptions] = useState({
        isDefaultTheme: true,
        isShopLogo: false,
        isDefaultSettings: true,
        isGetDomain: false,
        isDefaultShopifyPayment: true,
        isDefaultPage: true,
        isLpPage: false,
        isQuestionPage: false,
        isCompanyDetailPage: false,
        isShopConceptPage: false,
        isShopDescriptionPage: false,
        isOriginalTheme: false,
        isShippingSetting: false,
        isShippingMultiple: false,
        isRecomend: false,
        isLineContact: false,
        isReservation: false,
        isPointProgram: false,
        isWithList: false,
        isRestocking: false,
        isSnsLogin: false,
        isInstaFeed: false,
        isCustomerReview: false,
        isWebChat: false,
    });

    const completed =
        name === '' || email === '' || phoneNumber === '' || isLoading || !isPrivacyPolicy;

    const sendmail = () => {
        setLoading(true)
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_2;
        if (publicKey !== undefined && serviceID !== undefined && templateID !== undefined) {
            init(publicKey);
            const templete_params = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                url: url,
                body: body,
                options: convertOptions(options),
                price: campaign ? productionCost() * 0.95 : productionCost(),
                days: productionDays(),
                campaign: campaign ? "適用" : "適用無し",
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

    const convertOptions = (options: any) => {
        const _list = mapToList(options);
        var result = "";
        _list.map((value) => {
            if (value.value === true) {
                const text = `${convertKeyToJp(value.key)} 、`
                result += text + '\n';
            }
        })
        return result;
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
    const convertKeyToJp = (key: any) => {
        switch (key) {
            case "isDefaultTheme":
                return "Shopify公式テーマの使用";
            case "isShopLogo":
                return "ロゴの制作";
            case "isDefaultSettings":
                return "ストア開設基本設定";
            case "isGetDomain":
                return "独自ドメインの取得";
            case "isDefaultShopifyPayment":
                return "Shopifyペイメント";
            case "isDefaultPage":
                return "ストア基本ページ作成";
            case "isLpPage":
                return "LPページ作成";
            case "isQuestionPage":
                return "よくある質問ページ作成";
            case "isCompanyDetailPage":
                return "会社概要ページ作成";
            case "isShopConceptPage":
                return "ショップコンセプトページ作成";
            case "isShopDescriptionPage":
                return "実店舗紹介ページ作成";
            case "isOriginalTheme":
                return "オリジナルテーマの作成";
            case "isShippingSetting":
                return "配送日時設定";
            case "isShippingMultiple":
                return "複数配送先設定";
            case "isRecomend":
                return "商品レコメンド機能";
            case "isLineContact":
                return "Lineお問合せ機能";
            case "isReservation":
                return "予約販売機能";
            case "isPointProgram":
                return "ポイントプログラム機能";
            case "isWithList":
                return "お気に入り機能追加";
            case "isRestocking":
                return "再入荷お知らせ機能";
            case "isSnsLogin":
                return "SNSログイン機能";
            case "isInstaFeed":
                return "インスタフィード機能";
            case "isCustomerReview":
                return "カスタマーレビュー機能";
            case "isWebChat":
                return "WEBチャット機能";

        }
    };
    const calcProductionDays = (value: any) => {
        switch (value.key) {
            case "isDefaultTheme":
                if (value.value === true) {
                    return 5;
                } else {
                    return 0;
                }
            case "isShopLogo":
                if (value.value === true) {
                    return 7;
                } else {
                    return 0;
                }
            case "isDefaultSettings":
                if (value.value === true) {
                    return 2;
                } else {
                    return 0;
                }
            case "isGetDomain":
                if (value.value === true) {
                    return 0;
                } else {
                    return 0;
                }
            case "isDefaultShopifyPayment":
                if (value.value === true) {
                    return 2;
                } else {
                    return 0;
                }
            case "isDefaultPage":
                if (value.value === true) {
                    return 5;
                } else {
                    return 0;
                }
            case "isLpPage":
                if (value.value === true) {
                    return 10;
                } else {
                    return 0;
                }
            case "isQuestionPage":
                if (value.value === true) {
                    return 5;
                } else {
                    return 0;
                }
            case "isCompanyDetailPage":
                if (value.value === true) {
                    return 3;
                } else {
                    return 0;
                }
            case "isShopConceptPage":
                if (value.value === true) {
                    return 5;
                } else {
                    return 0;
                }
            case "isShopDescriptionPage":
                if (value.value === true) {
                    return 5;
                } else {
                    return 0;
                }
            case "isOriginalTheme":
                if (value.value === true) {
                    return 35;
                } else {
                    return 0;
                }
            case "isShippingSetting":
                if (value.value === true) {
                    return 1;
                } else {
                    return 0;
                }
            case "isShippingMultiple":
                if (value.value === true) {
                    return 1;
                } else {
                    return 0;
                }
            case "isRecomend":
                if (value.value === true) {
                    return 1;
                } else {
                    return 0;
                }
            case "isLineContact":
                if (value.value === true) {
                    return 2;
                } else {
                    return 0;
                }
            case "isReservation":
                if (value.value === true) {
                    return 1;
                } else {
                    return 0;
                }
            case "isPointProgram":
                if (value.value === true) {
                    return 2;
                } else {
                    return 0;
                }
            case "isWithList":
                if (value.value === true) {
                    return 1;
                } else {
                    return 0;
                }
            case "isRestocking":
                if (value.value === true) {
                    return 1;
                } else {
                    return 0;
                }
            case "isSnsLogin":
                if (value.value === true) {
                    return 1;
                } else {
                    return 0;
                }
            case "isInstaFeed":
                if (value.value === true) {
                    return 0;
                } else {
                    return 0;
                }
            case "isCustomerReview":
                if (value.value === true) {
                    return 1;
                } else {
                    return 0;
                }
            case "isWebChat":
                if (value.value === true) {
                    return 3;
                } else {
                    return 0;
                }

        }
    };
    const calcProductionCost = (value: any) => {
        switch (value.key) {
            case "isDefaultTheme":
                if (value.value === true) {
                    return 150000;
                } else {
                    return 0;
                }
            case "isShopLogo":
                if (value.value === true) {
                    return 50000;
                } else {
                    return 0;
                }
            case "isDefaultSettings":
                if (value.value === true) {
                    return 50000;
                } else {
                    return 0;
                }
            case "isGetDomain":
                if (value.value === true) {
                    return 5000;
                } else {
                    return 0;
                }
            case "isDefaultShopifyPayment":
                if (value.value === true) {
                    return 50000;
                } else {
                    return 0;
                }
            case "isDefaultPage":
                if (value.value === true) {
                    return 50000;
                } else {
                    return 0;
                }
            case "isLpPage":
                if (value.value === true) {
                    return 120000;
                } else {
                    return 0;
                }
            case "isQuestionPage":
                if (value.value === true) {
                    return 50000;
                } else {
                    return 0;
                }
            case "isCompanyDetailPage":
                if (value.value === true) {
                    return 20000;
                } else {
                    return 0;
                }
            case "isShopConceptPage":
                if (value.value === true) {
                    return 50000;
                } else {
                    return 0;
                }
            case "isShopDescriptionPage":
                if (value.value === true) {
                    return 50000;
                } else {
                    return 0;
                }
            case "isOriginalTheme":
                if (value.value === true) {
                    return 629000;
                } else {
                    return 0;
                }
            case "isShippingSetting":
                if (value.value === true) {
                    return 5000;
                } else {
                    return 0;
                }
            case "isShippingMultiple":
                if (value.value === true) {
                    return 5000;
                } else {
                    return 0;
                }
            case "isRecomend":
                if (value.value === true) {
                    return 5000;
                } else {
                    return 0;
                }
            case "isLineContact":
                if (value.value === true) {
                    return 80000;
                } else {
                    return 0;
                }
            case "isReservation":
                if (value.value === true) {
                    return 6000;
                } else {
                    return 0;
                }
            case "isPointProgram":
                if (value.value === true) {
                    return 6000;
                } else {
                    return 0;
                }
            case "isWithList":
                if (value.value === true) {
                    return 5000;
                } else {
                    return 0;
                }
            case "isRestocking":
                if (value.value === true) {
                    return 5000;
                } else {
                    return 0;
                }
            case "isSnsLogin":
                if (value.value === true) {
                    return 5000;
                } else {
                    return 0;
                }
            case "isInstaFeed":
                if (value.value === true) {
                    return 5000;
                } else {
                    return 0;
                }
            case "isCustomerReview":
                if (value.value === true) {
                    return 6000;
                } else {
                    return 0;
                }
            case "isWebChat":
                if (value.value === true) {
                    return 15000;
                } else {
                    return 0;
                }

        }
    };

    const mapToList = (obj: object) => {
        return Object.entries(obj).map(([key, value]) => ({ key, value }));
    }
    const productionCost = () => {
        const listValues = mapToList(options);
        var result = 0;
        listValues.map((value, index) => {
            result = result + calcProductionCost(value)!;
        })
        return result;
    }
    const productionDays = () => {
        const listValues = mapToList(options);
        var result = 0;
        listValues.map((value, index) => {
            result = result + calcProductionDays(value)!;
        })
        return result;
    }

    const [showPopup, setShowPopup] = useState(false);

    const goBack = () => {
        setShowPopup(false)
        Router.back()
    }
    const adoptionCanpaign = () => {
        setShowPopup(false)
        setCampaign(true)
    }

    const items: BreadcrumbItem[] = [
        { name: "ホーム", url: "/" },
        { name: "お見積りシュミレーター", url: "/plan-calc" }
    ]

    const [lisnerState, setListnerState] = useState(true)
    useEffect(() => {
        // addEventListenerなどでイベント登録
        // 必要であれば、セッション履歴スタックに状態を追加
        if(lisnerState){
            window.history.pushState(null, document.title);
            window.addEventListener('popstate', () => {
                setShowPopup(true)
            });
        }
        return () => {
            setListnerState(false)
        }
    }, [lisnerState])

    return (
        <div className='relative bg-white '>
            {/* PopUP */}
            <div className={` ${showPopup ? "" : "hidden"} `}>
                <div className='fixed inset-0 bg-black bg-opacity-60  z-40'>
                    <div className="flex justify-center pt-12">
                        <div className='bg-white rounded-md shadow-md p-3 md:p-6 lg:p-9 text-center'>
                            <div className=' border-2 rounded-t-md p-3 md:p-6 lg:p-9'>
                                <div className="max-w-md mx-auto">
                                    <h6 className='text-left ml-4 md:ml-8 text-2xl md:text-3xl lg:text-4xl font-bold'>
                                        初回構築限定
                                    </h6>
                                    <h6 className='text-right mr-4 md:mr-8 text-2xl md:text-3xl lg:text-4xl font-bold'>
                                        キャンペーン
                                    </h6>
                                    <div className="relative h-36 w-36 md:h-72 md:w-72  mx-auto my-4">
                                        <Image src={"/images/campaign.png"} layout={"responsive"} width={150} height={150} alt='bg-image' />
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <div className='p-2 border-4 border-red-500 rounded-md'>
                                        <p className='font-bold text-sm md:text-base lg:text-lg'>初めてECサイトを構築される方限定</p>
                                        <p className='font-bold text-sm md:text-base lg:text-lg'>構築費用がなんと<span className='text-2xl md:text-3xl lg:text-4xl'>5%</span>OFF</p>
                                    </div>
                                    <p className='mt-2 text-sm md:text-base lg:text-lg font-bold'><span className='line-through text-xl md:text-2xl lg:text-3xl'>300000円</span>が<span className='text-2xl md:text-3xl  text-green-500'>285000円</span>に!!</p>
                                    <p className='text-sm md:text-base lg:text-lg font-bold'>さらに今だけサポート費用が初月無料!!</p>
                                    <p className='mt-4 text-xs md:text-sm lg:text-base text-gray-600 font-thin'>キャンペーンは契約者上限に達し次第終了いたします。</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className='w-full' onClick={() => adoptionCanpaign()}>
                                    <div className="z-10 w-full py-2 px-1 md:px-4 bg-green-500 text-sm md:text-base lg:text-lg text-white rounded-bl-md shadow-md transform duration-200 ease-in-out hover:scale-105">
                                        <p className='font-bold'>
                                            キャンペーンを適用
                                        </p>
                                    </div>
                                </button>
                                <button className='w-full' onClick={() => goBack()}>
                                    <div className="w-full py-2  px-1 md:px-4  bg-gray-500 text-sm md:text-base lg:text-lg text-white rounded-br-md shadow-md transform duration-200 ease-in-out hover:scale-105">
                                        <p className='font-bold'>
                                            戻る
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* OPTIONS INFO */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-6xl md:mx-auto relative'>
                {/* MAIN CONTENTS */}
                <Container>
                    <BreadcrumbList items={items}/>
                    <div className='p-4 text-base md:text-lg bg-gradient-to-tr to-purple-600 from-red-500 rounded-md space-y-2 text-left shadow-md shadow-gray-300'>
                        <h2 className='text-2xl font-bold text-white my-2'><span className='text-5xl font-bold text-white'>EC</span> サイト構築費<br/>お見積りシュミレーター</h2>
                        <p className='text-gray-500 bg-white p-2 rounded-md'>
                            <span>
                                ShopifyでのECサイト制作費用のご参考として、こちらのお見積りシュミレーターをご利用下さい。基本プラン30万円2週間+各種オプションを含めた制作費用がすぐにお見積り可能です。
                            </span>
                        </p>
                    </div>
                    {/* STEP.1 */}
                    <div className='pt-6'>
                        <LpSectionHeader
                            title={"サイトデザイン"}
                            description={"テンプレートによるデザイン制作とフルカスタムのサイトからヘッドレスコマースまで構築可能ですので、お客様の事業規模に合わせてお選びください。"}
                        />
                        <div className='mr-12'>
                            <div className="border shadow-md">
                                <CheckBox
                                    label={"Shopify公式テーマを使用"}
                                    defaultValue={true}
                                    onChenged={(state) => setOptions({ ...options, isDefaultTheme: state })}
                                    title={"Shopity公式テーマ"}
                                    description={"イメージを具体化する為何点かのイメージサンプルをご提案させて頂き、お客様と打ち合わせの上イメージに近いShopifyテンプレートをお選びいただきます。"}
                                    disabled
                                />
                                <CheckBox
                                    label={"オリジナルテーマの作成"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isOriginalTheme: state })}
                                    title={"オリジナルテーマが必要な理由"}
                                    description={"オリジナルテーマでShopifyテーマには無いデザインで独自の世界観を伝えたい、カスタムページが必要、管理画面で思い通りにカスタムできるテーマが欲しい、そういったお客様におすすめのプランです。柔軟な拡張性で自分に合ったテーマ、機能を開発できます。"}
                                >
                                    <div className="mt-2 p-2 text-gray-600 tracking-wide rounded-md shadow-mdtext-sm bg-white">
                                        <p className='text-xs'>予想日数: <span className='text-lg'>35</span>日〜から</p>
                                        <p className='text-xs'>予想制作費用: <span className='text-lg'>629000</span>円〜から</p>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"ショップロゴ作成"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isShopLogo: state })}
                                    title={"サイトロゴ制作"}
                                    description={"サイトロゴをご用意していないお客様に向けて、イメージカラーや雰囲気、美容院であればハサミが入ったロゴが欲しいなどヒアリングの上、プロにUI/UXデザイナーがサイトのイメージに合ったロゴを作成させて頂きます。3~4個ほどのデザインの中からお選び頂きます。"}
                                >
                                    <div className="mt-2 p-2 text-gray-600 tracking-wide rounded-md shadow-md text-sm bg-white">
                                        <p className='text-xs'>予想日数: <span className='text-lg'>7</span>日</p>
                                        <p className='text-xs'>予想制作費用: <span className='text-lg'>50000</span>円〜から</p>
                                    </div>
                                </CheckBox>
                            </div>
                        </div>
                    </div>
                    {/* STEP.2 */}
                    <div className='pt-6'>
                        <LPSectionHeader
                            index={2}
                            title={"各種設定"}
                            description={"Shopifyサイト制作と同時に独自ドメイン取得代行もしております。"}
                        />
                        <div className='mr-12 '>
                            <div className="border shadow-md">
                                <CheckBox
                                    label={"ストア開設の基本設定"}
                                    defaultValue={true}
                                    onChenged={(state) => setOptions({ ...options, isDefaultSettings: state })}
                                    title={"ストア基本設定"}
                                    description={"ストア公開に必要な各種設定、全てマルチプラにお任せ下さい。各機能の使い方や説明、アフターフォロー体制もございますのでご利用頂けます。"}
                                    disabled

                                >
                                    <div className='py-3 flex flex-col'>
                                        <h3 className='text-black font-bold'>設定概要</h3>
                                        <span>- Shopifyアカウントの取得</span>
                                        <span>- 店舗情報設定</span>
                                        <span>- ドメイン設定</span>
                                        <span>- メール設定</span>
                                        <span>- 決済方法設定</span>
                                        <span>- 配送・送料設定</span>
                                        <span>- 納品書PDF設定</span>
                                        <span>- 商品登録(30点まで無料)</span>
                                        <span>- サイト公開作業</span>
                                        <span>詳しくはお問い合わせ下さい。</span>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"独自ドメイン取得"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isGetDomain: state })}
                                    title={"独自ドメイン取得"}
                                    description={"まだ店舗をお持ちでないお客様に、ドメインの候補をご提案し取得から設定まで代行いたします。※別途ドメイン取得費用"}
                                >
                                    <div className="mt-2 p-2 text-gray-600 tracking-wide rounded-md shadow-md text-sm bg-white">
                                        <p className='text-xs'>予想日数: <span className='text-lg'>0</span>日</p>
                                        <p className='text-xs'>予想制作費用: <span className='text-lg'>5000</span>円</p>
                                    </div>
                                </CheckBox>
                            </div>
                        </div>
                    </div>
                    {/* STEP.3 */}
                    <div className='pt-6'>
                        <LpSectionHeader
                            index={3}
                            title={"決済方法"}
                            description={"Shppifyペイメント使用することでカード情報漏洩のリスク無く、安全で豊富な決済方法をご用意いたします。"}
                        />
                        <div className='mr-12 '>
                            <div className="border shadow-md">

                                <CheckBox
                                    label={"Shopifyペイメント"}
                                    defaultValue={true}
                                    onChenged={(state) => setOptions({ ...options, isDefaultShopifyPayment: state })}
                                    title={"Shopifyペイメント"}
                                    description={"Shopify利用時の主流な決済サービスで、Shopifyペイメントを利用すると取引手数料が無料になる上、決済手数料も国内最安水準です。"}
                                    disabled
                                >
                                    <div className='py-3'>
                                        <h5 className='text-black font-bold'>対応ブランド</h5>
                                        <span>Visa、Mastercard、AmericanExpress、JCB</span>
                                        <h5 className='text-black font-bold'>決済手数料</h5>
                                        <span>国内発行のカード / 3.25%〜3.4%</span>
                                        <span>AmericanExpress / 3.8%〜3.9%</span>
                                        <span>JCB / 4.05%〜4.15%</span>
                                        <h5 className='text-black font-bold'>振り込み手数料</h5>
                                        <span>0%</span>
                                        <h5 className='text-black font-bold'>その他利用可能な決済方法</h5>
                                        <span>ShopPay、ApplePay、GooglePay、その他各種対応しておりますので詳しくはお問合せください。</span>
                                    </div>
                                </CheckBox>
                            </div>
                        </div>
                    </div>
                    {/* STEP.4 */}
                    <div className='pt-6'>
                        <LPSectionHeader
                            index={4}
                            title={"制作ページ"}
                            description={"ECサイトの基本ページ以外にも顧客のニーズに合わせたページの制作も可能です。"}
                        / >
                        <div className='mr-12 '>
                            <div className="border shadow-md">

                                <CheckBox
                                    label={"ストアページ基本セット"}
                                    defaultValue={true}
                                    onChenged={(state) => setOptions({ ...options, isDefaultPage: state })}
                                    title={"ストアページ基本内容"}
                                    disabled
                                >
                                    <div className='py-3 flex flex-col'>
                                        <span>- トップページ</span>
                                        <span>- 商品一覧ページ</span>
                                        <span>- 商品詳細ページ</span>
                                        <span>- ブログページまたはお知らせページ</span>
                                        <span>- お問合せページ</span>
                                        <span>- カートページ</span>
                                        <span>- アカウントのマイページ</span>
                                        <span>- ご利用案内ページ</span>
                                        <span>- 利用規約</span>
                                        <span>- プライバシーポリシー</span>
                                        <span>- 特定商取引法に基づく表記</span>
                                        <span>その他ページの制作もできますのでお気軽にお問い合わせ下さい。</span>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"LPページ"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isLpPage: state })}
                                    title={"LPが必要な理由"}
                                    description={"まずお客様の商品のヒヤリングをし強みと弱みを洗い出し、適切なターゲットに向けたLPを作成します。自社ECサイトを制作した後、サイトへの訪問者が思うように増えないという事はよくあります。その際に商品LPがあればWEB広告を出稿しサイトへのアクセスが増えることで結果売り上げアップに繋がります。"}
                                >
                                    <div className="mt-2 p-2 text-gray-600 tracking-wide rounded-md shadow-md text-sm bg-white">
                                        <p className='text-xs'>予想日数: <span className='text-lg'>12</span>日</p>
                                        <p className='text-xs'>予想制作費用: <span className='text-lg'>120000</span>円〜から</p>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"よくある質問ページ"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isQuestionPage: state })}
                                    title={"よくある質問が必要な理由"}
                                    description={"ECサイトオープンし実際に注文がある程度増えてくると質問が増えてきます。少ない人員で個別に質問に対応するのはコストの高い人件費を考えると得策ではありません。そんな時に定期的にくる質問に対してよくある質問ページを用意しておく事で直接の応対を削減できます。"}
                                >
                                    <div className="mt-2 p-2 text-gray-600 tracking-wide rounded-md shadow-md text-sm bg-white">
                                        <p className='text-xs'>予想日数: <span className='text-lg'>5</span>日</p>
                                        <p className='text-xs'>予想制作費用: <span className='text-lg'>50000</span>円〜から</p>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"会社概要ページ"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isCompanyDetailPage: state })}
                                    title={"会社概要が必要な理由"}
                                    description={"サイトで購入を考えたお客様の中にはクレジットカードを使用するため代表者の名前や住所、連絡先、資格、地図といった情報を確認することで、このサイトで安心して購入できるかどうかを判断しているのです。特に高額商品の販売をお考えのお客様は会社概要がある事でお客様に安心して購入できるサイトであるとアピールすることが可能です。"}
                                >
                                    <div className="mt-2 p-2 text-gray-600 tracking-wide rounded-md shadow-md text-sm bg-white">
                                        <p className='text-xs'>予想日数: <span className='text-lg'>3</span>日</p>
                                        <p className='text-xs'>予想制作費用: <span className='text-lg'>20000</span>円〜から</p>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"ショップコンセプトページ"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isShopConceptPage: state })}
                                    title={"ショップコンセプトページが必要な理由"}
                                    description={"ショップでのコンセプトは自社のブランド商品で自分が何を伝えたいのか、お客様に何を感じてもらいたいのかという事の明確にしてお客様に伝えるということを目的としています。コンセプトを明確にしておくと、伝えたいことが明確になりブランドの印象がお客様に残りお客様の再来店率を上げます。特に独自の世界観を伝えたいとお考えのお客様にオススメです。"}
                                >
                                    <div className="mt-2 p-2 text-gray-600 tracking-wide rounded-md shadow-md text-sm bg-white">
                                        <p className='text-xs'>予想日数: <span className='text-lg'>5</span>日</p>
                                        <p className='text-xs'>予想制作費用: <span className='text-lg'>50000</span>円〜から</p>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"実店舗紹介ページ"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isShopDescriptionPage: state })}
                                    title={"実店舗紹介ページ"}
                                    description={"実店舗をお持ちのお客様には実店舗紹介ページの作成を検討することをおすすめします。実店舗があることをアピールすることで実店舗への集客、認知を促進することができ両方の販売チャネルで相乗効果が見込めます。"}
                                >
                                    <div className="mt-2 p-2 text-gray-600 tracking-wide rounded-md shadow-md text-sm bg-white">
                                        <p className='text-xs'>予想日数: <span className='text-lg'>5</span>日</p>
                                        <p className='text-xs'>予想制作費用: <span className='text-lg'>60000</span>円</p>
                                    </div>
                                </CheckBox>
                            </div>
                        </div>
                    </div>
                    {/* STEP.5 */}
                    <div className='pt-6'>
                        <LPSectionHeader
                            index={5}
                            title={"ショップ機能追加"}
                            description={"利用頻度の高い簡単なアプリであれば月額費用を払うより開発した方が安い場合がありますのでその場合はアプリ開発をご提案させて頂きます。"}
                        />
                        <div className='mr-12 '>
                            <div className="border shadow-md">
                                <CheckBox
                                    label={"配送日時指定"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isShippingSetting: state })}
                                    title={"配送日時指定"}
                                    description={"こちらの機能はShopifyでは標準で提供されていないので、必要があれば配送日、配送日時を指定出来るようにします。配送日、時間の指定はお客様の扱う商品が食品であるなど、顧客のニーズに合わせて必要であれば追加すれば良いと思います。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-600'>アプリ使用料 </p>
                                            <span className='text-gray-700 font-bold text-xl'>$9.8<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>5000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"複数配送先設定"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isShippingMultiple: state })}
                                    title={"複数配送先設定"}
                                    description={"顧客が1回の購入でカート内の商品を複数の配達先を指定出来るようになります。普通は１回の購入につき１住所ですが、比較的に割高のアプリですのでBtoBなども視野に入れているお客様で顧客のニーズがあれば追加で良いと思います。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料 </p>
                                            <span className='text-gray-700 font-bold text-xl'>$29<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>5000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"商品レコメンド機能"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isRecomend: state })}
                                    title={"商品レコメンド"}
                                    description={"商品のレコメンドとはユーザーの嗜好に合わせておすすめの商品を提示し、数多くの商品の中から目的の商品を選ぶ際の手助けをしてくれます。目的として商品認知、購入機会損失の低減、閲覧数、回遊率を増加させ、ユーザーはより自分の気に入る商品を発見しやすくなり、売り上げアップに繋がります。こちらのアプリは商品数が比較的多いお客様にオススメです。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料 </p>
                                            <span className='text-gray-700 font-bold text-xl'>$29<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>5000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                            <p className='text-gray-500 text-sm'>*登録商品数100点以内*</p>

                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"Lineお問合せ機能"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isLineContact: state })}
                                    title={"Lineお問合せ機能"}
                                    description={"メールでのお問合せでは入力フォームにメールアドレス、その他文字の打ち込みが多くなりお問合せまでのハードルが高く返信までの時間も長くなりがちです。マルチプラがご用意するLineお問合せ機能を追加することでお問合せがLine感覚で気軽に出来るようになり、顧客満足度UPが図れます。複数名でトークに参加できる為お問合せ業務の負担軽減にもオススメです。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料 </p>
                                            <span className='text-green-500 font-bold text-xl'>Free<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <div className='mt-4'></div>
                                            <p className='text-gray-500'>開発費用</p>
                                            <span className='text-gray-700 font-bold text-xl'>8<span className='text-gray-500 text-xs font-thin'>万円</span></span>
                                            <p className='text-gray-500 text-sm'>*トークルーム参加者５名まで*</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>2</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"予約販売機能"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isReservation: state })}
                                    title={"予約販売機能"}
                                    description={"入荷前、在庫がまだ無い商品の先行販売が可能になり、予約注文を受けれるようになります。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料 </p>
                                            <span className='text-gray-700 font-bold text-xl'>$19.99<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>6000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"ポイント付与機能"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isPointProgram: state })}
                                    title={"ポイント付与機能"}
                                    description={"お客様のショップで購入したお客様に対して購入ポイントを付与されるようになります。独自のポイントを発行することでブランドの強化を図り、リピート率UPに繋がります。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料 </p>
                                            <span className='text-gray-700 font-bold text-xl'>$29<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>6000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"お気に入りリスト"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isWithList: state })}
                                    title={"お気に入りリスト"}
                                    description={"ユーザーが気になるアイテムをリストとしてまとめておける様になります。一度お気に入り登録をし、さらに厳選してから購入するユーザーが増えてきています。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料 </p>
                                            <span className=' font-bold text-xl text-green-500'>Free<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>5000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"再入荷お知らせ機能"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isRestocking: state })}
                                    title={"再入荷お知らせ機能"}
                                    description={"人気の商品は在庫が無くなりやすく購入機会の損失が発生しやすいです。お知らせ機能があれば商品が再入荷された際に、登録した顧客に入荷メールが届けられるようになります。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料</p>
                                            <span className=' font-bold text-xl text-gray-500'>$19<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>5000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"SNSログイン機能"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isSnsLogin: state })}
                                    title={"SNSログイン"}
                                    description={"サイトを訪れた顧客がSNSアカウントでShopifyのストアにログイン出来るようになります。初回登録の入力の手間を大幅に削減でき、会員登録の機会損失を低減します。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料</p>
                                            <span className=' font-bold text-xl text-gray-500'>$2.99<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>5000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"Instagramフィード機能"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isInstaFeed: state })}
                                    title={"Instagramフィード機能"}
                                    description={"お客様のインスタグラムのアカウントをサイトと連携させることで常に最新の投稿をサイトに表示出来るようになります。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料</p>
                                            <span className=' font-bold text-xl text-green-500'>Free<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>5000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>0</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"カスタマーレビュー"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isCustomerReview: state })}
                                    title={"カスタマーレビュー"}
                                    description={"カスタマーレビューを商品ページに表示出来るようなります。最近のECサイト利用者の傾向はレビュー評価が購入の理由になることは増えているので付けることをオススメします。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料</p>
                                            <span className=' font-bold text-xl text-green-500'>Free<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>6000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>1</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                                <CheckBox
                                    label={"WEBチャット"}
                                    defaultValue={false}
                                    onChenged={(state) => setOptions({ ...options, isWebChat: state })}
                                    title={"WEBチャット"}
                                    description={"サイト上で顧客とチャットで応対できるようになります。複雑なシナリオ(会話パターン)ですと別途料金を戴くことがございますのでご了承ください。"}
                                >
                                    <div className='mt-2'>
                                        <div className='bg-white p-2 rounded-md shadow-md'>
                                            <p className='text-gray-500'>アプリ使用料</p>
                                            <span className=' font-bold text-xl text-green-500'>Free<span className='text-gray-500 text-xs font-thin'>/月額</span></span>
                                            <p className='text-xs'>手数料: <span className='text-lg'>15000</span>円(一回のみ)</p>
                                            <p className='text-xs'>作業日数: <span className='text-lg'>3</span>日</p>
                                        </div>
                                    </div>
                                </CheckBox>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className='md:hidden flex justify-center my-6 animate-pulse'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                </div>
                {/* PRODUCT PRICE */}
                <div className='p-3 bg-gradient-to-tr to-purple-600 from-red-500 rounded-xl h-fit md:w-80 lg:w-auto md:sticky top-44 md:right-0 lg:right-20 xl:right-42 2xl:right-60 shadow-md mx-8'>
                    <div className='flex justify-center  mr-4 items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-2 text-white" strokeWidth="1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                        </svg>
                        <h5 className='font-bold text-white text-xl'>お見積り結果</h5>
                    </div>
                    {
                        campaign ?
                            <div className="flex justify-center items-center mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                <p className='text-lime-400 text-base font-bold text-center'>初回構築キャンペーン適用中</p>
                            </div>
                            : ""
                    }
                    <div className='mx-4'>
                        <div className='max-w-6xl mx-auto px-3 py-1.5 rounded-md bg-white  shadow-md flex justify-around items-center space-x-2 '>
                            <span className='font-bold text-gray-800 text-base'>制作費用</span>
                            <div className='h-0.5 w-4 bg-gray-600 rounded-md'></div>
                            <div className='text-xl  font-bold text-green-600 flex items-center space-x-4'>
                                {campaign ?
                                    <div className=''>
                                        <p className='line-through text-red-500'>{productionCost()}円</p>
                                        <div className='flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </div>
                                        <p>{productionCost() * 0.95}円</p>
                                    </div>
                                    : productionCost()
                                }
                                {
                                    campaign ? "" : <span className='text-sm text-'>円〜</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='mx-4 mt-4'>
                        <div className='max-w-6xl mx-auto px-3 py-1.5 rounded-md bg-white shadow-md flex justify-around items-center space-x-2'>
                            <span className='font-bold text-gray-800 text-base'>制作日数</span>
                            <div className='h-0.5 w-4 bg-gray-600 rounded-md'></div>
                            <span className='text-xl text-green-600 font-bold'>{productionDays()}<span className='text-sm '>日〜</span></span>
                        </div>
                    </div>
                    <div className='mx-4 mt-4 bg-white p-2 rounded-md shadow-md'>
                        <h3 className='text-sm font-bold mb-2'>選択済みのオプション</h3>
                        <ul className='text-sm mb-3'>
                            {
                                mapToList(options).map((option, index) => {
                                    if (option.value === true) {
                                        return <div key={index} className="flex items-center ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <li className='border-b mt-0.5 mx-1 border-gray-300 text-gray-700'>{convertKeyToJp(option.key)}</li>
                                        </div>;
                                    } else {
                                        return;
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <p className='text-gray-300 text-sm font-bold mx-6 text-center my-3'>こちらはあくまで推測ですので詳しくはご相談下さい。</p>
                </div>
            </div>
            {/* Campaign Button */}
            <div className="mx-8 pt-8 md:pt-12 lg:pt-16">
                <div className="max-w-5xl flex  justify-center mx-auto">
                    <button onClick={() => adoptionCanpaign()}>
                        <div className={`z-10 text-white w-full py-2 px-1 md:px-4  ${campaign ? "bg-gray-500 text-gray-200" : "bg-gradient-to-tr to-purple-600 from-red-500 hover:scale-105"} rounded-full shadow-md transform duration-200 ease-in-out`}>
                            <p className='text-center font-bold px-3 py-1.5 text-lg md:text-xl lg:text-2xl'>
                                {
                                    campaign ? "キャンペーン適用済み" : "初回構築限定キャンペーンを適用"
                                }
                            </p>
                        </div>
                    </button>
                </div>
                <p className='text-center text-xs md:text-sm  text-red-500 pt-3'>こちらは初めてShopifyで構築されるお客様限定です</p>
            </div>
            {/* MOBILE UNDER INFO PRICE AND DAYS */}
            <div className='md:hidden fixed h-14 w-screen bg-gradient-to-tr to-red-400 from-purple-600 z-40 bottom-0'>
                <div className="flex divide-x-2 divide-white">
                    <div className='w-full h-14 p-2 py-1'>
                        <p className='text-white text-xs font-bold'>予想制作費用</p>
                        <div className='text-center text-white font-bold text-xl'>
                            {
                                campaign ?
                                    <div className='flex justify-center items-center space-x-1'>
                                        <p className='line-through text-red-600 text-xs'>{productionCost()}円</p>
                                        <div className='flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                        <p className='text-xl text-white'>{productionCost() * 0.95}<span className='text-white text-xs'>円〜</span></p>

                                    </div>
                                    : productionCost()
                            }
                            {
                                campaign ? "" : <span className='text-xs'>円〜</span>
                            }
                        </div>
                    </div>
                    <div className='w-full h-14 p-2 py-1'>
                        <p className='text-white text-xs font-bold'>予想制作日数</p>
                        <p className='text-center text-white font-bold text-xl'>{productionDays()}<span className='text-white text-xs'>日〜</span> </p>
                    </div>
                </div>
            </div>
            {/* CONTACT FORM */}
            <div className="mt-6 max-w-6xl mx-auto">
                <h4 className='text-center text-xl font-bold text-gray-700 pt-4 pb-8'>上記内容で制作の相談をする</h4>
                <div className="flex justify-center my-2 pb-2 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-700" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                </div>
                <form className='mx-8'>
                    <Field value={name} autoComplete={"name"} onChange={(e) => { setName(e.target.value) }} fieldName={"name"} text={"お名前"} required placeholder={"山田太郎"} />
                    <Field value={url} autoComplete={"url"} onChange={(e) => { setUrl(e.target.value) }} fieldName={"url"} text={"サイトURL"} placeholder={"https://sample.com"} />
                    <Field value={phoneNumber} autoComplete={"tel"} onChange={(e) => { setNumber(e.target.value) }} fieldName={"number"} text={"電話番号"} required placeholder={"*ハイフン無し*"} />
                    <Field value={email} autoComplete={"email"} onChange={(e) => { setEmail(e.target.value) }} fieldName={"email"} text={"メールアドレス"} required placeholder={"email@sample.com"} />
                    <label htmlFor="description" className="text-sm ml-2 text-gray-700">お問い合わせ内容</label>
                    <textarea value={body} onChange={(e) => { setBody(e.target.value) }} id="description" cols={30} rows={10} placeholder="お問合せ内容をご入力下さい。" className="w-full font-serif  p-2 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
                    <div className="flex items-center justify-center mt-4">
                        <input type="checkbox" onChange={() => setPrivacyPolivy(!isPrivacyPolicy)} />
                        <p className="ml-4 text-blue-500 underline"><a href="/privacy-policy" target="_blank">プライバシーポリシー</a></p>
                        <p className="text-sm">に同意する</p>
                    </div>
                    <p className="text-xs h-4 text-center text-red-500 mt-1">{isPrivacyPolicy ? "" : "必ずお読み下さい。"}</p>
                    <div className='flex justify-center mt-4'>
                        <button disabled={completed} onClick={(e) => { handleClick(e) }} className="my-2 text-lg font-bold text-gray-900 rounded-md">
                            <p className=
                                {`px-6 py-3 rounded-md shadow-md transform duration-300 ease-in-out ${completed ? "bg-gray-500 border-2 border-gray-300 text-gray-400" : "bg-purple-800 border-2 border-purple-900 text-white hover:-translate-y-1"}  `}>
                                お問合せを送信
                            </p>
                        </button>
                    </div>
                    <div className="h-4 mb-4">
                        <p className={`text-red-600 text-center text-sm ${completed && !isLoading ? "" : "hidden"} `}>入力項目をご確認下さい。</p>
                    </div>
                    {
                        isLoading ? <div className="mt-4 flex justify-center"><div className=" fixed z-50 top-48 space-x-0 animate-spin h-24 w-24 border-4 border-indigo-500 rounded-full border-t-transparent"></div></div> : ""
                    }
                </form>
            </div>
            <div className='mt-12'></div>
        </div >
    )
}

export default RateCalculation