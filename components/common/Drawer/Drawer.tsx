import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { DrawerMenu } from "@components/common/Drawer/DrawerMenu"
import { useUI } from "@components/context"
import style from "./Drawer.module.css"
import { CircleClose } from '@components/icon';

interface MenuItem {
    text: string
    link: string
}

const items: MenuItem[] = [
    {text: "お問い合せ", link: "/contact"},
    {text: "お見積りシュミレーター", link: "/plan-calc"},
    {text: "サービスについて", link: "/ec-lp"},
    {text: "ご契約プランについて", link: "/plan"},
    {text: "ご契約の流れ", link: "/agreement"},
    {text: "ブログ", link: "/blog/page/1"},
    {text: "よくある質問", link: "/faq"},
    {text: "プライバシーポリシー", link: "privacy-policy"},
]

const Drawer = () => {

    const { isDrawerOpen, closeDrawer } = useUI();
    return (
        <motion.div
            initial={{ y:"-100%", opacity:0.0 }}
            animate={{ y: isDrawerOpen ? 0.0 : "-100%", opacity: isDrawerOpen ? 1.0 : 0.0 }}
            transition={{ duration:"0.8" }}
            className={style.root}
        >
            <div className='h-full w-full'>
                <div className={style.wrapper}>
                    <div className={style.drawer_header}>
                        <h3 className="uppercase text-4xl text-white font-bold font-noto_sans">
                            MULTIPLA
                        </h3>
                        <div
                            className='uppercase text-white font-bold cursor-pointer ml-12'
                            onClick={() => closeDrawer()}
                        >
                            <CircleClose/>
                        </div>
                    </div>
                    <div className="-ml-4 mt-12">
                        <div className='space-y-6 px-6'>
                            {
                                items.map((item, index) => {
                                    return (
                                        <div key={`${index}_${item.link.split("/")[1]}`}>
                                            <DrawerMenu 
                                                show={isDrawerOpen}
                                                text={item.text}
                                                link={item.link}
                                                animDelay={0.1 * index}
                                                animDuration={0.5}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.under_logo_container}>
                        <div className="relative w-[35px] h-[35px]">
                            <Image className="w-full h-full" src={"/images/test-logo.png"} layout="fill" loading='eager' objectFit="cover" alt="MULTIPLA Logo" />
                        </div>
                        <div>
                            <p className='text-white font-bold text-base font-noto_sans'>MULTIPLA</p>
                            <p className='text-[10px] scale-75 -translate-x-2 -translate-y-1  text-white'>マルチプラ</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Drawer