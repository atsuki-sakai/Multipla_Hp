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
                    <div className="relative grow block p-4 md:p-6 lg:p-10 rounded-2xl shadow-md bg-white border-purple-800 border-4">
                        <p className="mb-1 text-xl md:text-2xl lg:text-3xl font-bold text-left py-2 rounded-full font-noto-sans">{title}</p>
                        <div className='h-[2px]  bg-gray-300 my-3 w-2/3 mx-auto' />
                        <p className="text-xs md:text-sm lg:text-base text-gray-500">{description}</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ServiceCard