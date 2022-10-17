import React, { FC, ReactNode } from 'react'

interface Props {
    title: string
    description: string
    num: number
    children: ReactNode | ReactNode[]
}

const StrongCard: FC<Props> = ({ title, description, num, children}: Props) => {
    return (
        <div className="relative bg-white p-3 md:p-5 lg:p-8 rounded-md shadow-md">
            <div>
                <div className="mb-1 md:text-xl lg:text-2xl">
                    <p className="uppercase text-gray-500">point. <span className="text-xl md:text-2xl lg:text-3xl">{num}</span></p>
                </div>
                <div className="absolute flex items-center justify-center h-8 w-8 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-md bg-indigo-700 text-white">
                    {children}
                </div>
                <p className="ml-16 text-lg md:text-xl lg:text-2xl leading-6 font-bold">{ title }</p>
            </div>
            <p className=" mt-2 ml-16 text-sm md:text-base lg:text-lg text-gray-500 px-2 py-1 md:px-4 md:py-2 ">{ description }</p>
        </div>
    )
}

export default StrongCard