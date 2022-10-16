import React, { FC, ReactNode } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import style from "./DrawerMenu.module.css"

interface Props {
    show: boolean
    text: string
    subText: string
    link: string
    children: ReactNode | ReactNode[]
    underline?: boolean,
    animDelay?: number
    animDuration?: number
}

const DrawerMenu: FC<Props> = ({ show, text, subText, link, underline = true, animDuration = 0.3, animDelay = 0.7, children }: Props) => {
    return (
        <>
            <motion.div
                initial={{ opacity:0, x:40 }} 
                animate={{ opacity: show ? 1.0 : 0.0, x: show ? 0 : 40 }} 
                transition={{ duration: animDuration, delay: animDelay, type: "spring" }}
            >
                <div className={style.root}>
                    { children }
                    <Link href={link} passHref>
                        <div className={style.link}>
                            <a className={style.text}>{text}</a>
                            <p className={style.subText}>{ subText }</p>
                        </div>
                    </Link>
                </div>
            </motion.div>
            {
                underline ? <div className={style.line}></div> : null
            }
        </>
    )
}

export default DrawerMenu