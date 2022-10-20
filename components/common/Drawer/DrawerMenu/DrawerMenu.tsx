import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import style from "./DrawerMenu.module.css"
import { useUI } from '@components/context'
interface Props {
    show: boolean
    text: string
    link: string
    animDelay?: number
    animDuration?: number
}

const DrawerMenu: FC<Props> = ({ show, text, link, animDuration = 0.3, animDelay = 0.7 }: Props) => {

    const { closeDrawer } = useUI()
    return (
        <>
            <motion.div
                initial={{ opacity:0, x:40 }} 
                animate={{ opacity: show ? 1.0 : 0.0, x: show ? 0 : 40 }} 
                transition={{ duration: animDuration, delay: animDelay, type: "spring" }}
                onClick={() => closeDrawer()}
            >
                <div className={style.root}>
                    <Link href={link} passHref>
                        <div className={style.link}>
                            <p className={style.text}>{text}</p>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

export default DrawerMenu