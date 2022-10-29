import React, { FC, HTMLAttributes, ReactNode, ComponentType } from 'react'
import style from "./Container.module.css"
import { motion } from 'framer-motion'

interface Props {
    children: ReactNode | ReactNode[],
    el?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container: FC<Props> = ({children, el: Component = "div" as any}: Props) => {
    return (
        <Component className={ style.root }>
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity:0 }}
                transition={{
                    duration: 0.7,
                }}
            >
                { children }
            </motion.div>
        </Component>
    )
}

export default Container