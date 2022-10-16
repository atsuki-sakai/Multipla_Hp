import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { DrawerMenu } from "@components/common/Drawer/DrawerMenu"
import { useUI } from "@components/context"
import style from "./Drawer.module.css"


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
                        <h3 className="uppercase text-xl text-white font-light">
                            Menu / Infomation
                        </h3>
                        <div className='uppercase text-white font-bold cursor-pointer' onClick={() => closeDrawer()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="-ml-4 mt-4">
                        <div className='space-y-3 p-6'>
                            <DrawerMenu show={isDrawerOpen} text={"お問合わせ"} subText={"Contact"} link={"/contact"} animDelay={0} animDuration={0.5}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" strokeWidth="0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </DrawerMenu>
                            <DrawerMenu show={isDrawerOpen} text={"お見積りシュミレーター"} subText={"Estimate Simulator"} link={"/plan-calc"} animDelay={0.1} animDuration={0.5}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5">
                                    <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </DrawerMenu>
                            <DrawerMenu show={isDrawerOpen} text={"サービスについて"} subText={"Service"} link={"/lp"} animDelay={0.3} animDuration={0.5}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            </DrawerMenu>
                            <DrawerMenu show={isDrawerOpen} text={"ご契約プランについて"} subText={"Contact Plans"} link={"/plan"} animDelay={0.4} animDuration={0.5}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" strokeWidth="0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                                </svg>
                            </DrawerMenu>
                            <DrawerMenu show={isDrawerOpen} text={"ご契約の流れ"} subText={"Contract Flow"} link={"/agreement"} animDelay={0.5} animDuration={0.5}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" strokeWidth="0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </DrawerMenu>
                            <DrawerMenu show={isDrawerOpen} text={"byteブログ"} subText={"Blog"} link={"/blog/page/1"} animDelay={0.6} animDuration={0.5}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" strokeWidth="0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </DrawerMenu>
                            <DrawerMenu show={isDrawerOpen} text={"よくある質問"} subText={"FAQ"} link={"/question"} animDelay={0.7} animDuration={0.5}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" strokeWidth="0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </DrawerMenu>
                            <DrawerMenu show={isDrawerOpen} text={"プライバシーポリシー"} subText={"Privacy Policy"} link={"/privacy-policy"} animDelay={0.8} animDuration={0.5}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" strokeWidth="0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </DrawerMenu>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <div className="relative w-[35px] h-[35px]">
                            <Image className="w-full h-full" src={"/images/test-logo.png"} layout="fill" priority={true} loading='eager' objectFit="cover" alt="Byte Logo" />
                        </div>
                        <div>
                            <p className='text-white font-bold text-base font-noto_sans'>MULTIPLA</p>
                            <p className='text-[10px] text-white'>マルチプラ</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Drawer