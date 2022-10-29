
import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
    href: string
    text: string
    children?: ReactNode | ReactNode[]
}

const CustomButton = ({href, text, children}: Props) => {
    return (
            <div className='flex justify-center my-4 '>
            <Link href={href}>
                <a>
                    <div className='bg-gray-700 text-white border-2 shadow-md rounded-md hover:bg-white hover:text-purple-800 hover:border-purple-800 hover:-translate-y-1 transfrom duration-500 ease-in-out'>
                        <div className='flex items-center px-4 md:px-6 lg:px-10 py-1 md:py-2 lg:py-3'>
                            <div className="text-base md:text-xl lg:text-2xl">
                                { text }
                            </div>
                            {
                                children && <div className='pl-12 md:pl-20'>{children}</div>
                            }
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default CustomButton