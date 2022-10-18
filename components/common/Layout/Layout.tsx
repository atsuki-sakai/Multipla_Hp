import React, { FC, ReactNode, useState } from 'react'
import { Footer, Header } from "@components/common"
import style from "./Layout.module.css"
import { Drawer } from '@components/common'

interface Props {
    children: ReactNode | ReactNode[]
}
const Layout: FC<Props> = ({ children }: Props) => {
    return (
        <div className={style.root}>
            <Header />
                <main>
                    { children }
                </main>
            <Footer/>
            <Drawer/>
        </div>
    )
}

export default Layout