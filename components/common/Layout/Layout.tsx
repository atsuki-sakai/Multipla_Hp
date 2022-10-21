import React, { FC, ReactNode, useState, useEffect } from 'react'
import { Footer, Header } from "@components/common"
import style from "./Layout.module.css"
import { Drawer } from '@components/common'
import { LoadingView } from '@components/ui'

import { motion } from "framer-motion";


interface Props {
    children: ReactNode | ReactNode[]
}
const Layout: FC<Props> = ({ children }: Props) => {

    const [ isLoaded, setIsLoaded ] = useState(true);
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
                document.removeEventListener('wheel', handle)
                document.removeEventListener('touchmove', handle)
            }
        }
    }, [isLoaded])
    return (
        <div className='relative'>
            <motion.div
                initial={{ opacity:1 }}
                animate={{ opacity: isLoaded ? 0: 1 }}
                transition={{ duration:0.6, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-screen w-screen z-50"
            >
                <LoadingView/>
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