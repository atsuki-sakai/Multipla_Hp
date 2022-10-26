
import React from 'react'
import type { News } from '@service/micro-cms/type/News'

interface Props {
    news: News[]
}

const NewsLatter = ({ news }: Props) => {
    return (
        <div className='w-full h-full bg-gray-500 py-8'>
            <div className='px-12 md:px-0 md:w-1/2 md:mx-auto font-noto_sans'>
                <h5 className='text-xl md:text-3xl text-white'>NEWS</h5>
                <div className='h-[2px] w-1/2 bg-orange-400 my-2 md:my-4'></div>
                {
                    news.map((_news) => {
                        return (
                            <div key={_news.id} className='flex items-center space-x-4 md:space-x-12 bg-white py-1 md:py-3 px-2 md:px-5 mb-3 text-gray-500'>
                                <div className='md:flex'>
                                    <p className='text-blue-500'>{_news.createdAt.split("T")[0]}</p><p className='font-bold'>{_news.title}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default NewsLatter