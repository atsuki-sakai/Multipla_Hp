import React, { FC, ReactNode } from 'react'

interface Props {
    title: string
    description: string
    num: number
    children: ReactNode | ReactNode[]
}

const StrongCard: FC<Props> = ({ title, description, num, children}: Props) => {
    return (
        <div className="relative bg-gradient-to-tl to-purple-700 from-red-400 p-3 md:p-5 lg:p-8 rounded-md shadow-md font-noto_sans">
            <div>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{ title }</p>
            </div>
            <p className=" mt-2 text-xs md:text-sm lg:text-lg text-white md:py-2 ">{ description }</p>
        </div>
    )
}

export default StrongCard