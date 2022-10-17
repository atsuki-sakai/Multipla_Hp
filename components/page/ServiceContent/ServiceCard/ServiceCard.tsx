import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    title: string
    description: string
}

const ServiceCard = ({ title, description }: Props) => {

    return (
        <>
            <motion.div initial={{ y: 30, opacity: 0.0 }} whileInView={{ y:0, opacity:1.0 }} transition={{ duration:0.8, delay:0 }} className="relative">
                <div className='flex mb-12 max-w-lg mx-auto'>
                    <div className="relative grow block p-4 md:p-6 lg:p-10 rounded-md shadow-md border  bg-white">
                        <p className="mb-1 text-lg md:text-xl lg:text-2xl font-bold text-center py-2 px-6 rounded-full text-white bg-gradient-to-tr to-indigo-700 from-purple-700">{title}</p>
                        <div className='h-[1px] mx-8 bg-gray-300 my-3 w-full' />
                        <p className="text-xs md:text-sm lg:text-base text-gray-500">{description}</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ServiceCard