
import React from 'react'
import Link from 'next/link'

interface Props {
    href: string
    text: string
}

const CustomButton = ({href, text}: Props) => {
    return (
        <Link href={href}>
            <a>
                <div className='flex justify-center mt-4'>
                    <button className="my-8 text-lg font-bold bg-white border border-purple-800 shadow-md text-purple-800 rounded-md hover:bg-purple-800 hover:text-white">
                        <p className="px-6 py-3 rounded-md shadow-md  transform duration-300 ease-in-out">
                            { text }
                        </p>
                    </button>
                </div>
            </a>
        </Link>
    )
}

export default CustomButton