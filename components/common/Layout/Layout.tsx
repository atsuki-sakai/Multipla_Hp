import React, { FC, ReactNode, useState, useEffect } from 'react'
import { Footer, Header } from "@components/common"
import style from "./Layout.module.css"
import { Drawer } from '@components/common'

import { motion } from "framer-motion";

import Lottie from "react-lottie"
import KnotLoader from "../../../public/lottie/knot-loader.json"
import Image from "next/image";


interface Props {
    children: ReactNode | ReactNode[]
}
const Layout: FC<Props> = ({ children }: Props) => {

    const [ isLoaded, setIsLoaded ] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: KnotLoader,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const handle = (e: any) => {
        e.preventDefault();
    } 

    useEffect(() => {
        window.addEventListener('load', function() {
            console.log('load')
            setIsLoaded(true);
        })
        if(!isLoaded){
            document.addEventListener('wheel',handle,{ passive: false })
            document.addEventListener('touchmove', handle, { passive: false })
        }
        return () => {
            if(!isLoaded){
                document.addEventListener('wheel', handle)
                document.addEventListener('touchmove', handle)
            }
        }
    }, [isLoaded])
    return (
        <div className='relative'>
            <motion.div initial={{ x:0 }} animate={{ x: isLoaded ? "-100%": "0" }} transition={{ duration:1, ease: "easeInOut" }} className="absolute top-0 left-0 h-screen w-screen z-50">
                <div className="bg-black h-full w-full flex justify-center items-center">
                    <div className='animate-pulse'>
                        <div className="flex items-center justify-center mb-12">
                            <div className="relative h-10 w-10">
                                <Image src={"/images/test-logo.png"} layout="responsive" height={80} width={80} alt={"Logo"}></Image>
                            </div>
                            <div className="text-white">
                                <h3 className="text-sm">MULTIPLA</h3>
                                <p className="text-[10px] scale-75 -translate-x-2">マルチプラ</p>
                            </div>
                        </div>
                        <Lottie options={defaultOptions} height={200} width={200} />
                    </div>
                </div>
            </motion.div>
            <div className={style.root}>
                <Header />
                    <main>
                        { children }
                    </main>
                <Footer/>
                <Drawer/>
            </div>
        </div>
    )
}

export default Layout