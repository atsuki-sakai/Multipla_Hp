
import Link from 'next/link'
import React, { FC } from 'react'
import style from "./UnderLineAnimationLink.module.css"

interface Props {
    text: string
    link: string
}

const UnderLineAnimationText: FC<Props> = ({text, link}: Props) => {
  return (
    <Link href={link} passHref>
      <a className={style.root} >
        <div className={style.text}>{text}</div>
      </a>
    </Link>
  )
}

export default UnderLineAnimationText