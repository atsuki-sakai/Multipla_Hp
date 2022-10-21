
import React from 'react'

interface Props {
    title: string
    description: string
    index?: number
}

const LpSectionHeader = ({ title, description, index }: Props) => {
    return (
        <div className="mx-4">
            <div className='flex items-end '>
                <h5 className='text-gray-500 uppercase font-light text-base'>Step. <span className='text-3xl'>{index ?? 1}</span></h5>
                <h3 className='text-2xl md:text-3xl ml-6 font-bold'>{title}</h3>
            </div>
            <div className="h-0.5 rounded-full w-full bg-cyan-500"></div>
            <p className='py-3 px-8 mr-12 text-gray-700 text-sm md:text-sm lg:text-base'>{description}</p>
        </div>
    )
}

export default LpSectionHeader